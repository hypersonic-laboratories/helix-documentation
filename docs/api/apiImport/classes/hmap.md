---
title: HMap
description: Runtime control of the HelixMap minimap and full-screen map from Lua
tags: [helix-map]
---
<HeaderDeclaration type="Class" name="HMap" />
`HMap` is the Lua wrapper around the HelixMap world subsystem. It exposes runtime setters for the minimap and full-screen map, plus marker add/remove helpers.

Every function targets the active client world automatically — no `WorldContextObject` argument is needed.

## Availability

`HMap` is available as a Lua global from your scripts. Calls are safe once the minimap widget has constructed (first HUD frame).

Setters silently no-op if no map source is active. Source-specific setters (e.g. `SetMinimapZoom` only applies to tiled sources) are silently ignored by incompatible backends.

## Side-effect types

Each setter belongs to one type:

- **Hot** — applied instantly with no source restart. Safe to call every frame.
- **Re-init** — the active source is destroyed and recreated. There's a brief visual hitch.
- **Re-bake** — on baked sources, the bake metadata changes and the source re-bakes.
- **Read-once** — read at widget activation; mutating after has no effect until the next open.

## Minimap Settings

### `SetMinimapAltitude`
Set the minimap capture altitude in centimetres. Type: **Hot**.

```lua title="Example"
HMap.SetMinimapAltitude(3000)
```

---

### `SetMinimapProjectionMode`
Set the minimap projection mode. `0` = Orthographic (flat top-down), `1` = Perspective (3D high-altitude look). Type: **Re-init**.

```lua title="Example"
HMap.SetMinimapProjectionMode(0)
```

---

### `SetMinimapRotateWithPlayer`
Toggle minimap player-up rotation (the map image rotates so the player always faces up). Type: **Hot**.

```lua title="Example"
HMap.SetMinimapRotateWithPlayer(true)
```

---

### `SetMinimapUseCameraYaw`
Choose the yaw source for minimap rotation and the local-player arrow. `true` = camera yaw, `false` = pawn actor yaw. Type: **Hot**.

```lua title="Example"
HMap.SetMinimapUseCameraYaw(true)
```

---

### `SetMinimapTileWorldSize`
Set the per-tile world size in centimetres (tile grid geometry). Type: **Re-bake**.

```lua title="Example"
HMap.SetMinimapTileWorldSize(5000)
```

---

### `SetMinimapTileResolution`
Set the per-tile render-target resolution in pixels. Range `[64, 4096]`. Type: **Re-bake**.

```lua title="Example"
HMap.SetMinimapTileResolution(512)
```

---

### `SetMinimapMapCenter`
Set the captured-area XY center in centimetres. Overridden by the level's Map Settings volume if present. Type: **Re-bake**.

```lua title="Example"
HMap.SetMinimapMapCenter(0, 0)
```

---

### `SetMinimapMapExtent`
Set the captured-area XY extent in centimetres. Overridden by the level's Map Settings volume if present. Type: **Re-bake**.

```lua title="Example"
HMap.SetMinimapMapExtent(60000, 60000)
```

---

### `SetMinimapBakeBaseZ`
Set the world Z base for the bake camera. Camera Z = `BakeBaseZ + CaptureAltitude`. Overridden by the level's Map Settings volume if present. Type: **Re-bake**.

```lua title="Example"
HMap.SetMinimapBakeBaseZ(0)
```

---

### `SetMinimapIconSize`
Set the minimap icon pixel size. Range `[1.0, 256.0]`. Type: **Hot**.

```lua title="Example"
HMap.SetMinimapIconSize(3.0)
```

---

### `SetMinimapZoom`
Set the minimap zoom. `1.0` = max zoom in (1 tile fills the widget), `0.0` = max zoom out (2.25 tiles visible). Range `[0.0, 1.5]`. Tiled minimap sources only; ignored by full-screen sources. Type: **Hot**.

```lua title="Example"
HMap.SetMinimapZoom(0.5)
```

---

### `GetMinimapSettings`
Returns the current `FHMinimapSourceSettings` struct.

```lua title="Example"
local Settings = HMap.GetMinimapSettings()
print(Settings.Minimap.MinimapZoom)
```

---

## Full-Map Settings

### `SetFullMapRadius`
Set the full-map ortho half-extent in centimetres. `SceneCaptureFullScreen` only. Type: **Hot**.

```lua title="Example"
HMap.SetFullMapRadius(30000)
```

---

### `SetFullMapAltitude`
Set the full-map capture altitude in centimetres. Type: **Hot**.

```lua title="Example"
HMap.SetFullMapAltitude(3000)
```

---

### `SetFullMapResolution`
Set the full-map render-target resolution. Treated as RT height in pixels; width is derived from the viewport aspect ratio. Range `[64, 4096]`. Type: **Re-init**.

```lua title="Example"
HMap.SetFullMapResolution(512)
```

---

### `SetFullMapProjectionMode`
Set the full-map projection mode. `0` = Orthographic, `1` = Perspective. Type: **Re-init**.

```lua title="Example"
HMap.SetFullMapProjectionMode(0)
```

---

### `SetFullMapMapCenter`
Set the full-map baked map center in centimetres. Overridden by the level's Map Settings volume if present. Type: **Re-bake**.

```lua title="Example"
HMap.SetFullMapMapCenter(0, 0)
```

---

### `SetFullMapBakeBaseZ`
Set the full-map baked capture base Z. Camera Z = `BakeBaseZ + CaptureAltitude`. Type: **Re-bake**.

```lua title="Example"
HMap.SetFullMapBakeBaseZ(0)
```

---

### `SetFullMapIconSize`
Set the full-map icon pixel size. Range `[1.0, 256.0]`. Type: **Hot**.

```lua title="Example"
HMap.SetFullMapIconSize(3.0)
```

---

### `SetFullMapMaxZoom`
Set the maximum zoom-in ratio relative to `CaptureRadius`. `MinCaptureRadius = CaptureRadius / MaxZoom`. `SceneCaptureFullScreen` only. Type: **Hot**.

```lua title="Example"
HMap.SetFullMapMaxZoom(3.0)
```

---

### `SetFullMapZoomScaleStep`
Set the zoom scale added or removed per scroll tick. Shared between both full-map sources. Type: **Hot**.

```lua title="Example"
HMap.SetFullMapZoomScaleStep(0.25)
```

---

### `SetFullMapZoomInterpSpeed`
Set the zoom-animation lerp speed (higher = snappier). Type: **Hot**.

```lua title="Example"
HMap.SetFullMapZoomInterpSpeed(8.0)
```

---

### `SetFullMapPanInterpSpeed`
Set the drag-pan animation lerp speed (higher = snappier). Type: **Hot**.

```lua title="Example"
HMap.SetFullMapPanInterpSpeed(12.0)
```

---

### `SetFullMapOpenOnPlayer`
Toggle whether the full-map opens zoomed in on the player (`true`) or zoomed out on `MapCenter` (`false`). Type: **Read-once** — applied at next widget activation.

```lua title="Example"
HMap.SetFullMapOpenOnPlayer(true)
```

---

### `GetFullMapSettings`
Returns the current `FHFullMapSourceSettings` struct.

```lua title="Example"
local Settings = HMap.GetFullMapSettings()
print(Settings.FullMap.ZoomInterpSpeed)
```

---

## Markers

All Lua-created markers use the `HUD.Map.Icon.Custom` gameplay tag. Use `OverrideTexture` and `OverrideColor` to customise individual visuals.

### `MarkerData`
Builds an `FHMapMarkerData` struct configured as a Custom-icon marker. Every field is optional.

```lua title="Example"
local Data = HMap.MarkerData{
    Title           = 'Drop-off',
    Description     = 'Deliver the package here',
    MarkerType      = 'DeliveryDropOff',
    SizeMultiplier  = 1.5,
    OverrideTexture = MyTexture,                          -- optional
    OverrideColor   = UE.FLinearColor(1.0, 0.5, 0.0, 1.0),-- optional
}
```

| Option | Type | Default | Description |
|---|---|---|---|
| `Title` | `string` | `''` | Display name shown on the map widget. |
| `Description` | `string` | `''` | Secondary description shown on the map widget. |
| `MarkerType` | `string` | `''` | Logical type for game-logic queries (e.g. `'Store'`, `'QuestPin'`). Free-form. |
| `SizeMultiplier` | `number` | `1.0` | Icon scale relative to base `IconSize`. Range `[0.1, 10.0]`. |
| `OverrideTexture` | `UTexture2D` | `nil` | If set, replaces the tag-based icon. |
| `OverrideColor` | `FLinearColor` | `nil` | If set, tints the icon. |

---

### `AddMarker`
Add a marker that follows an actor. The marker is auto-removed when the actor is destroyed.

The second argument can be a pre-built `FHMapMarkerData` or a raw options table — the wrapper passes options through `MarkerData` for you.

```lua title="Example - options table"
HMap.AddMarker(QuestNPC, {
    Title       = 'Bob',
    Description = 'Has a quest for you',
    MarkerType  = 'QuestGiver',
})
```

```lua title="Example - prebuilt data"
local Data = HMap.MarkerData{ MarkerType = 'Vehicle' }
HMap.AddMarker(VehicleActor, Data)
```

---

### `RemoveMarker`
Remove a previously added actor-attached marker. No-op if the actor was never registered.

```lua title="Example"
HMap.RemoveMarker(QuestNPC)
```

---

### `AddMarkerAt`
Add a marker pinned to a fixed world location. Returns a non-zero handle the caller stores for later removal. Returns `0` on failure (e.g. no subsystem available).

The second argument can be a pre-built `FHMapMarkerData` or a raw options table.

```lua title="Example"
local Handle = HMap.AddMarkerAt(UE.FVector(12000, -3400, 0), {
    Title      = 'Drop-off',
    MarkerType = 'DeliveryDropOff',
})
```

---

### `RemoveMarkerAt`
Remove a previously added fixed-position marker by its handle.

```lua title="Example"
HMap.RemoveMarkerAt(Handle)
```

---

## See also

- [Configuring the map on Helix Studio](../../../tutorials/HelixMap/studio.md) — editor-side setup and baking.
- [Configuring the map at runtime](../../../tutorials/HelixMap/runtime.md) — markers and settings from Lua.
- [Map Settings Object](../../../tutorials/HelixMap/settings.md) — reference for every map setting.
