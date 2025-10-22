---
title: Events Guide
description: All you need to know about Events
tags: [ scripting ]
---

Events allow developers to communicate across the network, enabling seamless interaction between the client and server.
These methods simplify the registration and triggering of events, supporting both client-to-server and server-to-client
communication

---

## Functions

### `RegisterServerEvent`

Registers a new event on the server, allowing clients to trigger this event remotely. Use this to define server-side
logic that should respond to client actions or requests. **The first parameter will always be the triggering player**

- eventName `string`
- callback `function`

```lua title="Example"
RegisterServerEvent('myServerEvent', function(player, param)
    print('myServerEvent triggered from player: ' ..player..' with param: '..param)
end)
```

---

### `RegisterClientEvent`

Registers a client-side event, allowing the server to trigger this event remotely on specific or all connected clients.
Useful for updating client-side states or interfaces from server-side logic

- eventName `string`
- callback `function`

```lua title="Example"
RegisterClientEvent('myClientEvent', function(param)
    print('myClientEvent triggered with param: ', param)
end)
```

---

### `TriggerServerEvent`

Triggers a previously registered server-side event from the client, sending necessary data to the server for processing.
Ideal for client-initiated actions requiring server validation or response

- eventName `string`
- param `any`

```lua title="Example"
TriggerServerEvent('myServerEvent', 100)
```

---

### `TriggerLocalServerEvent`

Triggers a registered server-side event from the server without affecting or interacting with any client

- eventName `string`
- param `any`

```lua title="Example"
TriggerLocalServerEvent('myServerEvent', 100)
```

---

### `TriggerClientEvent`

Triggers a client-side event from the server, targeting specific clients. Typically used
to update the client interface or synchronize client state based on server-side decisions

- player `controller`
- eventName `string`
- param `any`

```lua title="Example"
TriggerClientEvent(player, 'myClientEvent', 100)
```

---

### `TriggerLocalClientEvent`

Locally triggers a registered client event from the client allowing for cross-package communication via events without affecting other clients or interacting with the server

- eventName `string`
- param `any`

```lua title="Example"
TriggerLocalClientEvent('myClientEvent', 100)
```

---

### `BroadcastEvent`

Server-side only function to trigger an event on all connected clients

- eventName `string`
- param `any`

```lua title="Example"
BroadcastEvent('myClientEvent', 100)
```