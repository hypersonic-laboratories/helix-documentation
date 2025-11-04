---
title: Actor
description: Base class for all Actor entities
tags: [base-class]
---
<HeaderDeclaration type="Class" name="Actor" />
`Actor` is the base class for all objects that can be placed or spawned in a level.
All lights, pawns, and gameplay entities inherit from this class.
It provides functionality for replication, ticking, input handling, transformation, and lifecycle control.

## Constructor
<ConstructorDeclaration type="Class" name="Actor" />

```lua title="Example"
local Actor = HWorld:SpawnActor(
    UE.AActor,
    SpawnTransform,
    UE.ESpawnActorCollisionHandlingMethod.AlwaysSpawn
)
```

## Networking Functions

### `SetReplicates`
Set whether this actor replicates to network clients
When this actor is spawned on the server it will be sent to clients as well
```lua title="Example"
Actor:SetReplicates(true)
```

---

### `SetReplicateMovement`
Set whether this actor's movement replicates to network clients
```lua title="Example"
Actor:SetReplicateMovement(true)
```

---

### `HasAuthority`
Returns whether this actor has network authority (server-side check)
```lua title="Example"
Actor:HasAuthority()
```

---

## Ticking Functions

### `SetActorTickEnabled`
Set this actor's tick functions to be enabled or disabled
```lua title="Example"
Actor:SetActorTickEnabled(true)
```

---

### `IsActorTickEnabled`
Retunrn whether this actor's tick functions are be enabled or disabled
```lua title="Example"
Actor:IsActorTickEnabled()
```

---

### `SetActorTickInterval`
Sets the tick interval of this actor's primary tick function. Will not enable a disabled tick function. Takes effect on next tick
```lua title="Example"
Actor:SetActorTickInterval(5)
```

---

### `GetActorTickInterval`
Returns the tick interval of this actor's primary tick function
```lua title="Example"
Actor:GetActorTickInterval()
```

---

## Transform Functions

### `SetActorScale3D`
Set the Actor's world-space scale
```lua title="Example"
Actor:SetActorScale3D(Vector(100, 100, 100))
```

---

### `SetActorRelativeScale3D`
Set the actor's RootComponent to the specified relative scale 3d
```lua title="Example"
Actor:SetActorRelativeScale3D(Vector(100, 100, 100))
```

---

### `K2_TeleportTo`
Teleport this actor to a new location.
If the actor doesn't fit exactly at the location specified, tries to slightly move it out of walls and such
```lua title="Example"
Actor:K2_TeleportTo(Vector(0,0,0), Rotator(0,0,0))
```

---

### `K2_SetActorTransform`
Set the Actors transform to the specified one.
Only the root component is swept and checked for blocking collision, child components move without sweeping. If collision is off, this has no effect.
If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location).
If false, physics velocity is updated based on the change in position (affecting ragdoll parts).
If CCD is on and not teleporting, this will affect objects along the entire swept volume.
Note that when teleporting, any child/attached components will be teleported too, maintaining their current offset even if they are being simulated.
Setting the transform without teleporting will not update the transform of simulated child/attached components.
```lua title="Example"
Actor:K2_SetActorTransform(Transform(), false, SweepHitResult, true)
```

---

### `K2_SetActorRotation`
Set the Actor's rotation instantly to the specified rotation.
If true, physics velocity for this object is unchanged (so ragdoll parts are not affected by change in location).
If false, physics velocity is updated based on the change in position (affecting ragdoll parts).
Note that when teleporting, any child/attached components will be teleported too, maintaining their current offset even if they are being simulated.
Setting the rotation without teleporting will not update the rotation of simulated child/attached components.
```lua title="Example"
Actor:K2_SetActorRotation(Rotator(0,0,0), true)
```

---

### `K2_SetActorRelativeTransform`
Set the actor's `RootComponent` to the specified relative transform.
Only the root component is swept and checked for blocking collision; child components move without sweeping.
If collision is disabled, this has no effect.
If `bTeleport` is true, physics velocity is unchanged (e.g. ragdoll parts won't be affected).
If false, velocity is updated based on the movement delta, affecting simulated physics.
With continuous collision detection (CCD) enabled and not teleporting, movement will sweep the full volume.
Note: Teleporting moves all child components while maintaining offsets. Without teleporting, simulated children will not update.
```lua title="Example"
Actor:K2_SetActorRelativeTransform(Transform(), true, nil, false)
```

---

### `K2_SetActorRelativeRotation`
Set the actor's `RootComponent` to the specified relative rotation.
Only the root component is swept and checked for blocking collision; child components move without sweeping.
If collision is disabled, this has no effect.
If `bTeleport` is true, physics velocity remains unchanged (e.g. ragdoll parts are not affected).
If false, velocity is recalculated based on movement delta, potentially affecting physics bodies.
With continuous collision detection (CCD) and sweeping, rotation affects objects along the swept path.
Note: Teleporting updates all child components while maintaining relative offsets.
Without teleporting, attached simulated components will not rotate with the actor.
```lua title="Example"
Actor:K2_SetActorRelativeRotation(Rotator(0, 90, 0), true, nil, false)
```

---

### `K2_SetActorRelativeLocation`
Set the actor's `RootComponent` to the specified relative location.
Only the root component is swept and checked for blocking collision; child components move without sweeping.
If collision is disabled, this has no effect.
If `bTeleport` is true, physics velocity is unchanged (raggdoll and physics bodies are unaffected).
If false, physics velocity is recalculated based on movement, which may impact simulated physics.
If continuous collision detection (CCD) is enabled and sweeping is used, movement checks the full volume.
Note: When teleporting, child components move while maintaining their offset, regardless of physics simulation.
Without teleporting, child components using physics simulation do not move with the actor.
```lua title="Example"
Actor:K2_SetActorRelativeLocation(Vector(100, 0, 0), true, nil, false)
```

---

### `K2_SetActorLocationAndRotation`
Move the actor instantly to the specified location and rotation.
Only the root component is swept and checked for blocking collision; child components move without sweeping.
If collision is disabled, this has no effect.
If `bTeleport` is true, physics velocity is unchanged (e.g. ragdoll parts remain unaffected).
If false, physics velocity is updated based on movement, potentially affecting simulated physics.
If continuous collision detection (CCD) is enabled and not teleporting, movement checks along the full swept path.
Note: Teleporting also moves attached components, maintaining their relative offsets.
Without teleporting, simulated children will not update their transforms.
```lua title="Example"
local success = Actor:K2_SetActorLocationAndRotation(Vector(0, 0, 200), Rotator(0, 180, 0), true, nil, false)
```

---

### `K2_SetActorLocation`
Move the actor to the specified world-space location.
Only the root component is swept and checked for blocking collision; child components move without sweeping.
If collision is disabled, this has no effect.
If `bTeleport` is true, the actor's physics velocity remains unchanged (e.g. ragdoll parts won't be affected).
If false, physics velocity is updated based on movement delta, which can affect physics simulation.
If continuous collision detection (CCD) is enabled and sweeping, the actor will check the entire volume along the path.
Note: When teleporting, all child components will move while maintaining their offset.
Without teleporting, simulated child components will not update location.
```lua title="Example"
local success = Actor:K2_SetActorLocation(Vector(300, 0, 0), true, nil, false)
```

---

### `K2_GetRootComponent`
Returns the root scene component of the actor.
This component defines the actor’s transform in the world and acts as the parent for all other attached components.
Useful for modifying transforms or attaching other objects dynamically.
```lua title="Example"
local root = Actor:K2_GetRootComponent()
root:SetWorldScale3D(Vector(2, 2, 2))
```

---

### `K2_GetActorRotation`
Returns the world rotation of the actor’s RootComponent.
```lua title="Example"
local rot = Actor:K2_GetActorRotation()
print(rot.Yaw)
```

---

### `K2_GetActorLocation`
Returns the world location of the actor’s RootComponent.
```lua title="Example"
local loc = Actor:K2_GetActorLocation()
print(loc.X, loc.Y, loc.Z)
```

---

### `K2_AddActorWorldTransformKeepScale`
Applies a delta transform to the actor in world space while preserving scale.
Only the root component is swept during movement.
```lua title="Example"
Actor:K2_AddActorWorldTransformKeepScale(Transform(Vector(100,0,0)), true, nil, false)
```

---

### `K2_AddActorWorldTransform`
Applies a delta transform to the actor in world space, resetting scale to (1,1,1).
Only the root component is swept during movement.
```lua title="Example"
Actor:K2_AddActorWorldTransform(Transform(Rotator(0,45,0)), true, nil, false)
```

---

### `K2_AddActorWorldRotation`
Adds a delta to the rotation of this actor in world space.
If `bTeleport` is true, the actor’s velocity remains unchanged.
If false, velocity is updated based on the movement delta, which can affect simulated components.
With CCD enabled and sweeping, the full rotation arc is considered for collision.
Teleporting also moves attached components while maintaining their offsets.

```lua title="Example"
Actor:K2_AddActorWorldRotation(Rotator(0, 90, 0), true, nil, false)
```

---

### `K2_AddActorWorldOffset`
Adds a delta to the location of this actor in world space.
Only the root component is swept for collisions; child components are moved without sweeping.
Teleporting leaves velocity unchanged, while non-teleporting movement affects physics.
CCD can be used to consider the entire movement path.
```lua title="Example"
Actor:K2_AddActorWorldOffset(Vector(100, 0, 0), true, nil, false)
```

---

### `K2_AddActorLocalTransform`
Adds a delta transform to the actor relative to its local reference frame.
Only the root component is swept; attached components follow without collision checks.
Teleporting avoids changing velocity.
Without teleporting, simulated children won't follow the transform change.
```lua title="Example"
Actor:K2_AddActorLocalTransform(Transform(Vector(0, 0, 50)), true, nil, false)
```

---

### `K2_AddActorLocalRotation`
Adds a local-space delta rotation to the actor’s root.
Sweep, teleport, and CCD behavior is the same as other movement methods.
This rotates the actor relative to its current orientation.
```lua title="Example"
Actor:K2_AddActorLocalRotation(Rotator(0, 45, 0), true, nil, false)
```

---

### `K2_AddActorLocalOffset`
Adds a local-space delta location to the actor’s root.
Only the root is swept for collisions; attached simulated components do not follow unless teleporting.
CCD affects the whole movement arc if enabled.
```lua title="Example"
Actor:K2_AddActorLocalOffset(Vector(0, 50, 0), true, nil, false)
```

---

### `GetTransform`
Returns the full world-space transform of the actor, including location, rotation, and scale.
Useful for applying the actor’s transform to other components or objects.
```lua title="Example"
local transform = Actor:GetTransform()
local location = transform:GetLocation()
print("Actor location:", location.X, location.Y, location.Z)
```

---

### `GetActorScale3D`
Returns the actor's current world-space scale as a vector.
This reflects the actual size scaling applied to the root component.
```lua title="Example"
local scale = Actor:GetActorScale3D()
print(scale.X, scale.Y, scale.Z)
```

---

### `GetActorRelativeScale3D`
Returns the scale of the actor's root component relative to its parent.
This does not reflect the final world-space scale.
```lua title="Example"
local relScale = Actor:GetActorRelativeScale3D()
print("Local Scale X:", relScale.X)
```

---

### `GetActorEyesViewPoint`
Returns the viewpoint (location and rotation) of the actor's eyes, not necessarily its camera.
Often used for AI, weapons, or line traces that simulate vision or targeting.
```lua title="Example"
local eyeLoc, eyeRot = Vector(), Rotator()
Actor:GetActorEyesViewPoint(eyeLoc, eyeRot)
print("Eye view at:", eyeLoc)
```

---

### `FinishAddComponent`
Finalizes the creation of a new actor component.
Typically called after `AddComponentByClass` or when setting expose-on-spawn properties in Blueprint.
Can handle manual or automatic attachment with an optional relative transform.
```lua title="Example"
Actor:FinishAddComponent(SomeComponent, false, Transform())
```

---

### `AddComponentByClass`
Creates and adds a new component of the given class to the actor.
If `bManualAttachment` is false, it is automatically attached and may become the root.
If `bDeferredFinish` is true, the component must be finalized using `FinishAddComponent`.
```lua title="Example"
local newComp = Actor:AddComponentByClass(UE.UPointLightComponent, false, Transform(), false)
```

---

## Attachment Functions

### `K2_AttachToActor`
Attaches the actor’s `RootComponent` to another actor, optionally at a named socket.
This uses the target actor’s `RootComponent` as the parent component.
Attachment rules determine how transform alignment is handled.
```lua title="Example"
Actor:K2_AttachToActor(OtherActor, "SocketName", UE.EAttachmentRule.KeepWorld, UE.EAttachmentRule.KeepWorld, UE.EAttachmentRule.KeepWorld, true)
```

---

### `K2_DetachFromActor`
Detaches the actor’s `RootComponent` from any parent it may be attached to.
You can optionally specify how to handle transform rules during detachment (location, rotation, and scale).
```lua title="Example"
Actor:K2_DetachFromActor(EDetachmentRule.KeepWorld, EDetachmentRule.KeepWorld, EDetachmentRule.KeepWorld)
```

---

### `K2_AttachToComponent`
Attaches the actor’s `RootComponent` to the specified `USceneComponent`, optionally at a named socket.
The parent component must be registered.
You can control how location, rotation, and scale are applied via attachment rules.
Welding simulated bodies combines their physics for shared simulation.
```lua title="Example"
Actor:K2_AttachToComponent(SomeComponent, "SocketName", UE.EAttachmentRule.SnapToTarget, UE.EAttachmentRule.SnapToTarget, UE.EAttachmentRule.SnapToTarget, false)
```

---

### `K2_AttachRootComponentToActor`
Attaches the actor’s root to another actor using a given socket and attachment method.
Simplified variant of `K2_AttachToActor` with less control over individual transform rules.
```lua title="Example"
Actor:K2_AttachRootComponentToActor(TargetActor, "SocketName", UE.EAttachLocation.KeepRelativeOffset, false)
```

---

### `K2_AttachRootComponentTo`
Attaches the actor’s root to a scene component at a socket.
This is a lower-level variant of `K2_AttachToComponent`.
```lua title="Example"
Actor:K2_AttachRootComponentTo(SomeComponent, "SocketName", UE.EAttachLocation.SnapToTarget, false)
```

---

### `DetachRootComponentFromParent`
Detaches the actor's `RootComponent` from its parent scene component or actor.
Optionally maintains its world position after detachment.
```lua title="Example"
Actor:DetachRootComponentFromParent(true)
```

---

### `GetAttachedActors`
Fills an array with all actors attached to components on this actor.
You can optionally reset the array first or include recursively attached actors.
```lua title="Example"
local attached = {}
Actor:GetAttachedActors(attached, true, true)
print("Attached count:", #attached)
```

---

## Lifecycle Functions

### `SetLifeSpan`
Set the lifespan of this actor. When it expires the object will be destroyed
If requested lifespan is 0, the timer is cleared and the actor will not be destroyed
```lua title="Example"
Actor:SetLifeSpan(60)
```

---

### `GetLifeSpan`
Get the remaining lifespan of this actor. If zero is returned the actor lives forever.
```lua title="Example"
Actor:GetLifeSpan()
```

---

### `K2_DestroyActor`
Destroys the actor and removes it from the level.
Once destroyed, the actor can no longer be referenced.
```lua title="Example"
Actor:K2_DestroyActor()
```

---

### `IsActorBeingDestroyed`
Returns true if this actor is currently being destroyed
```lua title="Example"
Actor:IsActorBeingDestroyed()
```

---

## Collision Functions

### `SetActorEnableCollision`
Allows enabling/disabling collision for the whole actor
```lua title="Example"
Actor:SetActorEnableCollision(true)
```

---

### `GetActorEnableCollision`
Returns whether collision is currently enabled for the actor as a whole.
This checks the aggregate setting across components.
```lua title="Example"
local hasCollision = Actor:GetActorEnableCollision()
print("Collision enabled:", hasCollision)
```

---

### `GetActorBounds`
Returns the origin and box extent of the actor’s combined components.
Can include only colliding components, and optionally child actors.
```lua title="Example"
local origin, extent = Vector(), Vector()
Actor:GetActorBounds(true, origin, extent, false)
print("Origin:", origin.X, origin.Y, origin.Z)
```

---

## Components Functions

### `GetComponentByClass`
Searches the actor's components and returns the first one found of the specified class type.
Returns `nil` if no component of that type exists.
```lua title="Example"
local audio = Actor:GetComponentByClass(AudioComponent)
if audio then audio:Play() end
```

---

### `K2_GetComponentsByClass`
Gets all components on this actor that are instances of the specified class or a subclass of it.
Returns an array of `UActorComponent`, which you may need to cast to the desired type.
This function is primarily intended for use in Blueprints; in C++ or Lua, consider using more direct methods if available.
```lua title="Example"
local meshes = Actor:K2_GetComponentsByClass(StaticMeshComponent)
for _, comp in ipairs(meshes) do
    print(comp:GetName())
end
```

---

## Input Functions

### `EnableInput`
Adds this actor to the input stack for the specified `PlayerController`.
Once enabled, the actor can handle input events like key presses or axis movements.
```lua title="Example"
Actor:EnableInput(PlayerController)
```

---

### `DisableInput`
Removes this actor from the input stack of the specified `PlayerController`.
After this, the actor will no longer receive input events.
```lua title="Example"
Actor:DisableInput(PlayerController)
```

---

## Math & Distance Functions

### `GetVelocity`
Returns the velocity of the actor in centimeters per second (Unreal Units/sec).
This works if the `RootComponent` is using physics or has a movement component.
```lua title="Example"
local velocity = Actor:GetVelocity()
print("Velocity:", velocity.X, velocity.Y, velocity.Z)
```

---

### `GetVerticalDistanceTo`
Returns the vertical (Z-axis only) distance from this actor to another actor.
This ignores X and Y differences and is useful for checking elevation differences.
```lua title="Example"
local distance = Actor:GetVerticalDistanceTo(OtherActor)
print("Height difference:", distance)
```

---

### `GetSquaredHorizontalDistanceTo`
Returns the squared horizontal (X and Y only) distance from this actor to another actor, ignoring Z.
This is more efficient than `GetHorizontalDistanceTo` since it avoids computing a square root.
```lua title="Example"
local sqrDist = Actor:GetSquaredHorizontalDistanceTo(OtherActor)
print("Squared XY distance:", sqrDist)
```

---

### `GetSquaredDistanceTo`
Returns the squared 3D distance from this actor to another actor.
This avoids the cost of a square root and is ideal for comparisons.
```lua title="Example"
local sqrDist = Actor:GetSquaredDistanceTo(OtherActor)
print("Squared distance:", sqrDist)
```

---

### `GetDistanceTo`
Returns the full 3D distance from this actor to another actor in world space.
Useful for gameplay logic that depends on proximity.
```lua title="Example"
local dist = Actor:GetDistanceTo(OtherActor)
print("Distance:", dist)
```

---

## View & Direction Functions

### `GetActorUpVector`
Returns the up vector (Z axis) of the actor in world space.
This vector has a length of 1.0 and represents the local "up" direction.
```lua title="Example"
local up = Actor:GetActorUpVector()
print("Up vector:", up.Z)
```

---

### `GetActorRightVector`
Returns the right (Y axis) vector of the actor in world space.
Useful for positioning or offsetting objects relative to the actor's right-hand side.
```lua title="Example"
local right = Actor:GetActorRightVector()
local offset = right * 100
```

---

### `GetActorForwardVector`
Returns the forward (X axis) vector of the actor in world space.
Used to determine the direction the actor is "facing".
```lua title="Example"
local fwd = Actor:GetActorForwardVector()
local target = Actor:GetActorLocation() + fwd * 500
```

---

## Utility Functions
### `SetActorHiddenInGame`
Sets the actor to be hidden in the game
```lua title="Example"
Actor:SetActorHiddenInGame(true)
```

---
