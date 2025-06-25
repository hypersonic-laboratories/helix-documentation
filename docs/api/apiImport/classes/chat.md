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

## Text Formatting

| Preview | Tag to type | Purpose |
|---------|-------------|---------|
| <span style="color:#00FFFF">Cyan text</span> | ``<cyan>`` | Cyan foreground |
| <span style="color:#3ddb42">Green text</span> | ``<green></>`` | Green foreground |
| <span style="color:#3184ff">Blue text</span>  | ``<blue></>``  | Blue foreground |
| <span style="color:#8c5bff">Purple text</span>| ``<purple></>``| Purple foreground |
| <span style="color:#596c7a">Marengo text</span>| ``<marengo></>``| Marengo/grey-blue |
| <span style="color:#ffd337">Yellow text</span>| ``<yellow></>``| Yellow foreground |
| <span style="color:#ff9a38">Orange text</span>| ``<orange></>``| Orange foreground |
| <span style="color:#f15151">Red text</span>   | ``<red></>``   | Red foreground |
| <span style="color:#aaaaaa">Grey text</span>  | ``<grey></>``  | Grey foreground |
| **Bold text** | ``<bold>Text</>`` | Bold weight |
| *Italic text* | ``<italic></>`` | Italic style |

/// info
Always remember to close the tag using &lt;/&gt;
///

### Quick example

```lua
Chat.Broadcast('<cyan>Hello</> <bold>world!</>')
```

///  warning
It is NOT possible to combine two or more styles together /(eg.: Bold + Red/).
///