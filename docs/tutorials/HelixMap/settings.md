---
title: Map Settings Object
description: Reference for every property on the Map Settings actor
---

# Map Settings Object

A companion reference to [Configuring the map on Helix Studio](studio.md). It documents every property on the **Map Settings** actor (`Map Settings` in Place Actors). For the setup walkthrough, start with the tutorial.

The actor holds the **Box** (map bounds), two **source pickers**, a **Minimap settings** struct, a **Full-map settings** struct, and — when a pre-baked source is selected — **Bake settings** and the baked data asset.

## Bounds (Box component)

The child `Box` drives these at BeginPlay. They are **volume-controlled** — editing them in the Details panel is ignored; the box transform wins.

| Field | Driven by | Controls |
|---|---|---|
| `MapCenter` | Box world XY | Centre of the captured area. |
| `MapExtent` | Box scaled extent x 2 | Total world coverage on both axes. |
| `BakeBaseZ` | Actor Z | World Z anchor for the capture camera (`camera = BakeBaseZ + CaptureAltitude`). |
| `CaptureRadius` (full-map) | Box half-extent, longest axis | Default ortho half-extent for the live full-map. |

## Source pickers

| Picker | Options | Notes |
|---|---|---|
| `MinimapSourceClass` | `HMapSource_SceneCapture` (live), `HMapSource_PreBakedCapture` (baked) | Empty = project default. |
| `FullMapSourceClass` | `HMapSource_SceneCaptureFullScreen` (live), `HMapSource_PreBakedCaptureFullScreen` (baked) | Empty = project default; if none configured, the full-map is disabled. |

## Minimap settings

`MinimapSettings` (`FHMinimapSourceSettings`) — used by both minimap sources.

### Geometry

Volume-controlled (see [Bounds](#bounds-box-component)).

| Field | Type | Default | Description |
|---|---|---|---|
| `MapCenter` | FVector2D | (0, 0) | World XY centre. Used by baked at bake time; ignored by live (it follows the player). |
| `MapExtent` | FVector2D | (60000, 60000) | World coverage (cm). Drives the tile-grid size. |
| `BakeBaseZ` | float | 0.0 | World Z base for the camera. Baked only. |

### Capture

Live `SceneCapture` knobs; also used by the bake camera. Ignored by baked sources at runtime.

| Field | Type | Default | Description |
|---|---|---|---|
| `ProjectionMode` | enum | Orthographic | Orthographic (flat) or Perspective (3D look). |
| `CaptureSource` | enum | SCS_FinalColorLDR | What the capture renders into the target. |
| `CaptureAltitude` | float | 3000.0 | Camera height above the target / above `BakeBaseZ` (cm). |
| `ShowFlags` | struct | (below) | Per-source rendering toggles. |

#### ShowFlags

All default `false` except `bStaticMeshes` (`true`). Set a flag `true` to include that feature.

| Flag | Default | Notes |
|---|---|---|
| `bFog` | false | Atmospheric fog. |
| `bDynamicShadows` | false | Real-time shadows. |
| `bPostProcessing` | false | Post-process effects. |
| `bAtmosphere` | false | Atmosphere rendering. |
| `bLighting` | false | Master lighting. False = unlit base colour. |
| `bSkeletalMeshes` | false | Skeletal meshes. |
| `bStaticMeshes` | true | Static meshes. |
| `bParticles` | false | Particle systems. |
| `bDecals` | false | Decals. |
| `bReflections` | true | SSR / Lumen reflections. Set false for bakes (view-dependent reflections cause seams). |
| `bLumenLighting` | false | Full Lumen-lit preset; forces lighting/shadows/atmosphere/post on. Overrides the individual flags. |

### Tile Grid

Tile geometry for tiled minimap sources. Ignored by full-map sources.

| Field | Type | Default | Description |
|---|---|---|---|
| `TileWorldSize` | float | 5000.0 | World units per tile at zoom 0. Min 100. |
| `TileResolution` | int32 | 512 | Pixels per (square) tile. Range [64, 4096]. |

### Minimap display

| Field | Type | Default | Description |
|---|---|---|---|
| `MinimapZoom` | float | 0.5 | 1.0 = one tile fills the widget; 0.0 = max zoom out. Range [0.0, 1.5]. |
| `bRotateWithPlayer` | bool | false | Rotate the map so the player faces up. |
| `bUseCameraYaw` | bool | true | Orientation source: camera yaw (true) or pawn yaw (false). |

### Icon size

| Field | Type | Default | Description |
|---|---|---|---|
| `IconSize` | float | 3.0 | Minimap icon pixel size. Range [1.0, 256.0]. |

## Full-map settings

`FullMapSettings` (`FHFullMapSourceSettings`) — used by both full-screen-map sources.

### Geometry

Same fields as [Minimap geometry](#geometry), volume-controlled. The live source uses them to place its camera; the baked source reads bake metadata.

### Capture

Same fields as [Minimap capture](#capture). Consumed only by the live full-map source.

### Full Map (shared)

| Field | Type | Default | Description |
|---|---|---|---|
| `bOpenOnPlayer` | bool | true | Open zoomed in on the player (true) or zoomed out on `MapCenter` (false). Read at activation. |
| `ZoomScaleStep` | float | 0.25 | Zoom change per scroll tick. Min 0.01. |
| `ZoomInterpSpeed` | float | 8.0 | Zoom animation speed. Min 0.1. |
| `PanInterpSpeed` | float | 12.0 | Drag-pan animation speed. Min 0.1. |
| `bAllowLetterbox` | bool | true | Allow zoom-out past the screen-fill cap to see the whole map. |
| `LetterboxColor` | FLinearColor | black | Letterbox bar colour (baked full-map only). |

### Live Capture

Consumed only by `SceneCaptureFullScreen`.

| Field | Type | Default | Description |
|---|---|---|---|
| `CaptureRadius` | float | 30000.0 | Default ortho half-extent (cm). Min 1.0. |
| `MaxZoom` | float | 3.0 | Max zoom-in ratio (`MinRadius = CaptureRadius / MaxZoom`). Min 1.0. |
| `CaptureResolution` | int32 | 512 | Render-target height (px); width derives from aspect. Range [64, 4096]. Re-init to apply. |

### Baked Zoom

Consumed only by `PreBakedCaptureFullScreen`.

| Field | Type | Default | Description |
|---|---|---|---|
| `MinPixelScale` | float | 1.0 | Max zoom-in / opening zoom. 1.0 = 1 widget px : 1 source px at level 0. Min 0.1. |
| `MaxZoomOutLevel` | int32 | -1 | Deepest baked level the player can zoom out to. -1 = no extra cap. Range [-1, 10]. |
| `LevelBiasMultiplier` | float | 1.0 | Bias for when the active baked level switches. <1 sharper, >1 blurrier. Range [0.1, 10.0]. |

### Icon size

| Field | Type | Default | Description |
|---|---|---|---|
| `IconSize` | float | 3.0 | Full-map icon pixel size. Range [1.0, 256.0]. |

### What each source reads

| Sub-block | Live full-map | Baked full-map |
|---|---|---|
| Geometry | Camera anchor | Bake metadata |
| Capture | All fields | Ignored |
| Full Map (shared) | All | All |
| Live Capture | All | Ignored |
| Baked Zoom | Ignored | All |

## Bake settings

`BakeSettings` (`FHMapBakeSettings`) — appears only when a pre-baked source is selected. Read **once at bake time**; no runtime effect.

| Field | Type | Default | Description |
|---|---|---|---|
| `ExposureBias` | float | 1.0 | Manual EV bias for the bake. All tiles lock to one exposure (avoids seams). Range [-10, 10]. |
| `MaxZoomLevel` | int32 | 4 | Deepest zoom level to bake. Each level halves grid size via 2x2 downsample. Range [0, 10]. |

### UDS Overrides

Drive the level's Ultra Dynamic Sky to a clean state for the bake; restored afterwards. No-op without a UDS actor.

| Field | Type | Default | Description |
|---|---|---|---|
| `bOverrideUDS` | bool | true | Master toggle. |
| `UDSTimeOfDay` | float | 1300.0 | Time of day, HHMM [0, 2400). |
| `UDSSunYaw` | float | 0.0 | Sun yaw, degrees [-180, 180]. |
| `UDSSunPitch` | float | 0.0 | Sun pitch, degrees [-90, 90]. |
| `UDSCloudCoverage` | float | 0.0 | Cloud coverage [0, 1]. Keep 0 — clouds are view-dependent and cause tile artifacts. |
| `bUDSSunCastShadows` | bool | true | Keep true; false underlits tiles (loses Lumen sun contribution). |

### Flux Water Override

Temporarily swap Flux water to a flat material for the bake (kills per-tile sparkle); restored afterwards.

| Field | Type | Default | Description |
|---|---|---|---|
| `bOverrideFluxWaterMaterial` | bool | true | Master toggle. No-op if either field below is unset. |
| `FluxSurfaceActorClass` | TSoftClassPtr&lt;AActor&gt; | unset | Flux water actor class to process. |
| `MinimapWaterMaterial` | TSoftObjectPtr&lt;UMaterialInterface&gt; | unset | Flat replacement material used during the bake. |

## Baked data

| Field | Description |
|---|---|
| `PreBakedMapData` | The baked data asset (tiles + metadata). Auto-filled after a successful bake; can be set manually to load a previous bake. |
