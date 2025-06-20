---
title: Discord
description: interacting with discord
tags: [base-class]
---
`Discord` is a utility class that allows Lua scripts to create, configure, and update Discord Rich Presence. It provides modular functions for setting activity metadata, assets, party info, secrets, and interactive buttons using Unreal Engine’s Discord SDK.

![](/img/docs/discord.jpg)

## Constructor
<ConstructorDeclaration type="Class" name="Discord" />

```lua title="Example"
local activity = Discord.Initialize {
    appId = "123456789012345678",
    details = "Exploring the map",
    state = "Downtown"
}

Discord.SetAssets(activity, {
    largeImage = "city",
    largeText = "Downtown City",
    smallImage = "hat",
    smallText = "Wearing Fedora"
})

Discord.SetParty(activity, {
    id = "group-abc",
    size = 2,
    max = 4
})

Discord.SetSecrets(activity, {
    join = "join_code_xyz"
})

Discord.SetButtons(activity, {
    { label = "Join Me", url = "https://example.com/join" }
})

Discord.Update(activity)
```

## Functions

### `Initialize`
Creates a new Discord activity and applies basic metadata

- config: `table`
- appId: `string` (optional)
- details: `string` (optional)
- state: `string` (optional)
- <span style="color: #facc15;">returns:</span> UDiscordActivity

```lua title="Example"
local activity = Discord.Initialize {
    appId = "123456789012345678",
    details = "Main Menu",
    state = "Idle"
}
```

---

### `SetAssets`
Sets Discord image keys and hover tooltips

- activity: `UDiscordActivity`
- assets: `table`
- largeImage: `string` (optional)
- largeText: `string` (optional)
- smallImage: `string` (optional)
- smallText: `string` (optional)

```lua title="Example"
Discord.SetAssets(activity, {
    largeImage = "world",
    largeText = "Earth View",
    smallImage = "badge",
    smallText = "Explorer"
})
```

---

### `SetParty`
Adds party information to the activity

- activity: `UDiscordActivity`
- party: `table`
- id: `string` (optional)
- size: `number` (optional)
- max: `number` (optional)

```lua title="Example"
Discord.SetParty(activity, {
    id = "party-123",
    size = 3,
    max = 5
})
```

---

### `SetSecrets`
Sets join secrets for enabling Discord join feature

- activity: `UDiscordActivity`
- secrets: `table`
- join: `string` (optional)

```lua title="Example"
Discord.SetSecrets(activity, {
    join = "secret-token-abc"
})
```

---

### `SetButtons`
Adds one or more clickable buttons to the activity

- activity: `UDiscordActivity`
- buttons: `table`
- label: `string`
- url: `string`

```lua title="Example"
Discord.SetButtons(activity, {
    { label = "Join Game", url = "https://example.com/join" },
    { label = "Visit Site", url = "https://example.com" }
})
```

---

### `Update`
Pushes the constructed activity to Discord Rich Presence.

- activity: `UDiscordActivity`
- callback: `function` (optional) — Called with the result when the update completes

```lua title="Example"
Discord.Update(activity, function(success)
    print("Update result:", success)
end)
```