---
title: Enums
description: HELIX Enums.
tags: [scripting]
---
<HeaderDeclaration type="Enums" name="Enums" />

## LightType
<EnumDeclaration type="Enum" name="LightType" />
Specifies which type of light actor to spawn when using the `Light(...)` API

| **Name**          | **Description**                             |
| ----------------- | ------------------------------------------- |
| `LightType.Point` | A point light that emits in all directions |
| `LightType.Spot`  | A spotlight with a focused cone shape.      |
| `LightType.Rect`  | A rectangular area light (like a panel).    |

---

## TraceMode
<EnumDeclaration type="Enum" name="TraceMode" />
Flags that customize trace behavior in raycasting and overlap queries

| **Name**                           | **Description**                              |
| ---------------------------------- | -------------------------------------------- |
| `TraceMode.DrawDebug`              | Visually draws the trace line.               |
| `TraceMode.TraceComplex`           | Traces against complex (per-poly) collision |
| `TraceMode.ReturnPhysicalMaterial` | Includes surface material info in results.   |
| `TraceMode.ReturnEntity`           | Includes any hit entity reference.           |
| `TraceMode.ReturnNames`            | Returns Actor, Component, and Bone names.    |
| `TraceMode.ReturnUV`               | Returns UV coordinate of the hit point.      |

---

## CollisionChannel
<EnumDeclaration type="Enum" name="CollisionChannel" />
Channels used to filter collision and trace checks

| **Name**                        | **Description**                                 |
| ------------------------------- | ----------------------------------------------- |
| `CollisionChannel.WorldStatic`  | Static map geometry (e.g., buildings, terrain) |
| `CollisionChannel.WorldDynamic` | Movable objects and props.                      |
| `CollisionChannel.Pawn`         | Character capsule collisions.                   |
| `CollisionChannel.PhysicsBody`  | Physics-enabled bodies and pickable items.      |
| `CollisionChannel.Mesh`         | Character skeletal mesh.                        |
| `CollisionChannel.Water`        | Water bodies or volumes.                        |
| `CollisionChannel.Foliage`      | Grass, bushes, and other foliage.               |
| `CollisionChannel.Vehicle`      | Vehicle hitboxes and physics.                   |

---

## AttachmentRule
<EnumDeclaration type="Enum" name="AttachmentRule" />
Rules that define how objects attach and maintain transforms

| **Name**                      | **Description**                          |
| ----------------------------- | ---------------------------------------- |
| `AttachmentRule.KeepRelative` | Keeps relative transform when attaching |
| `AttachmentRule.KeepWorld`    | Maintains world transform.               |
| `AttachmentRule.SnapToTarget` | Snaps directly to target's transform.    |

---

## DetachmentRule
<EnumDeclaration type="Enum" name="DetachmentRule" />
Rules that define how objects detach and maintain transforms

| **Name**                      | **Description**                          |
| ----------------------------- | ---------------------------------------- |
| `DetachmentRule.KeepRelative` | Keeps relative transform when detaching |
| `DetachmentRule.KeepWorld`    | Maintains world transform.               |

---

## ConstraintMotion
<EnumDeclaration type="Enum" name="ConstraintMotion" />
Used in physics constraints to restrict axis movement

| **Name**                   | **Description**                |
| -------------------------- | ------------------------------ |
| `ConstraintMotion.Free`    | Axis is fully free.            |
| `ConstraintMotion.Limited` | Axis is restricted to a range |
| `ConstraintMotion.Locked`  | Axis is completely locked.     |

---

## WeatherType
<EnumDeclaration type="Enum" name="WeatherType" />
Predefined weather presets compatible with Ultra Dynamic Sky. Use with `SetWeather(...)` to apply different weather conditions

| **Name**                       | **Description**                        |
| ------------------------------ | -------------------------------------- |
| `WeatherType.ClearSkies`       | No clouds or weather effects.          |
| `WeatherType.PartlyCloudy`     | Scattered clouds with sunlight.        |
| `WeatherType.Cloudy`           | Overcast sky, no rain.                 |
| `WeatherType.Overcast`         | Dense cloud cover, darker lighting.    |
| `WeatherType.Foggy`            | Low visibility due to fog.             |
| `WeatherType.RainLight`        | Light rain effect.                     |
| `WeatherType.Rain`             | Steady moderate rainfall.              |
| `WeatherType.RainThunderstorm` | Heavy rain with thunder and lightning |
| `WeatherType.SnowLight`        | Light snowfall.                        |
| `WeatherType.Snow`             | Normal snow accumulation.              |
| `WeatherType.SnowBlizzard`     | Strong snowstorm with wind.            |
| `WeatherType.SandDustCalm`     | Light sand/dust in the air.            |
| `WeatherType.SandDustStorm`    | Heavy dust storm conditions.           |

---

## NotificationType
<EnumDeclaration type="Enum" name="NotificationType" />
Controls where on the screen a UI notification appears

| **Name**                           | **Description**       |
| ---------------------------------- | --------------------- |
| `NotificationType.Success`         | Green success notification with a tick |
| `NotificationType.Error`           | Red error notification with a cross    |
| `NotificationType.Info`            | Blue information notification with an info symbol |
| `NotificationType.Update`          | Turqoise download update notification |

---

## FontType
<EnumDeclaration type="Enum" name="FontType" />
Built-in engine fonts available for use with `TextBlock:SetFont(...)` or other UI elements

| **Name**                       | **Description**                                               |
| ------------------------------ | ------------------------------------------------------------- |
| `FontType.Roboto`              | Standard sans-serif font.                                     |
| `FontType.RobotoMono`          | Monospaced version of Roboto, good for code and numeric text |
| `FontType.RobotoDistanceField` | Distance field version for scalable text.                     |

---

## TriggerType
<EnumDeclaration type="Enum" name="TriggerType" />
Shape types used when creating trigger volumes (e.g., proximity or overlap detectors)

| **Name**              | **Description**                               |
| --------------------- | --------------------------------------------- |
| `TriggerType.Sphere`  | Spherical trigger volume.                     |
| `TriggerType.Box`     | Box-shaped trigger volume.                    |
| `TriggerType.Capsule` | Capsule-shaped trigger, ideal for characters |

---

## AnimationSlotType
<EnumDeclaration type="Enum" name="AnimationSlotType" />
Specifies which animation slot group to play animations in

| **Name** | **Description** |
|----------|------------------|
| `AnimationSlotType.FullBody` | Plays in the full-body slot, overriding all movement |
| `AnimationSlotType.UpperBody` | Plays only in the upper-body slot, allowing legs to animate independently |

---

## BlendMode
<EnumDeclaration type="Enum" name="BlendMode" />
Specifies how a material blends with the background

| **Name** | **Description** |
|----------|------------------|
| `BlendMode.Opaque` | No transparency. Fully solid |
| `BlendMode.Masked` | Hard cutoff using an opacity mask |
| `BlendMode.Translucent` | Smooth transparency |
| `BlendMode.Additive` | Adds light values to background — good for effects |
| `BlendMode.Modulate` | Multiplies source and dest — rarely used |
| `BlendMode.MaskedDistanceField` | Used with distance field materials for cutouts |
| `BlendMode.MaskedDistanceFieldShadowed` | Same as above but allows shadows |
| `BlendMode.TranslucentDistanceField` | Translucent with distance field |
| `BlendMode.TranslucentDistanceFieldShadowed` | Translucent + distance field + shadows |
| `BlendMode.AlphaComposite` | Composites using alpha channels |
| `BlendMode.AlphaHoldout` | Uses alpha to mask out content |
| `BlendMode.AlphaBlend` | Blends two materials using alpha |
| `BlendMode.TranslucentAlphaOnly` | Writes only alpha |
| `BlendMode.TranslucentAlphaOnlyWriteAlpha` | Writes only alpha, not color |

---

## CCDMode
<EnumDeclaration type="Enum" name="CCDMode" />
Controls Continuous Collision Detection for moving objects

| **Name** | **Description** |
|----------|------------------|
| `CCDMode.Auto` | Automatically enables CCD when needed |
| `CCDMode.Disabled` | Disables CCD entirely |
| `CCDMode.Enabled` | Forces CCD for this object |

---

## CollisionType
<EnumDeclaration type="Enum" name="CollisionType" />
Defines general collision behavior when spawning or simulating actors

| **Name** | **Description** |
|----------|------------------|
| `CollisionType.Normal` | Standard collision based on channel settings |
| `CollisionType.StaticOnly` | Only collides with static objects |
| `CollisionType.NoCollision` | Ignores all collisions |
| `CollisionType.IgnoreOnlyPawn` | Ignores player and NPCs, but collides with everything else |
| `CollisionType.Auto` | Chooses the best setting automatically |

---

## AttenuationFunction
<EnumDeclaration type="Enum" name="AttenuationFunction" />
Defines how audio or light falloff behaves over distance

| **Name** | **Description** |
|----------|------------------|
| `AttenuationFunction.Linear` | Linear drop-off |
| `AttenuationFunction.Logarithmic` | Logarithmic curve, most natural |
| `AttenuationFunction.Inverse` | Slower drop-off near the source |
| `AttenuationFunction.LogReverse` | Reverse-log for unusual effects |
| `AttenuationFunction.NaturalSound` | Optimized for spatialized audio |

---

## AttenuationShape
<EnumDeclaration type="Enum" name="AttenuationShape" />
Defines the shape of a sound or light attenuation volume

| **Name** | **Description** |
|----------|------------------|
| `AttenuationShape.Sphere` | Omnidirectional sphere |
| `AttenuationShape.Capsule` | Capsule shape, elongated along one axis |
| `AttenuationShape.Box` | Box-shaped volume |
| `AttenuationShape.Cone` | Directional cone shape |

---

## DoorType
<EnumDeclaration type="Enum" name="DoorType" />
Defines the shape of a sound or light attenuation volume

| **Name** | **Description** |
|----------|------------------|
| `DoorType.Classic` | Standard  |
| `DoorType.Swinging` | Capsule shape, elongated along one axis |
| `DoorType.Sliding` | Sliding door, like store doors |
| `DoorType.Garage` | Garage-like door, based on the sliding door |

---

## Capture Sources
Specifies what render data the scene capture should output to its render target

| Capture Source                              | Description                                    |
|---------------------------------------------|------------------------------------------------|
| `SceneCaptureSource.FinalColorLDR`  | Final color with tone mapping (most common)    |
| `SceneCaptureSource.FinalColorHDR`  | Final color without tone mapping               |
| `SceneCaptureSource.SceneColorHDR`  | Scene color before post-processing             |
| `SceneCaptureSource.SceneDepth`     | Scene depth buffer                             |
| `SceneCaptureSource.DeviceDepth`    | Device depth buffer                            |
| `SceneCaptureSource.Normal`         | World space normals                            |
| `SceneCaptureSource.BaseColor`      | Base color only                                |

---

## XrayState
Specifies the current Xray interaction state for a target actor

| Xray State                              | Description                                    |
|---------------------------------------------|------------------------------------------------|
| `XrayState.None`  | No Xray interaction active    |
| `XrayState.BeginFocus`  | Player has started focusing on the target               |
| `XrayState.EndFocus`  | Player has stopped focusing on the target             |
| `XrayState.Reveal`     | Player has released Xray key whilst target is in focus |
| `XrayState.Cancel`    | Xray interaction has been cancelled            |
