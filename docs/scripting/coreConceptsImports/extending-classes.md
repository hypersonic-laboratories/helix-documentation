---
title: Extending Classes
description: How to extend HELIX Classes
sidebar_position: 8
tags: [scripting]
status: old
---

--8<-- "old.md"


How to extend HELIX Classes, HELIX provides a built-in way of extending and customizing the Classes

/// warning

This feature is still **experimental**, you can try it out and provide feedback before it's full release!

///

/// warning

Extending Classes can be very useful and speed up the development. Although the code may become very complex and hard for newcomers to understand. As it will start using non-documented methods and accessors.

///


### Adding new Methods

Adding new methods for classes is the most straightforward way, let's say we want to add a new method for **Player**, we just do that:

```lua
function Player:AddScore(score)
	self:SetValue("score", self:GetValue("score", 0) + score)
end
```

///tip

Within your methods, you can access the called entity instance with `self`.

///

And then you are able to call it as usual:

```lua
local my_player = GetPlayerSomehow()
my_player:AddScore(10)
```

///tip

Extending Classes will have effect only on the Package and the side you are! You can define all new methods in the `Shared` folder to have it applied on both Client and Server!

///


### Overriding Existing Methods

Besides creating new methods, it's possible to override existing ones, for that, just redefine them:

```lua
function Character:SetLocation(new_location)
	-- ... Do something
end
```

And you can call a special method called `:Super()` to call the original method as well:

```lua
function Character:SetLocation(new_location)
	-- ... Do something
    self:Super(new_location + Vector(1, 2, 3))
end
```


### Overriding `__newindex`

It is also possible to add a custom `__newindex` metamethod on Classes.

///tip

`__newindex` metamethod is a function which is triggered when you attempt to **set** a value in an entity. E.g.: `my_prop.something = 123`.

///

For that, we just add a custom method called **`newindex`**:

```lua
function Player:newindex(key, value)
	Console.Log("Setting a %s value: %s = %s", tostring(self), key, tostring(value))
end
```

An useful way of using `__newindex` is overriding it to `SetValue` automatically:

```lua
function Player:newindex(key, value)
    self:SetValue(key, value)
end

local my_player = GetPlayerSomehow()
my_player.amazing_value = 123
```


### Overriding `__index`

///tip

`__index` metamethod is a function which is triggered when you attempt to **get** a value from an entity. E.g.: `local value = my_prop.something`.

///

For that, we just add a custom method called **`index`**:

```lua
function Player:index(key)
	Console.Log("Getting %s value: %s", tostring(self), key)
    -- ... do something
    return some_value
end
```

An useful way of using `__index` is overriding it to `GetValue` automatically:

```lua
function Player:index(key)
    return self:GetValue(key)
end

local my_player = GetPlayerSomehow()
local amazing_value = my_player.amazing_value
```
