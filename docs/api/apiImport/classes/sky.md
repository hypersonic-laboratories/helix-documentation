---
title: Sky
description: Interact with built-in Sky & Weather system.
tags: [static-class]
---
<HeaderDeclaration type="StaticClass" name="Sky"/>
Sky is a callable class that spawns and configures the **Ultra Dynamic Sky** and **Ultra Dynamic Weather** systems in your level.
This gives you real-time control over time of day, weather effects, sun and moon properties, cloud coverage, and atmosphere settings.
Ideal for dynamic open-world environments, the Sky system allows for fully procedural skies that change over time or in response to scripted events.

/// tip
`Sky` wraps both the `Ultra_Dynamic_Sky` and `Ultra_Dynamic_Weather` Blueprint Actors.
///

## Constructor
<ConstructorDeclaration type="Class" name="Sky" />

```lua title="Example"
local sky = Sky()
sky:SetTimeOfDay(1300)
sky:ChangeWeather(WeatherType.Cloudy)
```

| Name | Type | Default | Description |
|------|------|---------|-------------|
| *(none)* | | | Sky has no parameters — it automatically spawns both the sky and weather actors on construction. |

---

## Functions
<StaticFunctionsDeclaration type="StaticClass" name="Sky" />

### `SetTimeOfDay`
Sets the time of day in 24h format (e.g. `1330` for 1:30 PM).
```lua
sky:SetTimeOfDay(930)
```
---

### `SetAnimateTimeOfDay`
Toggles automatic time progression.
```lua
sky:SetAnimateTimeOfDay(true)
```
---

### `ChangeWeather`
Changes the current weather type.
```lua
sky:ChangeWeather(WeatherType.Rain, 5) -- 5 second transition
```
---

### `GetWeather`
Returns the current weather type.
```lua
local weather = sky:GetWeather()
```
---

### `SetSkyMode`
Changes the sky rendering mode (e.g. fully dynamic, hybrid).
```lua
sky:SetSkyMode(1)
```
---

### `SetCloudCoverage`
Sets the density of clouds in the sky.
Accepted range: 0-10
```lua
sky:SetCloudCoverage(5.0)
```
---

### `SetVolumetricCloudColor`
Sets the tint color of the volumetric clouds.
```lua
sky:SetVolumetricCloudColor(LinearColor(0.8, 0.85, 0.9, 1.0))
```
---

### `SetFog`
Adjusts atmospheric fog intensity.
```lua
sky:SetFog(0.2)
```
---

### `SetContrast`
Adjusts global sky contrast.
```lua
sky:SetContrast(1.5)
```
---

### `SetOverallIntensity`
Sets overall brightness of the sky.
```lua
sky:SetOverallIntensity(2.0)
```
---

### `SetNightBrightness`
Controls how bright the sky is at night.
```lua
sky:SetNightBrightness(0.4)
```
---

### `EnableAurora`
Enables or disables the aurora borealis effect.
```lua
sky:EnableAurora(true)
```
---

### `SetMoonTexture`
Sets a texture to be used for the moon.
```lua
sky:SetMoonTexture(myMoonTex)
```
---

### `SetMoonTextureRotation`
Rotates the moon texture in degrees.
```lua
sky:SetMoonTextureRotation(45)
```
---

### `SetMoonVerticalOffset`
Adjusts the moon's vertical screen offset.
```lua
sky:SetMoonVerticalOffset(0.3)
```
---

### `SetMoonScale`
Scales the size of the visible moon.
```lua
sky:SetMoonScale(2.0)
```
---

### `SetMoonPhase`
Sets the moon phase manually (0–1 where 0 = new moon, 1 = full moon).
```lua
sky:SetMoonPhase(0.5)
```
---

### `SetMoonGlowIntensity`
Controls how bright the glow around the moon appears.
```lua
sky:SetMoonGlowIntensity(1.2)
```
---

### `SetMoonLightIntensity`
Controls how much light the moon casts in the scene.
```lua
sky:SetMoonLightIntensity(0.4)
```
---

### `SetMoonColor`
Sets the light color emitted by the moon.
```lua
sky:SetMoonColor(LinearColor(0.9, 0.9, 1.0, 1.0))
```
---

### `SetSunRadius`
Adjusts the visible size of the sun.
```lua
sky:SetSunRadius(1.5)
```
---

### `SetSunLightIntensity`
Controls how much light the sun emits.
```lua
sky:SetSunLightIntensity(10.0)
```
