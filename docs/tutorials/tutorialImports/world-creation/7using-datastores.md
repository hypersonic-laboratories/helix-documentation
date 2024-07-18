---
title: Using Persistent Datastores
description: How to keep information through the game.
sidebar_position: 7
tags: []
status: old
---

--8<-- "old.md"

> 💡 Databases allow you to add a new dimension to your game with persistent gameplay elements and is key to increase player retention

## PersistentDatabase - Static Class

### Explanation

`PersistentDatabase` is a static class that you can save data into your World without needing an external database. It is sent to the HELIX Master Server API so you do not need to worry about maintaining a Database Server. For new users, we recommend using this as it is most similar to the Roblox Database API, where you have the core CRUD operations. 

### Usage

There is no software set up needed as its stored by HELIX, you just need to start coding.

The main methods for PersistentDatabase Class is:

> Create - To open the PersistentDB and can now be used with the callback function

```lua
PersistentDatabase.Create(function(success)
    if success then
        print("New space created.")
        InsertIntoDatabase(key, json)
        GetMyKey(key)
    end
end)
```
___

> Insert - Will put your data into the DB with your key

```lua
function InsertIntoDatabase(key, json)
    PersistentDatabase.Insert(key, json, function(success)
        if success then
            print("Key " .. key .. " inserted.") -- Key UniqueKey inserted.
        end
    end)
end
```
___
> Update - After giving it the key param, you can now update the old data

```lua
function UpdateInfoDatabase(key, json)
    PersistentDatabase.Update(key, json, function(success)
        if success then
            print("Key " .. key .. " updated.") -- Key UniqueKey updated.
        end
    end)
end
```
___
> Delete - After giving it the key param, you can delete selected data
```lua
function DeleteKeyDatabase(key)
    PersistentDatabase.Update(key, function(success)
        if success then
            print("Key " .. key .. " deleted.") -- Key UniqueKey deleted.
        end
    end)
end
```
___

> GetByKey - Returns your value from the key you passed as a parameter

```lua
function GetData(key)
    PersistentDatabase.GetByKey(key, function(success,data)
        if success then
            print(key..": " .. data) -- Key UniqueKey deleted.
        end
    end)
end
```
___

> GetAll - Returns a table of your entire DB

```lua
function GetAll()
    PersistentDatabase.GetAll(function(success,data)
        if success then
           for i,v in pairs(data) do
							print(i,v)
						end
        end
    end)
end
```
___

```lua
local json = JSON.stringify({ scriptingKey1 = "My data", scriptingKey2 = false, scriptingKey3 = 123, scriptingKey4 = { objKey1 = "My object data",  objKey2 = true}})
local key = "UniqueKey"

function InsertIntoDatabase(key, json)
    PersistentDatabase.Insert(key, json, function(success)
        if success then
            print("Key " .. key .. " inserted.") -- Key UniqueKey inserted.
        end
    end)
end

function GetMyKey(key)
    PersistentDatabase.GetByKey(key, function(success, data)
        if success then
            print(data) -- [{"id":"f49cee2a-900f-4e1f-91e7-44e4a02b024a","key":"UniqueKey","user_id":"eeed3229-47e6-4130-9904-e5bab2deaa32","value":{"scriptingKey1":"My data","scriptingKey2":false,"scriptingKey3":123,"scriptingKey4":{"objKey1":"My object data","objKey2":true}}}]
            local json_ret = JSON.parse(data) -- Parse JSON data
            print(json_ret[1]["value"]["scriptingKey1"]) --  My data
        end
    end)
end

PersistentDatabase.Create(function(success)
    if success then
        print("New space created.")
        InsertIntoDatabase(key, json)
        GetMyKey(key)
    end
end)
```
Server/Index.lua
