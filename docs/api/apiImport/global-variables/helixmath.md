---
title: HELIXMath
description: A table containing useful and aux Math functions
tags: [utility-class]
slug: helixmath
---
<HeaderDeclaration type="UtilityClass" name="HELIXMath" is_static />

## Overview

`HELIXMath` is a static utility class that wraps common math functions from Unreal Engine's `UKismetMathLibrary`. It includes helpers for clamping, interpolation, vector math, angle conversions, transforms, and more. This makes math-heavy scripting simpler and consistent across Lua and Blueprint.

---

## Basic Math

### `HELIXMath.Clamp(value, min, max)`
Clamps a number between a minimum and maximum value

```lua title="Example"
HELIXMath.Clamp(190, 0, 180) -- Returns 180
```

---
### `HELIXMath.Round(value)`
Rounds a number to the nearest whole integer

```lua title="Example"
HELIXMath.Round(2.7) -- Returns 3
```

---
### `HELIXMath.Sin(radians)`
Returns the sine of an angle in radians

```lua title="Example"
HELIXMath.Sin(math.pi / 2) -- Returns 1
```

---
### `HELIXMath.Cos(radians)`
Returns the cosine of an angle in radians

```lua title="Example"
HELIXMath.Cos(0) -- Returns 1
```

---
### `HELIXMath.Tan(radians)`
Returns the tangent of an angle in radians

```lua title="Example"
HELIXMath.Tan(math.pi / 4) -- Returns 1
```

---
### `HELIXMath.Sqrt(value)`
Returns the square root of a number

```lua title="Example"
HELIXMath.Sqrt(25) -- Returns 5
```

---
### `HELIXMath.Square(value)`
Returns the square (value * value) of a number

```lua title="Example"
HELIXMath.Square(4) -- Returns 16
```

---
### `HELIXMath.Sign(value)`
Returns -1 for negative values, 1 for positive values, and 0 for zero

```lua title="Example"
HELIXMath.Sign(-10) -- Returns -1
```

---
### `HELIXMath.SafeDivide(a, b)`
Safely divides two numbers. If `b` is 0, returns 0 instead of an error

```lua title="Example"
HELIXMath.SafeDivide(10, 0) -- Returns 0
```

---

## Angle Utilities

### `HELIXMath.ClampAxis(angle)`
Clamps an angle to the range [0, 360). Useful for wrapping yaw angles
```lua title="Example"
HELIXMath.ClampAxis(370) -- Returns 10
```

---

### `HELIXMath.NormalizeAxis(angle)`
Normalizes an angle to the range [-180, 180). Useful for delta comparisons
```lua title="Example"
HELIXMath.NormalizeAxis(190) -- Returns -170
```

---
### `HELIXMath.DegreesToRadians(degrees)`
Converts degrees to radians
```lua title="Example"
HELIXMath.DegreesToRadians(180) -- Returns 3.14159
```

---
### `HELIXMath.RadiansToDegrees(radians)`
Converts radians to degrees
```lua title="Example"
HELIXMath.RadiansToDegrees(math.pi) -- Returns 180
```

---

## Interpolation & Lerp

### `HELIXMath.FInterpTo(current, target, deltaTime, interpSpeed)`
Smoothly interpolates between two float values using exponential smoothing
```lua title="Example"
HELIXMath.FInterpTo(0, 100, 0.016, 5) -- Returns something like 1.25
```

---

### `HELIXMath.RInterpTo(current, target, deltaTime, interpSpeed)`
Interpolates between two rotators over time
```lua title="Example"
HELIXMath.RInterpTo(Rotator(0,0,0), Rotator(0,90,0), 0.016, 5)
```

---
### `HELIXMath.RInterpConstantTo(current, target, deltaTime, interpSpeed)`
Interpolates between two rotators at a constant rate
```lua title="Example"
HELIXMath.RInterpConstantTo(Rotator(0,0,0), Rotator(0,90,0), 0.016, 45)
```

---

### `HELIXMath.VInterpTo(current, target, deltaTime, interpSpeed)`
Smoothly interpolates between two vectors
```lua title="Example"
HELIXMath.VInterpTo(Vector(0,0,0), Vector(100,0,0), 0.016, 5)
```

---

### `HELIXMath.VInterpConstantTo(current, target, deltaTime, interpSpeed)`
Interpolates between two vectors at a constant rate
```lua title="Example"
HELIXMath.VInterpConstantTo(Vector(0,0,0), Vector(100,0,0), 0.016, 200)
```

---

### `HELIXMath.RLerp(A, B, alpha, shortestPath)`
Performs linear interpolation between two rotators
```lua title="Example"
HELIXMath.RLerp(Rotator(0,0,0), Rotator(0,90,0), 0.5, true)
```

---

### `HELIXMath.VLerp(A, B, alpha)`
Linearly interpolates between two vectors
```lua title="Example"
HELIXMath.VLerp(Vector(0,0,0), Vector(100,0,0), 0.5) -- Returns Vector(50,0,0)
```

---

### `HELIXMath.TLerp(A, B, alpha)`
Linearly interpolates between two transforms
```lua title="Example"
HELIXMath.TLerp(TransformA, TransformB, 0.5)
```

---

## Vector Math

### `HELIXMath.VectorLength(vec)`
Returns the length (magnitude) of a vector
```lua title="Example"
HELIXMath.VectorLength(Vector(3, 4, 0)) -- Returns 5
```

---

### `HELIXMath.VectorDistance(vecA, vecB)`
Returns the distance between two vectors
```lua title="Example"
HELIXMath.VectorDistance(Vector(0, 0, 0), Vector(0, 0, 10)) -- Returns 10
```

---

### `HELIXMath.VectorDistance2D(vecA, vecB)`
Returns the distance between two vectors on the XY plane
```lua title="Example"
HELIXMath.VectorDistance2D(Vector(0, 0, 0), Vector(3, 4, 5)) -- Returns 5
```

---

### `HELIXMath.VectorNormalize(vec)`
Returns the normalized (unit) vector in the same direction
```lua title="Example"
HELIXMath.VectorNormalize(Vector(3, 0, 0)) -- Returns Vector(1, 0, 0)
```

---

### `HELIXMath.VectorLerp(vecA, vecB, alpha)`
Performs linear interpolation between two vectors
```lua title="Example"
HELIXMath.VectorLerp(Vector(0, 0, 0), Vector(10, 0, 0), 0.5) -- Returns Vector(5, 0, 0)
```

---

### `HELIXMath.VectorClampSize(vec, maxSize)`
Limits a vector's length to a maximum size, preserving direction
```lua title="Example"
HELIXMath.VectorClampSize(Vector(100, 0, 0), 50) -- Returns Vector(50, 0, 0)
```

---

### `HELIXMath.ProjectVectorOnToVector(vec, target)`
Projects one vector onto another
```lua title="Example"
HELIXMath.ProjectVectorOnToVector(Vector(10, 0, 0), Vector(1, 1, 0))
```

---

### `HELIXMath.ProjectVectorOnToPlane(vec, planeNormal)`
Projects a vector onto a plane defined by a normal
```lua title="Example"
HELIXMath.ProjectVectorOnToPlane(Vector(1, 1, 1), Vector(0, 0, 1))
```

---

### `HELIXMath.MirrorVectorByNormal(vec, normal)`
Reflects a vector off a plane defined by a normal
```lua title="Example"
HELIXMath.MirrorVectorByNormal(Vector(1, -1, 0), Vector(0, 1, 0)) -- Returns Vector(1, 1, 0)
```

---

## Rotator Utilities

### `HELIXMath.RotatorFromAxisAndAngle(axis, angle)`
Creates a rotator from a direction vector and angle in degrees
```lua title="Example"
HELIXMath.RotatorFromAxisAndAngle(Vector(0, 0, 1), 90)
```

---

### `HELIXMath.NormalizeDeltaRotator(rotatorA, rotatorB)`
Returns the normalized difference between two rotators
```lua title="Example"
HELIXMath.NormalizeDeltaRotator(Rotator(0, 350, 0), Rotator(0, 10, 0)) -- Returns Rotator(0, 20, 0)
```

---

## Transform Helpers

### `HELIXMath.TransformLocation(transform, location)`
Transforms a local position to world space using a given transform
```lua title="Example"
HELIXMath.TransformLocation(actor:GetTransform(), Vector(100, 0, 0))
```

---

### `HELIXMath.TransformRotation(transform, rotator)`
Applies a transform’s rotation to a local rotator
```lua title="Example"
HELIXMath.TransformRotation(actor:GetTransform(), Rotator(0, 90, 0))
```

---

### `HELIXMath.TransformDirection(transform, direction)`
Transforms a local direction vector into world space using the transform's rotation
```lua title="Example"
HELIXMath.TransformDirection(actor:GetTransform(), Vector(1, 0, 0))
```

---

## Range Utilities

### `HELIXMath.NormalizeToRange(value, rangeMin, rangeMax)`
Normalizes a value between 0 and 1 based on a specified range
```lua title="Example"
HELIXMath.NormalizeToRange(75, 50, 100) -- Returns 0.5
```

---

### `HELIXMath.Wrap(value, min, max)`
Wraps a value to stay within a specified range, looping around when necessary
```lua title="Example"
HELIXMath.Wrap(370, 0, 360) -- Returns 10
```