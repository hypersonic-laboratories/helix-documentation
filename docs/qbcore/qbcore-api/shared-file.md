# Shared
Learn how to manage your server's jobs, vehicles, items, etc!

## Introduction
The shared folder inside `qb-core` contains all the information for your jobs, vehicles, items & more!
You will spend a lot of time in this folder configuring everything to your exact specifications.

---

## Items

- Found in `qb-core/shared/items.lua`

/// tip
You can retrieve all the shared items with the function `exports['qb-core']:GetShared('Items')`
///

The Items table in qb-core defines all the items available in your server.
Each item is represented as an object with several properties that determine its behavior, appearance, and functionality.

### Item Object Layout

| Property      | Type      | Description                                                             |
| ------------- | --------- | ----------------------------------------------------------------------- |
| `name`        | `string`  | The internal name used for spawning, giving, or removing the item.      |
| `label`       | `string`  | The display name shown in the inventory.                                |
| `weight`      | `number`  | The weight of the item, affecting inventory capacity.                   |
| `type`        | `string`  | The type of item (e.g., `item`, `weapon`).                              |
| `image`       | `string`  | The filename of the item's image located in `qb-inventory/html/images`. |
| `unique`      | `boolean` | Whether the item is unique (`true`) or stackable (`false`).             |
| `useable`     | `boolean` | Whether the item is usable. Must still be registered as a usable item.  |
| `shouldClose` | `boolean` | Whether using the item closes the inventory (`true` or `false`).        |
| `description` | `string`  | A short description of the item shown in the inventory.                 |

```lua title="Basic Item Definition"
QBCore.Shared.Items = {
    id_card = {
        name = 'id_card', -- Internal name
        label = 'ID Card', -- Display name in inventory
        weight = 0, -- Item weight
        type = 'item', -- Type of item (e.g., item, weapon)
        image = 'id_card.png', -- Item image filename
        unique = true, -- Is the item unique?
        useable = true, -- Can the item be used?
        shouldClose = false, -- Does it close the inventory on use?
        description = 'A card containing all your information to identify yourself' -- Description
    }
}
```

---

## Jobs

- Found in `qb-core/shared/jobs.lua`

/// tip
You can retrieve all the shared jobs with the function `exports['qb-core']:GetShared('Jobs')`
///

The Jobs table in qb-core defines all the jobs available on your server, including their ranks, salaries, and specific features.
This allows you to manage employment roles, responsibilities, and pay structures effectively.

### Job Object Layout

| Property      | Type      | Description                                                                                |
| ------------- | --------- | ------------------------------------------------------------------------------------------ |
| `label`       | `string`  | The display name of the job.                                                               |
| `type`        | `string`  | The type of job (e.g., `leo` for law enforcement officer).                                 |
| `defaultDuty` | `boolean` | Whether the player is automatically on duty when they log in.                              |
| `offDutyPay`  | `boolean` | Whether the player receives a paycheck while off duty.                                     |
| `grades`      | `table`   | A table defining job grades, including names, payment, and other rank-specific attributes. |

### Grades Table Layout

| Property  | Type      | Description                                                         |
| --------- | --------- | ------------------------------------------------------------------- |
| `name`    | `string`  | The name of the grade (e.g., Recruit, Officer).                     |
| `payment` | `number`  | The salary for this grade.                                          |
| `isboss`  | `boolean` | (Optional) If true, this grade is marked as the boss (e.g., Chief). |

```lua title="Basic Job Definition"
QBCore.Shared.Jobs = {
    unemployed = {
        label = 'Civilian', -- Display name
        defaultDuty = true, -- Automatically on duty at login
        offDutyPay = false, -- No payment while off duty
        grades = {
            { name = 'Freelancer', payment = 10 } -- Single grade with payment
        }
    }
}
```

```lua title="Advanced Job Definition"
QBCore.Shared.Jobs = {
    police = {
        label = 'Law Enforcement', -- Display name
        type = 'leo', -- Job type (e.g., law enforcement)
        defaultDuty = true, -- Automatically on duty at login
        offDutyPay = false, -- No payment while off duty
        grades = {
            { name = 'Recruit',    payment = 50 },  -- Rank 1: Recruit with $50 payment
            { name = 'Officer',    payment = 75 },  -- Rank 2: Officer with $75 payment
            { name = 'Sergeant',   payment = 100 }, -- Rank 3: Sergeant with $100 payment
            { name = 'Lieutenant', payment = 125 }, -- Rank 4: Lieutenant with $125 payment
            { name = 'Chief',      isboss = true, payment = 150 }, -- Rank 5: Chief, marked as boss, with $150 payment
        }
    }
}
```

---

## Gangs

- Found in `qb-core/shared/gangs.lua`

/// tip
You can retrieve all the shared gangs with the function `exports['qb-core']:GetShared('Gangs')`
///

The Gangs table in qb-core defines all the gangs available on your server, including their ranks and specific features.
This allows you to manage member roles, responsibilities, and pay structures effectively.

### Gang Object Layout

| Property | Type     | Description                                                                       |
| -------- | -------- | --------------------------------------------------------------------------------- |
| `label`  | `string` | The display name of the gang.                                                     |
| `grades` | `table`  | A table defining gang grades, including names and other rank-specific attributes. |

### Grades Table Layout

| Property | Type      | Description                                                        |
| -------- | --------- | ------------------------------------------------------------------ |
| `name`   | `string`  | The name of the grade (e.g., Recruit, Enforcer).                   |
| `isboss` | `boolean` | (Optional) If true, this grade is marked as the boss (e.g., Boss). |

```lua title="Basic Gang Definition"
QBCore.Shared.Gangs = {
    none = {
        label = 'No Gang', -- Display name
        grades = {
            { name = 'Unaffiliated' } -- Single grade
        }
    }
}
```

```lua title="Advanced Gang Definition"
QBShared.Gangs = {
    lostmc = {
        label = 'The Lost MC', -- Display name
        grades = {
            { name = 'Recruit' }, -- Rank 1
            { name = 'Enforcer' }, -- Rank 2
            { name = 'Shot Caller' }, -- Rank 3
            { name = 'Boss', isboss = true }, -- Rank 4 marked as boss
        },
    },
}
```

---

## Vehicles

/// warning
This section is currently under construction!
///

---

## Weapons

/// warning
This section is currently under construction!
///