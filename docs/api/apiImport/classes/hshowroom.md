---
title: HShowroom
description: HELIX showroom API
tags: [api]
---

API for displaying items in the HELIX showroom UI. Call one or more `Add*` functions to queue items, then call `OpenShowroom` to display them.

```lua title="Example"
HShowroom.AddVehicleToShowroom({
    showroom_display_name   = "Silverado ZR1",
    showroom_description    = "A full-size performance pickup.",
    showroom_item_quality   = "Legendary",
    showroom_asset_path     = "/HelixVehicles/Blueprints/Cars/Chev_ZR/BP_Chev_ZR.BP_Chev_ZR_C",
    showroom_brand_name     = "Chevrolet",
    showroom_thumbnail_path = "",
}, {
    statsSections = {
        {
            title = "Performance",
            stats = {
                { type = "progress", label = "Top Speed", percentage = 0.92, value = "305 km/h", color = "FF4444" },
            },
        },
    },
})

HShowroom.OpenShowroom("InspectItem", "Vehicle Showroom")
```

## Functions

### Showroom Control

#### `OpenShowroom`

Opens the showroom UI. Call this after all items have been added.

- `ShowroomUIPage: string` — UI page to open (e.g. `"InspectItem"`)
- `UITitle: string` — title displayed in the showroom header

```lua title="Example"
HShowroom.OpenShowroom("InspectItem", "My Showroom")
```

---

#### `CloseShowroom`

Closes the showroom UI.

```lua title="Example"
HShowroom.CloseShowroom()
```

---

### Adding Items

#### `AddEquippableToShowroom`

Adds a wearable/equippable item to the showroom.

- `itemDetails: table` — item data (see [Common Fields](#common-fields))
- `itemStats: table` — optional stats panels (see [itemStats Format](#itemstats-format))

```lua title="Example"
HShowroom.AddEquippableToShowroom({
    showroom_display_name   = "Tactical Vest",
    showroom_description    = "A lightweight tactical vest.",
    showroom_item_quality   = "Rare",
    showroom_asset_path     = "/MyAssets/Meshes/SM_TacticalVest.SM_TacticalVest",
    showroom_thumbnail_path = "",
}, {
    statsSections = {
        {
            title = "Stats",
            stats = {
                { type = "text",     label = "Slot",       value = "Chest" },
                { type = "progress", label = "Armour",     percentage = 0.6,  value = "60%", color = "88BBFF" },
                { type = "progress", label = "Durability", percentage = 0.85, value = "85%", color = "44FF88" },
            },
        },
    },
})
```

---

#### `AddSmallItemToShowroom`

Adds a small placeable prop to the showroom.

- `itemDetails: table` — item data (see [Common Fields](#common-fields) and [Axis Fields](#axis-fields-small-large-wall))
- `itemStats: table` — optional stats panels (see [itemStats Format](#itemstats-format))

```lua title="Example"
HShowroom.AddSmallItemToShowroom({
    showroom_display_name   = "Coffee Table",
    showroom_description    = "A compact wooden coffee table.",
    showroom_item_quality   = "Uncommon",
    showroom_asset_path     = "/MyAssets/Meshes/SM_CoffeeTable.SM_CoffeeTable",
    showroom_thumbnail_path = "",
    showroom_item_axis      = 0,
}, {
    statsSections = {
        {
            title = "Properties",
            stats = {
                { type = "text",     label = "Material",   value = "Oak Wood" },
                { type = "text",     label = "Dimensions", value = "120x60x45cm" },
                { type = "progress", label = "Condition",  percentage = 1.0, value = "100%", color = "44FF88" },
            },
        },
    },
})
```

---

#### `AddLargeItemToShowroom`

Adds a large placeable prop to the showroom.

- `itemDetails: table` — item data (see [Common Fields](#common-fields) and [Axis Fields](#axis-fields-small-large-wall))
- `itemStats: table` — optional stats panels (see [itemStats Format](#itemstats-format))

```lua title="Example"
HShowroom.AddLargeItemToShowroom({
    showroom_display_name   = "Sectional Sofa",
    showroom_description    = "A large L-shaped sectional sofa.",
    showroom_item_quality   = "Epic",
    showroom_asset_path     = "/MyAssets/Meshes/SM_SectionalSofa.SM_SectionalSofa",
    showroom_thumbnail_path = "",
    showroom_item_axis      = 0,
}, {
    statsSections = {
        {
            title = "Specs",
            stats = {
                { type = "text", label = "Seats",      value = "6" },
                { type = "text", label = "Material",   value = "Microfibre" },
                { type = "text", label = "Dimensions", value = "320x200x85cm" },
            },
        },
        {
            title = "Comfort",
            stats = {
                { type = "progress", label = "Softness",   percentage = 0.9, value = "90%", color = "88BBFF" },
                { type = "progress", label = "Durability", percentage = 0.7, value = "70%", color = "FFAA44" },
            },
        },
    },
})
```

---

#### `AddWallItemToShowroom`

Adds a wall-mounted prop to the showroom.

- `itemDetails: table` — item data (see [Common Fields](#common-fields) and [Axis Fields](#axis-fields-small-large-wall))
- `itemStats: table` — optional stats panels (see [itemStats Format](#itemstats-format))

```lua title="Example"
HShowroom.AddWallItemToShowroom({
    showroom_display_name   = "Mounted TV",
    showroom_description    = "A 65-inch wall-mounted flat screen.",
    showroom_item_quality   = "Epic",
    showroom_asset_path     = "/MyAssets/Meshes/SM_MountedTV.SM_MountedTV",
    showroom_thumbnail_path = "",
    showroom_item_axis      = 2,
}, {
    statsSections = {
        {
            title = "Specs",
            stats = {
                { type = "text",     label = "Size",       value = "65 inch" },
                { type = "text",     label = "Resolution", value = "4K UHD" },
                { type = "text",     label = "Panel",      value = "OLED" },
                { type = "progress", label = "Brightness", percentage = 0.8, value = "800 nits", color = "FFD700" },
            },
        },
    },
})
```

---

#### `AddVehicleToShowroom`

Adds a spawned vehicle actor to the showroom.

- `itemDetails: table` — item data (see [Common Fields](#common-fields) and [Vehicle Fields](#vehicle-fields))
- `itemStats: table` — optional stats panels (see [itemStats Format](#itemstats-format))

```lua title="Example"
HShowroom.AddVehicleToShowroom({
    showroom_display_name   = "Silverado ZR1",
    showroom_description    = "A full-size performance pickup.",
    showroom_item_quality   = "Legendary",
    showroom_asset_path     = "/HelixVehicles/Blueprints/Cars/Chev_ZR/BP_Chev_ZR.BP_Chev_ZR_C",
    showroom_brand_name     = "Chevrolet",
    showroom_thumbnail_path = "",
}, {
    statsSections = {
        {
            title = "Performance",
            stats = {
                { type = "progress", label = "Top Speed",    percentage = 0.92, value = "305 km/h",   color = "FF4444" },
                { type = "progress", label = "Acceleration", percentage = 0.9,  value = "0-100 3.5s", color = "FF8844" },
                { type = "progress", label = "Handling",     percentage = 0.82, value = "82%",         color = "FFDD44" },
            },
        },
        {
            title = "Details",
            stats = {
                { type = "text", label = "Engine", value = "6.2L Supercharged V8" },
                { type = "text", label = "Drive",  value = "AWD" },
                { type = "text", label = "Price",  value = "$120,000" },
            },
        },
    },
})
```

---

## itemDetails Fields

### Common Fields

Applies to all item types.

| Field                     | Type     | Description                                                               |
| ------------------------- | -------- | ------------------------------------------------------------------------- |
| `showroom_display_name`   | `string` | Item name shown in the UI                                                 |
| `showroom_description`    | `string` | Item description                                                          |
| `showroom_item_quality`   | `string` | Rarity label: `"Common"`, `"Uncommon"`, `"Rare"`, `"Epic"`, `"Legendary"` |
| `showroom_asset_path`     | `string` | Content browser path to the mesh or blueprint                             |
| `showroom_thumbnail_path` | `string` | Path to a thumbnail image, pass `""` for none                             |

---

### Axis Fields (Small, Large, Wall)

Controls the orientation of the item in the showroom viewer. Provide either field — `showroom_item_axis` takes priority if both are set. Defaults to `0` if neither is provided.

| Field                | Type     | Description                                               |
| -------------------- | -------- | --------------------------------------------------------- |
| `showroom_item_axis` | `number` | Axis index `0`–`5` (see table below)                      |
| `forwardAxis`        | `string` | String alias: `"x"`, `"y"`, `"z"`, `"-x"`, `"-y"`, `"-z"` |

| Value | String | Direction |
| ----- | ------ | --------- |
| `0`   | `"x"`  | +X        |
| `1`   | `"y"`  | +Y        |
| `2`   | `"z"`  | +Z        |
| `3`   | `"-x"` | -X        |
| `4`   | `"-y"` | -Y        |
| `5`   | `"-z"` | -Z        |

---

### Vehicle Fields

| Field                 | Type     | Description                       |
| --------------------- | -------- | --------------------------------- |
| `showroom_brand_name` | `string` | Manufacturer name shown in the UI |

---

## itemStats Format

Both `statsSections` and individual stat entries are optional. Multiple sections render as separate groups in the UI.

```lua title="Example"
{
    statsSections = {
        {
            title = "Section Title",
            stats = {
                { type = "text",     label = "Label", value = "Value" },
                { type = "progress", label = "Label", percentage = 0.85, value = "85%", color = "FFD700" },
            },
        },
    },
}
```

| Field        | Type     | Description                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------------ |
| `type`       | `string` | `"text"` for a plain key/value row, `"progress"` for a bar                     |
| `label`      | `string` | Row label                                                                      |
| `value`      | `string` | Display value                                                                  |
| `percentage` | `number` | `0.0`–`1.0`, only used when `type = "progress"`                                |
| `color`      | `string` | Hex color for the progress bar without `#`, only used when `type = "progress"` |
