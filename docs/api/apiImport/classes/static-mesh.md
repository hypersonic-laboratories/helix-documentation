---
title: StaticMesh
description: StaticMesh spawns a 3D mesh actor with configurable collision
sidebar_position: 0
tags: [class]
---
<HeaderDeclaration type="Class" name="StaticMesh"/>
StaticMesh is a callable class for spawning a static mesh actor into the world with configurable collision behavior.
It wraps Unreal’s `AStaticMeshActor` and its `UStaticMeshComponent`, giving direct access to mesh, mobility, transform, materials, and all standard component functions.
This is ideal for props, obstacles, architecture, or decorative geometry in your scene

/// tip
`StaticMesh` is an `Actor` so it inherits all functions from [Actor](actor.md)
///

## Constructor
<ConstructorDeclaration type="Class" name="StaticMesh" />

```lua title="Example"
local cube = StaticMesh(
    Vector(0, 0, 100),
    Rotator(0, 0, 0),
    "/Engine/BasicShapes/Shape_Cube.Shape_Cube",
    CollisionType.StaticOnly
)
```

| Name        | Type       | Default             | Description                                             |
|-------------|------------|---------------------|---------------------------------------------------------|
| `Location`  | `Vector`   | `(0,0,0)`           | World position to spawn the mesh                        |
| `Rotation`  | `Rotator`  | `(0,0,0)`           | Initial rotation of the mesh actor                      |
| `MeshPath`  | `string`   | **Required**        | Asset path to a UStaticMesh (e.g. `Shape_Cube`)         |
| [`CollType`](../global-variables/enums.md/#collisiontype)  | `enum`     | `CollisionType.Auto` |

## Functions
<FunctionsDeclaration type="Class" name="StaticMesh" />

### `SetStaticMesh`
Changes the mesh to another asset at runtime.
```lua
cube:SetStaticMesh(UE.UObject.Load("/Game/Props/MyMesh.MyMesh"))
```
---

### `SetMaterial`
Applies a material to the mesh by index.
```lua
cube:SetMaterial(0, MyMaterial)
```
---

### `SetCollisionEnabled`
Changes the mesh’s collision mode after spawn.
```lua
cube:SetCollisionEnabled(CollisionType.NoCollision)
```
---

### `SetMobility`
Sets whether the mesh is movable, static, or stationary.
```lua
cube:SetMobility(UE.EComponentMobility.Movable)
```