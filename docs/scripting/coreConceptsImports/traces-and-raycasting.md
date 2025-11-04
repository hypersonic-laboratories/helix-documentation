---
title: Traces & Raycasting
tags: [scripting]
---

# Traces & Raycasting
Traces (also known as raycasts) let you detect what’s in front of the player or along any path in your game world. By casting an invisible line between two points, you can detect objects, get hit positions, and interact with the world at runtime.

---

## 🧠 What Is a Trace?
A trace checks for collisions along a straight line between two 3D points: start and end. HELIX uses the physics system to return details like:

- Which entity was hit
- The world position of the hit
- The type of surface or object

Traces are the same concept as **Raycasting**

![Traces example](/img/docs/traces-raycasting.jpg)

---

## 🔍 What Is the Player Looking At?
This example runs a trace every 1 second from the center of the screen out into the world.

```lua title="Example"
Timer.SetInterval(function()
    local w, h = HPlayer:GetViewportSize()
    local sp = UE.FVector2D(w * 0.5, h * 0.5)

    local pos, dir = UE.FVector(), UE.FVector()
    if not UE.UGameplayStatics.DeprojectScreenToWorld(HPlayer, sp, pos, dir) then return end

    local start = pos + dir * 25.0
    local stop  = start + dir * 5000.0
    local hit   = Trace:LineSingle(start, stop, UE.ETraceTypeQuery.Visibility, UE.EDrawDebugTrace.None)

    Debug.DrawLine(start, stop, UE.FLinearColor.Yellow, 1.2, 3.0)

    if hit then
        local actor = (hit.GetActor and hit:GetActor()) or hit.Actor
        local p = hit.ImpactPoint or hit.Location or start
        Debug.DrawPoint(p, UE.FLinearColor.Green, 1.2, 12.0)
        print("Trace HIT:", actor and actor:GetName() or "nil")
    end
end, 1000)
```

---

## ⚙️ Collision Filtering
Traces use a collision channel to decide what responds. For general “what’s under the crosshair,” UE.ETraceTypeQuery.Visibility is a good default.

```lua title="Example"
local hit = Trace:LineSingle(start, stop, UE.ETraceTypeQuery.Visibility, UE.EDrawDebugTrace.None)
```

---

## 🧪 Visual Debug
You can draw your own helpers while tuning traces:

```lua title="Example"
-- Point at the hit location
Debug.DrawPoint(position, UE.FLinearColor.Green, 2.0, 12.0)

-- Custom line
Debug.DrawLine(start_position, end_position, UE.FLinearColor.Yellow, 2.0, 2.0)
```

---

## ✅ Summary

- Cast a line between two points to detect objects and hits.
- Use Trace:LineSingle(start, stop, UE.ETraceTypeQuery.Visibility, ...) for simple “look” traces.
- Draw debug lines/points to visualize behavior during development.
- Great for aiming, line-of-sight, interactions, and world queries.
