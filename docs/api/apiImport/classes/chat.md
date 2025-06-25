---
title: Chat
description: ''
tags: [static-class]
---
Chat is a global utility class that connects Lua scripts to the in-game chat system.
It supports registering custom slash commands, adding chat messages locally, broadcasting announcements, and sending messages to specific players.
Commands registered through `Chat.RegisterCommand(...)` also become usable via the console

/// tip
`Chat` is a static module — you don’t instantiate it. Use `Chat.RegisterCommand(...)`, `Chat.AddMessage(...)`, etc.
///

## Examples

```lua title="Server"
-- sends a chat message to everyone
Chat.Broadcast('Welcome to the server!')

-- sends a message to a specific player (server only)
Chat.SendMessage('You just got your paycheck!', player)
```

```lua title="Client"
-- registers a command
Chat.RegisterCommand('ping', {}, 'Pong', function(args)
    Chat.AddMessage('Pong!')
end)

-- sends a chat message locally (client only)
Chat.AddMessage('You just got your paycheck!')
```

---

## Functions

### `RegisterCommand`
Registers a new custom chat command (e.g. `/noclip`)
```lua
Chat.RegisterCommand('noclip', {}, 'Toggles noclip mode', function(args)
	print('Noclip toggled!')
end)
```

---

### `AddMessage`
Adds a local message to the player's chat feed
```lua
Chat.AddMessage('Welcome to the server!')
```

---

### `Broadcast`
Sends a global announcement to all players
```lua
Chat.Broadcast('The server will restart in 5 minutes')
```

---

### `SendMessage`
Sends a private message to a specific player controller
```lua
Chat.SendMessage('Hello, Player!', TargetPlayer)
```

---

### `Clear`
Clears the chat UI
```lua
Chat.Clear()
```

---

### `SetVisibility`
Shows or hides the chat UI widget
```lua
Chat.SetVisibility(false)
```

---

### `IsReady`
Returns true if the chat widget is currently bound and ready
```lua
if Chat.IsReady() then
	Chat.AddMessage('Chat system ready.')
end
```

---

### `GetWidget`
Returns the current chat UI widget instance
```lua
local ui = Chat.GetWidget()
```

---



### Quick example

```lua
Chat.Broadcast('<cyan>Hello</> <bold>world!</>')
```

///  warning
It is NOT possible to combine two or more styles together /(eg.: Bold + Red/).
///