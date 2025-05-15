---
title: HWeapon
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="Weapon" image="/img/docs/weapon.webp" />
Weapons are entities with firing, reloading and aiming functionalities
They are fully customizable, all pieces of the weapon can be changed with immense possibility of creation

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
| [Vector](#vector)                                 | `location`        |                        |             |
| [Rotator](#rotator)                               | `rotation`        |                        |             |
| [SkeletalMesh Reference](#skeletalmesh-reference) | `asset`           |                        |             |
| [CollisionType](#collisiontype)                   | `collision_type`  | `CollisionType.Normal` |             |
| [boolean](#boolean)                               | `gravity_enabled` | `true`                 |             |

## Functions
<FunctionsDeclaration type="Class" name="Weapon" />

```lua title="Example"
```

## Events
<EventsDeclaration type="Class" name="Weapon" />

```lua title="Example"
```