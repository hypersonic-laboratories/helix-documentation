---
title: Console
description: Log messages on console.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Console" is_static />


## Examples

```lua
Console.RegisterCommand("hello", function(text)
	Console.Log("Sending a 'Hello " .. text .. "' to everyone!")
	Chat.BroadcastMessage("Hello " .. text)
end, "says a message to everyone", { "my_text" })
```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Console" />


## Events

<EventsDeclaration type="StaticClass" name="Console" />