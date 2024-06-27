---
title: HTTP
description: HTTP Requests Interface
tags: [static-class, server]
---

<HeaderDeclaration type="StaticClass" name="HTTP" is_static />


## Examples

```lua title="Server/Index.lua"
-- Makes an asynchronous HTTP Request
HTTP.RequestAsync("127.0.0.1:7777", "/", "GET", "", "application/json", false, {}, function(status, data)
    Console.Log(status) -- 200
    Console.Log(data) -- "{"players_count":0,"server_name":"HELIX server"}"

	-- TIP: You can parse it if it's a json return as well
    local json_ret = JSON.parse(data)
end)
```

```lua title="Server/Index.lua"
-- Makes a synchronous HTTP Request
local ret = HTTP.Request("127.0.0.1:7777", "/", "GET", "", "application/json", false, {})

Console.Log(ret.Status) -- 200
Console.Log(ret.Data) -- "{"players_count":0,"server_name":"HELIX server"}"
```

///tip

All requests are thread safe! 🥳 This means that callbacks are returned on the main thread!

///


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="HTTP" />


## Events

<EventsDeclaration type="StaticClass" name="HTTP" />
