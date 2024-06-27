---
title: Player
description: Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Player" />

///info Authority

🟥 You cannot spawn or Destroy Players.

///


## Examples

```lua
-- Spawns and possess a Character when a Player joins the server
Player.Subscribe("Spawn", function(player)
	local new_char = Character(Vector(), Rotator(), "helix::SK_Male")
	player:Possess(new_char)
end)

-- Destroys the Character when the Player leaves the server
Player.Subscribe("Destroy", function(player)
	local character = player:GetControlledCharacter()
	if (character) then
		character:Destroy()
	end
end)
```


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Player" />


## Functions

<FunctionsDeclaration type="Class" name="Player" />


## Events

<EventsDeclaration type="Class" name="Player" />
