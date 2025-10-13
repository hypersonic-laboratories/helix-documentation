# Player Data
Learn how to access and modify a player's data

## Introduction
The Player Data object in qb-core stores all information related to a player's character, such as personal details, job, gang affiliation, metadata, and more.
These values are initialized using default values defined in the config.lua file of qb-core.
This guide will provide an overview of the structure, default values, and how you can access or modify player data

```
QBCore
├── Players
│   ├── [source]
│       ├── PlayerData
│           ├── citizenid: string (Unique identifier)
│           ├── cid: number (Character ID)
│           ├── money: table
│           │   └── { cash: number, bank: number }
│           ├── charinfo: table
│           │   ├── firstname: string
│           │   ├── lastname: string
│           │   ├── ...
│           ├── job: table
│           │   ├── name: string
│           │   ├── label: string
│           │   ├── payment: number
│           │   ├── onduty: boolean
│           │   ├── isboss: boolean
│           │   └── grade: table
│           │       ├── name: string
│           │       └── level: number
│           ├── gang: table
│           │   ├── name: string
│           │   ├── label: string
│           │   ├── isboss: boolean
│           │   └── grade: table
│           │       ├── name: string
│           │       └── level: number
│           ├── metadata: table
│           │   ├── hunger: number
│           │   ├── thirst: number
│           │   ├── stress: number
│           │   ├── isdead: boolean
│           │   └── ...
│           ├── position: vector3
│           └── items: table (inventory items)
```

---

## Configuration
The player data default values can be modified in the `config.lua` file of `qb-core`.
These defaults are stored in QBConfig.Player.PlayerDefaults and determine what a player starts with when creating a new character

---

## Identification Table

| Property    | Type     | Default Value                   | Description                                      |
| ----------- | -------- | ------------------------------- | ------------------------------------------------ |
| `citizenid` | `string` | Generated via `CreateCitizenId` | A unique identifier for the player.              |
| `cid`       | `number` | `1`                             | Character ID (used for multi-character systems). |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local citizenid = Player.PlayerData.citizenid
    print(citizenid)
end)

```

---

## Money Table

| Property | Type    | Default Value            | Description                                   |
| -------- | ------- | ------------------------ | --------------------------------------------- |
| `money`  | `table` | `{ cash = 0, bank = 0 }` | Contains the player’s cash and bank balances. |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local money = Player.PlayerData.money
    local cash = money.cash
    local bank = money.bank
    print(cash, bank)
end)
```

---

## Character Information Table

| Property   | Type    | Default Value                  | Description                                  |
| ---------- | ------- | ------------------------------ | -------------------------------------------- |
| `charinfo` | `table` | `{ firstname, lastname, ... }` | Basic personal information about the player. |

### Subfields

| Subfield      | Type     | Default Value                       | Description                                     |
| ------------- | -------- | ----------------------------------- | ----------------------------------------------- |
| `firstname`   | `string` | `"Firstname"`                       | The player's first name.                        |
| `lastname`    | `string` | `"Lastname"`                        | The player's last name.                         |
| `birthdate`   | `string` | `"00-00-0000"`                      | The player's date of birth.                     |
| `gender`      | `number` | `0`                                 | The player's gender (`0` = male, `1` = female). |
| `nationality` | `string` | `"USA"`                             | The player's nationality.                       |
| `phone`       | `string` | Generated via `CreatePhoneNumber`   | The player's phone number.                      |
| `account`     | `string` | Generated via `CreateAccountNumber` | The player's bank account number.               |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local charinfo = Player.PlayerData.charinfo
    local firstname = Player.PlayerData.firstname
    local lastname = Player.PlayerData.lastname
    local birthdate = Player.PlayerData.birthdate
    local gender = Player.PlayerData.gender
    local nationality = Player.PlayerData.nationality
    local phone = Player.PlayerData.phone
    local account = Player.PlayerData.account
    print("Player's name:", firstname, lastname)
end)
```

---

## Job Table

| Property | Type    | Default Value                  | Description                                       |
| -------- | ------- | ------------------------------ | ------------------------------------------------- |
| `job`    | `table` | `{ name = 'unemployed', ... }` | The player’s current job and related information. |

### Subfields

| Subfield  | Type      | Default Value                  | Description                                |
| --------- | --------- | ------------------------------ | ------------------------------------------ |
| `name`    | `string`  | `"unemployed"`                 | The job name.                              |
| `label`   | `string`  | `"Civilian"`                   | The display label of the job.              |
| `payment` | `number`  | `10`                           | The player’s salary.                       |
| `onduty`  | `boolean` | `false`                        | Whether the player is on duty.             |
| `isboss`  | `boolean` | `false`                        | Whether the player is the boss of the job. |
| `grade`   | `table`   | `{ name = 'Freelancer', ... }` | The player's job grade.                    |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local jobInfo = Player.PlayerData.job
    local name = jobInfo.name
    local label = jobInfo.label
    local payment = jobInfo.payment
    local onduty = jobInfo.onduty
    local isboss = jobInfo.isboss
    print("Player's job:", name)
    print("Job label:", label)
end)
```

---

## Gang Table

| Property | Type    | Default Value                    | Description                                        |
| -------- | ------- | -------------------------------- | -------------------------------------------------- |
| `gang`   | `table` | `{ name = 'Unaffiliated', ... }` | The player’s current gang and related information. |

### Subfields

| Subfield | Type      | Default Value                    | Description                                 |
| -------- | --------- | -------------------------------- | ------------------------------------------- |
| `name`   | `string`  | `"Unaffiliated"`                 | The gang name.                              |
| `label`  | `string`  | `"No Gang"`                      | The display label of the gang.              |
| `isboss` | `boolean` | `false`                          | Whether the player is the boss of the gang. |
| `grade`  | `table`   | `{ name = 'Unaffiliated', ... }` | The player's gang grade.                    |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local gangInfo = Player.PlayerData.gang
    local name = gangInfo.name
    local label = gangInfo.label
    print("Player's gang:", name)
    print("Gang label:", label)
end)
```

---

## Metadata Table

| Property | Type      | Default Value | Description                                        |
| -------- | --------- | ------------- | -------------------------------------------------- |
| `hunger` | `number`  | `100`         | The player’s hunger level (0–100).                 |
| `thirst` | `number`  | `100`         | The player’s thirst level (0–100).                 |
| `stress` | `number`  | `0`           | The player’s stress level (0–100).                 |
| `isdead` | `boolean` | `false`       | Whether the player is dead.                        |
| `inhale` | `boolean` | `false`       | Whether the player is handcuffed.                  |
| `phone`  | `table`   | `{}`          | Stores phone-specific data such as installed apps. |

```lua
RegisterServerEvent('qb-docs:server:getPlayerInfo', function(source)
    local Player = exports['qb-core']:GetPlayer(source)
    if not Player then return end
    local metadata = Player.PlayerData.metadata
    local hunger = metadata.hunger
    local thirst = metadata.thirst
    print('Hunger Level: ', hunger)
    print('Thirst Level: ', thirst)
end)
```