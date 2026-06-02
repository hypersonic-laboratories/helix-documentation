# 🚑 qb-ambulancejob
Someone call a medic?

## Introduction

The Emergency Medical Services job. Gives on-duty paramedics the tools to get patients back on their feet:

- Hospital check-in, duty toggle and a shared EMS stash
- Grade-gated ambulances and helicopters, spawned with `AMBU` and `LIFE` plates respectively
- Treat any player through a [qb-target](qb-target.md) global-player menu: check health status, revive, bandage and escort
- Hospital and jail beds players can lie in to recover
- A skeletal limb (bone) map used to identify which body part was injured

/// warning
Every coordinate in `Config.VehicleSpawn`, `Config.HelicopterSpawn` and `Config.Locations` ships as a `Vector(0, 0, 0)` placeholder. You must set these per-map before the job is usable in your world.
///

## Configuration
All configurable options listed below are found in the `config.lua`

### Vehicle & Helicopter Spawns
Where retrieved ambulances and helicopters appear. Both ship as `Vector(0, 0, 0)` placeholders.

```lua title="Example"
Config.VehicleSpawn    = { coords = Vector(0, 0, 0), heading = 0 },
Config.HelicopterSpawn = { coords = Vector(0, 0, 0), heading = 0 },
```

### Locations
All hospital interaction points. Every coordinate is a `Vector(0, 0, 0)` placeholder to be set per-map.

- `checking`: hospital check-in points
- `duty`: duty-toggle point
- `vehicle`: ambulance retrieval point
- `helicopter`: helicopter retrieval point
- `stash`: shared EMS stash
- `jailbeds`: recovery beds with a `taken` flag and bed `model`
- `hospital`: named hospitals, each with a `location` and a list of `beds`
- `stations`: station blip/label points

```lua title="Example"
Config.Locations = {
    ['checking'] = {
        { coords = Vector(0, 0, 0) },
        { coords = Vector(0, 0, 0) }
    },
    ['duty'] = {
        { coords = Vector(0, 0, 0), rotation = Rotator(0, 0, 0) }
    },
    ['vehicle'] = {
        { coords = Vector(0, 0, 0) }
    },
    ['helicopter'] = {
        { coords = Vector(0, 0, 0) }
    },
    ['stash'] = {
        { coords = Vector(0, 0, 0) }
    },
    ['jailbeds'] = {
        { coords = Vector(0, 0, 0), taken = false, model = '/QBCoreAssets/Meshes/LP_HospitalBed.LP_HospitalBed' },
        -- ...
    },
    ['hospital'] = {
        {
            ['name']     = Lang.t('info.pb_hospital'), -- 'Pillbox Hospital'
            ['location'] = Vector(0, 0, 0),
            ['beds'] = {
                { coords = Vector(0, 0, 0), heading = 0, taken = false },
                -- ...
            },
        },
    },
    ['stations'] = {
        { label = Lang.t('info.pb_hospital'), coords = Vector(0, 0, 0) }
    }
}
```

### Authorized Vehicles & Helicopters
Grade-gated spawn lists. The grade is the table key and acts as a minimum — higher ranks can also spawn anything available to lower grades. Ambulances spawn with an `AMBU` plate and helicopters with a `LIFE` plate, each followed by four random digits.

```lua title="Example"
Config.AuthorizedVehicles = {
    [0] = {
        ['bp_ambulance'] = 'Ambulance'
    }
}

Config.AuthorizedHelicopters = {
    [0] = {
        ['bp_aheli'] = 'EMS Heli'
    }
}
```

### Bones
A map of skeleton bone names to their engine identifiers, used to determine which limb was hit when assessing a patient's injuries. The table is extensive (full skeleton); a short excerpt is shown below.

```lua title="Example"
Config.Bones = {
    ['Head']          = 'head',
    ['Neck']          = 'neck_01',
    ['Spine']         = 'spine_01',
    ['LeftArm']       = 'upperarm_l',
    ['RightArm']      = 'upperarm_r',
    ['LeftForeArm']   = 'lowerarm_l',
    ['RightForeArm']  = 'lowerarm_r',
    ['LeftHand']      = 'hand_l',
    ['RightHand']     = 'hand_r',
    ['LeftThigh']     = 'thigh_l',
    ['RightThigh']    = 'thigh_r',
    ['LeftCalf']      = 'calf_l',
    ['RightCalf']     = 'calf_r',
    ['LeftFoot']      = 'foot_l',
    ['RightFoot']     = 'foot_r',
    -- ...full skeleton continues
}
```
