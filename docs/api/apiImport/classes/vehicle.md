---
title: Vehicle
description: Vehicles are wheeled entities which Characters can possesses and drive.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Vehicle" image="/img/docs/vehicle.webp" />


Any Skeletal Mesh can be used to create a Vehicle, although only Skeletal Meshes with Wheels bones can use the built-in feature of animated Wheels.

## Examples

```lua title="Server/Index.lua"
-- Spawns a Pickup Vehicle
local vehicle = Vehicle(location or Vector(), rotation or Rotator(), "helix::SK_Pickup", CollisionType.Normal, true, false, true, "helix::A_Vehicle_Engine_10")

-- Configure it's Engine power and Aerodynamics
vehicle:SetEngineSetup(700, 5000)
vehicle:SetAerodynamicsSetup(2500)

-- Configure it's Steering Wheel and Headlights location
vehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)
vehicle:SetHeadlightsSetup(Vector(270, 0, 70))

-- Configures each Wheel
vehicle:SetWheel(0, "Wheel_Front_Left",  27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)
vehicle:SetWheel(1, "Wheel_Front_Right", 27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)
vehicle:SetWheel(2, "Wheel_Rear_Left",   27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)
vehicle:SetWheel(3, "Wheel_Rear_Right",  27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)

-- Adds 6 Doors/Seats
vehicle:SetDoor(0, Vector(  50, -75, 105), Vector(   8, -32.5,  95), Rotator(0,  0,  10), 70, -150)
vehicle:SetDoor(1, Vector(  50,  75, 105), Vector(  25,    50,  90), Rotator(0,  0,   0), 70,  150)
vehicle:SetDoor(2, Vector( -90, -75, 130), Vector( -90,  -115, 155), Rotator(0,  90, 20), 60, -150)
vehicle:SetDoor(3, Vector( -90,  75, 130), Vector( -90,   115, 155), Rotator(0, -90, 20), 60,  150)
vehicle:SetDoor(4, Vector(-195, -75, 130), Vector(-195,  -115, 155), Rotator(0,  90, 20), 60, -150)
vehicle:SetDoor(5, Vector(-195,  75, 130), Vector(-195,   115, 155), Rotator(0, -90, 20), 60,  150)

-- Make it ready (so clients only create Physics once and not for each function call above)
vehicle:RecreatePhysics()
```


## Constructors

<ConstructorDeclaration type="Class" name="Vehicle" />


More related examples:

<ReferenceLink href="getting-started/code-examples/monster-truck">Monster Truck</ReferenceLink>


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Vehicle" />


## Functions

<FunctionsDeclaration type="Class" name="Vehicle" />


## Events

<EventsDeclaration type="Class" name="Vehicle" />
