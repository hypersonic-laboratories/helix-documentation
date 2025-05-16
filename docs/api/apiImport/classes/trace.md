---
title: Trace
description: Trace provides raycasts and shape sweeps for hit detection and visibility
tags: [static-class]
---
<HeaderDeclaration type="StaticClass" name="Trace" />
Trace is a static utility class used for performing line traces (raycasts) and shape-based sweeps in the world.
These functions are commonly used for detecting collisions, line-of-sight checks, target selection, and environmental interactions.
Trace supports multiple geometry types including lines, spheres, capsules, and boxes — with both single-hit and multi-hit versions

/// tip
`Trace` is not instantiable and should be used directly like `Trace:LineSingle(...)`
///

## Functions
<StaticFunctionsDeclaration type="StaticClass" name="Trace" />

### `LineSingle`
Performs a raycast between two points and returns the first blocking hit (if any).
```lua
local hit = Trace:LineSingle(start, endPos)
```
---

### `LineMulti`
Performs a raycast between two points and returns all hit results (blocking and overlapping).
```lua
local results = Trace:LineMulti(start, endPos)
```
---

### `SphereSingle`
Casts a sphere from start to end and returns the first blocking hit.
```lua
local hit = Trace:SphereSingle(start, endPos, 32)
```
---

### `SphereMulti`
Casts a sphere from start to end and returns all hit results.
```lua
local results = Trace:SphereMulti(start, endPos, 32)
```
---

### `BoxSingle`
Performs a box sweep and returns the first hit.
```lua
local hit = Trace:BoxSingle(start, endPos, Vector(10, 10, 10), Rotator(0, 0, 0))
```
---

### `BoxMulti`
Performs a box sweep and returns all hits.
```lua
local results = Trace:BoxMulti(start, endPos, Vector(10, 10, 10), Rotator(0, 0, 0))
```
---

### `CapsuleSingle`
Sweeps a capsule shape and returns the first hit.
```lua
local hit = Trace:CapsuleSingle(start, endPos, 20, 50)
```
---

### `CapsuleMulti`
Sweeps a capsule shape and returns all hits.
```lua
local results = Trace:CapsuleMulti(start, endPos, 20, 50)
```