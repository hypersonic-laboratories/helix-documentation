---
title: Weapon Flashlight
description: This sample code attaches a Light to a Weapon to make a Flashlight attachment.
tags: [tutorial-example, scripting]
---


This sample code attaches a Light to a Weapon to make a Flashlight attachment.

![](/img/docs/tutorials/weapon-flashlight.jpg)


Insert this code in `Server/Index.lua` file: 

```lua title="Server/Index.lua"
-- Spawns a Weapon
local my_weapon = Weapon(Vector(600, 0, 250), Rotator(0, 0, 0), "helix::SK_AK47")

---setup weapon
    -- Configures how the Character Grabs and Aims the Weapon
    my_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)
    my_weapon:SetSightTransform(Vector(0, 0, -1), Rotator(-1.5, 0, 0))
    my_weapon:SetLeftHandTransform(Vector(22, 0, 9), Rotator(0, 60, 90))
    my_weapon:SetRightHandOffset(Vector(-10, 0, 0))

    -- Configures Weapon Particles
    my_weapon:SetParticlesBulletTrail("helix::P_Bullet_Trail")
    my_weapon:SetParticlesBarrel("helix::P_Weapon_BarrelSmoke")
    my_weapon:SetParticlesShells("helix::P_Weapon_Shells_762x39")

    -- Configures Weapon Sounds
    my_weapon:SetSoundDry("helix::A_Rifle_Dry")
    my_weapon:SetSoundLoad("helix::A_Rifle_Load")
    my_weapon:SetSoundUnload("helix::A_Rifle_Unload")
    my_weapon:SetSoundZooming("helix::A_AimZoom")
    my_weapon:SetSoundAim("helix::A_Rattle")
    my_weapon:SetSoundFire("helix::A_AK47_Shot")

    -- Configures Weapon Animations
    my_weapon:SetAnimationFire("helix::A_AK47_Fire")
    my_weapon:SetAnimationCharacterFire("helix::AM_Mannequin_Sight_Fire")
    my_weapon:SetAnimationReload("helix::AM_Mannequin_Reload_Rifle")

--Weapon Flashlight:
-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)
my_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)

-- Attaches the Light to the Weapon with offset X = 100 (at the weapon's front)
my_light:AttachTo(my_weapon)
my_light:SetRelativeLocation(Vector(100, 0, 0))

-- Stores the light on the Weapon
my_weapon:SetValue("Light", my_light)

-- Only when someone picks up this weapon, turns on the Flashlight (set it's color)
my_weapon:Subscribe("PickUp", function(weapon, character)
    local light = my_weapon:GetValue("Light")
    if (light ~= nil) then
        light:SetColor(Color(0.73, 0.67, 0.42))
    end
end)

-- When the weapon is dropped, turns off the Flashlight (set it's color to black)
my_weapon:Subscribe("Drop", function(weapon, character)
    local light = my_weapon:GetValue("Light")
    if (light ~= nil) then
        light:SetColor(Color(0, 0, 0))
    end
end)
```

To add a character, add [this code](/getting-started/code-examples/basic-setup.md#character) from the initial setup page.
