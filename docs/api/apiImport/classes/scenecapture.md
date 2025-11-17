# Scene Capture
The `SceneCapture` module provides a simple interface for creating scene capture components that render the game world to render targets.
This is useful for creating security cameras, mirrors, portals, picture-in-picture effects, and more.

/// tip
SceneCapture wraps an AActor, so you can access actor functions through the .Object property
///

## Constructor

```lua title="Example"
local myCapture = SceneCapture(
    Vector(0, 0, 500),
    Rotator(-45, 0, 0),
    1920,
    1080,
    SceneCaptureSource.FinalColorLDR,
    false
)
```

| Name             | Type      | Default              | Description                                                       |
|------------------|-----------|----------------------|-------------------------------------------------------------------|
| `Location`        | `Vector`  | `(0, 0, 0)`         | World position for the capture camera                             |
| `Rotation`        | `Rotator` | `(0, 0, 0)`         | World orientation for the capture camera                          |
| `Width`           | `number`  | `1920`              | Render target width in pixels                                     |
| `Height`          | `number`  | `1080`              | Render target height in pixels                                    |
| `CaptureSource`   | `enum`    | `FinalColorLDR`     | What the camera captures (see Capture Sources below)              |
| `bFollowPlayer`   | `boolean` | `false`             | Whether to automatically follow the player's camera               |

## Properties

| Property        | Type                           | Description                                          |
|-----------------|--------------------------------|------------------------------------------------------|
| `Object`        | `AActor`                       | The spawned actor containing the capture component   |
| `Component`     | `USceneCaptureComponent2D`     | The scene capture component                          |
| `RenderTarget`  | `UTextureRenderTarget2D`       | The render target texture being rendered to          |
| `UpdateTimer`   | `Timer`                        | Internal timer used for player camera following      |

## Functions

### `FollowPlayerCamera`
Makes the scene capture automatically follow the player's camera position and rotation.

- updateInterval: `number` — Update frequency in milliseconds (default: 16ms for ~60fps)

```lua title="Example"
myCapture:FollowPlayerCamera(16)  -- Follow at 60fps
myCapture:FollowPlayerCamera(33)  -- Follow at ~30fps
```

---

### `StopFollowing`
Stops the scene capture from following the player camera.

```lua title="Example"
myCapture:StopFollowing()
```

---

### `SetTransform`
Sets the world position and rotation of the scene capture.

- location: `Vector` — New world position
- rotation: `Rotator` — New world orientation

```lua title="Example"
myCapture:SetTransform(
    Vector(1000, 0, 500),
    Rotator(-30, 90, 0)
)
```

---

## Usage Examples

### Fixed Security Camera

```lua title="Example"
local securityCamera = SceneCapture(
    Vector(0, 0, 500),      -- High up
    Rotator(-45, 0, 0),     -- Looking down
    1280,                    -- 720p resolution
    720
)

-- Use the render target in a material or UI
local renderTarget = securityCamera.RenderTarget
```

---

### Player Camera Mirror

```lua title="Example"
local mirror = SceneCapture(
    nil,                                            -- Location (will use player camera)
    nil,                                            -- Rotation (will use player camera)
    1920,                                           -- Full HD
    1080,
    SceneCaptureSource.FinalColorLDR,
    true                                            -- Auto-follow player
)
```

---

### Picture-in-Picture Effect

```lua title="Example"
local pip = SceneCapture(
    Vector(0, -500, 200),   -- Behind player
    Rotator(0, 0, 0),       -- Forward facing
    640,                     -- Small resolution
    360
)

-- Display the render target in a UI widget
```

---

### Custom Follow Behavior

```lua title="Example"
local capture = SceneCapture(
    Vector(0, 0, 300),
    Rotator(0, 0, 0),
    1920,
    1080
)

-- Start following at 30fps
capture:FollowPlayerCamera(33)

-- Later, stop and set custom position
capture:StopFollowing()
capture:SetTransform(
    Vector(500, 500, 600),
    Rotator(-60, 45, 0)
)
```

---

### Depth Camera for Post-Processing

```lua title="Example"
local depthCapture = SceneCapture(
    Vector(0, 0, 200),
    Rotator(0, 0, 0),
    1920,
    1080,
    SceneCaptureSource.SceneDepth,  -- Capture depth
    false
)

-- Use depth render target for custom effects
local depthRT = depthCapture.RenderTarget
```