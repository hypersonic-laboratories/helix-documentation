---
title: Events
description: Subscribe for user-defined Events
tags: [static-class]
---

import { Classes } from '@site/docs/components/_nanos.mdx';


<HeaderDeclaration type="StaticClass" name="Events" is_static />


## Examples

///info

_Remote_ means the other side, e.g.: if I'm the **Client**, the remote is the Server. If I'm the **Server**, the remote is the Client.

///


### Basic Usage

```lua title="Client/Index.lua"
-- register for a local Event (local = client only)
Events.Subscribe("MyLocalEvent", function(my_text)
    Console.Log("Event received locally! " .. my_text)
    -- outputs "Event received locally! hello HELIX!"
end)

-- calls a local Event in all Local Packages
Events.Call("MyLocalEvent", "hello HELIX!")

-- register for a server Event (remote = server)
Events.SubscribeRemote("MyClientEvent", function(my_text)
    Console.Log("Event received from server! " .. my_text)
    -- outputs "Event received from server! hello HELIX!"
end)

-- calls a remote Event in all Server Packages
Events.CallRemote("MyServerEvent", "hello HELIX!")
```

///info

On **Server**, registering for remote events has an addition parameter: <Classes.Player />, which is the client who sent the event.

///

```lua title="Server/Index.lua"
-- register for a local Event (local = server only)
Events.Subscribe("MyLocalEvent", function(my_text)
    Console.Log("Event received locally! " .. my_text)
    -- outputs "Event received locally! hello HELIX!"
end)

-- calls a local Event in all Local Packages
Events.Call("MyLocalEvent", "hello HELIX!")

-- register for a client Event (remote = client)
Events.SubscribeRemote("MyServerEvent", function(player, my_text)
    Console.Log(player:GetName() .. " sent an event from client! " .. my_text)
    -- outputs "Syed sent an event from client! hello HELIX!"

    -- sends an "answer" to the player which sent this event
    Events.CallRemote("MyClientEvent", player, "hello HELIX! message only for you!")
end)

-- sends a remote Event to all Players in all Client Packages
Events.BroadcastRemote("MyClientEvent", "hello HELIX!")
```


### Passing entities through Events

```lua
-- register for an Event (remote or local)
Events.Subscribe("MyAnotherEvent", function(my_text, my_vector, my_character, my_number)
    Console.Log("Event received! " .. my_text .. " " .. my_vector.X .. " " .. my_character:GetViewMode() .. " " .. my_number)
    -- outputs "Event received! hello HELIX! 123 1 456"
end)

-- passing Characters through events
local my_temp_character = Character()

-- calls a local Event in all Local Packages
Events.Call("MyEvent", "hello HELIX!", Vector(123, 123, 123), my_temp_character, 456)

-- calls a remote Event in all Server Packages
Events.CallRemote("MyEvent", "hello HELIX!", Vector(123, 123, 123), my_temp_character, 456)
```


///tip

You can find more examples and a compreensive guide at the Events Guide page.

///

<ReferenceLink href="core-concepts/scripting/events-guide">Events Guide</ReferenceLink>


## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Events" />
