# ⛽ qb-fuel
Empty tank, empty promises.

## Introduction
qb-fuel is intended to handle vehicle refueling at gas stations. Right now it only attaches [qb-target](qb-target.md) interaction options to the configured pump models.

/// warning
This package is a **stub / work-in-progress**. It registers "Fuel Can" and "Refuel" target options on every pump model in `Config.pumpModels`, but both options point at an empty event name (`'qb-fuel:'`) that has **no handler**. There is no working refuel logic, no jerry-can behavior, and no payment. The server file is empty. Pressing the target options does nothing today.
///

## Configuration
All configurable options listed below are found in the `config.lua`

### Pump Models
`Config.pumpModels` is a list of static mesh model names that get the fuel target options attached. Each listed model gains a target with two options ("Fuel Can" / "Refuel"), both wired to the placeholder `'qb-fuel:'` event.

- pumpModels: `table` — list of pump mesh names

```lua title="Example"
Config = {
    pumpModels = { 'SM_Downtown_PetrolStation_Pump_01B' }
}

return Config
```
