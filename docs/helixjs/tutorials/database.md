---
title: Database setup and models
---

# Database setup and models

Use `Helix.Database` to connect to MySQL (or another supported dialect), define models, and run queries. All of this runs on the server only, inside `Helix.server`. 
## Config

You need connection options (host, database, username, password, dialect). Where they come from is up to you: a config file, environment variables, or hardcoded values for local dev. One option is to read a config file from your workspace and parse it

Below is an example for using a file named `config.hx` in the same directory as your scripts. (e.g. `js/config.hx`)

```

set DATABASE_HOST "127.0.0.1"
set DATABASE_PORT 3306
set DATABASE_NAME "helix"
set DATABASE_USER "helix"
set DATABASE_PASSWORD "helix"

```

```javascript
function loadConfig() {
  const path = require('path');
  const fs = require('fs');
  const configPath = path.resolve(__dirname, '../config.hx');
  if (!fs.existsSync(configPath)) return null;
  const content = fs.readFileSync(configPath, 'utf8');
  const config = {};
  for (const line of content.split('\n')) {
    const match = line.match(/set\s+(\w+)\s+"([^"]+)"/);
    if (match) config[match[1]] = match[2];
  }
  return config;
}
```


## Connect and define models

Call `Helix.Database.connect` with your options. After a successful connect, define models with `defineModel`. Use `Helix.Database.DataTypes` for column types (INTEGER, STRING, FLOAT, BOOLEAN, TEXT, etc.) and optional `allowNull`, `defaultValue`, `primaryKey`, `autoIncrement`.

```javascript
const success = await Helix.Database.connect(connectionOptions);
if (success) {
  MyModel = Helix.Database.defineModel('MyTable', {
    id: { type: Helix.Database.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: Helix.Database.DataTypes.STRING,
    value: { type: Helix.Database.DataTypes.FLOAT, defaultValue: 0 }
  });
}
```

Define as many models as your game needs. Store the returned model reference if you need it for `findAll`, `findOne`, `create`, `update`, `destroy`. Then call `sync()` so the tables exist.

## Create database if missing

If the database name does not exist yet, connect without the `database` option, run `Helix.Database.raw('CREATE DATABASE IF NOT EXISTS `dbname`')`, disconnect, then connect again with the full config and define/sync models.

## Using models in endpoints

Inside `Helix.server`, after connect and sync, use the model for CRUD. Sequelize returns instances; use `.dataValues` when you need a plain object to send back from an endpoint (e.g. over `Helix.call`). For conditions like `column >= value`, use `Helix.Database.Op`: e.g. `{ level: { [Helix.Database.Op.gte]: 10 } }`.
