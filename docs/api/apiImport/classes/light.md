---
title: Light
description: A Light represents a Lighting source
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Light" image="/img/docs/light.webp" />


## Examples

```lua
local my_light = Light(
    Vector(-152, 245, 115),
    Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types
    Color(1, 0, 0), -- Red Tint
    LightType.Point, -- Point Light type
    100, -- Intensity
    250, -- Attenuation Radius
    44, -- Cone Angle (Relevant only for Spot light type)
    0, -- Inner Cone Angle Percent (Relevant only for Spot light type)
    5000, -- Max Draw Distance (Good for performance - 0 for infinite)
    true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)
    true, -- Cast Shadows?
    true -- Enabled?
)
```

## Constructors

<ConstructorDeclaration type="Class" name="Light" />

///tip

HELIX provides 3 types of lights: **Spot**, **Point** and **Rect**. All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights 😉.

///


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Light" />


## Functions

<FunctionsDeclaration type="Class" name="Light" />


## Events

<EventsDeclaration type="Class" name="Light" />


## 💡 Light Profiles

Light Profiles are texture files which describes a light's distribution from a light source using real world measured data.

///tip

Please check [Unreal Engine Light Profile documentation](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LightingAndShadows/IESLightProfiles/) for more information about Light Profiles!

///

HELIX provides **50** Light Profiles included in the base game which you can use to enhance your Lights. You can set them using `:SetTextureLightProfile()` with the enum <Enums>LightProfile</Enums>.

![](/img/docs/ies-pack.webp)