# Working With Character Health

This guide explains how character health works in **HELIX**: what happens when a character runs out of health, how the **downed**, **revive**, and **respawn** flows behave, and how the optional **per-limb damage** system works. It then walks through the scripting API (Lua/BP) for reading health/death state, applying damage and healing, and reacting to changes. The downed and respawn behavior is configured with [gameplay rules](gameplay_rules.md), and the relevant rules are listed in their respective sections below.

---

## Overview

Every character has a **health component** that tracks its health and armor, and owns the full death lifecycle. Characters in HELIX use **`HCharacterHealthComponent`** by default.

/// note | Note
There is also a more generic `HActorHealthComponent` used for non-character actors. It handles health, and death, but has **no** concept of a downed state. Everything in this guide that mentions downed/revive applies only to characters using `HCharacterHealthComponent`. The plain health/death API is shared by both.
///

At a high level:

- **Health** is the character's life total. When it reaches **0**, the character either **dies instantly** or enters a **downed state** first, depending on whether the downed rule is enabled (see [Downed State](#downed-state)).
- **Armor** absorbs incoming damage before health is touched.
- **Death is final.** Once a character has started dying, it cannot be brought back. A revive is only possible *from* the downed state, *before* death begins.

---

## What Happens When Health Reaches 0

When a character's health drops to 0, one of two things happens, depending on whether the **downed state** is enabled:

- **Downed disabled (default):** the character **dies immediately**. The death sequence starts, the character goes into a ragdoll state, and then finishes. This is irreversible.
- **Downed enabled:** the character enters the **downed state** instead of dying right away, giving teammates a window to revive them.

The downed state is controlled by a gameplay rule (see [Downed State](#downed-state) below). Death itself is covered in [Death](#death).

---

## Death

Death moves through three states: `NotDead → DeathStarted → DeathFinished`.

/// warning | Death is irreversible
There is no transition back to `NotDead`. Healing a character that has already started dying does **not** bring them back. If you want characters to be recoverable, use the **downed state**, that is the only revivable phase.
///

When death begins, the character plays out its death sequence and is then cleaned up (by default, the actor is destroyed after a short delay, and the player respawns, see [Respawn](#respawn)). Bind to `OnDeathStarted` / `OnDeathFinished` to hook your own logic into this (see [Delegates](#delegates-events)).

---

## Downed State

When enabled, a **player-controlled** character that reaches 0 health enters the downed state instead of dying. While downed:

- A **bleed-out timer** counts down. When it expires, the character dies from bleed-out.
- Taking further damage while downed can **shorten** the remaining bleed-out time.
- The character can be **healed back up**. Once healing brings them past the revive threshold, they are **revived** and return to normal play.
- If the downed character takes a finishing/lethal hit, or chooses to give up (by default, pressing **K**), they go straight to death.

/// warning | Warning
For now, the downed state is only available to **player-controlled** characters. NPCs always go straight to death when their health reaches 0, regardless of the downed rule.
///

### Revive vs. Death

The downed state always ends in one of two ways, and the reason is reported to anything listening (via `OnDownedStateFinished`):

- **Revived**: the character was healed back above the revive threshold (or revived by script). They return to a normal, alive state.
- **Died**: the bleed-out timer ran out, a lethal hit landed, or the player gave up. The character transitions into [Death](#death), and there is no coming back. A downed character is *not yet dead*, that's the window in which a revive can happen.

### Tuning the downed state

The downed behavior is configured through gameplay rules. They can be set as base values for an experience or overridden at runtime, see [Gameplay Rules](gameplay_rules.md) for how the rule system works. The available downed rules are:

| Rule Tag | Type | Default | Description |
|---|---|---|---|
| `GameplayRule.Health.DownedState.Enable` | Toggle | `false` | Enables the downed state instead of instant death when health reaches 0. |
| `GameplayRule.Health.DownedState.Duration` | Scalar | `300` | How long (seconds) the downed state lasts before the character dies from bleed-out. |
| `GameplayRule.Health.DownedState.ReviveHealthRatio` | Scalar | `0.5` | Health ratio (0–1) a downed character must be healed up to in order to revive. |
| `GameplayRule.Health.DownedState.DamageTimeReductionMult` | Scalar | `1` | Multiplier controlling how much taking damage while downed shortens the bleed-out timer. |
| `GameplayRule.Health.DownedState.ShowDefaultUI` | Toggle | `true` | Shows the built-in bleed-out timer widget on the HUD when downed. Disable to drive your own custom UI. |
| `GameplayRule.Health.DownedState.AllowGiveUp` | Toggle | `true` | Lets a downed player give up by pressing **K** to skip straight to death. |

/// note | Note
Death and downed are each driven by their own **gameplay ability**, running on the server and the owning client. You don't interact with these abilities directly, they react to the health component's state for you. The downed ability handles the visible side of being downed (animations, the bleed-out timer, the **K** give-up action, and the default downed UI when those rules are enabled). The death ability is intentionally minimal, it cleans the actor up after a short delay.
///

---

## Health State on Server vs. Client

The health component is server-authoritative. All real decisions (taking damage, dying, entering downed, reviving) happen on the **server**, and the resulting state is replicated to clients.

This matters for the delegates below: they fire on **both** server and clients so your UI and cosmetic logic work everywhere, but on clients some context may be missing. In particular, on a client the **instigator** (who caused the change) and similar fields may be null, because that information isn't always replicated. Treat client-side delegate calls as "this happened" notifications for presentation, and keep authoritative gameplay logic on the server.

---

## Delegates (Events)

You can bind to the following events to react to health and death changes. All are available to script and Blueprint.

### On `HActorHealthComponent` (and inherited by characters)

| Delegate | When it fires | Notes |
|---|---|---|
| `OnHealthChanged` | Health value changed (damage or healing) | Fires on server and client. Instigator may be null on clients. |
| `OnMaxHealthChanged` | Max health changed | Fires on server and client. |
| `OnArmorChanged` | Armor value changed | Fires on server and client. |
| `OnMaxArmorChanged` | Max armor changed | Fires on server and client. |
| `OnDeathStarted` | The death sequence has begun | Fires on server and client. Good place to start death animations/ragdoll, disable input, etc. |
| `OnDeathFinished` | The death sequence has completed | Fires on server and client. Good place for final cleanup, respawn handoff, etc. |

### On `HCharacterHealthComponent` (downed-capable characters)

| Delegate | When it fires | Notes |
|---|---|---|
| `OnDownedStateStarted` | The character entered the downed state | Fires on server and client. Provides the downed state info (instigator, hit result, tags). |
| `OnDownedStateFinished` | The character left the downed state | Fires on server and client. Reports the **reason**: `Revived` or `Died`. |

A typical flow for a player going down and being revived looks like:

```
OnDownedStateStarted        -> show downed UI, play down animation
(... healing or bleed-out ...)
OnDownedStateFinished(Revived) -> hide downed UI, return to normal
```

And for a player who bleeds out:

```
OnDownedStateStarted          -> show downed UI
(... timer expires ...)
OnDownedStateFinished(Died)   -> hide downed UI
OnDeathStarted                -> play death sequence
OnDeathFinished               -> cleanup
```

---

## Reading Health & State (API)

These functions are available on the character health component for reading current state. They're safe to call from anywhere (client or server) for display purposes.

### Health & armor

| Function | Returns |
|---|---|
| `GetHealth()` | Current health value |
| `GetMaxHealth()` | Current maximum health |
| `GetHealthNormalized()` | Health in the `0.0 – 1.0` range |
| `GetArmor()` | Current armor value |
| `GetMaxArmor()` | Current maximum armor |
| `GetArmorNormalized()` | Armor in the `0.0 – 1.0` range |

### Death state

| Function | Returns |
|---|---|
| `GetDeathState()` | Current death state (`NotDead`, `DeathStarted`, `DeathFinished`) |
| `IsDeadOrDying()` | `true` if the character has started dying (or is already dead) |

### Downed state (characters only)

| Function | Returns |
|---|---|
| `GetDownedState()` | Current downed state (`NotDowned`, `Downed`) |
| `IsDowned()` | `true` if the character is currently downed |
| `ReviveFromDownedState()` | **Server only.** Ends the downed state as a revive. No effect if the character isn't downed. |

### Finding the component

You can look up the component on an actor:

- `HCharacterHealthComponent.FindCharacterHealthComponent(Actor)`: returns the character health component if the actor has one.
- `HActorHealthComponent.FindHealthComponent(Actor)`: returns the more generic base component (also matches character health components).

---

## Damaging & Healing

Rather than poking at health values directly, you apply damage and healing through helper functions in the gameplay system library, **`UHGameplaySystemGlobals`**. These route through the proper gameplay systems, so they correctly trigger death, downed, limb damage, armor absorption, and all the delegates above. In Lua, call them as static functions on the class, e.g. `UHGameplaySystemGlobals.HealTarget(...)`.

/// warning | Warning
All of these are **server-only**. They do nothing if called on a client. Run them from server-side script/Blueprint (or guard with an authority check).
///

| Function | Purpose |
|---|---|
| `UHGameplaySystemGlobals.HealTarget(TargetActor, HealAmount)` | Heals the target by the given amount (clamped to max health). |
| `UHGameplaySystemGlobals.GiveArmorToTarget(TargetActor, ArmorAmount)` | Adds armor to the target (clamped to max armor). |
| `UHGameplaySystemGlobals.HealTargetLimb(TargetActor, LimbTag, HealAmount)` | Heals a specific limb. `LimbTag` is a `GameplayEffect.DamageArea` tag. |
| `UHGameplaySystemGlobals.DamageTarget(TargetActor, DamageInstigator, Params)` | Applies damage to the target. `DamageInstigator` can be null, in which case the target is treated as its own instigator. `Params` carries the damage amount and options. |
| `UHGameplaySystemGlobals.GetTargetActorLimbHealthState(TargetActor, LimbTag, OutLimbState)` | Reads the current state of a single limb. |
| `UHGameplaySystemGlobals.GetTargetActorAllLimbHealthStates(TargetActor, OutLimbStates)` | Reads the state of all limbs. |

Each returns `true` if the action was successfully triggered.

/// note | Note
Healing is the intended way to bring a **downed** character back up. If you heal a downed character past the `ReviveHealthRatio` threshold, the downed system revives them automatically, you don't need to call any revive function yourself. `ReviveFromDownedState()` exists for the case where you want to force a revive immediately regardless of current health.
///

---

## Limb Damage System

Characters can optionally track **per-limb health** on top of their overall health, via a separate limb health component. This lets you react to specific body parts being damaged or disabled, for example, slowing a character whose leg has been crippled, or lowering accuracy when an arm is hurt.

There are six limbs, each tracked independently with its own health (0–100). Each maps to a damage-area gameplay tag:

| Limb | Tag |
|---|---|
| Head | `GameplayEffect.DamageArea.Head` |
| Torso | `GameplayEffect.DamageArea.Torso` |
| Left Arm | `GameplayEffect.DamageArea.Arm.Left` |
| Right Arm | `GameplayEffect.DamageArea.Arm.Right` |
| Left Leg | `GameplayEffect.DamageArea.Leg.Left` |
| Right Leg | `GameplayEffect.DamageArea.Leg.Right` |

These tags are how damage and healing target a specific limb. They all live under the `GameplayEffect.DamageArea` parent tag.

### How limb health changes

Limb health is **server-authoritative** and replicated to clients. You don't usually drive it directly, it follows the character's overall health:

- **When the character takes damage** and the incoming damage carries a limb tag (`GameplayEffect.DamageArea.*`), the corresponding limb is damaged. Limb damage is amplified relative to the character damage, so a limb degrades faster than the overall health bar.
- **When the character is healed without a specific limb tag**, healing is spread proportionally across all injured limbs, so every limb reaches full at the same time the character's health does.
- **When a specific limb is healed** (see `HealTargetLimb` above), only that limb is restored.

A limb is considered **crippled** when its health reaches 0. This is the moment to apply whatever gameplay consequence you want for that body part.

/// note | Note
Limb damage is tied to the tags on the incoming damage effect. Damage with no limb tag only affects overall health and leaves limbs untouched. Whether a given weapon/effect tags a limb is decided by how that damage is set up, not by this component.
///

### Reading limb state

Use the `UHGameplaySystemGlobals` helpers to query limb state from anywhere:

| Function | Purpose |
|---|---|
| `UHGameplaySystemGlobals.GetTargetActorLimbHealthState(TargetActor, LimbTag, OutLimbState)` | Reads a single limb's state. |
| `UHGameplaySystemGlobals.GetTargetActorAllLimbHealthStates(TargetActor, OutLimbStates)` | Reads all limb states at once. |

Each limb state exposes its `LimbTag`, `CurrentHealth`, `MaxHealth`, and the `RecentDamageTypes` it has been hit with.

If you have the component directly (`UHLimbHealthComponent`), you can also call:

| Function | Returns |
|---|---|
| `GetLimbHealth(LimbTag)` | Current health of a limb. |
| `GetLimbHealthNormalized(LimbTag)` | Limb health in the `0.0 – 1.0` range. |
| `GetTotalLimbDeficit()` | Total missing health summed across all limbs. |
| `FindLimbHealthComponent(Actor)` | Looks up the limb component on an actor (returns null if it has none). |

### Limb delegates

Bind to these on the limb component to react to changes:

| Delegate | When it fires | Notes |
|---|---|---|
| `OnLimbHealthChanged` | A limb's health changed | Fires on server and client. Provides the limb tag, old value, and new value. |
| `OnLimbCrippled` | A limb dropped to 0 health | Fires on server and client. Provides the limb tag and the damage that crippled it. |

/// warning | Warning
Not every character has a limb health component, it's optional. Always check that `FindLimbHealthComponent` (or the query functions returning `true`) succeeded before relying on limb data.
///

---

## Respawn

When a character dies, what happens next depends on the **auto-respawn** rule. Like the downed rules, it can be set per-experience or overridden at runtime, see [Gameplay Rules](gameplay_rules.md).

| Rule Tag | Type | Default | Description |
|---|---|---|---|
| `GameplayRule.Health.AutoRespawn.Enable` | Toggle | `true` | Automatically respawns the player after death. The closest player start point in the world is selected by default. |

**Auto-respawn enabled (default):** the player is respawned automatically after death. You don't need to do anything.

**Auto-respawn disabled:** the player stays dead until you respawn them from script. This is how you implement custom respawn behavior, for example, respawning at a hospital entrance after bleeding out, or at a checkpoint. Disable the rule, listen for death, and call one of the respawn functions yourself.

The respawn functions also live in **`UHGameplaySystemGlobals`** and are all **server-only**:

| Function | Purpose |
|---|---|
| `UHGameplaySystemGlobals.RespawnPlayerByCharacter(TargetCharacter)` | Respawns the player owning this character, at a default player start. |
| `UHGameplaySystemGlobals.RespawnPlayerByController(TargetController)` | Respawns the player for this controller, at a default player start. |
| `UHGameplaySystemGlobals.RespawnPlayerByCharacterAtTransform(TargetCharacter, SpawnTransform)` | Respawns at a specific transform. |
| `UHGameplaySystemGlobals.RespawnPlayerByControllerAtTransform(TargetController, SpawnTransform)` | Respawns at a specific transform. |

Each returns `true` if the respawn was successfully triggered. These also work on a character that's still alive (they'll just restart the pawn).

---

## Gameplay Rules

The health systems above are configured through **gameplay rules**: the downed rules in [Downed State](#downed-state) and the auto-respawn rule in [Respawn](#respawn). These can be set as defaults per experience or overridden at runtime from script.

For how the rule system works, including reading and overriding rules from Lua/Blueprint, see the [Gameplay Rules](gameplay_rules.md) documentation.

---

## Sample Scripts

> The examples below assume the standard Lua bindings (`HCharacterHealthComponent`, `HGameplayRulesetComponent`). Adapt the lookups to however your project resolves the local character / GameState.

/// note | Getting gameplay tags in Lua
Functions that take a gameplay tag (rule tags, limb/damage-area tags) expect an `FGameplayTag`, which you resolve from its string name through the tag manager:

```lua
local TagManager = UGameplayTagsManager.Get()
local LeftLegTag = TagManager:RequestGameplayTag("GameplayEffect.DamageArea.Leg.Left")
```

The samples below resolve tags this way. To keep things short, they assume a small helper:

```lua
local function Tag(name)
    return UGameplayTagsManager.Get():RequestGameplayTag(name)
end
```
///

### 1. React to a character going down and being revived

```lua
local HealthComp = HCharacterHealthComponent.FindCharacterHealthComponent(Character)
if HealthComp then
    HealthComp.OnDownedStateStarted:Add(self, function(self, OwningActor, DownedState)
        -- Show your downed UI, spawn a particle etc.
        print("Character is downed!")
    end)

    HealthComp.OnDownedStateFinished:Add(self, function(self, OwningActor, Reason)
        if Reason == EHDownedEndReason.Revived then
            print("Character was revived!")
        else -- EHDownedEndReason.Died
            print("Character bled out / died while downed.")
        end
    end)
end
```

### 2. Update a health bar

```lua
local HealthComp = HActorHealthComponent.FindHealthComponent(Character)
if HealthComp then
    HealthComp.OnHealthChanged:Add(self, function(self, Comp, OldValue, NewValue, Instigator, HitResult, SourceTags)
        local ratio = Comp:GetHealthNormalized()
        UpdateHealthBar(ratio)
    end)
end
```

### 3. Handle death cleanup

```lua
local HealthComp = HActorHealthComponent.FindHealthComponent(Character)
if HealthComp then
    HealthComp.OnDeathStarted:Add(self, function(self, OwningActor)
        -- Death is irreversible from here.
        DoStuff(OwningActor)
    end)

    HealthComp.OnDeathFinished:Add(self, function(self, OwningActor)
        -- Final cleanup / hand off to respawn happens during this callback.
    end)
end
```

### 4. Enable and tune the downed state at runtime (server)

```lua
-- Run on the server (authority).
-- (See the Gameplay Rules doc for how rule overrides work.)
local Ruleset = HGameplayRulesetComponent.GetGameplayRulesetComponent(WorldContextObject)
if Ruleset then
    -- Turn the downed state on for this match.
    Ruleset:OverrideToggleRule(Tag("GameplayRule.Health.DownedState.Enable"), true)

    -- Make bleed-out faster (60 seconds instead of the default 300).
    Ruleset:OverrideScalarRule(Tag("GameplayRule.Health.DownedState.Duration"), 60.0)

    -- Require healing to 75% to revive.
    Ruleset:OverrideScalarRule(Tag("GameplayRule.Health.DownedState.ReviveHealthRatio"), 0.75)
end
```

### 5. Drive a custom downed UI

```lua
-- Disable the built-in downed widget so you can show your own.
local Ruleset = HGameplayRulesetComponent.GetGameplayRulesetComponent(WorldContextObject)
if Ruleset then
    Ruleset:OverrideToggleRule(Tag("GameplayRule.Health.DownedState.ShowDefaultUI"), false)
end

-- Then build your UI off the downed delegates from Sample 1.
```

### 6. Revive a downed teammate by healing them (server)

```lua
-- Server-side: heal a downed character back up.
-- Once healing crosses the ReviveHealthRatio threshold, the downed system
-- revives them automatically, no explicit revive call needed.
if UHGameplaySystemGlobals.HealTarget(TargetCharacter, 50.0) then
    print("Healed downed teammate.")
end
```

### 7. Custom respawn at a fixed location (server)

```lua
-- Disable auto-respawn so we control where players come back.
-- (See the Gameplay Rules doc for how rule overrides work.)
local Ruleset = HGameplayRulesetComponent.GetGameplayRulesetComponent(WorldContextObject)
if Ruleset then
    Ruleset:OverrideToggleRule(Tag("GameplayRule.Health.AutoRespawn.Enable"), false)
end

-- Then, when a character dies, respawn them at the hospital entrance.
local HealthComp = HActorHealthComponent.FindHealthComponent(Character)
if HealthComp then
    HealthComp.OnDeathFinished:Add(self, function(self, OwningActor)
        UHGameplaySystemGlobals.RespawnPlayerByCharacterAtTransform(OwningActor, HospitalEntranceTransform)
    end)
end
```

### 8. Apply damage / healing from script (server)

```lua
-- Heal a target by 25.
UHGameplaySystemGlobals.HealTarget(TargetActor, 25.0)

-- Give 50 armor.
UHGameplaySystemGlobals.GiveArmorToTarget(TargetActor, 50.0)

-- Heal a specific limb.
UHGameplaySystemGlobals.HealTargetLimb(TargetActor, Tag("GameplayEffect.DamageArea.Leg.Left"), 40.0)
```

### 9. React to a crippled limb

```lua
local LimbComp = UHLimbHealthComponent.FindLimbHealthComponent(Character)
if LimbComp then
    local LeftLeg = Tag("GameplayEffect.DamageArea.Leg.Left")
    local RightLeg = Tag("GameplayEffect.DamageArea.Leg.Right")

    LimbComp.OnLimbCrippled:Add(self, function(self, Comp, LimbTag, CausingDamage)
        if LimbTag == LeftLeg or LimbTag == RightLeg then
            -- e.g. slow the character down while a leg is crippled.
            ApplyLegInjuryEffect(Character)
        end
    end)

    LimbComp.OnLimbHealthChanged:Add(self, function(self, Comp, LimbTag, OldValue, NewValue)
        UpdateLimbWidget(LimbTag, Comp:GetLimbHealthNormalized(LimbTag))
    end)
end
```