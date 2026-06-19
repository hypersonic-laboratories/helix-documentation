---
title: Helix.Player
description: Player management and character data
---

## Description

`Helix.Player` provides player and character APIs: pawn, controller, HELIX ID, health changes, and cached character data. Use `fetchData` and `setCharacter` for persistence.

## Methods

### onHealthChanged (callback)

Listen for health changes. Async.

```javascript
Helix.Player.onHealthChanged((oldHealth, newHealth) => {
  console.log(`Health: ${oldHealth} -> ${newHealth}`)
  if (newHealth <= 0) {
    console.log('Player died')
  }
})
```

### getPawn ()

Get player pawn actor.

```javascript
const pawn = Helix.Player.getPawn()
if (pawn) {
  console.log('Pawn name:', pawn.GetName())
}
```

### getController ()

Get player controller.

```javascript
const controller = Helix.Player.getController()
if (controller && controller.GetControlRotation) {
  const rotation = controller.GetControlRotation()
  console.log('Yaw:', rotation.Yaw)
}
```

### helixId ()

Get player HELIX ID.

```javascript
const id = Helix.Player.helixId()
if (id) {
  console.log('Player HELIX ID:', id.toString())
}
```

### revive ()

Respawn the player.

```javascript
if (playerHealth <= 0) {
  Helix.Player.revive()
  console.log('Player respawned')
}
```

### fetchData ()

Fetch character data. Async.

```javascript
const character = await Helix.Player.fetchData()
if (character) {
  console.log('Name:', character.firstName, character.lastName)
  console.log('Health:', character.health)
}
```

### setCharacter (character)

Update character data (e.g. after character select).

```javascript
Helix.on('CharacterSelected', (character) => {
  Helix.Player.setCharacter(character)
  console.log('Character set:', character.firstName)
})
```

### clearCache ()

Clear cached character data.

```javascript
Helix.Player.clearCache()
const freshData = await Helix.Player.fetchData()
console.log('Fresh character data loaded')
```

## Properties

### data

Cached character data.

```javascript
const character = Helix.Player.data
if (character) {
  console.log('Character:', character.firstName)
  console.log('Hunger:', character.hunger)
}
```

### characterId

Current character ID from data.

```javascript
const charId = Helix.Player.characterId
console.log('Current character ID:', charId)
```
