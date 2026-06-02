# 🛠️ qb-admin
With great power comes a really big menu

## Introduction
qb-admin is the staff control panel. It opens a full-screen WebUI dashboard where admins can manage players, jobs and gangs, money, vitals, vehicles, the world environment, and a report/ticket queue. It also owns the server's weather and time-of-day state, syncing the sky to every client.

Players use it to file reports; admins use it to review and resolve them, run quick moderation actions, and adjust the world.

### Opening the panel
The admin dashboard is bound to the **F3** key. Pressing it requests the current context from the server and opens the WebUI.

```lua title="Keybind"
Input.BindKey('F3', function() ... end, 'Released')
```

### Filing a report
A `report` console command is registered (when the `HConsole` actor is available) that files a report to the admin queue.

```text title="Console"
report
```

/// warning
There is no permission or ACE gate in this port — the F3 keybind and the admin server events are not restricted by a permission check in the code. Access control is expected to be enforced elsewhere (e.g. at the framework permission layer) before this resource is exposed to non-staff.
///

## Configuration
All configurable options listed below are found in the `config.lua`

### Weather
Sets the starting time of day, starting weather, transition timing, and the table of selectable weather types (mapped to the engine `WeatherType` enum). `AnimateTime` controls whether the sky advances time on its own.

```lua title="Example"
Config.Weather = {
    StartingTime = 1400,
    TransitionDelay = 5, -- seconds between weather states
    StartingWeather = 'ClearSkies',
    AnimateTime = true,
    WeatherTypes = {
        ['ClearSkies'] = WeatherType.ClearSkies,
        ['Cloudy'] = WeatherType.Cloudy,
        ['Foggy'] = WeatherType.Foggy,
        ['Overcast'] = WeatherType.Overcast,
        ['PartlyCloudy'] = WeatherType.PartlyCloudy,
        ['Rain'] = WeatherType.Rain,
        ['RainLight'] = WeatherType.RainLight,
        ['RainThunderstorm'] = WeatherType.RainThunderstorm,
        ['SandDustCalm'] = WeatherType.SandDustCalm,
        ['SandDustStorm'] = WeatherType.SandDustStorm,
        ['Snow'] = WeatherType.Snow,
        ['SnowBlizzard'] = WeatherType.SnowBlizzard,
        ['SnowLight'] = WeatherType.SnowLight,
    }
}
```

### Locations
The named teleport destinations available in the dashboard's developer tools. Each entry has a display `name` and `coords`. The panel lists them alphabetically by name; selecting one teleports the admin there.

```lua title="Example"
Config.Locations = {
    apartment_lvl_1 = {
        name = 'Apartment (Lvl 1)',
        coords = Vector(567648, 552846, 4561),
    },
    gas_station = {
        name = 'Gas Station',
        coords = Vector(563566, 561573, 4563),
    },
    vehicle_shop = {
        name = 'Vehicle Shop',
        coords = Vector(569726, 543631, 4558),
    },
    casino = {
        name = 'Casino',
        coords = Vector(582568, 609758, 4584),
    },
    -- ...apartments lvl 1-5, clothing/fishing/mechanic shops, mining area,
    -- cinema, shopping mall, industrial/residential areas, parking lot, etc.
}
```

## Features

The dashboard is organized into pages, each backed by server events. Below is what the code actually implements.

### Dashboard
On open, the panel is populated with live stats (players online, server uptime, ping), the disciplinary feed, the report/ticket queue, the player list, an action/log history, and a wealth leaderboard. It also exposes a set of self/quick actions:

- **Noclip** — toggles flying movement and disables collision on the admin.
- **God Mode** — toggles invincibility on the admin.
- **Invisibility** — hides the admin in-game.
- **Self Heal** / **Self Revive** — heals or revives the admin and resets vitals.
- **Overhead Names** — toggles overhead name display _(TO DO — not yet implemented)_.
- **Admin Duty** — toggle state is tracked and logged only _(TO DO — no effect applied yet)_.
- **Announce** — broadcasts a dashboard announcement to clients.

### Player Management
For any player in the list, admins can run:

- **Quick controls**: teleport-to, bring-to-you, spectate, kick, ban, freeze, kill, revive, open clothing, open inventory.
- **Context actions**: spectate, quick-kick, bring, freeze, heal.
- **Vitals**: replenish health, armor, hunger, or thirst.
- **Currency**: add, remove, or set `cash`, `bank`, or `crypto` (routed through the qb-core player money methods, fully logged).
- **Jobs**: fire (set to `unemployed`) or change job + grade.
- **Gangs**: remove (set to `none`) or change gang + grade.

Job, gang, item, and vehicle catalogs shown in the menu are pulled from qb-core via `GetShared`.

/// note
A few player tools are scaffolded but not finished: **spectate** (camera attach), **ban** (persisted bans / duration / reason), **overhead names**, and the vehicle **ownership**, **glovebox**, and **trunk** viewers are marked `TO DO` in the code and currently only fire placeholder events or log the action.
///

### Vehicle Actions
Acting on a player's currently occupied vehicle: **repair**, **refuel** (to 100%), **delete**, and the placeholder **ownership** / **glovebox** / **trunk** viewers noted above.

### Developer Tools
- **Teleport to location** (from `Config.Locations`) or **to raw coordinates**.
- **Spawn vehicle** in front of the admin (from the shared vehicles catalog).
- **Spawn object** _(TO DO — awaiting an object catalog/asset mapping)_.
- **Copy coordinates / rotation / heading** of the admin's pawn to the clipboard.
- **Run console command** through the `HConsole` actor.

### Environment
- **Change weather** and **change time** — updates the server's stored state and broadcasts it to all clients, which re-sync their sky.
- **Cleanup** nearby entities: vehicles (50m), peds (50m), objects (50m), or everything (100m). Player-controlled characters are skipped.

### Reports & Tickets
Reports filed by players become tickets in a kanban-style queue (`incoming` → `in-progress` → `resolved`).

- **Update state** — move a ticket between columns and assign an owner.
- **Resolve** — mark a ticket resolved with a resolution note.
- **Clear resolved** — remove resolved tickets from the queue.
- **Investigation actions** on the reporter — goto, bring, heal, freeze.

All report, ticket, chat, and log state is kept in-memory on the server (capped lists) and is not persisted to the database.

## Events

These are the resource's main server events. Most are triggered from the WebUI via the client bridge; you generally won't call them directly.

| Event | Purpose |
| --- | --- |
| `qb-admin:server:fileReport` | File a new report / open a ticket |
| `qb-admin:server:players:quickControl` | Quick moderation actions (kick, ban, freeze, etc.) |
| `qb-admin:server:players:context-action` | Context-menu actions (spectate, heal, bring, etc.) |
| `qb-admin:server:players:vehicleAction` | Repair / refuel / delete occupied vehicle |
| `qb-admin:server:players:jobAction` | Fire or change a player's job |
| `qb-admin:server:players:gangAction` | Remove or change a player's gang |
| `qb-admin:server:players:replenishVital` | Restore health / armor / hunger / thirst |
| `qb-admin:server:players:currencyAdjust` | Add / remove / set player money |
| `qb-admin:server:dashboard:quickAction` | Self actions (noclip, god mode, invis, self heal, etc.) |
| `qb-admin:server:dashboard:announce` | Broadcast a server announcement |
| `qb-admin:server:environment:cleanup` | Clear nearby entities |
| `qb-admin:server:changeWeather` / `qb-admin:server:changeTime` | Set world weather / time |
| `qb-admin:server:reports:updateState` / `:resolved` / `:clearResolved` / `:investigationAction` | Manage the report/ticket queue |

/// info
qb-admin exposes no `exports['qb-admin']` functions for other resources to call — it is driven entirely through its WebUI and the server events above.
///
