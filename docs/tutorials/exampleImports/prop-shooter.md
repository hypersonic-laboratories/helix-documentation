---
title: Prop Shooter
description: >-
  This sample code modifies a Weapon to make it shoot Props instead of normal
  bullets
tags: [tutorial-example, scripting]
status: old
---

--8<-- "old.md"


This sample code modifies a Weapon to make it shoot Props instead of normal bullets

<video controls="true" allowfullscreen="true">
    <source src="/videos/docs/tutorials/prop-shooter.mp4" />
</video>

Add the following code to `Server/Index.lua` file inside the package.

```lua title="Server/Index.lua"
--Create weapon
local new_weapon = Weapon(Vector(600, 0, 250), Rotator(0, 0, 0), "helix::SK_AK47")

--Setup Prop Shooting
new_weapon:Subscribe("Fire", function(weapon, shooter)
    local control_rotation = shooter:GetControlRotation()
    local forward_vector = control_rotation:GetForwardVector()
    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)

    local prop = Prop(spawn_location, control_rotation, "helix::SM_Sphere", 1)
    prop:AddImpulse(forward_vector * Vector(10000), true)
end)
```

To add a character, add [this code](/getting-started/code-examples/basic-setup.md#character) from the initial setup page.
