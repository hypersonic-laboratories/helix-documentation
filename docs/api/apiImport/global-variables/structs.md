---
title: Structs
description: HELIX Structs
tags: [scripting]
---
<HeaderDeclaration type="Struct" name="Structs" />

## Quat
<QuatDeclaration type="Struct" name="Quat" />
Represents a quaternion used for smooth rotation calculations and interpolation without gimbal lock. Commonly used for 3D orientation

```lua title="Example"
local rotation = Quat(0.0, 0.0, 0.7071, 0.7071) -- 90° rotation around Z-axis
```

---

## LinearColor
<LinearColorDeclaration type="Struct" name="LinearColor" />
Represents a high-precision color in linear color space. Useful for HDR lighting and physically based rendering

```lua title="Example"
local sky_blue = LinearColor(0.4, 0.6, 1.0, 1.0) -- RGBA values in linear space
```

---

## Vector
<VectorDeclaration type="Struct" name="Vector" />
Represents a 3D point or direction with X, Y, Z components

```lua title="Example"
local location = Vector(1000.0, 200.0, 300.0) -- Position in world space
```

---

## Vector2D
<Vector2DDeclaration type="Struct" name="Vector2D" />
Represents a 2D vector with X and Y components. Often used for UI layout, screen positions, or texture coordinates

```lua title="Example"
local screen_pos = Vector2D(1920, 1080) -- Screen resolution
```

---

## Rotator
<RotatorDeclaration type="Struct" name="Rotator" />
Represents a set of Euler angles in degrees for Pitch (X), Yaw (Y), and Roll (Z) rotation

```lua title="Example"
local facing_north = Rotator(0, 0, 0) -- No rotation
local tilt_down = Rotator(-30, 0, 0) -- Pitch down by 30 degrees
```

---

## Transform
<TransformDeclaration type="Struct" name="Transform" />
Represents a combination of translation (Vector), rotation (Quat or Rotator), and scale (Vector). Used to position objects in 3D space

```lua title="Example"
local pos = Vector(100, 200, 300)
local rot = Rotator(0, 90, 0)
local scale = Vector(1, 1, 1)
local transform = Transform(pos, rot, scale)
```

---

## Color
<ColorDeclaration type="Struct" name="Color" />
Represents a color using 8-bit per channel sRGB values (0–255), suitable for most UI and non-HDR use cases

```lua title="Example"
local red = Color(255, 0, 0, 255) -- Fully opaque red
```

| **Value** | **Name** |
| :--- | :--- |
| `Color(1, 1, 1)` | **`Color.WHITE`** |
| `Color(0, 0, 0)` | **`Color.BLACK`** |
| `Color(0, 0, 0, 0)` | **`Color.TRANSPARENT`** |
| `Color(1, 0, 0)` | **`Color.RED`** |
| `Color(0, 1, 0)` | **`Color.GREEN`** |
| `Color(0, 0, 1)` | **`Color.BLUE`** |
| `Color(1, 1, 0)` | **`Color.YELLOW`** |
| `Color(0, 1, 1)` | **`Color.CYAN`** |
| `Color(1, 0, 1)` | **`Color.MAGENTA`** |
| `Color(1, 0.5, 0)` | **`Color.ORANGE`** |
| `Color(0.5, 1, 1)` | **`Color.CHARTREUSE`** |
| `Color(0, 1, 0.5)` | **`Color.AQUAMARINE`** |
| `Color(0, 0.5, 1)` | **`Color.AZURE`** |
| `Color(0.5, 0, 1)` | **`Color.VIOLET`** |
| `Color(1, 0, 0.5)` | **`Color.ROSE`** |

---

## TArray
<TArrayDeclaration type="Struct" name="TArray" />
A generic, dynamic array container similar to std::vector in C++ or Lua tables, but with explicit control over capacity, type safety, and memory layout. Used to store a sequence of elements with built-in utility methods

```lua title="Example"
local MyArray = TArray("int") -- Creates a typed array of integers
```

```lua title="Usage"
-- Create a typed array of strings
local items = TArray("string")

-- Add and AddUnique
items:Add("Apple")
items:Add("Banana")
items:AddUnique("Banana") -- Won't be added again

-- Insert at specific index
items:Insert("Orange", 1) -- Insert at index 1

-- Find index of an item
local orangeIndex = items:Find("Orange")

-- Remove by index
items:Remove(orangeIndex)

-- Remove by item
items:RemoveItem("Banana")

-- Get number of elements
print("Length:", items:Length())
print("Num:", items:Num()) -- Alias for Length

-- Get and Set items
local firstItem = items:Get(0)
items:Set(0, "Mango")

-- GetRef returns a reference (for modifying structs)
local ref = items:GetRef(0)
print("Ref to first item:", ref)

-- Check if array contains something
if items:Contains("Mango") then
    print("We have Mango!")
end

-- Validity check
if items:IsValidIndex(0) then
    print("Index 0 is valid.")
end

-- Swap elements
items:Add("Pineapple")
items:Swap(0, 1)

-- Shuffle the array
items:Shuffle()

-- Get last valid index
local lastIndex = items:LastIndex()
print("Last Index:", lastIndex)

-- Append another array
local extras = TArray("string")
extras:Add("Grapes")
extras:Add("Peach")
items:Append(extras)

-- Reserve space (useful for performance)
items:Reserve(20)

-- Resize array to fixed size (fills with nil)
items:Resize(10)

-- Get raw memory address (lightuserdata, unsafe)
local addr = items:GetData(0)
print("Memory address of index 0:", addr)

-- Convert to native Lua table
local native = items:ToTable()
for i, v in ipairs(native) do
    print("Native table item:", v)
end

-- Clear the array
items:Clear()
print("Array cleared. Length:", items:Length())

```

---

## TSet
<TSetDeclaration type="Struct" name="TSet" />
A generic, unordered container for storing unique elements — similar to std::unordered_set in C++ or a Lua table used as a set. TSet ensures there are no duplicates and provides fast lookup and removal

```lua title="Example"
local MySet = TSet("string") -- Creates a typed set of strings
```

```lua title="Usage"
-- Create a typed set of integers
local numbers = TSet("int")

-- Add elements
numbers:Add(5)
numbers:Add(10)
numbers:Add(5) -- Duplicate, ignored

-- Get size of the set
print("Length:", numbers:Length())
print("Num:", numbers:Num()) -- Alias for Length

-- Check if set contains an item
if numbers:Contains(10) then
    print("10 is in the set")
end

-- Remove an item
local removed = numbers:Remove(5)
print("Removed 5:", removed) -- true

-- Remove non-existent item
local failed = numbers:Remove(99)
print("Removed 99:", failed) -- false

-- Convert to TArray
local asArray = numbers:ToArray()
print("As TArray, length:", asArray:Length())

-- Convert to Lua table
local luaTable = numbers:ToTable()
for _, v in ipairs(luaTable) do
    print("Lua table item:", v)
end

-- Clear the set
numbers:Clear()
print("Set cleared. Length:", numbers:Length())

```

---

## TMap
<TMapDeclaration type="Template" name="TMap" />
A generic key-value container similar to std::unordered_map in C++ or a Lua table with indexed keys. It provides fast lookup, replacement, and key/value iteration with type safety

```lua title="Example"
local map = TMap("string", "int") -- Creates a map with string keys and integer values
```

```lua title="Usage"
-- Create a typed map with string keys and int values
local scores = TMap("string", "int")

-- Add key-value pairs
scores:Add("Alice", 1200)
scores:Add("Bob", 950)
scores:Add("Charlie", 1500)

-- Overwrite an existing key
scores:Add("Alice", 1300) -- Replaces old value

-- Get number of entries
print("Length:", scores:Length())
print("Num:", scores:Num()) -- Alias for Length

-- Find values
local aliceScore = scores:Find("Alice")
print("Alice's score:", aliceScore)

-- FindRef returns reference (if applicable in your system)
local ref = scores:FindRef("Bob")
print("Reference to Bob's score:", ref)

-- Remove entry
local removed = scores:Remove("Charlie")
print("Removed Charlie:", removed) -- true

-- Remove non-existent key
local failed = scores:Remove("Eve")
print("Removed Eve:", failed) -- false

-- Get all keys
local keys = scores:Keys()
for i = 0, keys:Length() - 1 do
    print("Key:", keys:Get(i))
end

-- Get all values
local values = scores:Values()
for i = 0, values:Length() - 1 do
    print("Value:", values:Get(i))
end

-- Convert to Lua table
local luaTable = scores:ToTable()
for k, v in pairs(luaTable) do
    print("Lua table entry:", k, v)
end

-- Clear the map
scores:Clear()
print("Map cleared. Length:", scores:Length())

```