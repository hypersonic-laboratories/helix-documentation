---
title: Communicating with Events
tags: [scripting]
---
# Communicating with Events
This page shows how to use the global event system to send structured data between the client and server in your game.
Events can include a wide range of arguments like strings, numbers, booleans, `nil`, vectors, and tables.
Both sides of the network can register handlers and trigger events using the `TriggerServerEvent` and `TriggerClientEvent` functions on the player controller.

/// tip
The triggering controller is passed automatically as the first parameter when a client triggers a server event — similar to how `source` is passed in FiveM
///

## Registering Client Events
Use `RegisterClientEvent(name, callback)` to listen for events on the **client-side**.
These handlers will be called when the server triggers an event targeted to the client

```lua title="Example"
RegisterClientEvent('TestClient', function(str, num, bool, nil_val, vec, tbl)
    print('--------------------------------------------')
    print('CLIENT TestClient EVENT')
    print('  String:', str, 'Type:', type(str))
    print('  Number:', num, 'Type:', type(num))
    print('  Boolean:', bool, 'Type:', type(bool))
    print('  Nil:', nil_val, 'Type:', type(nil_val))
    print('  Vector:', vec, 'Type:', type(vec))
    print('  Table:', tbl, 'Type:', type(tbl))
    print('--------------------------------------------')
end)
```

---

## Registering Server Events
Use `RegisterServerEvent(name, callback)` to listen for events on the **server-side**.
These handlers receive the triggering player controller as the first argument, followed by the arguments sent from the client

```lua title="Example"
RegisterServerEvent('TestServer', function(controller, str, num, bool, nil_val, vec, tbl)
    print('--------------------------------------------')
    print('SERVER TestServer EVENT from', controller)
    print('  String:', str, 'Type:', type(str))
    print('  Number:', num, 'Type:', type(num))
    print('  Boolean:', bool, 'Type:', type(bool))
    print('  Nil:', nil_val, 'Type:', type(nil_val))
    print('  Vector:', vec, 'Type:', type(vec))
    print('  Table:', tbl, 'Type:', type(tbl))
    print('--------------------------------------------')

    controller:TriggerClientEvent('TestClient', str, num, bool, nil_val, vec, tbl)
end)
```

---

## Triggering Client Events
Use `controller:TriggerClientEvent(name, ...)` from the server to send a message to a specific client.
All extra arguments are automatically serialized and passed into the client handler.
This method works for client -> client and server -> client

```lua title="Example"
-- Inside a server event or server-side function
controller:TriggerClientEvent('TestClient', "Hello from Server", 100, true, nil, Vector(100, 100, 100), { value = 42 })
```

---

## Triggering Server Events
Use `controller:TriggerServerEvent(name, ...)` from the client to send a message to the server.
All arguments will be received by the registered server handler with the triggering controller passed in automatically.
This method works for server -> server and client -> server

```lua title="Example"
-- Inside client logic
controller:TriggerServerEvent('TestServer', 'Hello from Client', 100, true, nil, Vector(100, 100, 100), { key = 'value' })
```