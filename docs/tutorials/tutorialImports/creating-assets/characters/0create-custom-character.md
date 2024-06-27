---
title: Create Custom Character
description: How to create characters 
tags: [characters, customization]
keywords: [character, mannequin, unreal]
sidebar_position: 1
---

### Create custom character

Let’s learn how to import your own character mesh to use with the HCharacter class.  

Currently our customizable character uses a Metahuman Skeleton. Any mesh rigged in UE5 Manny or UE5 Metahuman should be instantly compatible.  
However, a lot of meshes/characters are rigged to standar UE4 skeletons or even custom skeletons.  
In this guide, you will learn how to use UE5. In the future, we will provide a way to add characters with any skeleton type.


> 📋 Requirements:  
[HELIX Studio Setup](/assets-modding/studio/setting-up-studio.md)    
[Understanding Basic Concepts](/getting-started/quick-start.mdx)


> 📺 The written guide presents more detailed instructions but here is a quick video tutorial that covers the basics:

<video controls width="100%" height="450" src="\videos\docs\assets-modding\importing-custom-assets\animations\characters\custom_char_tutorial.mp4" title="Custom Character Tutorial"></video>

### Setting up project and importing from Marketplace

To detailed information about how to create a project using HELIX Studio, please go to [Studio New Project](/assets-modding/studio/create-project.md)
After the new project is created, import any character packs from the Unreal Marketplace

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_006.png)

After importing, inside your new project, create a new Asset Pack 

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_003.png)

![](\img\docs\assets-modding\creating-assets\studio\02_assetpack_popup.png)

## Preparing UE5 characters

Some characters will come with an UE5 ready skeleton, it will usually be labeled like that. First, locate the Skeletal Mesh you want to use.

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_017.png)

Preparing this Skeletal Mesh is as simple as right click > Skeleton > Asign Skeleton

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_018.png)

Type “Skel_metahuman” into the search bar and select the following skeleton

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_008.png)

If everything went right, no warning should show, save your changes.

Here you should rename your skeletal mesh to something you recognize later, for easier testing and spawning.

> Note: If a warning is shown with UE5, then most likely the character is using a custom skeleton that is not currently compatible with Helix. 

## Manual Retargeting

Currently we dont support meshes that are not compatible with UE5 skeleton. However, this functionality will exist in the future, allowing you to retarget and import any Skeletal Mesh.

## Testing your Character

To be able to test your character, it needs to be inside the Asset we created before. Instead of just dragging the entire folder imported from Unreal Marketplace, is better if you migrate only the assets we are going to use, this will keep your Asset Pack slim.

Locate the Skeletal Mesh you set up befor and Right Click > Asset Actions > Migrate

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_016.png)

Make sure only the assets from your character are selected. This is true for most cases by default.

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_005.png)

> 💡 IMPORTANT: Make sure to deselect the entire “Game” folder, if you keep this when migrating it will break the skeletons references and your character will not work on the main game.

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_013.png)

Then on the emerging window, navigate to your project MODS folder, find the asset pack you created before and select the “Content” folder. Assets can only be migrated into the Content folder of Assets Packs.

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_002.png)

Now that you have your character on the asset pack, run the game once so files are generated. Then stop the game and click Start VS Code

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_011.png)

Paste the following code on your Server index lua files file.   
Your Package > Server > Index.lua

```lua
-- Function to spawn a Character to a player
function SpawnCharacter(player)
    Console.Log("Spawn player")
    local new_character = HCharacter(Vector(0, 0, 0), Rotator(0, 0, 0), "[your-asset-pack]::[your-asset]")
    player:Possess(new_character)
end

-- Subscribes to an Event which is triggered when Players join the server (i.e. Spawn)
Player.Subscribe("Spawn", SpawnCharacter)

-- Iterates for all already connected players and give them a Character as well
-- This will make sure you also get a Character when you reload the package
Package.Subscribe("Load", function()
    for k, player in pairs(Player.GetAll()) do
        SpawnCharacter(player)
    end
end)

-- When Player leaves the server, destroy it's Character
Player.Subscribe("Destroy", function(player)
    local character = player:GetControlledCharacter()
    if (character) then
        character:Destroy()
    end
end)
```
On line 4, replace the "[your-asset-pack]::[your-asset]" for the correct values. In this example we where working on the asset pack “characterpack” and I named the character “custom_ue4” so it should be replaced by “characterpack::custom_ue4”.

Then click play and whatch your character working with the HCharacter!

### Creating Characters from Scratch

If you are an 3D modeler an want to create your own characters. You should start from the Meta Human skeleton.  
On studio, type into the search bar “SKM_Manny”

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled.png)
![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_009.png)

Right click it and select Asset Actions > Export

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_015.png)

This will allow you to save a .FBX file that can be imported into any 3D software for modeling.

3D modeling is a complex topic that falls outside of this guide.

After your character is done, save your file as FBX and proced to the next step to import it. If you used the SKM_Manny skeleton, then SKel_Metahuman will be the skeleton you need to choose when importing.

### Publish your animation package

Publishing your newly created Assetpack, is as simple as clicking Publish Asset and selecting your Asset Pack!

![](\img\docs\assets-modding\importing-custom-assets\animations\characters\Untitled_004.png)