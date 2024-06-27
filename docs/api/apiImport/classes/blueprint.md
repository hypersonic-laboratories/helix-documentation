---
title: Blueprint
description: A Blueprint Class allows spawning any Unreal Blueprint Actor in HELIX.
sidebar_position: 0
tags: [class, client]
---

<HeaderDeclaration type="Class" name="Blueprint" image="/img/docs/blueprint.webp" />

///tip

If your Actor Blueprint was spawned on the Server, it will be automatically synchronized with other players using the HELIX Network Authority system! It follows the same rules as all other entities!

///


## Examples

### Calling Blueprint Events from lua

```lua title=Client/Index.lua
-- Spawns the Blueprint
local blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_MyBlueprint")

local param1 = 123
local param2 = "hello there!"

-- Calls the event, passing any parameters
blueprint:CallBlueprintEvent("MyBlueprintCustomEvent", param1, param2)
```


### Binding Blueprint Event Dispatchers

```lua title=Client/Index.lua
-- Spawns the Blueprint
local blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_MyBlueprint")

-- Subscribes to a Blueprint Event Dispatcher
blueprint:BindBlueprintEventDispatcher("MyBlueprintDispatcher", function(self, arg1, arg2)
    Console.Log("Called from Blueprint!", arg1, arg2)
end)
```


## Constructors

<ConstructorDeclaration type="Class" name="Blueprint" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Blueprint" />



## Functions

<FunctionsDeclaration type="Class" name="Blueprint" />


## Events

<EventsDeclaration type="Class" name="Blueprint" />


## ✅ List of Supported Parameter Types

List of all supported parameters which can be passed between Lua ↔ Blueprint:

| Lua Type | Blueprint Type | Lua → BP | BP → Lua |
| :--- | :--- | :---: | :---: |
| **`boolean`** | **`Boolean`** | ✅ | ✅ |
| **`number`** | **`Byte`** | ✅ | ✅ |
| **`number`** | **`Integer`** | ✅ | ✅ |
| **`number`** | **`Integer64`** | ✅ | ✅ |
| **`number`** | **`Float`** | ✅ | ✅ |
| **`number`** | **`Enum`** | ✅ | ✅ |
| **`string`** | **`String`** | ✅ | ✅ |
| **`string`** | **`Name`** | ✅ | ✅ |
| **`string`** | **`Text`** | ✅ | ✅ |
| **`Vector2D`** | **`Vector2D`** | ✅ | ✅ |
| **`Vector`** | **`Vector`** | ✅ | ✅ |
| **`Rotator`** | **`Rotator`** | ✅ | ✅ |
| **`Color`** | **`Color`** | ✅ | ✅ |
| **`Color`** | **`LinearColor`** | ✅ | ✅ |
| **`StaticMesh`** | **`StaticMeshActor`** | ✅ | ✅ |
| **`Prop`** | **`StaticMeshActor`** | ✅ | ✅ |
| **`Weapon`** | **`SkeletalMeshActor`** | ✅ | ✅ |
| **`Vehicle`** | **`WheeledVehiclePawn`** | ✅ | ✅ |
| **`Grenade`** | **`StaticMeshActor`** | ✅ | ✅ |
| **`Melee`** | **`StaticMeshActor`** | ✅ | ✅ |
| **`Light`** | **`Light`** | ✅ | ✅ |
| **`Decal`** | **`DecalActor`** | ✅ | ✅ |
| **`TextRender`** | **`WorldText3D`** | ✅ | ✅ |
| **`Sound`** | **`AmbientSound`** | ✅ | ✅ |
| **`Canvas`** | **`MaterialInstanceDynamic`** | ✅ | ❌ |
| **`WebUI`** | **`MaterialInstanceDynamic`** | ✅ | ❌ |
| **`SceneCapture`** | **`MaterialInstanceDynamic`** | ✅ | ❌ |
| **`Blueprint`** | **`Actor`** | ✅ | ✅ |
| **`Widget`** | **`Widget`** | ✅ | ❌ |
| **`BaseActor`** | **`Actor`** | ✅ | ✅ |
| **`Player`** | **`PlayerController`** | ✅ | ❌ |
| **`SpecialPath`** | **`Texture2D`** | ✅ | ❌ |
| **`table`** | [**`Any Struct`**](#any-struct) | ✅ | ✅ |


///caution Note

It is only possible to pass Actors from Blueprint → Lua if the Actor is a Spawned Entity. It is not possible to pass newly spawned Actors in Blueprints to Lua.

///

///tip

Passing `Maps`, `Arrays` and `Sets` is also supported! As long their keys/values are in the list above.

///


### Any Struct

Custom Structs can also be passed and retrieved, just pass an object with the same properties as the Unreal Struct, examples:

#### FTransform

```lua
{
	["Translation"] = Vector(),
	["Rotation"] = Rotator(),
	["Scale"] = Vector()
}
```

#### FMargin

```lua
{
	["Bottom"] = 0.0,
	["Left"] = 0.0,
	["Right"] = 0.0,
	["Top"] = 0.0
}
```

#### FVector4

```lua
{
	["W"] = 0.0,
	["X"] = 0.0,
	["Y"] = 0.0,
	["Z"] = 0.0
}
```