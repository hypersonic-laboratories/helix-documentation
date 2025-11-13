---
title: Sky
description: Interact with built-in Sky & Weather system.
tags: [static-class]
---
Sky is a callable class that spawns and configures the **Ultra Dynamic Sky** and **Ultra Dynamic Weather** systems in your level.
This gives you real-time control over time of day, weather effects, sun and moon properties, cloud coverage, and atmosphere settings.
Ideal for dynamic open-world environments, the Sky system allows for fully procedural skies that change over time or in response to scripted events.

/// tip
`Sky` wraps both the `Ultra_Dynamic_Sky` and `Ultra_Dynamic_Weather` Blueprint Actors.
///

## Constructor

```lua title="Example"
local sky = Sky()
sky:SetTimeOfDay(1300)
sky:ChangeWeather(WeatherType.Cloudy)
```

| Parameter | Type | Description |
|----------|------|-------------|
| (none)   | —    | Automatically spawns or reuses UltraDynamicSky + Weather actors |

---

## Functions

### `SetTimeOfDay`
Sets the time of day in 24h format (e.g. `1330` for 1:30 PM)

- time: `number`

```lua title="Example"
sky:SetTimeOfDay(930)
```

---

### `GetTimeOfDay`
Returns the current time of day in minutes (0–2400).

- <span style="color: #facc15;">returns:</span> `number`

```lua title="Example"
local time = sky:GetTimeOfDay()
print("Current time:", time)
```

---

### `SetAnimateTimeOfDay`
Toggles automatic time progression

- enabled: `boolean`

```lua title="Example"
sky:SetAnimateTimeOfDay(true)
```

---

### `ChangeWeather`
Changes the current weather type

- newWeather: [WeatherType](../global-variables/enums.md/#weathertype)
- transitionTime: `number?`

```lua title="Example"
sky:ChangeWeather(WeatherType.Rain, 5) -- 5 second transition
```

---

### `GetWeather`
Returns the current weather type

- <span style="color: #facc15;">returns:</span> `WeatherType`

```lua title="Example"
local weather = sky:GetWeather()
```

---

### `SetSkyMode`
Changes the sky rendering mode (e.g. fully dynamic, hybrid)

- mode: `number`

```lua title="Example"
sky:SetSkyMode(1)
```

---

### `SetCloudCoverage`
Sets the density of clouds in the sky.
Accepted range: 0-10

- coverage: `number`

```lua title="Example"
sky:SetCloudCoverage(5.0)
```

---

### `SetVolumetricCloudColor`
Sets the tint color of the volumetric clouds

- color: `LinearColor`

```lua title="Example"
sky:SetVolumetricCloudColor(LinearColor(0.8, 0.85, 0.9, 1.0))
```

---

### `SetFog`
Adjusts atmospheric fog intensity

- fog: `number`

```lua title="Example"
sky:SetFog(0.2)
```

---

### `SetContrast`
Adjusts global sky contrast

- contrast: `number`

```lua title="Example"
sky:SetContrast(1.5)
```

---

### `SetOverallIntensity`
Sets overall brightness of the sky

- intensity: `number`

```lua title="Example"
sky:SetOverallIntensity(2.0)
```

---

### `SetNightBrightness`
Controls how bright the sky is at night

- brightness: `number`

```lua title="Example"
sky:SetNightBrightness(0.4)
```

---

### `EnableAurora`
Enables or disables the aurora borealis effect

- bool: `boolean`

```lua title="Example"
sky:EnableAurora(true)
```

---

### `SetMoonTexture`
Sets a texture to be used for the moon

- texture: `Texture`

```lua title="Example"
sky:SetMoonTexture(myMoonTex)
```

---

### `SetMoonTextureRotation`
Rotates the moon texture in degrees

- rotation: `number`

```lua title="Example"
sky:SetMoonTextureRotation(45)
```

---

### `SetMoonVerticalOffset`
Adjusts the moon's vertical screen offset

- offset: `number`

```lua title="Example"
sky:SetMoonVerticalOffset(0.3)
```

---

### `SetMoonScale`
Scales the size of the visible moon

- scale: `number`

```lua title="Example"
sky:SetMoonScale(2.0)
```

---

### `SetMoonPhase`
Sets the moon phase manually (0–1 where 0 = new moon, 1 = full moon)

- phase: `number`

```lua title="Example"
sky:SetMoonPhase(0.5)
```

---

### `SetMoonGlowIntensity`
Controls how bright the glow around the moon appears

- intensity: `number`

```lua title="Example"
sky:SetMoonGlowIntensity(1.2)
```

---

### `SetMoonLightIntensity`
Controls how much light the moon casts in the scene

- intensity: `number`

```lua title="Example"
sky:SetMoonLightIntensity(0.4)
```

---

### `SetMoonColor`
Sets the light color emitted by the moon

- color: `LinearColor`

```lua title="Example"
sky:SetMoonColor(LinearColor(0.9, 0.9, 1.0, 1.0))
```

---

### `SetSunRadius`
Adjusts the visible size of the sun

- radius: `number`

```lua title="Example"
sky:SetSunRadius(1.5)
```

---

### `SetSunLightIntensity`
Controls how much light the sun emits

- intensity: `number`

```lua title="Example"
sky:SetSunLightIntensity(10.0)
```
