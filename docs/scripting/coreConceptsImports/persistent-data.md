---
title: Persistent Data
description: How to store and retrieve persistent data from disk using the built-in system
tags: [scripting]
---


import { Structs, BasicType } from '@site/docs/components/_nanos.mdx';

How to store and retrieve persistent data from disk using the built-in system.

In HELIX it is possible to store and retrieve data from disk with simple functions.

///tip

It is possible to store Persistent Data in both **Client** and **Server**!

///

## File Format

The persistent data is automatically stored in the **TOML** format in the file `PersistentData.toml` inside your Package/ folder. This file is only created if you call `Package.SetPersistentData()`.

## Storing and Retrieving data

All **PersistentData** files are loaded automatically when the Package loads and stored in memory. You can easily access the whole file with `Package.GetPersistentData()` method.

For storing data you will need to pass a `key` value, which will store <BasicType.Any /> lua value in that key.

## Examples

```lua
local my_table = {
    my_id = 123,
    my_data_02 = "data"
}

Package.SetPersistentData("awesome_table", my_table)

-- PersistentData.toml will be:
-- awesome_table = {my_id = 123, my_data_02 = "data"}
```

```lua
local my_table = Package.GetPersistentData().awesome_table

Console.Log(my_table.my_id)

-- Will print:
-- 123
```
