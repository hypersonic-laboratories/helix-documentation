---
title:  Initial Setup
description: Basic configuration to add the code and test it.
tags: [tutorial-example, scripting, ui]
sidebar_position: 1
status: old
---

--8<-- "old.md"

This page shows the basic configuration to have in order to test the code shown in the examples.

## The server
You have to download the server, further details on the [server page](/core-concepts/server-manual/server-installation.mdx). You can download the file following this link:

[Server download.](https://helix-item-storage.s3.amazonaws.com/HELIXGameServer.exe)

### Create a package
A package is required to put the code stated in this pages. Detailed information about this can be [found here](/getting-started/quick-start.mdx#creating-a-basic-package)  
In short:

> - Open a Command Line where your server file is.  
> - Input the following command: `./HELIXGameServer.exe --cli add package awesome-pkg`  
> - Press enter until you see the following message: `Package 'my-awesome-package' has been created!`  
> - Close the CMD window.

Then the server folder will have the following files, double click on the Config.toml file to open it.

![](/img/docs/getting_started/00_Server_basic_Setup.png)

### Setup the package

in order to test the code, a default map has to be added to the Config.toml file.  
If config.toml is closed, open it and search for the following code:

```lua
# default startup map
    map =               ""
```

there, a blank map is going to be defined. That line of code should be changed to this:

```lua
# default startup map
    map =               "default-blank-map"
```

After adding `default-blank-map` save the file and close it.

Now the package is ready to allocate lua code and test it, just be careful to check if the LUA code has to be added on the client side or server side!

## Optional

### Character

If a character is required to test, the following code can be added to the `Server/Index.lua` file:

```lua
-- Function to spawn a Character to a player
function SpawnCharacter(player)
    -- Spawns a Character at position 0, 0, 0 with default's constructor parameters
    local new_character = Character(Vector(1, 0, 100), Rotator(0, 0, 0), "helix::SK_Male")
    new_character:AddSkeletalMeshAttached("head", "helix::SK_Male_Head")
    -- Possess the new Character
    player:Possess(new_character)
end

-- Subscribes to an Event which is triggered when Players join the server (i.e. Spawn)
Player.Subscribe("Spawn", SpawnCharacter)

-- Iterates for all already connected players and give them a Character as well
-- This will make sure you also get a Character when you reload the package
Package.Subscribe("Load", function()
    for k, player in pairs(Player.GetAll()) do
        SpawnCharacter(player)
    end
end)

```
### Weapon

If a Weapon is required, then add the following code to `Server/Index.lua` file:

```lua
-- Spawns a Weapon
local new_weapon = Weapon(Vector(600, 0, 250), Rotator(0, 0, 0), "helix::SK_AK47")


---setup weapon
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
```

## Additional content

On the HELIX Repositories there are more advanced examples and Code, [please visit the GitHub Repository](https://github.com/orgs/helix-game/repositories?type=public)
