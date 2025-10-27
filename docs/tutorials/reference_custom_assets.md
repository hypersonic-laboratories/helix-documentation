# Reference Custom Assets

This guide walks you through how to use your imported custom package assets within your world, using Blueprints or Lua.

## 1. By Blueprint

[examples coming soon]

## 2. By Lua

Any kind of asset inside a [Workspace](https://development.helix-documentation.pages.dev/tutorials/workspaces/) imported package can be accessed with:

```lua
local CustomAsset = UE.UObject.Load('Game/YourPackageName/PathToYourAsset/YourAssetName.YourAssetName')
```

For example, to access a package named `Addon_MyFirstAnimationPack` with an animation sequence named `AS_Crying.uasset`, you can load the animation sequence as shown below in your lua scripts:

```lua
local CustomAnimationAsset = UE.UObject.Load('/Game/Addon_MyFirstAnimationPack/AS_Crying.AS_Crying')
```

After creating a reference variable to your asset, you can pass it into other functions in your Lua scripts.
