---
title: Configuring the map at runtime
description: Add markers and change map settings from Lua during play
---

# Configuring the map at runtime

You can add markers and change most map settings while the game runs, from Lua. Every call here maps to a function in the [`HMap` API reference](../../api/apiImport/classes/hmap.md) — this page covers *what* you can change; the reference has the exact signatures and options.

One rule shapes everything below: **a baked map exposes fewer runtime knobs than a live one.** Anything that changes the captured image itself — projection, capture altitude, the area covered, tile geometry — is fixed at bake time on a pre-baked map. On a live Scene Capture map those same settings re-render on the fly. Markers and pure display options work the same on both.

## Configurations for both types of map

These work whether the surface is live or baked.

### Markers

Add a marker that follows an actor (it's removed automatically when the actor is destroyed):

```lua title="Marker on an actor"
HMap.AddMarker(QuestNPC, { Title = 'Bob', Description = 'Has a quest for you' })

HMap.RemoveMarker(QuestNPC)   -- to remove it early
```

Add a marker at a fixed world location — it returns a handle you keep for removal:

```lua title="Marker at a location"
local Handle = HMap.AddMarkerAt(UE.FVector(12000, -3400, 0), { Title = 'Drop-off' })

HMap.RemoveMarkerAt(Handle)
```

For every marker option (custom icon texture, colour, size), see the [`HMap` reference](../../api/apiImport/classes/hmap.md).

### Shared display options

These don't depend on how the map is rendered, so they apply to live and baked surfaces alike:

- Minimap zoom, rotate-with-player, and whether orientation follows the camera or the pawn.
- Icon size on either surface.
- Full-screen map behaviour — open-on-player, zoom and pan animation speed.

Each is a `HMap.Set...` call listed in the [reference](../../api/apiImport/classes/hmap.md).

```lua title="Zoom the minimap out while driving"
HEvent('HEvent:EnteredVehicle', function() HMap.SetMinimapZoom(0.2) end)
HEvent('HEvent:ExitedVehicle',  function() HMap.SetMinimapZoom(0.5) end)
```

## Runtime-only map settings

These only take effect on a **live Scene Capture** surface. On a baked map they would require re-running the bake (an editor step), so they do nothing at runtime:

- Projection mode and capture altitude.
- The captured area — map centre and extent.
- Tile geometry — tile world size and resolution.

Use them to reshape a live map on the fly. For a shipped, baked map, set these before baking instead. The [`HMap` reference](../../api/apiImport/classes/hmap.md) marks which calls apply live versus need a re-bake.
