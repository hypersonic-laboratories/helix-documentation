---
title: Niagara
description: ''
tags: [class]
---
<HeaderDeclaration type="Class" name="Niagara" />
NiagaraParticle allows you to spawn advanced visual effects using Unreal Engine’s Niagara VFX system.
Niagara is a modular particle system designed for real-time simulations such as fire, smoke, sparks, explosions, magic, trails, and complex environmental effects.
This class makes it easy to trigger those systems at runtime, giving you dynamic control over visuals, behavior, and performance features like pooling and auto-destructionng.

## Constructor
<ConstructorDeclaration type="Class" name="Niagara" />

```lua title="Example"
local fx = NiagaraParticle(
    Vector(0, 0, 200),
    Rotator(0, 90, 0),
    "/Game/VFX/MySystem.MySystem",
    true,
    Vector(1, 1, 1),
    true,
    UE.ENCPoolMethod.AutoRelease,
    false
)
```

| Name             | Type            | Default                 | Description                                         |
|------------------|------------------|-------------------------|-----------------------------------------------------|
| `Location`        | `Vector`         | `(0,0,0)`               | World-space spawn position                          |
| `Rotation`        | `Rotator`        | `(0,0,0)`               | Initial rotation                                    |
| `AssetPath`       | `string`         | **Required**            | Path to the Niagara asset (must be valid)           |
| `bAutoDestroy`    | `boolean`        | `true`                  | Whether to destroy after effect completes           |
| `Scale`           | `Vector`         | `(1,1,1)`               | Spawn scale                                         |
| `bAutoActivate`   | `boolean`        | `true`                  | Whether the effect should auto-start                |
| `PoolingMethod`   | `ENCPoolMethod`  | `ENCPoolMethod.None`    | Pooling behavior (`None`, `AutoRelease`, etc.)      |
| `bPreCullCheck`   | `boolean`        | `false`                 | Skip spawning if off-screen                         |