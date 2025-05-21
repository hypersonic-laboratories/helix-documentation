---
title: Classes Guide
tags: [scripting]
---

# Understanding Classes in HELIX
In HELIX, almost everything you work with in your game—players, characters, props, world settings—is built using **classes**. Whether you're spawning a new character or changing the weather, you're using a class or calling one of its functions.
This guide explains what classes are, how they work, and what types of functions you can expect to use in your Lua scripts.

---

## What Are Classes?
A **class** is a type of object that has its own set of functions and behaviors. For example:

- `Character` has functions like `:MoveTo()` or `:EquipItem()`
- `Prop` has functions like `:SetPhysicsEnabled()` or `:AttachTo()`
- `World` lets you do things like `:SetTime()` or `:SetWeather()`

When you **spawn** something in the game, like a character or a vehicle, you're creating an **instance** of that class.

---

## Class Functions: What You Can Do
Every class has its **own unique functions**, but many classes also **inherit common functions** from shared base classes.

For example:

- `Character` and `Prop` both inherit from `Actor`, so they both support methods like `:SetLocation()` or `:Destroy()`
- All **entity classes** share common events like `OnDestroy` or `OnOverlap`

You can check what functions are available on each class by visiting the **Scripting Reference → Classes** section in the sidebar.

---

## How to Use Class Functions
To call a function on an object, use the colon syntax (`:`). Here’s an example:

```lua title="Example"
-- Spawning a Character and moving them
local my_character = Character()
my_character:MoveTo(Vector(100, 200, 0))
```

That’s it—you just called the `:MoveTo()` function on your new character.

---

## Global API Classes
Not all functions belong to spawned objects. Some are part of global systems like the world, input, or audio.
These are called **API classes**, and they are available globally in every script.

```lua title="Example"
-- Change the in-game time to 6:30 AM
World:SetTime(6, 30)

-- Check if the jump key is being pressed
if Input:IsKeyDown("Space") then
    print("Jump!")
end
```

Some common API classes include:

- `World` – for time, weather, lighting
- `Input` – for keybinds and controls
- `Audio` – for playing music and sounds
- `Camera` – for controlling the view

---

## Utility Types (Vectors, Colors, JSON, etc.)

HELIX also includes helpful **utility types** to handle things like positions, rotations, colors, and data conversion.

These include:

- `Vector(x, y, z)` — for positions and directions
- `Rotator(pitch, yaw, roll)` — for rotation angles
- `Color(r, g, b, a)` — for RGBA color values
- `JSON.Stringify(data)` — for serializing Lua tables into strings

These usually use dot (`.`) syntax because they're not tied to a specific object:

```lua title="Example"
local pos = Vector(100, 200, 0)
local color = Color(255, 150, 0, 255)
local data = JSON.Encode({ health = 100, ammo = 30 })
```

---

## Summary

- **Classes** define what an object can do in your game
- Every class has its own functions, and most inherit common behavior from base classes
- Use `:` to call functions on objects (e.g. `character:MoveTo(...)`)
- Use **global API classes** like `World` or `Input` for system-level functions
- Use utility types like `Vector`, `Color`, and `JSON` for common data structures

If you're not sure what a class can do, head to the **Scripting Reference** and browse its methods, properties, and events.