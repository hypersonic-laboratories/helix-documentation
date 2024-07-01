---
title: Base Pickable
description: Base class for all Pickables
tags: [base-class]
---

import { Classes } from '@site/docs/components/_nanos.mdx';
import ThemedImage from '@theme/ThemedImage';

<HeaderDeclaration type="Class" name="Pickable" />

///info

This is a base class. You cannot spawn it directly.

///

Examples of Pickable Actors are: <Classes.Weapon />, <Classes.Melee /> and <Classes.Grenade />.

They have special methods and events and are highlighted when looked at by a Character.


## Functions

<FunctionsDeclaration type="Class" name="Pickable" />


## Events

<EventsDeclaration type="Class" name="Pickable" />


## ➕ Available Crosshairs

HELIX provides a bunch of crosshair materials which can be used in Weapons/Pickables. You can of course create your own crosshair materialr and use those instead!

````mdx-code-block
<ThemedImage
    alt="All available Crosshairs"
    sources={{
        light: '/img/docs/crosshairs_light.jpg',
        dark: '/img/docs/crosshairs_dark.jpg',
    }}
/>
````


#### List of crosshair materials included in the default asset pack

* `helix::MI_Crosshair_Circle`
* `helix::MI_Crosshair_Crossbow`
* `helix::MI_Crosshair_Dot`
* `helix::MI_Crosshair_Holo`
* `helix::MI_Crosshair_Launcher`
* `helix::MI_Crosshair_Regular`
* `helix::MI_Crosshair_Regular_X`
* `helix::MI_Crosshair_Rocket`
* `helix::MI_Crosshair_Separated_Triangle`
* `helix::MI_Crosshair_Shotgun`
* `helix::MI_Crosshair_Square`
* `helix::MI_Crosshair_Submachine`
* `helix::MI_Crosshair_Tee`
* `helix::MI_Crosshair_ThreeDots`
* `helix::MI_Crosshair_Triangle`
* `helix::MI_Crosshair_Vee`