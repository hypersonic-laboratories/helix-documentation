---
title: Binding Into Player X-Ray Events
tags: [scripting]
---
# Binding Into Player X-Ray Events

This document outlines how to use the HELIX X-Ray system in Lua to create custom logic for player X-Ray events, such as displaying new UI widgets or triggering other in-game actions.

The system is built around events that are broadcasted to the local player. You can listen to these events globally or on a per-actor basis.

## Making an Actor X-Ray Detectable

Before any events can be triggered for an actor, it must be marked as detectable by the X-Ray system. You have two options:

1. Add a Tag (Simple): This is the easiest method if you only need the actor to be focusable.

```lua
-- 'MyActor' is a variable holding the AActor object
MyActor.Tags:Add("xray")
```

2. Add the Component (Advanced): This method is required if you want to listen for X-Ray events directly on the actor's component.

```lua
-- 'MyActor' is a variable holding the AActor object
-- This assumes the component is registered with UnLua as "HXRayTargetActorComponent"
local XRayComponent = MyActor:AddComponentByClass(UHXRayTargetActorComponent, false, UE.FTransform(), false)

-- You can also get it if it already exists
local XRayComponent = MyActor:FindComponentByClass(UHXRayTargetActorComponent)
```

/// Note
Player characters already have this component attached by default.
///

## API Reference

### 1. Global Events (World Subsystem)

This is the primary and most common way to listen for X-Ray events. Events are broadcasted globally for the local player.

#### Accessing the Subsystem

You must first get the UHXRayWorldSubsystem from the HWorld.

```lua
-- Get the X-Ray subsystem from the HWorld global
local XRaySubsystem = UE.USubsystemBlueprintLibrary.GetWorldSubsystem(HWorld, UE.UHXRayWorldSubsystem)
```

#### Delegate: `OnLocalPlayerXRayEvent`

This is the main delegate to bind for x-ray events. It fires for every X-Ray event triggered by the local player.

Signature: `(Instigator, TargetActor, EventType)`:
- `Instigator (APlayerController*)`: The local player controller triggering the event.
- `TargetActor (AActor*)`: The actor being targeted. This can be nil (e.g., for a Cancel event).
- `EventType (EHXRayEventType)`: The type of event that occurred. (See Enums section below).

#### Lua Example:

```lua
local function OnXRayEvent(Instigator, TargetActor, EventType)
    if EventType == EHXRayEventType.BeginFocus then
        -- Player started looking at an actor
        print("Player started focusing on: " .. TargetActor:GetName())
        -- Show a simple WebUI widget

    elseif EventType == EHXRayEventType.EndFocus then
        -- Player looked away from the actor
        print("Player stopped focusing on: " .. TargetActor:GetName())
        -- Hide the simple WebUI widget

    elseif EventType == EHXRayEventType.Reveal then
        -- Player "confirmed" the X-Ray on the actor
        print("Player revealed: " .. TargetActor:GetName())
        -- Show detailed WebUI widget

    elseif EventType == EHXRayEventType.Cancel then
        -- Player cancelled the X-Ray (looked at nothing)
        print("Player cancelled X-Ray")
        -- Hide any visible X-Ray WebUI
    end
end

-- Bind the function to the delegate
local XRaySubsystem = UE.USubsystemBlueprintLibrary.GetWorldSubsystem(HWorld, UE.UHXRayWorldSubsystem)
if XRaySubsystem then
    XRaySubsystem.OnLocalPlayerXRayEvent:Bind(OnXRayEvent)
end

-- Remember to unbind when your script is destroyed!
-- XRaySubsystem.OnLocalPlayerXRayEvent:Unbind(OnXRayEvent)
```

#### Helper Functions

The subsystem also provides functions to check the current state:
- `GetCurrentXRayState()`: Returns the current EHXRayEventType.
- `GetFocusedActor()`: Returns the currently focused AActor*, or nil if none.

```lua
local CurrentState = XRaySubsystem:GetCurrentXRayState()
local FocusedActor = XRaySubsystem:GetFocusedActor()
```

### 2. Actor-Specific Events (Actor Component)

This method is for more granular control. The event only fires for the specific actor that has the component.

#### Accessing the Component

You must first add or get the UHXRayTargetActorComponent from a specific actor.

```lua
-- 'MyActor' is a variable holding the AActor object
local XRayComponent = MyActor:FindComponentByClass(UHXRayTargetActorComponent)
```

#### Delegate: OnXRayStateChangedEvent

This delegate exists on the component itself. It will only fire when the actor that owns this component is involved in an X-Ray event.

Signature: `(Instigator, TargetActor, EventType)`

#### Lua Example:

```lua
-- 'MyActor' is a specific actor we want to monitor
local XRayComponent = MyActor:FindComponentByClass(UHXRayTargetActorComponent)

if not XRayComponent then
    -- Add the component if it doesn't exist
    XRayComponent = MyActor:AddComponentByClass(UHXRayTargetActorComponent, false, UE.FTransform(), false)
end

local function OnMyActorXRayEvent(Instigator, TargetActor, EventType)
    -- We already know this event is for 'MyActor'
    if EventType == EHXRayEventType.Reveal then
        print("MyActor was revealed!")
        -- TODO: Do something specific for this actor
    end
end

if XRayComponent then
    XRayComponent.OnXRayStateChangedEvent:Bind(OnMyActorXRayEvent)
end
```

#### Properties

`CurrentXRayState (EHXRayEventType)`: You can read the component's last known state directly.

```lua
local CurrentState = XRayComponent.CurrentXRayState
```

### Enums

#### `EHXRayEventType`

This enum defines the different states of the X-Ray system.

| Value          | Description                                                                |
|----------------|----------------------------------------------------------------------------|
| None           | Default / no event.                                                        |
| BeginFocus     | Player started looking at the actor while the X-Ray key is held.           |
| EndFocus       | Player stopped looking at the actor while the X-Ray key is held.           |
| Reveal         | Player released the X-Ray key while still focusing on the actor.           |
| Cancel         | Player released the X-Ray key while looking at nothing.                    |
