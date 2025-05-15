---
title: Structs
description: HELIX Structs
tags: [scripting]
---
<HeaderDeclaration type="Struct" name="Structs" />

## Quat
<QuatDeclaration type="Struct" name="Quat" />
Represents a quaternion used for smooth rotation calculations and interpolation without gimbal lock. Commonly used for 3D orientation

```lua title="Example"
local rotation = Quat(0.0, 0.0, 0.7071, 0.7071) -- 90° rotation around Z-axis
```

---

## LinearColor
<LinearColorDeclaration type="Struct" name="LinearColor" />
Represents a high-precision color in linear color space. Useful for HDR lighting and physically based rendering

```lua title="Example"
local sky_blue = LinearColor(0.4, 0.6, 1.0, 1.0) -- RGBA values in linear space
```

---

## Vector
<VectorDeclaration type="Struct" name="Vector" />
Represents a 3D point or direction with X, Y, Z components

```lua title="Example"
local location = Vector(1000.0, 200.0, 300.0) -- Position in world space
```

---

## Vector2D
<Vector2DDeclaration type="Struct" name="Vector2D" />
Represents a 2D vector with X and Y components. Often used for UI layout, screen positions, or texture coordinates

```lua title="Example"
local screen_pos = Vector2D(1920, 1080) -- Screen resolution
```

---

## Rotator
<RotatorDeclaration type="Struct" name="Rotator" />
Represents a set of Euler angles in degrees for Pitch (X), Yaw (Y), and Roll (Z) rotation

```lua title="Example"
local facing_north = Rotator(0, 0, 0) -- No rotation
local tilt_down = Rotator(-30, 0, 0) -- Pitch down by 30 degrees
```

---

## Transform
<TransformDeclaration type="Struct" name="Transform" />
Represents a combination of translation (Vector), rotation (Quat or Rotator), and scale (Vector). Used to position objects in 3D space

```lua title="Example"
local pos = Vector(100, 200, 300)
local rot = Rotator(0, 90, 0)
local scale = Vector(1, 1, 1)
local transform = Transform(pos, rot, scale)
```

---

## Color
<ColorDeclaration type="Struct" name="Color" />
Represents a color using 8-bit per channel sRGB values (0–255), suitable for most UI and non-HDR use cases

```lua title="Example"
local red = Color(255, 0, 0, 255) -- Fully opaque red
```

| **Value** | **Name** |
| :--- | :--- |
| `Color(1, 1, 1)` | **`Color.WHITE`** |
| `Color(0, 0, 0)` | **`Color.BLACK`** |
| `Color(0, 0, 0, 0)` | **`Color.TRANSPARENT`** |
| `Color(1, 0, 0)` | **`Color.RED`** |
| `Color(0, 1, 0)` | **`Color.GREEN`** |
| `Color(0, 0, 1)` | **`Color.BLUE`** |
| `Color(1, 1, 0)` | **`Color.YELLOW`** |
| `Color(0, 1, 1)` | **`Color.CYAN`** |
| `Color(1, 0, 1)` | **`Color.MAGENTA`** |
| `Color(1, 0.5, 0)` | **`Color.ORANGE`** |
| `Color(0.5, 1, 1)` | **`Color.CHARTREUSE`** |
| `Color(0, 1, 0.5)` | **`Color.AQUAMARINE`** |
| `Color(0, 0.5, 1)` | **`Color.AZURE`** |
| `Color(0.5, 0, 1)` | **`Color.VIOLET`** |
| `Color(1, 0, 0.5)` | **`Color.ROSE`** |