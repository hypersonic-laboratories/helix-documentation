---
title: Using External Datastores
description: How to keep information through the game.
sidebar_position: 8
tags: []
status: old
---

--8<-- "old.md"

This document contains information to setup a database in another server and link it back to HELIX Worlds.


The HELIX API has two options for Database usage on two Server Classes. Before we start understanding how Databases work, let’s discuss some definitions:

### Database

A Database is an external storage of information (data) that can be queried and executed from the Server. 

### Key

The key is what is the identifier to find what exact data you are looking for. For example if you are storing a Player’s cash, you would want to use the Player’s ID.

### Value

A value is what data you want to save and is associated with a Key. This could be data for a shop, a player’s cash, levels or backpack and it is normally in a JSON format.

### SQL

SQL is a querying code language that you use to affect your database, such as creating, reading, updating & deleting (CRUD Operations).

### Thread

In LUA a thread is a small, independent program inside your main program. These threads can do their own tasks but cooperate with each other. Unlike separate programs or native threads, Lua threads work together, taking turns to run. You control their behavior using special functions.

### Async (Asynchronous)

Async is a form of query/execution on the database that will create a completely new thread separate from the main thread of code and wont wait or interrupt the main thread so if there’s any intense or slow code, the database will run regardless. When using the Database Entity Class, we recommend using the Async methods.

```lua
function LoadAll() --recieves the data from the database
    DB:SelectAsync("SELECT * FROM info",

    function(rows,error)  
        print(HELIXTable.Dump(rows),error)
    
        for i,data in pairs(rows) do
            print(i,data)
        end
    end)

end

function Create(data) --inserts into database with a JSON format
    local query = 'INSERT INTO info(identifier,data)VALUES(:0, :0)'
    DB:ExecuteAsync(query,function(rows_affected, error) print(rows_affected, error) end,math.random(1,100),JSON.stringify(data))
end
```
Server/Index.lua
___
## Database - Entity Class

### Explanation

The Database Entity is a creatable entity where you will reference the Engine and the connection to the Database. We recommend using MySQL and to use HeidiSQL to view your database.

### Setting up

Coding SQL query stuff
```lua
-- Creates a SQLite connection, using a local file called 'database_filename.db'
local sqlite_db = Database(DatabaseEngine.SQLite, "db=database_filename.db timeout=2")

-- Creates a table
sqlite_db:Execute([[
    CREATE TABLE IF NOT EXISTS test (
        id INTEGER,
        name VARCHAR(100)
    )
]])

-- Insert values in the table
local affected_rows = sqlite_db:Execute("INSERT INTO test VALUES (1, 'amazing')")
Console.Log("Affected Rows: " .. tostring(affected_rows))
-- Will output: 1

-- Selects the data
local rows = sqlite_db:Select("SELECT * FROM test")
Console.Log(HELIXTable.Dump(rows))
-- Will output a table with all data from 'test'

-- Selects the data with filter
local rows_filter = sqlite_db:Select("SELECT * FROM test WHERE name = :0", "amazing")
Console.Log(HELIXTable.Dump(rows_filter))
-- Will output a table with all data from 'test' where name matches 'amazing'
```
Server/Index.lua

