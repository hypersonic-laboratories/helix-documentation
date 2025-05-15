---
title: Vector
description: A vector composed of components (X, Y, Z) with floating point precision.
tags: [utility-class]
---

<HeaderDeclaration type="Struct" name="Vector" open_source_url="Classes/Vector.lua" />


///info

Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:
* Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision).
* Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw number instead.

///


## Examples

```lua
local new_vector = Vector(1452.5, 512, 943.1)
```


## Constructors

<ConstructorDeclaration type="Struct" name="Vector" />


## 🧽 Properties

<PropertiesDeclaration type="Struct" name="Vector" />


## Functions

///info

This structure supports `+`, `-`, `*`, `/`, `^`, `==`, and `tostring` operations.

///

<FunctionsDeclaration type="Struct" name="Vector" />
