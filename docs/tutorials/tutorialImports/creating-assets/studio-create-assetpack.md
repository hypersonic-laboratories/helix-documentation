---
title: Create An Asset Pack
description: Learn how to develop an asset pack for Studio.
sidebar_position: 2
tags: [assets]
keywords: [assets, Studio, import, unreal]
---

# Developing Your Own Asset Pack

/// tip

Before starting:
1. Ensure you've set up your project as outlined in [Setting Up Unreal Engine](/assets-modding/studio/setting-up-studio.md).
2. Familiarize yourself with the [Package Guide](/core-concepts/packages/packages-guide.md) to grasp key concepts referenced in this guide.

/// 

## Creating an Asset Pack

Open Studio and navigate to `Asset -> New Asset Pack`.
   
   ![content](/img/docs/assets-modding/creating-assets/studio/01_assetpack.png)

After clicking on `New Asset Pack` a pop-up window will be shown.
   - Name the asset pack to be created.   
:warning: Use only lowercase letters and dashes when naming an assetpack.
   - Then click on the `Create Package` button.

   ![content](/img/docs/assets-modding/creating-assets/studio/02_assetpack_popup.png)

The created assetpack will be shown in the content drawer under `All -> Plugins -> [assetpack-name]`

   ![content](/img/docs/assets-modding/creating-assets/studio/03_Assetpack_path.png)

The folder will be ready to store custom assets.

## Importing Assets

Make sure to place all assets you've created or imported within the Plugin Content folder you've created in the last step. While you're free to create sub-folders to better organize your files, they all need to be housed within this main folder.
   
Assets like FBX meshes or WAV sounds can be easily added by dragging and dropping them directly from your computer into the respective folder.

   ![content](/img/docs/assets-modding/creating-assets/studio/04_Assetpack_folders.png)

:memo: Note: If a popup appears, just click on "Import all"

## Publishing the Asset Pack

In order to start publishing an item, save your project first by clicking in File -> Save All on the Unreal Engine main menu.  
Once you've finalized your asset pack, go to `Asset -> Publish Asset -> Asset Pack Name`.

![content](/img/docs/assets-modding/creating-assets/studio/05_Assetpack_publish.png)

Studio will then cook and upload your asset pack to the [HUB](https://hub.helixgame.com/).

   ![content](/img/docs/assets-modding/creating-assets/studio/06_Assetpack_HUB.png)