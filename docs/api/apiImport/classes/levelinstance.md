---
title: Level Instance
description: ''
tags: [class]
---

# Level Instance
The `LevelInstance` API provides a simple interface for spawning and managing dynamically loaded level instances at runtime

## Constructor

- <mark style="color:yellow;">returns</mark>: `table | nil` - Wrapper object with `.Streaming` property (ULevelStreamingDynamic)

```lua title="Example" title="Example"
local level = LevelInstance(
    Vector(0, 0, 1000),
    Rotator(0, 90, 0),
    '/Game/Maps/MyLevel.MyLevel'
)
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Location` | Vector | `(0, 0, 0)` | World location where the level will be spawned |
| `Rotation` | Rotator | `(0, 0, 0)` | World rotation for the level instance |
| `MapPath` | string | *required* | Full asset path to the map (e.g., `/Game/Maps/MyLevel.MyLevel`) |
| `LevelName` | string | `''` | Optional unique identifier for tracking the instance |
| `bLoadAsTempPackage` | boolean | `false` | Whether to load as a temporary package |

## Functions

### `Hide`
Hides the level instance while keeping it loaded in memory
This improves performance when you need to temporarily hide a level without unloading it

```lua title="Example"
level:Hide()
```

---

### `Show`
Makes a hidden level instance visible again

```lua title="Example"
level:Show()
```

---

### `Unload`
Completely unloads the level instance from memory, freeing up resources

```lua title="Example"
level:Unload()
```

---

### `Reload`
Reloads a previously unloaded level instance

```lua title="Example"
level:Reload()
```

---

### `IsHidden`
Returns whether the level instance is currently hidden

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local hidden = level:IsHidden()
```

---

### `IsLoaded`
Returns whether the level instance is currently loaded in memory

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local loaded = level:IsLoaded()
```

---

### `OnShown`
Registers a callback function to be called when the level becomes visible

- Callback: `function` - Function to execute when the level is shown

```lua title="Example"
level:OnShown(function()
    print('Level is now visible!')
end)
```

---

### `OnHidden`
Registers a callback function to be called when the level is hidden

- Callback: `function` - Function to execute when the level is hidden

```lua title="Example"
level:OnHidden(function()
    print('Level was hidden')
end)
```

---

### `OnLoaded`
Registers a callback function to be called when the level finishes loading

- Callback: `function` - Function to execute when the level is loaded

```lua title="Example"
level:OnLoaded(function()
    print('Level finished loading!')
end)
```

---

### `OnUnloaded`
Registers a callback function to be called when the level is unloaded

- Callback: `function` - Function to execute when the level is unloaded

```lua title="Example"
level:OnUnloaded(function()
    print('Level was unloaded')
end)
```

## Usage Examples

### Basic Level Spawning

```lua title="Example"
local level = LevelInstance(
    Vector(0, 0, 1000),
    Rotator(0, 0, 0),
    '/Game/Maps/Arena.Arena'
)
```

### With Custom Name and Callbacks

```lua title="Example"
local level = LevelInstance(
    Vector(1000, 500, 0),
    Rotator(0, 45, 0),
    '/Game/Maps/BossRoom.BossRoom',
    'BossRoom_Instance_01'
)

level:OnLoaded(function()
    print('Boss room loaded!')
    -- Spawn enemies, set up triggers, etc.
end)

level:OnUnloaded(function()
    print('Boss room cleaned up')
end)
```

### Toggle Visibility

```lua title="Example"
local isVisible = true

function ToggleLevel()
    if isVisible then
        level:Hide()
    else
        level:Show()
    end
    isVisible = not isVisible
end
```

### Memory Management

```lua title="Example"
-- When player leaves area
level:Unload()

-- When player returns
level:Reload()
level:OnShown(function()
    print('Welcome back!')
end)
```