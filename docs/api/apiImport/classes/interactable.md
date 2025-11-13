---
title: Interactable
description: Interactables are actors that allow you to mark another actor as interactable, which shows a prompt for players to interact with a customisable interaction mapping.
sidebar_position: 0
tags: [class, client]
---
`Interactable` allows you to spawn a `HInteractableActor` in the world with one or more
interaction options. Each option supports text, subtext, input action, ability class,
and a Lua callback fired when the player interacts.


## Constructor

- <mark style="color:yellow;">returns</mark>: `table`

```lua title="Example"
local CubeActor = StaticMesh(Vector(0, 0, 0), Rotator(), '/Engine/BasicShapes/Cube.Cube')

local InteractableActor = Interactable({
    {
        Text = "Open Crate",
        SubText = "Press E",
        Ability = nil,
        Input = "/Game/Input/Actions/IA_Interact.IA_Interact",
        Action = function(self, instigator)
            print("Crate opened!")
        end
    }
}, "/Game/Props/Crate/SM_Crate.SM_Crate", Transform(Vector(0, 0, 200)))

InteractableActor:SetInteractableProp(CubeActor)
print(InteractableActor.Object) -- AActor
```

| Parameter        | Type                     | Description                                 |
|-----------------|--------------------------|---------------------------------------------|
| Options         | table                    | Table of interaction options keyed by ID    |
| StaticMeshPath  | string?                  | Optional mesh path                          |
| Transform       | Transform?               | Optional spawn transform                    |

Each entry in **Options** may contain:

| Field    | Type                     |
|----------|---------------------------|
| Text     | string                    |
| SubText  | string                    |
| Ability  | UClass?                   |
| Input    | UInputAction or string    |
| Action   | function                  |

## Functions

### `SetInteractableProp`
Sets the Actor to be used for interactions if attaching to a pre-existing actor

- actor: `Actor` — the actor or actor wrapper to associate with this interactable

```lua title="Example"
local CubeActor = StaticMesh(Vector(0, 0, 0), Rotator(), '/Engine/BasicShapes/Cube.Cube')
InteractableActor:SetInteractableProp(CubeActor)
```

---

### `AddInteractionOption`
Adds an interaction option to the interactable

- option: `FInteractionOption` — interaction option struct to add

```lua title="Example"
local Option = UE.FInteractionOption()
Option.Text = 'Interact'
Option.InputAction = '/Game/Input/Actions/IA_Interact.IA_Interact'
InteractableActor:AddInteractionOption(Option)
```

---

### `SetInteractionPointRelativeLocation`
Sets the relative location of the interaction point

- location: `Vector` — local offset from the actor origin

```lua title="Example"
InteractableActor:SetInteractionPointRelativeLocation(Vector(0, 0, 0))
```

---

### `SetInteractivePointAbsoluteLocation`
Sets the absolute location of the interaction point

- location: `Vector` — world-space position for the interaction point

```lua title="Example"
InteractableActor:SetInteractionPointAbsoluteLocation(Vector(0, 0, 0))
```