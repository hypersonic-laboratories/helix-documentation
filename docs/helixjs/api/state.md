---
title: Helix.State
description: Global state management
---

## Description

`Helix.State` is an in-memory key-value store. Use `set` to store and `get` to retrieve. Useful for game mode, round number, or other shared state (single process).

## Methods

### set (key, value)

Set state value.

```javascript
Helix.State.set('gameMode', 'deathmatch')
Helix.State.set('roundNumber', 1)
Helix.State.set('maxPlayers', 32)
```

### get (key)

Get state value.

```javascript
const gameMode = Helix.State.get('gameMode')
console.log('Current mode:', gameMode)

const roundNumber = Helix.State.get('roundNumber')
console.log('Round:', roundNumber)
```
