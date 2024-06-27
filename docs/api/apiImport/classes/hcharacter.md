---
title: HCharacter
description: HCharacters represents Actors which can be possessed, can move and interact with world.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="HCharacter" />


HCharacters are Skeletal Meshes using Unreal's Metahuman Skeleton, with animations and interactivity already natively integrated into HELIX. It is possible to import any Skeletal Mesh (which uses Unreal's Metahuman Skeleton to this HCharacter.


## Examples

```lua title="Server/Index.lua"
-------------------------------------------------------------------------------------
-- The following example spawns a HCharacter with the Helix Customizable character --
-- when players join the server and destroys them when they leave.                 --
-------------------------------------------------------------------------------------

-- Function to spawn a Character to a player
function SpawnCharacter(player)
    Console.Log("Spawn player")
     local new_character = HCharacter(Vector(0, 0, 0), Rotator(0, 0, 0), player)
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

-- When Player leaves the server, destroy it's Character
Player.Subscribe("Destroy", function(player)
    local character = player:GetControlledCharacter()
    if (character) then
        character:Destroy()
    end
end)


```


## Constructors

<ConstructorDeclaration type="Class" name="HCharacter" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="HCharacter" />


## Functions

<FunctionsDeclaration type="Class" name="HCharacter" />


## Events

<EventsDeclaration type="Class" name="HCharacter" />


