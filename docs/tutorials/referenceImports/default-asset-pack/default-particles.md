---
title: Default Particles
description: Default HELIX Particles and it's Parameters
tags: [assets]
keywords: [assets, particles, built-in, default]
---


Default HELIX Particles and it's Parameters.

import { Structs, BasicType, AssetPath } from '@site/docs/components/_nanos.mdx';

///tip

**Note**: All Particles in this page are already included in the base game in the [Default HELIX Asset Pack](/assets-modding/default-asset-pack/default-assets-list.md), you can reference them like that: **`helix::P_Beam`.**

///

## Template Particles

Bare minimum particles.


### `P_Beam`

![](/img/docs/default-particles-beam.jpg)

This is a Niagara particle which joins two points with a Beam. Cool for creating Physics Guns or Laser effects.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`BeamColor`** | <Structs.Color /> | `Color(0, 0, 10, 1)` | Color of the Beam - multiply it to make it glow |
| **`BeamEnd`** | <Structs.Vector /> | `Vector(0, 0, 0)` | World position of the second joint |
| **`BeamWidth`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `5.0` | Beam thickness |
| **`BeamStartTangent`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `0.5` | Beam start tangent |
| **`BeamEndTangent`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `0.0` | Beam end tangent |
| **`JitterAmount`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `0.1` | Amount of jitterness |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |


### `P_Ribbon`

![](/img/docs/default-particles-ribbon.jpg)

This is a Niagara particle which makes a "trail" effect when moves.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | <Structs.Color /> | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnRate`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `100.0` | Rate of spawn the "ribbons" |
| **`Mass`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `10.0` | Mass of the "ribbons" |
| **`LifeTime`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `5.0` | How much time each "ribbon" will last |
| **`RibbonWidth`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `10.0` | The thickness of the Ribbon |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |


### `P_DirectionalBurst`

![](/img/docs/default-particles-directional-burst.jpg)

This is a Niagara particle which spawns a bunch of particles in a direction.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | <Structs.Color /> | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnCount`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `25.0` | Amount of Particles to spawn |
| **`VelocityStrengthMax`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `350.0` | Max velocity of the Particles |
| **`VelocityStrengthMin`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `125.0` | Min velocity of the Particles |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |


### `P_Fountain`

![](/img/docs/default-particles-fountain.jpg)

This is a Niagara particle which simulates a fountain.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | <Structs.Color /> | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnRate`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `90.0` | Rate to spawn particles |
| **`SphereRadius`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `20.0` | Radius to spawn the particles |
| **`VelocityStrengthMax`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `850.0` | Max velocity |
| **`VelocityStrengthMin`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `500.0` | Min velocity |
| **`SizeMax`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `12.0` | Max sprite size |
| **`SizeMin`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `6.0` | Min sprite size |
| **`VelocityConeAngle`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `20.0` | Cone angle to apply velocity |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |


### `P_HangingParticulates`

![](/img/docs/default-particles-hanging.jpg)

This is a Niagara particle which makes a 3-dimensional "hanging particles" effect.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | <Structs.Color /> | `Color.WHITE` | Color of the Particles |
| **`BoxSize`** | <Structs.Vector /> | `Vector(400, 400, 100)` | 3D Size to spawn the Particles |
| **`SpawnRate`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `50.0` | Rate of spawn |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |


### `P_OmnidirectionalBurst`

![](/img/docs/default-particles-omnidirectional-burst.jpg)

This is a Niagara particle which makes a "explosion" effect in all directions.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **`Color`** | <Structs.Color /> | `Color.WHITE` | Color - multiply it to make it glow |
| **`SpawnCount`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `50.0` | Amount of Particles to spawn |
| **`SphereRadius`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `10.0` | Radius to spawn the particles |
| **`VelocityStrengthMax`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `300.0` | Max velocity of the Particles |
| **`VelocityStrengthMin`** | [Float](/scripting-reference/classes/particle.mdx#setparameterfloat) | `75.0` | Min velocity of the Particles |
| **`Material`** | <AssetPath.Material /> | `Blank White Material` | Material to override |

