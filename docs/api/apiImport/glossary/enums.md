---
title: Enums
description: HELIX Enums.
tags: [scripting]
---


Instead of passing numbers to methods or comparing numbers in Events callbacks, you can use the following **Enums** to do so. Examples:

```lua
-- Using Enums to figure out which StanceMode the Character is
Character.Subscribe("StanceModeChanged", function(character, old_stance, new_stance)
	if (new_stance == StanceMode.Standing) then
		Console.Log("I'm Standing!")
	else if (new_stance == StanceMode.Crouching) then
		Console.Log("I'm Crouching!")
	end
end)

-- Using Enums to pass a Light Type to the constructor
local my_light = Light(Vector(-5, 0, 50), Rotator(), Color.RED, LightType.Point)

-- Using Enums to set the Character View Mode
character:SetViewMode(ViewMode.FPS)
```

///info

The functions which use the Enums are still receiving numbers as parameters (as always), using Enums is just a facilitator.

///

## All Enums


<APISourceURL type="Enums" class_name="Enums" />

<EnumsDeclaration />
