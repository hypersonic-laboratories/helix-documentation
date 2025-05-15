---
title: Decal
description: Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.
sidebar_position: 0
tags: [class, client]
---

<HeaderDeclaration type="Class" name="Decal" image="/img/docs/decals.webp" />


## Examples

```lua title="Client/Index.lua"
local DecalActor = Decal(
    Vector(100, 200, 0),
    Rotator(0, 90, 90),
    'helix::M_Default_Translucent_Lit_Decal',
    Vector(128, 256, 256),
    60,
    0.01,
)

DecalActor:SetDecalMaterial('/Engine/EditorResources/FieldNodes/_Resources/M_FieldVolumePreview.M_FieldVolumePreview')
```

```lua title="Client/Index.lua"
local DecalActor = Decal(
    Vector(100, 200, 0),
    Rotator(0, 90, 90),
    'helix::M_Default_Translucent_Lit_Decal',
    Vector(128, 256, 256),
    60,
    0.01
)
print(DecalActor.Object) -- AActor
print(DecalActor.Component) -- UDecalComponent
```

## Variables

<VariableDeclaration type="Class" name="Decal" />

| Name              |       Type             |
| ----------------  | ------------------- |
| Component          | [UDecalComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UDecalComponent?application_version=5.5)    |


## Constructors

<ConstructorDeclaration type="Class" name="Decal" />

```lua
local DecalActor = Decal(Vector(100, 200, 0), Rotator(0, 90, 90), 'helix::M_Default_Translucent_Lit_Decal', Vector(128, 256, 256), 60, 0.01)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../../structs/vector) | `Location`   |  | The location to spawn the decal at.  |
| [Rotator](../../structs/rotator) | `Rotation`  |   | The orentiation of the decal. |
| string | `MaterialAsset` |        | The material to be set to the decal. |
| [Vector?](../../structs/vector) | `Size` | `Vector(128, 256, 256)` | The size of the decal. |
| number? | `Lifespan` | `60` | The number of seconds that the decal will live for. |
| number? | `FadeScreenSize` | `0.01` | The screen size at which the decal fades. |

### Returns
```lua
table: {
    Object: AActor,
    Component: UDecalComponent,
}
```

## Functions

<FunctionsDeclaration type="Class" name="Decal" />

### SetSortOrder
Sets the sort order for the decal component. Higher values draw later (on top).

```lua
Decal:SetSortOrder(Value)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| integer | `Value` | | The new value for setting the sorting order. |

---
### SetFadeScreenSize
Sets the FadeScreenSize for this decal component.

```lua
Decal:SetFadeScreenSize(NewFadeScreenSize)
```

| Type | Name | Default |  Description |
| ---- | ---- | ------- | ----------- |
| number | `NewFadeScreenSize` | | The new fade screen size for the decal. |

---
### SetFadeOut
Sets the decal's fade start time, duration and if the owning actor should be destroyed after the decal is fully faded out.

```lua
Decal:SetFadeOut(StartDelay, Duration, DestroyOwnerAfterFade)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `StartDelay` |         | Delay before fading starts. |
| number | `Duration` |         | Duration of the fade. |
| boolean | `DestroyOwnerAfterFade` | `false` | Whether to destroy the actor after fade. |

---
### SetFadeIn
Sets the decal's fade in start delay, and duration for the fade in.

```lua
Decal:SetFadeIn(StartDelay, Duration)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `StartDelay` | | Delay before fade-in starts. |
| number | `Duration` | | Duration of the fade-in. |

---
### SetDecalMaterial
Sets the material on the decal component.

```lua
Decal:SetDecalMaterial(NewDecalMaterial)
```

| Type | Name |  Default | Description |
| ---- | ---- |  ------- | ----------- |
| [UMaterialInterface](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Materials/UMaterialInterface?application_version=5.5) | `NewDecalMaterial` | The new material asset to set. |

---
### SetDecalColor
Sets the decal's color.

```lua
Decal:SetDecalColor(Color)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [FLinearColor](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Core/Math/FLinearColor?application_version=5.5) | `Color` | | The new FLinearColor to set on the decal. |

---
### GetFadeStartDelay
Gets the current fade start delay.
```lua
Decal:GetFadeStartDelay()
```
#### Returns
`number`: Fade start delay value.

---
### GetFadeInStartDelay
Gets the current fade in start delay.
```lua
Decal:GetFadeInStartDelay()
```
#### Returns
`number`: Fade-in start delay value.

---
### GetFadeInDuration
Gets the current fade in duration.
```lua
Decal:GetFadeInDuration()
```
#### Returns
`number`: Fade-in duration.

---
### GetFadeDuration
Gets the current fade duration.
```lua
Decal:GetFadeDuration()
```
#### Returns
`number`: Fade duration.

---
### GetDecalMaterial
Gets the current decal material.
```lua
Decal:GetDecalMaterial()
```
#### Returns
[UMaterialInterface](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Materials/UMaterialInterface?application_version=5.5): Current decal material.

---
### CreateDynamicMaterialInstance
Creates a dynamic material instance at runtime.
```lua
Decal:CreateDynamicMaterialInstance()
```
#### Returns
[UMaterialInstanceDynamic](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Materials/UMaterialInstanceDynamic?application_version=5.5): A dynamic instance of the decal material.

## Events

<EventsDeclaration type="Class" name="Decal" />
