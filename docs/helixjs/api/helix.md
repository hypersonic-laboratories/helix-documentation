---
title: Helix
description: Core runtime for client and server-side scripting
---

## Description

Core runtime for client and server-side scripting. Use `Helix.client` and `Helix.server` to run code in the correct context; use `Helix.on` and `Helix.emit` for custom events and `Helix.endpoint` / `Helix.call` for RPC. Other APIs are exposed as members: `Helix.Player`, `Helix.Database`, `Helix.WebUI`, `Helix.Input`, `Helix.State`.

## Methods

### client (callback)

Execute code only on client.

```javascript
Helix.client(() => {
  const ui = new Helix.WebUI('myUI', 'js/my-module/web/index.html')
  console.log('Client-side code running')
})
```

### server (callback)

Execute code only on server.

```javascript
Helix.server(async () => {
  await Helix.Database.connect({ host: 'localhost', database: 'gamedb', username: 'root', password: 'pass', dialect: 'mysql' })
  console.log('Server initialized')
})
```

### on (eventName, callback)

Listen for custom events.

```javascript
Helix.on('CharacterSelected', (character) => {
  console.log('Character selected:', character.firstName)
  Helix.Player.setCharacter(character)
})
```

### emit (eventName, data)

Emit custom events.

```javascript
Helix.emit('CharacterSelected', {
  id: 1,
  firstName: 'John',
  lastName: 'Doe'
})
```

### endpoint (name, handler)

Register RPC endpoint.

```javascript
Helix.endpoint('getCharacters', async (helixId) => {
  const characters = await db.Player.findAll({
    where: { helixId: helixId.toString() }
  })
  return characters.map(c => c.dataValues)
})
```

### call (name, ...args)

Call RPC endpoint. Async.

```javascript
const characters = await Helix.call('getCharacters', helixId)
console.log('Retrieved characters:', characters)
```

### playerJoined (callback)

Handle player join events.

```javascript
Helix.server(() => {
  Helix.playerJoined(async (playerId) => {
    const character = await Helix.Player.fetchData()
    console.log('Player joined:', character.name)
  })
})
```
