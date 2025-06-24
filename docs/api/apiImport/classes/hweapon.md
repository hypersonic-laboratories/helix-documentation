---
title: HWeapon
tags: [class]
---
<HeaderDeclaration type="Class" name="Weapon"/>
Weapons are entities with firing, reloading and aiming functionalities
They are fully customizable, all pieces of the weapon can be changed with immense possibility of creation

/// tip
`HWeapon` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor
<ConstructorDeclaration type="Class" name="Weapon" />

```lua title="Example"
local new_weapon = Weapon(
    Vector(-900, 185, 215),
    Rotator(0, 0, 0),
    '/ShooterCore/Weapons/Pistol/Roger/B_WeaponActor_Roger.B_WeaponActor_Roger_C',
    CollisionType.Normal,
    true
)
```

| Type                                              | Name              | Default                | Description |
| ------------------------------------------------- | ----------------- | ---------------------- | ----------- |
| [Vector](../global-variables/structs.md/#vector)                                 | `location`        |                        |             |
| [Rotator](../global-variables/structs.md/#rotator)                               | `rotation`        |                        |             |
| [SkeletalMesh Reference] | `asset`           |                        |             |
| [CollisionType](../global-variables/enums.md/#collisiontype)                   | `collision_type`  | `CollisionType.Normal` |             |
| boolean                               | `gravity_enabled` | `true`                 |             |

## Functions
<FunctionsDeclaration type="Class" name="Weapon" />

```lua title="Example"
```