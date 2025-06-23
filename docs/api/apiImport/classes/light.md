---
title: Light
description: A Light represents a Lighting source
tags: [class]
---
<HeaderDeclaration type="Class" name="Light" image="/img/docs/light.webp" />

Light is a callable class that simplifies the process of spawning and configuring dynamic lights in Unreal Engine. It supports three light types—Point, Spot, and Rect—and automatically sets up location, rotation, color, intensity, attenuation, and shadow settings. The returned wrapper provides unified access to both the underlying light actor and its component, making it easy to manipulate lights in real time through Lua scripts.

/// tip
`Light` is an `Actor` so it inherits all functions from [Actor](#actor)
///

## 💡 Light Profiles

/// note
- **Point** Lights act as a light bulb, casting light in all directions from a single point.
- **Spot** Lights emit light from a single point in a direction limited by a set of cones.
- **Rect** Lights emit light from a rectangular surface in a direction.

Read more (https://dev.epicgames.com/documentation/en-us/unreal-engine/light-types-and-their-mobility-in-unreal-engine)
///

## Constructor
<ConstructorDeclaration type="Class" name="Light" />

```lua title="Example"
local myLight = Light(
    Vector(0,0,300),
    Rotator(45,0,0),
    LinearColor(1,0.5,0.5,1),
    LightType.Spot,
    8000,
    1200,
    30,
    0.2,
    5000,
    true,
    true,
    true
)
```

| Name                       | Type           | Default           | Description                                  |
| -------------------------- | -------------- | ----------------- | -------------------------------------------- |
| `Location`                 | `Vector`       | `(0,0,0)`         | Spawn position in world space                |
| `Rotation`                 | `Rotator`      | `(0,0,0)`         | Initial rotation of the light                |
| `Color`                    | `LinearColor`  | `white`           | Light color and alpha                        |
| `LightTypeParam`           | `enum`         | `LightType.Point` | `LightType.Point`, `.Spot`, `.Rect`   |
| `Intensity`                | `number`       | `5000`            | Light brightness (in lumens)                 |
| `AttenuationRadius`        | `number`       | `1000`            | Distance the light affects (Point/Spot only) |
| `ConeAngle`                | `number`       | `44`              | Outer angle for Spot lights                  |
| `InnerConePercent`         | `number`       | `0`               | Inner angle as a percent of outer angle      |
| `MaxDrawDistance`          | `number`       | `0`               | Fade out distance (0 = infinite)             |
| `UseInverseSquaredFalloff` | `boolean`      | `true`            | Use physically accurate light falloff        |
| `CastShadows`              | `boolean`      | `true`            | Enable shadow casting                        |
| `Visible`                  | `boolean`      | `true`            | Whether the light is visible                 |

## Functions
<AFunctionsDeclaration type="Class" name="Light" />

### `ToggleEnabled`
Enables/disables the light
```lua title="Example"
myLight:ToggleEnabled()
```

---

### `IsEnabled`
Returns boolean of enabled status of light

- <span style="color: #facc15;">returns:</span> `boolean`

```lua title="Example"
local isEnabled = myLight:IsEnabled()
```

---

### `GetLightColor`
Returns the current color of the light

- <span style="color: #facc15;">returns:</span> `Color`

```lua title="Example"
local color = myLight:GetLightColor()
```

---

### `GetBrightness`
Returns brightness amount

- <span style="color: #facc15;">returns:</span> `integer`

```lua title="Example"
local brightness = myLight:GetBrightness()
```

---

### `SetLightFColor`
Set the color of the light

- NewLightColor: `Color`

```lua title="Example"
myLight:SetLightFColor(Color(255, 0, 128, 255))
```

---

### `SetLightColor`
Set the color of the light

- NewLightColor: `LinearColor`

```lua title="Example"
myLight:SetLightColor(LinearColor(1.0, 0.0, 0.5, 1.0))
```

---

### `SetLightFunctionScale`
Sets the scale of the light function projection

- NewLightFunctionScale: `Vector`

```lua title="Example"
myLight:SetLightFunctionScale(Vector(0,0,0))
```

---

### `SetLightFunctionMaterial`
Sets a material to use as the light function (gobo effect)

- NewLightFunctionMaterial: `UMaterialInterface`

```lua title="Example"
myLight:SetLightFunctionMaterial(myMaterial)
```

---

### `SetLightFunctionFadeDistance`
Controls how far the light function effect fades out

- NewLightFunctionFadeDistance: `number`

```lua title="Example"
myLight:SetLightFunctionFadeDistance(100)
```

---

### `SetIntensityUnits`
Sets how the light's intensity is measured. Options include unitless values, lumens, candelas, or exposure values (EV)

- NewIntensityUnits: `ELightUnits`

```lua title="Example"
local units = UE.ELightUnits.Lumens
myLight:SetIntensityUnits(units)
```

---

### `SetAttenuationRadius`
Sets the distance at which the light has no effect

- NewRadius: `number`

```lua title="Example"
myLight:SetAttenuationRadius(1000)
```

---

### `SetCastShadows`
Sets whether this light casts shadows

- bNewValue: `boolean`

```lua title="Example"
myLight:SetCastShadows(true)
```

---

### `SetCastVolumetricShadow`
Enable or disable whether this light casts volumetric shadows

- bNewValue: `boolean`

```lua title="Example"
myLight:SetCastVolumetricShadow(true)
```

---

### `SetAffectReflection`
Enable or disable this light's influence on reflections

- bNewValue: `boolean`

```lua title="Example"
myLight:SetAffectReflection(true)
```

---

### `SetAffectGlobalIllumination`
Enable or disable this light's contribution to global illumination

- bNewValue: `boolean`

```lua title="Example"
myLight:SetAffectGlobalIllumination(false)
```

---

### `SetVolumetricScatteringIntensity`
Controls how much this light contributes to the volumetric lighting system

- NewIntensity: `number`

```lua title="Example"
myLight:SetVolumetricScatteringIntensity(1.0)
```

---

### `SetUseTemperature`
Enable or disable using Kelvin temperature for light color

- bNewValue: `boolean`

```lua title="Example"
myLight:SetUseTemperature(true)
```

---

### `SetTemperature`
Set the color temperature in Kelvin (only affects light if `SetUseTemperature(true)` is enabled)

- NewTemperature: `number`

```lua title="Example"
myLight:SetTemperature(6500)
```

### `SetOuterConeAngle`
Sets the outer cone angle for spot lights

- NewOuterConeAngle: `number`

```lua title="Example"
myLight:SetOuterConeAngle(45)
```

---

### `SetInnerConeAngle`
Sets the inner cone angle for spot lights

- NewInnerConeAngle: `number`

```lua title="Example"
myLight:SetInnerConeAngle(30)
```

---

### `SetSourceWidth`
Sets the width of the source rectangle for rect lights

- NewValue: `number`

```lua title="Example"
myLight:SetSourceWidth(64.0)
```

---

### `SetSourceHeight`
Sets the height of the source rectangle for rect lights

- NewValue: `number`

```lua title="Example"
myLight:SetSourceHeight(128)
```

---

### `SetSourceTexture`
Assigns a texture to the rect light source

- NewValue: `UTexture`

```lua title="Example"
myLight:SetSourceTexture(myTexture)
```

---

### `SetBarnDoorLength`
Controls the length of the barn doors for rect lights

- NewValue: `number`

```lua title="Example"
myLight:SetBarnDoorLength(10)
```

---

### `SetBarnDoorAngle`
Controls the angle of the barn doors for rect lights

- NewValue: `number`

```lua title="Example"
myLight:SetBarnDoorAngle(45)
```

---

### `SetSourceRadius`
Set the radius of the source for point lights

- NewValue: `number`

```lua title="Example"
myLight:SetSourceRadius(10)
```

---

### `SetSoftSourceRadius`
Set the radius of the soft source effect for point lights

- NewValue: `number`

```lua title="Example"
myLight:SetSoftSourceRadius(5)
```

---

### `SetSourceLength`
Set the source length for tube-style light emission

- NewValue: `number`

```lua title="Example"
myLight:SetSourceLength(20)
```