---
title: Sound
description: Class for playing in-game 2D and 3D sounds
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Sound" image="/img/docs/sound.webp" />

///tip

You can also load raw `.ogg` files from disk! Please check [SpecialPath](/scripting-reference/glossary/basic-types.md#specialpath).

///


## Examples

```lua
local my_sound = Sound(
    Vector(-510, 145, 63), -- Location (if a 3D sound)
    "helix::A_VR_Confirm", -- Asset Path
    false, -- Is 2D Sound
    true, -- Auto Destroy (if to destroy after finished playing)
    SoundType.SFX,
    1, -- Volume
    1 -- Pitch
)
```

```lua
-- Spawning a ogg sound located in a Package
local ogg_sound = Sound(Vector(), "package://my-package/Client/awesome_beep.ogg", true)
```


## Constructors

<ConstructorDeclaration type="Class" name="Sound" />

///info Note

**`auto_destroy`** means the Entity will be immediately destroyed after spawned, losing references to the _Particle System_ spawned in-game. So if the _Particle System_ itself loops indefinitely, it will keep playing until the Player reconnects.

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Sound" />


## Functions

<FunctionsDeclaration type="Class" name="Sound" />


## Events

<EventsDeclaration type="Class" name="Sound" />


## 🔊 Sound Attenuation

This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:

### 🔈 Linear

![](/img/docs/sounds-linear.webp)

This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings.

### 🔈 Logarithmic

![](/img/docs/sounds-log.webp)

When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances.

### 🔈 Inverse

![](/img/docs/sounds-inverse.webp)

When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source.

### 🔈 Log Reverse

![](/img/docs/sounds-log-reverse.webp)

When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances.

### 🔈 Natural Sound

![](/img/docs/sounds-natural.webp)

This function attempts to model a more 'naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of 'middle ground' between the Logarithmic and Inverse functions.
