# 🛞 qb-radialmenu
Round and round we go

## Introduction
qb-radialmenu is a wheel-style interaction menu opened with the **H** key. It presents context-aware options grouped into categories, letting players perform actions like clothing toggles, vehicle door/extra controls, and job-specific interactions. The menu is built from a configurable tree and automatically adds a **Work** submenu based on the player's current job.

## Configuration
All configurable options listed below are found in the `config.lua`

### Keybind
The key used to open (and, in toggle mode, close) the radial menu.

```lua title="Example"
Config.Keybind = 'H'
```

### Toggle
When `true`, pressing the key toggles the menu open/closed. When `false`, the key must be held to keep the menu open.

```lua title="Example"
Config.Toggle = false
Config.UseWhilstWalking = false
Config.EnableExtraMenu = true
Config.Fliptime = 15000
```

### MenuItems
The main menu tree. Each entry is a category with an `id`, `title`, `icon`, and either an `items` array (a submenu) or a leaf option. A leaf option defines a `type` (`'client'` or `'server'`), the `event` to trigger, and whether selecting it should close the menu (`shouldClose`). Submenus can be nested arbitrarily deep.

```lua title="Example"
Config.MenuItems = {
    {
        id = 'citizen',
        title = 'Citizen',
        icon = 'user',
        items = {
            {
                id = 'givenum',
                title = 'Give Contact Details',
                icon = 'address-book',
                type = 'client',
                event = 'qb-phone:client:GiveContactDetails',
                shouldClose = true
            },
            -- ...nested submenus and further options
        }
    }
}
```

### JobInteractions
A map of job name to a list of menu options. When the player is on a job that has an entry here, those options are added under a generated **Work** submenu. Leadership/LEO-typed jobs are mapped to the `police` key.

```lua title="Example"
Config.JobInteractions = {
    ['ambulance'] = {
        {
            id = 'emergencybutton2',
            title = 'Emergency button',
            icon = 'bell',
            type = 'client',
            event = 'police:client:SendPoliceEmergencyAlert',
            shouldClose = true
        }
    },
    ['taxi'] = {
        {
            id = 'togglemeter',
            title = 'Show/Hide Meter',
            icon = 'eye-slash',
            type = 'client',
            event = 'qb-taxijob:client:toggleMeter',
            shouldClose = false
        }
    }
}
```

/// info
**Adding your own options.** qb-radialmenu does **not** expose `AddOption` / `RemoveOption` exports — those functions are internal to the resource. The supported way to add interactions is to append entries to `Config.JobInteractions` (for job-gated options) or to `Config.MenuItems` (for always-available options) in the config. For example, to give a custom job its own Work submenu:

```lua title="Example"
Config.JobInteractions['mechanic'] = {
    {
        id = 'towvehicle',
        title = 'Tow vehicle',
        icon = 'truck-pickup',
        type = 'client',
        event = 'qb-tow:client:TowVehicle',
        shouldClose = true
    }
}
```
///

### VehicleDoors / VehicleExtras / VehicleSeats
Predefined submenus for vehicle interaction. `VehicleDoors` lists each door (driver, passenger, rear, hood, trunk) pointing at `qb-radialmenu:client:openDoor`. `VehicleExtras` exposes extras 1–13 via `qb-radialmenu:client:setExtra`. `VehicleSeats` is a seat-change submenu populated at runtime.

```lua title="Example"
Config.VehicleDoors = {
    id = 'vehicledoors',
    title = 'Vehicle Doors',
    icon = 'car-side',
    items = {
        {
            id = 'door0',
            title = 'Drivers door',
            icon = 'car-side',
            type = 'client',
            event = 'qb-radialmenu:client:openDoor',
            shouldClose = false
        }
        -- ...remaining doors
    }
}
```

### Commands / ExtraCommands
Clothing toggle definitions used by the clothing radial actions and the extra menu. Each entry maps a clothing/prop slot to a toggle function, sprite, description, and (for `Commands`) a UI button index.

```lua title="Example"
Config.Commands = {
    ['top'] = {
        Func = function() ToggleClothing('Top') end,
        Sprite = 'top',
        Desc = 'Take your shirt off/on',
        Button = 1,
        Name = 'Torso'
    }
}

Config.ExtraCommands = {
    ['pants'] = {
        Func = function() ToggleClothing('Pants', true) end,
        Sprite = 'pants',
        Desc = 'Take your pants off/on',
        Name = 'Pants',
        OffsetX = -0.04,
        OffsetY = 0.0
    }
}
```
