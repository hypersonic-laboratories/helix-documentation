---
title: Input
description: Create custom Bindings and Retrieve Input information
tags: [static-class, client]
---

<HeaderDeclaration type="StaticClass" name="Input" is_static />


## Examples

```lua title="Client/Index.lua"
-- Registers the binding_name 'SpawnMenu' with default key 'Q'
-- This will add 'SpawnMenu' to user KeyBinding Settings automatically
Input.Register("SpawnMenu", "Q")

-- Subscribes for Pressing the key
Input.Bind("SpawnMenu", InputEvent.Pressed, function()
	-- Opens the Spawn Menu
end)

-- Subscribes for Releasing the key
Input.Bind("SpawnMenu", InputEvent.Released, function()
	-- Closes the Spawn Menu
end)
```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Input" />

## Events

<EventsDeclaration type="StaticClass" name="Input" />

## ⌨️ Key Names

List of all keys names returned in Key/Mouse events.


### ▶️ Function Keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`F1`** | Function one |
| **`F2`** | Function two |
| **`F3`** | Function three |
| **`F4`** | Function four |
| **`F5`** | Function five |
| **`F6`** | Function six |
| **`F7`** | Function seven |
| **`F8`** | Function eight |
| **`F9`** | Function nine |
| **`F10`** | Function ten |
| **`F11`** | Function eleven |
| **`F12`** | Function twelve |


### ▶️ Alphanumerical keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`A`** | Letter A |
| **`B`** | Letter B |
| **`C`** | Letter C |
| **`D`** | Letter D |
| **`E`** | Letter E |
| **`F`** | Letter F |
| **`G`** | Letter G |
| **`H`** | Letter H |
| **`I`** | Letter I |
| **`J`** | Letter J |
| **`K`** | Letter K |
| **`L`** | Letter L |
| **`M`** | Letter M |
| **`N`** | Letter N |
| **`O`** | Letter O |
| **`P`** | Letter P |
| **`Q`** | Letter Q |
| **`R`** | Letter R |
| **`S`** | Letter S |
| **`T`** | Letter T |
| **`U`** | Letter U |
| **`V`** | Letter V |
| **`W`** | Letter W |
| **`X`** | Letter X |
| **`Y`** | Letter Y |
| **`Z`** | Letter Z |


### ▶️ Special keys

| **Key Name** | **Description** |
| :--- | :--- |
| **`Escape`** | Escape |
| **`Tab`** | Tab |
| **`Tilde`** | ~ |
| **`ScrollLock`** | Scroll lock |
| **`Pause`** | Pause |
| **`BackSpace`** | BackSpace |
| **`One`** | One |
| **`Two`** | Two |
| **`Three`** | Three |
| **`Four`** | Four |
| **`Five`** | Five |
| **`Six`** | Six |
| **`Seven`** | Seven |
| **`Eight`** | Eight |
| **`Nine`** | Nine |
| **`Zero`** | Zero |
| **`Underscore`** | \_ |
| **`Equals`** | = |
| **`Backslash`** |  |
| **`LeftBracket`** | \[ |
| **`RightBracket`** | \] |
| **`Enter`** | Enter or Numpad enter |
| **`CapsLock`** | Caps lock |
| **`Semicolon`** | ; |
| **`Quote`** | ‘ |
| **`LeftShift`** | Left shift |
| **`Comma`** | , |
| **`Period`** | . |
| **`Slash`** | / |
| **`RightShift`** | Right Shif |
| **`LeftControl`** | Left control |
| **`LeftAlt`** | Left alt |
| **`SpaceBar`** | Space bar |
| **`RightAlt`** | Right alt |
| **`RightControl`** | Right control |
| **`Left`** | Left |
| **`Up`** | Up |
| **`Down`** | Down |
| **`Right`** | Right |
| **`Home`** | Home |
| **`End`** | End |
| **`Insert`** | Insert |
| **`PageUp`** | Page up |
| **`Delete`** | Delete |
| **`PageDown`** | Page down |
| **`NumLock`** | Num lock |
| **`Divide`** | Numpad / |
| **`Multiply`** | Numpad \* |
| **`Subtract`** | Numpad - |
| **`Add`** | Numpad + |
| **`PageDown`** | Page down |
| **`NumPadOne`** | Numpad one |
| **`NumPadTwo`** | Numpad two |
| **`NumPadThree`** | Numpad three |
| **`NumPadFour`** | Numpad four |
| **`NumPadFive`** | Numpad five |
| **`NumPadSix`** | Numpad six |
| **`NumPadSeven`** | Numpad seven |
| **`NumPadEight`** | Numpad eight |
| **`NumPadNine`** | Numpad nine |
| **`NumPadZero`** | Numpad zero |
| **`Decimal`** | Numpad decimal |


### ▶️ Mouse

| **Key Name** | **Description** |
| :--- | :--- |
| **`LeftMouseButton`** | Left mouse button |
| **`RightMouseButton`** | Right mouse button |
| **`MiddleMouseButton`** | Middle mouse button |
| **`ThumbMouseButton`** | Primary mouse thumb button |
| **`ThumbMouseButton2`** | Secondary mouse thumb button |
| **`MouseScrollUp`** | Mouse wheel scrolling up |
| **`MouseScrollDown`** | Mouse wheel scrolling down |
| **`MouseX`** | Mouse movement on the X axis |
| **`MouseY`** | Mouse movement on the Y axis |
