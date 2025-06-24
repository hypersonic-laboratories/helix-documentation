---
title: Particle
description: Class to spawn Particle Systems used to create effects in the world
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="Particle"/>
Particle allows you to spawn and control legacy visual effects created using Unreal Engine’s deprecated Cascade particle system.
Cascade was the original VFX solution used for simulating explosions, fire, smoke, and other environmental effects before Niagara was introduced.
While still supported, it is no longer maintained and should only be used for older assets that haven't been converted to Niagara

///warning
This class is deprecated, use [Niagara](niagara.md) instead!
///

## Constructor
<ConstructorDeclaration type="Class" name="Particle" />

```lua title="Example"
local fx = Particle(
    Vector(0, 0, 100),
    Rotator(0, 0, 0),
    "/Game/Particles/P_Explosion.P_Explosion",
    true,
    true
)
```

| Name             | Type       | Default     | Description                                       |
|------------------|------------|-------------|---------------------------------------------------|
| `Location`        | `Vector`   | `(0,0,0)`   | World-space spawn position                        |
| `Rotation`        | `Rotator`  | `(0,0,0)`   | Initial rotation of the effect                    |
| `AssetPath`       | `string`   | **Required**| Path to the UParticleSystem asset                 |
| `bAutoDestroy`    | `boolean`  | `true`      | Destroy the component automatically when finished |
| `bAutoActivate`   | `boolean`  | `true`      | Play the effect immediately on spawn              |

## Functions
<FunctionsDeclaration type="Class" name="Particle" />

### `SetTemplate`
Changes the particle system to a different UParticleSystem asset at runtime
```lua title="Example"
fx:SetTemplate(UE.UObject.Load("/Game/Particles/P_Smoke.P_Smoke"))
```
---

### `SetMaterialParameter`
Sets a material parameter by name for the emitter
```lua title="Example"
fx:SetMaterialParameter("MyMaterialParam", myMaterial)
```
---

### `CreateNamedDynamicMaterialInstance`
Creates or retrieves a dynamic material instance for the particle system
```lua title="Example"
local dynMat = fx:CreateNamedDynamicMaterialInstance("MyMatSlot")
dynMat:SetScalarParameterValue("Glow", 1.0)
```
---

### `GetNumActiveParticles`
Returns how many particles are currently active (useful for pooling or gameplay checks)
```lua title="Example"
local count = particle:GetNumActiveParticles()
```