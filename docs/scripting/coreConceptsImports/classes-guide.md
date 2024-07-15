---
title: Classes Guide
description: All you need to know about Classes
sidebar_position: 0
tags: [scripting]
status: old
---

--8<-- "old.md"


All you need to know about Classes

All entities in HELIX are represented by a Class. In Lua, classes are represented by [tables](/scripting-reference/glossary/basic-types.md#table). That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an [OOP \(Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) pattern\). In this page we will explain more about that.

///tip

In HELIX we have 3 types of Classes (or structures): `Classes`, `Static Classes` and `Utility Classes`.

///


## Classes

If you read our [Quick Start](/getting-started/quick-start.mdx) guide, you noticed we were spawning entities in the following format:

```lua
-- Spawning an entity with a Constructor
local my_entity = Entity()

-- Interacting with the entity with it's methods
my_entity:MyFunction()
```

///tip

Access to **Entities / Spawned Objects** **Methods** are made with **`:`**.

///

This is how **OOP** works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, HELIX scripting is a **modern approach** to **modern programming**.


### Base Classes

Under the hood, HELIX Classes follow an [Inheritance Pattern](https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29), which means we have base parent classes, and it's children which "inherits" all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are [Actors](/scripting-reference/classes/base-classes/actor.mdx), for example in [Character](/scripting-reference/classes/character.mdx) and [Prop](/scripting-reference/classes/prop.mdx) it is possible to call the function: `:SetLocation(Vector)`.

///info

The [Base Class Actor](/scripting-reference/classes/base-classes/actor.mdx) is a very important class in HELIX. It contains the most of methods which are shared through all Classes we have, and also **Static Methods** to get and retrieve entities directly.

///


### Spawning Entities

Spawning entities in HELIX is extremely easy and straightforward, let's say we want to spawn a Character:

```lua title="Server/Index.lua"
local my_character = Character()
```

///tip

Each Class will contain it's own **Constructor**, **Properties**, **Methods** and **Events**.

Check all Classes that HELIX provides in the sidebar **Scripting Reference -> Classes** item.

///

///info

Keep in mind that some Classes can only be spawned in the **Server**, others can only be spawned in the **Client**.

///


### Destroying Entities

All classes \(but Player\) allow you to destroy them with the method `Destroy()`:

```lua title="Server/Index.lua"
my_character:Destroy()
```

///info

Destroying an Entity will trigger the event `Destroy` and also will automatically detach all attached entities it had attached*.

**If you attached entities with `auto_destroy_when_detached` parameter, all attached entities will be destroyed as well 😉*.

///


## Static Classes

Static Classes in HELIX are Classes which you cannot Spawn. Instead you can use it's methods directly with `.`.

For example, if you want to interact with World \(move the sun, set it raining, etc\), you will need the `World` Static Class:

```lua title="Client/Index.lua"
-- Makes it 9:25 AM
World.SetTime(9, 25)
```

///tip

Access to **Static Classes / Static Methods** are made with **`.`**.

///


## Utility Classes

Besides Classes and Static Classes, we have the **Utility Classes**! Those are mostly structs used in HELIX API such as Vector, Rotator, Color, JSON and some others.
