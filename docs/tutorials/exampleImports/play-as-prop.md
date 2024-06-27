---
title: Play As Prop
description: >-
  How to simulate a Prop possessing using a Character. This can be used for Prop
  Hunt game-modes!
tags: [tutorial-example, scripting]
---


How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!

<!--
### Final result

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/play-as-prop.mp4" />
</video>
-->
![](/img/docs/getting_started/03_PlayAsProp.png)


### Code Snippet

Add the following code to `Server/Index.lua` file inside the package.

```lua title="Server/Index.lua"

-- Function to spawn a Character to a player
function SpawnCharacter(player)
    -- Spawns a Character at position 0, 0, 0 with default's constructor parameters
    local new_character = Character(Vector(1, 0, 100), Rotator(0, 0, 0), "helix::SK_None")
    new_character:AddStaticMeshAttached("prop", "helix::SM_Cube")
    new_character:SetCapsuleSize(32,64)
    new_character:SetCanPickupPickables(false)
    new_character:SetCanGrabProps(false)
    new_character:SetCanCrouch(false)
    new_character:SetCameraMode(2) -- Allows only Third Person
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


