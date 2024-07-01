---
title: Server
description: Server represents all Server controls in the Server side.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Server" is_static image={"/img/docs/00_Server.png"} />


## Examples

```lua title="Server/Index.lua"
-- prints "Server started" when the server is starting
Server.Subscribe("Start", function()
    Console.Log("Server started")
end)

-- prints "Server stopped" when the server stops / shutdown
Server.Subscribe("Stop", function()
    Console.Log("Server stopped")
end)

-- prints the delta time about every 33 ms
Server.Subscribe("Tick", function(delta_time)
    Console.Log("Tick: " .. delta_time)
end)
```


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Server" />


## Events

<EventsDeclaration type="StaticClass" name="Server" />
