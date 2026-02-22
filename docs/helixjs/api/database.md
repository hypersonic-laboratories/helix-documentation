---
title: Helix.Database
description: Database operations with Sequelize
---

## Description

`Helix.Database` provides Sequelize-based database access. Connect to MySQL (or other supported dialects), define models, sync schema, and run create/find/update/remove and raw SQL.

## Methods

### connect (config, source)

Connect to database. Async.

```javascript
await Helix.Database.connect({
  host: 'localhost',
  database: 'gamedb',
  username: 'root',
  password: 'pass',
  dialect: 'mysql'
})
```

### disconnect ()

Disconnect from database. Async.

```javascript
await Helix.Database.disconnect()
console.log('Database disconnected')
```

### listTables ()

List all tables. Async.

```javascript
const tables = await Helix.Database.listTables()
console.log('Tables:', tables)
```

### defineModel (name, schema, options)

Define database model.

```javascript
const Player = Helix.Database.defineModel('Players', {
  id: {
    type: Helix.Database.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  helixId: {
    type: Helix.Database.DataTypes.STRING,
    allowNull: false
  },
  firstName: Helix.Database.DataTypes.STRING,
  health: {
    type: Helix.Database.DataTypes.FLOAT,
    defaultValue: 100
  }
})
```

### sync (force)

Sync models with database. Async.

```javascript
await Helix.Database.sync()

await Helix.Database.sync(true)
```

### create (model, data)

Create new record. Async.

```javascript
await Helix.Database.create('Players', {
  helixId: '76561198067334932',
  firstName: 'John',
  lastName: 'Doe',
  health: 100
})
```

### findOne (model, where)

Find single record. Async.

```javascript
const player = await Helix.Database.findOne('Players', {
  helixId: '76561198067334932',
  active: true
})
console.log('Player:', player.firstName)
```

### findAll (model, where, options)

Find all records. Async.

```javascript
const players = await Helix.Database.findAll('Players', {
  active: true
}, {
  order: [['id', 'ASC']]
})

const highLevelPlayers = await Helix.Database.findAll('Players', {
  level: { [Helix.Database.Op.gte]: 10 }
})
```

### update (model, values, where)

Update records. Async.

```javascript
await Helix.Database.update('Players',
  { health: 100 },
  { helixId: '76561198067334932' }
)

await Helix.Database.update('Players',
  { active: false },
  { helixId: helixId.toString() }
)
```

### remove (model, where)

Delete records. Async.

```javascript
await Helix.Database.remove('Players', {
  helixId: helixId.toString(),
  slot: 1
})
```

### raw (sql, replacements)

Execute raw SQL. Async.

```javascript
const result = await Helix.Database.raw(
  'SELECT * FROM Players WHERE health > :minHealth',
  { minHealth: 50 }
)

await Helix.Database.raw('CREATE DATABASE IF NOT EXISTS `gamedb`')
```

## Exports

### DataTypes

Sequelize data types (STRING, INTEGER, FLOAT, etc). Use as `Helix.Database.DataTypes`.

### Op

Sequelize operators (gte, lte, like, etc). Use as `Helix.Database.Op`.
