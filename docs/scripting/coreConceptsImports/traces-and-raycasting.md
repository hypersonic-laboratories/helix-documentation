---
title: Traces & Raycasting
tags: [scripting]
---

# Traces & Raycasting
Traces (also known as **Raycasts**) are a powerful way to detect what’s in front of the player or along any path in your game world.
By casting an invisible line from one point to another, you can detect objects, get hit positions, and interact with the world dynamically at runtime.

---

## 🧠 What Is a Trace?
A **trace** checks for collisions along a straight line between two 3D points: a **start** and **end**.
HELIX uses the physics system to return detailed info if something was hit — such as:

- Which entity was hit
- The world position of the hit
- The type of surface or object

Traces are the same concept as **Raycasting** in other engines like Unity or Unreal.

![Traces example](/img/docs/traces-raycasting.jpg)

---

## 🔍 What Is the Player Looking At?
This example runs a trace every 100ms from the center of the screen out into the world.

```lua title="Example"
-- Run every 100ms
Timer.SetInterval(function()

    -- Get the center of the player's screen
    local screen_center = Viewport.GetViewportSize() / 2

    -- Convert screen center to a 3D world position + direction
    local deprojected = Viewport.DeprojectScreenToWorld(screen_center)

    -- Trace 5000 units outward in the direction the player is looking
    local start = deprojected.Position
    local stop = deprojected.Position + deprojected.Direction * 5000

    -- Specify what types of objects we want to detect
    local collision = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody

    -- Define the behavior of the trace
    local mode = TraceMode.ReturnEntity | TraceMode.DrawDebug

    -- Perform the trace
    local result = Trace.LineSingle(start, stop, collision, mode)

    -- If it hits something
    if result.Success then

        local color = Color(1, 0, 0) -- Red if no entity

        if result.Entity then
            color = Color(0, 1, 0) -- Green if it hit an entity

            -- You can check what kind of actor was hit:
            -- if result.Entity:GetType() == "Character" then ...
        end

        -- Draw a debug point at the hit location
        Debug.DrawPoint(result.Location, color, 5, 10)
    end
end, 100)
```

---

## ⚙️ Collision Filtering
Traces can be filtered by **Collision Channels**, which define what types of objects the trace can interact with. This allows you to ignore irrelevant objects or target only specific types like characters, props, or world geometry.
You can **combine multiple channels** using the `|` (bitwise OR) operator:

```lua title="Example"
local collision = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody
```

### Common Collision Channels

- `WorldStatic` – Static objects like walls or terrain
- `PhysicsBody` – Movable physics-enabled props
- `Pawn` – Characters, NPCs, or players

---

## 🧪 Debugging Tools
Use trace debug options to **visualize raycasts** in the game world. This helps you confirm direction, distance, and what was hit.

### TraceMode Flags

- `TraceMode.DrawDebug` – Draws a colored line showing the trace
- `TraceMode.ReturnEntity` – Includes entity hit results (not just position)

You can also manually draw visuals with the `Debug` library:

```lua title="Example"
-- Draw a point where the trace hit
Debug.DrawPoint(position, color, duration, size)

-- Draw a line for custom traces
Debug.DrawLine(start_position, end_position, color, duration, thickness)
```

These are especially useful when tuning aiming systems, line-of-sight checks, or precise interactions.

---

## ✅ Summary

- **Traces** let you detect objects between two 3D points (like a laser)
- Use `Trace.LineSingle()` to raycast between a start and end position
- Use `CollisionChannel` to decide what kind of objects to detect
- Add `TraceMode` flags to control output and debugging behavior
- Use `Debug` tools to draw lines and points for visual feedback
- Great for aiming, detecting hits, line-of-sight, and interaction systems

Traces are a core part of building responsive gameplay logic in HELIX. Master them early—they’re used everywhere!