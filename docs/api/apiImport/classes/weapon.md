---
title: Weapon
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Weapon" image="/img/docs/weapon.webp" />


## Examples

```lua title="Server/Index.lua"
-- Spawning a Weapon with an AK47 model
local new_weapon = Weapon(
    Vector(-900, 185, 215),
    Rotator(0, 0, 0),
    "helix::SK_AK47"
)

-- Configures Weapon Base Settings
new_weapon:SetAmmoSettings(30, 1000)
new_weapon:SetDamage(30)
new_weapon:SetSpread(30)
new_weapon:SetRecoil(0.25)
new_weapon:SetBulletSettings(1, 20000, 20000, Color(100, 58, 0))
new_weapon:SetCadence(0.1)
new_weapon:SetWallbangSettings(50, 0.75)

-- Configures how the Character Grabs and Aims the Weapon
new_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)
new_weapon:SetSightTransform(Vector(0, 0, -1), Rotator(-1.5, 0, 0))
new_weapon:SetLeftHandTransform(Vector(22, 0, 9), Rotator(0, 60, 90))
new_weapon:SetRightHandOffset(Vector(-10, 0, 0))

-- Configures Weapon Particles
new_weapon:SetParticlesBulletTrail("helix::P_Bullet_Trail")
new_weapon:SetParticlesBarrel("helix::P_Weapon_BarrelSmoke")
new_weapon:SetParticlesShells("helix::P_Weapon_Shells_762x39")

-- Configures Weapon Sounds
new_weapon:SetSoundDry("helix::A_Rifle_Dry")
new_weapon:SetSoundLoad("helix::A_Rifle_Load")
new_weapon:SetSoundUnload("helix::A_Rifle_Unload")
new_weapon:SetSoundZooming("helix::A_AimZoom")
new_weapon:SetSoundAim("helix::A_Rattle")
new_weapon:SetSoundFire("helix::A_AK47_Shot")

-- Configures Weapon Animations
new_weapon:SetAnimationFire("helix::A_AK47_Fire")
new_weapon:SetAnimationCharacterFire("helix::AM_Mannequin_Sight_Fire")
new_weapon:SetAnimationReload("helix::AM_Mannequin_Reload_Rifle")

-- Configures the Mesh to drop when reloading
new_weapon:SetMagazineMesh("helix::SM_AK47_Mag_Empty")

-- Configures the Crosshair Material
new_weapon:SetCrosshairMaterial("helix::MI_Crosshair_Regular")
```

More related examples:

<ReferenceLink href="getting-started/code-examples/prop-shooter">Prop Shooter</ReferenceLink>
<ReferenceLink href="getting-started/code-examples/weapon-scope">Weapon Scope</ReferenceLink>
<ReferenceLink href="getting-started/code-examples/weapon-flashlight">Weapon Flashlight</ReferenceLink>


## Constructors

<ConstructorDeclaration type="Class" name="Weapon" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Weapon" />


## Functions

<FunctionsDeclaration type="Class" name="Weapon" />


## Events

<EventsDeclaration type="Class" name="Weapon" />
