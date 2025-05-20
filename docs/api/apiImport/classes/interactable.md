---
title: Interactable
description: Interactables are actors that allow you to mark another actor as interactable, which shows a prompt for players to interact with a customisable interaction mapping.
sidebar_position: 0
tags: [class, client]
---

/// danger
This class is a WIP, and may be subject to change.
///


<HeaderDeclaration type="Class" name="Interactable" image="/img/docs/interactable.webp" />

The `Interactable` class lets you make any actor in your scene interactable by players. It displays a customizable prompt and supports multiple interaction options, each with its own text, input action, and callback or ability. You can attach it to existing actors or create new interactable static meshes, and adjust the interaction point as needed.

## Variables

<VariableDeclaration type="Class" name="Interactable" />

| Name              |       Type             |
| ----------------  | -------------------------------------- |
| Options          | [TArray](../global-variables/structs.md#tarray)\<FInteractionOption\>|
| InteractableProp | [AStaticMeshActor](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Engine/AStaticMeshActor?application_version=5.5) |

## Constructors

<ConstructorDeclaration type="Class" name="Interactable" />

```lua
local InteractableTransform = Transform()
InteractableTransform.Location = Vector(0, 0, 0)
local InteractableActor = Interactable({
    {
        Text = 'Interact', -- Base text on interaction option
        SubText = 'Press F to interact', -- Subtext on interaction option
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact', -- Input Action Mapping
        Action = function(CubeActor) -- Callback function used for Lua interaction
            print('Interaction pressed on', CubeActor.Object)
        end,
    },
}, '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01', InteractableTransform) 
-- StaticMeshPath, Transform
```
```lua
local CubeActor = StaticMesh(Vector(0, 0, 0), Rotator(), '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01')
local InteractableActor = Interactable({
    {
        Text = 'Interact', -- Base text on interaction option
        SubText = 'Press F to interact', -- Subtext on interaction option
        Input = '/Game/Input/Actions/IA_Interact.IA_Interact', -- Input Action Mapping
        Ability = '/Engine/Characters/Heroes/Abilities/GA_Hero_Heal.GA_Hero_Heal_C', -- Ability class
    }
})
InteractableActor:SetInteractableProp(CubeActor)
print(InteractableActor.Object) -- AActor
```

## Functions

<FunctionsDeclaration type="Class" name="Interactable" />


### SetInteractableProp
Sets the Actor to be used for interactions if attaching to a pre-existing actor.
```lua
local CubeActor = StaticMesh(Vector(0, 0, 0), Rotator(), '/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01')
Interactable:SetInteractableProp(CubeActor)
```

---

### MakeStaticMesh
The interactable creates its own static mesh instead of relying on another actor.

* Returns: [UStaticMeshComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UStaticMeshComponent?application_version=5.5)
```lua
Interactable:MakeStaticMesh(UE.UObject.Load('/Engine/VREditor/BasicMeshes/SM_Cube_01.SM_Cube_01'), false)
```
/// info
This is the default behaviour for this class if the optional parameters are present.
///
---

### AddInteractionOption
Adds an interaction option to the interactable.
```lua
local Option = UE.FInteractionOption()
Option.Text = 'Interact'
Option.InputAction = '/Game/Input/Actions/IA_Interact.IA_Interact'
Interactable:AddInteractionOption(Option)
```

---

### SetInteractionPointRelativeLocation
Sets the relative location of the interaction point.
```lua
Interactable:SetInteractionPointRelativeLocation(Vector(0, 0, 0))
```

---

### SetInteractivePointAbsoluteLocation
Sets the absolute location of the interaction point.
```lua
Interactable:SetInteractionPointAbsoluteLocation(Vector(0, 0, 0))
```
