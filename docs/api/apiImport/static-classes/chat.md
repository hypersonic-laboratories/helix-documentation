---
title: Chat
description: Configure, send and intercept chat messages
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Chat" is_static />
Configure, send and intercept chat messages.

## Examples

```lua title="Server/Index.lua"
-- sends a chat message to everyone
Chat.Broadcast("Welcome to the server!")

-- sends a message to a specific player (server only)
Chat.SendMessage('You just got your paycheck!.', player)
```

```lua title="Client/Index.lua"
-- registers a command 
Chat.RegisterCommand('ping', {}, 'Pong', function(args)
    Chat.AddMessage('Pong!')
end)

-- sends a chat message locally (client only)
Chat.AddMessage('You just got your paycheck!.')

```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Chat" />
### AddMessage

Adds a chat message which will display local only

```lua
Chat.AddMessage(message) -- client side only 
```

| Type              | Parameter              |Default                | Description                        |
|-------------------|------------------------|-----------------------|------------------------------------|
| [string](#string) | `message`              |                       | `The message to send`              |    


### SendMessage

Sends a chat message to a Player only

```lua
Chat.SendMessage(message, player) -- server side only 
```

| Type              | Parameter              |Default                | Description                        |
|-------------------|------------------------|-----------------------|------------------------------------|
| [string](#string) | `message`              |                       | `The message to send`              |   
| [Player](#Player) | `player`               |                       | `The player to receive the message`| 


### Broadcast
```lua
Chat.Broadcast(message)  -- server side only
```

Sends a chat message to all Players

| Type              | Parameter              |Default                | Description                        |
|-------------------|------------------------|-----------------------|------------------------------------|
| [string](#string) | `message`              |                       | `The message to broadcast`         |   

### RegisterCommand

Registers a chat and console command. 

```lua
Chat.RegisterCommand(name, paramDefs, description, cb) -- client side only 
```

| Type              | Parameter              |Default                | Description                                        |
|-------------------|------------------------|-----------------------|----------------------------------------------------|
| [string](#string) | `name`                 |                       | `Command name`                                     |   
| [table](#table)   | `paramDefinitions`     |                       | `Param Definitions`                                |   
| [string](#string) | `description`          |                       | `Command description`                              |   
| [function](#callback)   | `callback`       |                       | `Function to run when command is executed`   |   

### SetVisibility

Sets if the Chat is visible or not

```lua
Chat.SetVisibility(is_visible) -- client side only 
```

| Type                | Parameter              |Default                | Description                        |
|---------------------|------------------------|-----------------------|------------------------------------|
| [boolean](#boolean) | `is_visible`           |                       | `Whether it is visible or not`     |   

### Clear

Clears all messages

```lua
Chat.Clear() -- client side only 
```
### IsReady

Returns if the chat is constructed 

```lua
Chat.IsReady() -- client side only 
```
### GetWidget

Returns the chat widget

```lua
Chat.GetWidget() -- client side only 
```

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
Chat.Broadcast("<cyan>Hello</> <bold>world!</>")
```

> **Note**   
> The chat renderer supports **one tag at a time** per span.  
> Combinations such as bold + red are *not* supported.



<EventsDeclaration type="StaticClass" name="Chat" />