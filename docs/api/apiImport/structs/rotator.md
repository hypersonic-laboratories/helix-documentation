---
title: Rotator
description: A container for rotation information. All rotation values are stored in degrees.
tags: [utility-class]
---

<HeaderDeclaration type="Struct" name="Rotator" open_source_url="Classes/Rotator.lua" />

///info

Rotators are internally and automatically compressed, which reduces it's size in the network up to 90%. Their components are usually compressed into 1 byte each (with some exceptions which we need more precision).

///


## Examples

```lua
local new_rotator = Rotator(-90, 153, 24.5)
```


## Constructors

<ConstructorDeclaration type="Struct" name="Rotator" />


## 🧽 Properties

<PropertiesDeclaration type="Struct" name="Rotator" />


## Functions

///info

This structure supports `+`, `-`, `*` and `tostring` operations.

///

<FunctionsDeclaration type="Struct" name="Rotator" />


## Static Functions

<StaticFunctionsDeclaration type="Struct" name="Rotator" />
