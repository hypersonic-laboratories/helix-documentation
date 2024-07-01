---
title: Assets Guide
description: All you need to know about Assets
tags: [assets]
---

import { ReferenceLink } from '@site/docs/components/_nanos.mdx';

All you need to know about Assets

**Assets** in HELIX are all objects or content which come from Unreal Engine. For example _Maps_, _StaticMeshes_, _SkeletalMeshes_, _Sounds_, _Particles_, _Blueprints_ etc are all types of **Assets**.

In order to use custom Assets in your servers, for example to spawn a Prop, or a custom Weapon you must have an **Asset Pack**. Asset Packs are a set of Assets that were exported together from Unreal.


## Folder Structure

All Asset Packs go under `Server/Assets/` folder. Each Asset Pack is a folder under that.

/// info | Note

Asset Packs downloaded when connecting to servers or downloaded from the vault will be stored in `Server/Assets/` folder as well!

/// 

This is an example of a server Assets folder:

```text title="Server Folder"
HELIXGameServer.exe
Assets/
├── my-asset-pack-01/
│   ├── MyAsset_01.uasset
│   ├── MyAsset_02.uasset
│   ├── MyBigMap.umap
│   │    ...
│   └── Assets.toml
├── awesome-weapons/
│   ├── BigFuckingGun.uasset
│   │   ...
│   └── Assets.toml
Packages/
Config.toml
```

## Assets Pack Configuration

Asset Packs have a configuration file in the root of the Asset Pack folder, called `Assets.toml`, in this file we can setup all pertinent settings related to the Asset Pack:

```toml
# vault configurations
[meta]
    # friendly name
    title =                 "My Awesome Asset Pack"
    # contributors
    author =                "Contributor Names"
    # version
    version =               "0.1.0"

# unreal engine configurations
[unreal]
    # unreal engine folder - the name of the root folder (the one inside UnrealProject/Content/) which the assets will have references to each other
    unreal_folder =     "MyPack"
    # unreal engine version - unreal version this asset pack was compiled on
    unreal_version =    "5.1.0"
    # whether this asset pack was created as a plugin content"
    is_plugin_content =  false

# assets files
[assets]
    # maps
    [assets.maps]
        # MyMap = "MyFolder/MyAwesomeMap"
        # ...

    # static meshes
    [assets.static_meshes]
        # SM_Flower_01 = "MyFolder/SM_Awesome_Flower_01"
        # ...

    # skeletal meshes
    [assets.skeletal_meshes]
        # SK_Better_Man = "Characters/SK_BetterMan_0"
        # ...

    # particles
    [assets.particles]
        # P_Big_Explosion = "Particles/P_Big_Explosion"
        # ...

    # materials
    [assets.materials]
        # M_Red_Textured = "Materials/M_Red_Textured"
        # ...

    # blueprints
    [assets.blueprints]
        # BP_Blueprint = "Blueprints/M_Red_Textured"
        # ...

    # other assets (for not yet categorized ones)
    [assets.others]
        # A_Audio_Rifle_Fire = "Audios/A_Audio_Rifle_Fire_03"
        # ...
```


### Settings Detailed

See a description of what each setting does:

| Setting | Description |
| :--- | :--- |
| **`title`** | Friendly name |
| **`author`** | Contributor(s) |
| **`version`** | Version - in the [SemVer](https://semver.org/) format `X.Y.Z` |
| **`unreal.unreal_folder`** | Name of the root folder in the Unreal Project which exported this Assets. This is important so the Assets can keep the relative references correctly |
| **`unreal.unreal_version`** | Version at which this Asset Pack was created |
| **`unreal.is_plugin_content`** | If this Asset Pack is Plugin Content |
| **`assets.maps`** | List of Maps in this Asset Pack |
| **`assets.static_meshes`** | List of Static Meshes in this Asset Pack |
| **`assets.skeletal_meshes`** | List of Skeletal Meshes in this Asset Pack |
| **`assets.sounds`** | List of Sounds in this Asset Pack |
| **`assets.animations`** | List of Animations in this Asset Pack |
| **`assets.particles`** | List of Particles in this Asset Pack |
| **`assets.materials`** | List of Materials in this Asset Pack |
| **`assets.blueprints`** | List of Blueprints in this Asset Pack |
| **`assets.others`** | List of other Assets in this Asset Pack |


## Logo Image

It is possible to have a custom image to be displayed in the Vault. For that, add a file called `Assets.jpg` besides the Assets.toml with the image you wish. The recommended size is `300x150`.


## Referencing Assets in Scripting

To be able to use Assets in your code, first you have to ensure that the Asset Pack is loaded. An Asset Pack is loaded when:

1. A map is loaded (this will make it's Asset Pack to be loaded automatically).
2. A package with it configured in `assets_requirements` is loaded.
3. It is manually set in Server's `Config.toml` at `assets` to load.

With the Asset Pack loaded, you can refer to it's assets using the following pattern:

`"[ASSET_PACK_PATH]::[ASSET_KEY]"`

Example:

`"my-asset-pack-01::SM_Cube"`

/// info | Note

`[ASSET_PACK_PATH]` is the folder name and `[ASSET_KEY]` is the key defined in the `Assets.toml`.

/// 


## Types of Assets

Some scripting methods require some specific Type of Assets to load. Attempting to load an invalid or wrong type will cause an Error. E.g.: `Character:SetMesh()` requires an Asset of type `Skeletal Mesh`.

Here's a list of all supported Asset types:

| Type | Description |
| :--- | :--- |
| **Map** | An Unreal Engine Map/Level |
| **Static Mesh** | Unreal Static Meshes can be used to load meshes for Props and StaticMeshes |
| **Skeletal Mesh** | Unreal Skeletal Meshes can be used to load meshes|
| **Sound** | Unreal Sounds to load Sounds |
| **Particle** | Unreal Particles can be used for settings in several entities, including Particle Class itself |
| **Animation** | Unreal Animations can be used for settings in Character and Weapons |
| **Material** | Unreal Materials can be used for customizing meshes surfaces and used as Post Process |
| **Blueprint** | Unreal Actor Blueprints can be used for spawning Blueprint entities |


## Creating your own Assets

To create your own Asset Pack, please refer to Custom Assets Guide.

<ReferenceLink href="assets-modding/creating-assets/creating-assets-start">📦 Asset creation</ReferenceLink>


## Default Asset Pack

HELIX provides a default  Asset Pack which is already included in the base game. Please refer to the Default Asset Pack page for more information.

<ReferenceLink href="assets-modding/default-asset-pack/default-assets-list">📦 Default Asset Pack</ReferenceLink>