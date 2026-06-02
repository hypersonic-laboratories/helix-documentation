# 📻 qb-radio
Breaker, breaker

## Introduction
qb-radio is a voice radio that lets players talk to one another over a shared frequency. Opening the radio (default key **G**) brings up a UI where you can tune to a channel; joining a channel adds you to the matching HELIX voice channel so everyone on that frequency hears each other. Players need the `radio` item to use it.

## Configuration
All configurable options listed below are found in the `config.lua`

### KeyBind
The key used to open and close the radio UI.

```lua title="Example"
Config.KeyBind = 'G'
```

### RadioItem
The inventory item required to operate the radio.

```lua title="Example"
Config.RadioItem = 'radio'
```

### RestrictedChannels
A list of channels that are intended to be restricted to specific jobs. Each entry is a table of `job = true` flags for the jobs allowed on that channel.

```lua title="Example"
Config.RestrictedChannels = {
    { police = true, ambulance = true },
    { police = true, ambulance = true },
    -- ...one entry per restricted channel
}
```

/// note
The job/on-duty enforcement against `RestrictedChannels` is currently commented out in the client, so channel access is not gated in this build. The table is still defined for when that check is re-enabled.
///

## How channels work
Tuning to a frequency (a positive integer) calls the `JoinVoiceChannel` callback on the server, which adds you to the HELIX voice channel for that frequency. Tuning away or powering off calls `LeaveVoiceChannel`, removing you from it. You can step up or down a channel from the UI, and the radio reports the frequency in MHz when you join.

## Functions

### onRadio
Returns whether the local player is currently connected to a radio channel. Useful for other resources (e.g. the HUD) to react to radio state.

```lua title="Example"
local talking = exports['qb-radio']:onRadio()
if talking then
    -- player is on a radio channel
end
```
