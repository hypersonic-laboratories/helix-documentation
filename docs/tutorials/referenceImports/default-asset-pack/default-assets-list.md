---
title: Default Asset Pack List
tags: [assets]
keywords: [assets, built-in, default]
---


HELIX provides a default Asset Pack already included in the base game, feel free to use the assets the way you want!

<!-- ![](/img/docs/helix-asset-pack.jpg) -->


In order to use those assets, you need to use the key `helix`. E.g.: `helix::SM_Cube`.

You can hop to [Default Materials](/assets-modding/default-asset-pack/default-materials.md), [Default Particles](/assets-modding/default-asset-pack/default-particles.mdx) or [Default Weapons](/assets-modding/default-asset-pack/default-weapons.md) pages to detailed information on their default items.

```toml
# Assets Files
[assets]
    # Maps
    [assets.maps]
        BlankMap = "Maps/BlankMap/BlankMap"
        OceanMap = "Maps/OceanMap/OceanMap"
        EmptyMap = "Maps/EmptyMap/EmptyMap"

    # Static Meshes
    [assets.static_meshes]
        # Default
        SM_Cone = "Props/BasicShapes/SM_Cone"
        SM_Cube = "Props/BasicShapes/SM_Cube"
        SM_Cylinder = "Props/BasicShapes/SM_Cylinder"
        SM_Plane = "Props/BasicShapes/SM_Plane"
        SM_Sphere = "Props/BasicShapes/SM_Sphere"
        SM_Capsule = "Props/BasicShapes/SM_Capsule"
        SM_Pipe = "Props/BasicShapes/SM_Pipe"
        SM_QuadPyramid = "Props/BasicShapes/SM_QuadPyramid"
        SM_Torus = "Props/BasicShapes/SM_Torus"
        SM_TriPyramid = "Props/BasicShapes/SM_TriPyramid"
        SM_Tube = "Props/BasicShapes/SM_Tube"
        SM_Wedge_A = "Props/BasicShapes/SM_Wedge_A"
        SM_Wedge_B = "Props/BasicShapes/SM_Wedge_B"

        SM_Ball_VR = "Props/VRShapes/SM_Ball"
        SM_Cube_VR_01 = "Props/VRShapes/SM_Cube_01"
        SM_Cube_VR_02 = "Props/VRShapes/SM_Cube_02"
        SM_Cube_VR_03 = "Props/VRShapes/SM_Cube_03"
        SM_Pyramid_VR = "Props/VRShapes/SM_Pyramid"
```
