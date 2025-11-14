---
title: Trace
description: Trace provides raycasts and shape sweeps for hit detection and visibility
tags: [static-class]
---
Trace is a static utility class used for performing line traces (raycasts) and shape-based sweeps in the world.
These functions are commonly used for detecting collisions, line-of-sight checks, target selection, and environmental interactions.
Trace supports multiple geometry types including lines, spheres, capsules, and boxes — with both single-hit and multi-hit versions

/// tip
`Trace` is not instantiable and should be used directly like `Trace:LineSingle(...)`
///

## Functions

### `LineSingle`
Performs a raycast between two points and returns the first blocking hit (if any)

- start: `Vector`
- endPos: `Vector`
- <mark style="color:yellow;">returns</mark>: `FHitResult | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local hit = Trace:LineSingle(start, endPos)
local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(hit)
```

---

### `LineMulti`
Performs a raycast between two points and returns all hit results (blocking and overlapping)

- start: `Vector`
- endPos: `Vector`
- <mark style="color:yellow;">returns</mark>: `TArray | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local results = Trace:LineMulti(start, endPos)

for k, v in pairs(results) do
    local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(v)
end
```

---

### `SphereSingle`
Casts a sphere from start to end and returns the first blocking hit

- start: `Vector`
- endPos: `Vector`
- radius: `number`
- <mark style="color:yellow;">returns</mark>: `FHitResult | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local hit = Trace:SphereSingle(start, endPos, 32)
local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(hit)
```

---

### `SphereMulti`
Casts a sphere from start to end and returns all hit results

- start: `Vector`
- endPos: `Vector`
- radius: `number`
- <mark style="color:yellow;">returns</mark>: `FHitResult | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local results = Trace:SphereMulti(start, endPos, 32)

for k, v in pairs(results) do
    local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(v)
end
```

---

### `BoxSingle`
Performs a box sweep and returns the first hit

- start: `Vector`
- endPos: `Vector`
- extent: `Vector`
- orientation: `Rotator`
- <mark style="color:yellow;">returns</mark>: `FHitResult | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local hit = Trace:BoxSingle(start, endPos, Vector(10, 10, 10), Rotator(0, 0, 0))
local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(hit)
```

---

### `BoxMulti`
Performs a box sweep and returns all hits

- start: `Vector`
- endPos: `Vector`
- extent: `Vector`
- orientation: `Rotator`
- <mark style="color:yellow;">returns</mark>: `TArray | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local results = Trace:BoxMulti(start, endPos, Vector(10, 10, 10), Rotator(0, 0, 0))

for k, v in pairs(results) do
    local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(v)
end
```

---

### `CapsuleSingle`
Sweeps a capsule shape and returns the first hit

- start: `Vector`
- endPos: `Vector`
- radius: `number`
- height: `number`
- <mark style="color:yellow;">returns</mark>: `FHitResult | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local hit = Trace:CapsuleSingle(start, endPos, 20, 50)
local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(hit)
```

---

### `CapsuleMulti`
Sweeps a capsule shape and returns all hits

- start: `Vector`
- endPos: `Vector`
- radius: `number`
- height: `number`
- <mark style="color:yellow;">returns</mark>: `TArray | nil`

```lua title="Example"
local start = Vector(0, 0, 0)
local endPos = Vector(0, 0, 0)
local results = Trace:CapsuleMulti(start, endPos, 20, 50)

for k, v in pairs(results) do
    local _, _, _, distance, location, _, _, _, _, hitActor, hitComp = UE.UGameplayStatics.BreakHitResult(v)
end
```