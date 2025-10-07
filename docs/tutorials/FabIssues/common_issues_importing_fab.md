# Common Issues Importing Fab Assets to HELIX

# 🗂️ Importing Fab Content into HELIX

<aside>
💡

This guide covers the **most common issues** you may encounter when importing a **Map + Asset Pack** from **Fab** into HELIX using the Creator Kit and Creator Hub.

</aside>

---

## 🚀 First Steps

Before you begin, make sure you’re familiar with the full workflow:

1. **Download your pack from Fab** → [fab.com](https://www.fab.com/)

2. **Download the Creator Kit** and review the docs → [Creator Kit Docs](https://www.notion.so/Creator-Kit-V1-0-277504d392e6801390b0e13b910a2aee?pvs=21)

3. **Open the Creator Hub** → [hub.helixgame.com](https://hub.helixgame.com/)

4. **Install HELIX** on Steam

---

## 🗺️ Opening Your Level Map in Creator Kit

After migrating your project folder into the **Creator Kit Content** folder, and moving the **Map Level** into its own folder with references fixed:

- Load the Level map in Unreal Engine Creator Kit.
- You’re now ready to create a **Map** and an **Addon (Asset Pack)** for HELIX.

# COMMON ISSUES

## Nanite meshes

For the best optimization in HELIX,  you need to convert all your meshes into Nanite.

1 - In the Content Browser, select your project folder

2 - In the Filters tab select only Static Mesh, then select all the static meshes from your project

3 - Right click on them, then select Nanite>, then click on “Enable Nanite (X Meshes)”

![Content Browser 01_10_2025 13_30_13.png](Content_Browser_01_10_2025_13_30_13.png)

It is going to take some time depending of how many meshes are processed.

WARNING:
!!! Be carefull that all the meshes with opaque + translucent materials will not be displayed correctly !!!

⇒ You will need to separate the meshes using opaque materials and meshes using translucent materials (follow the steps bellow in the Materials section). 

## Materials

### Opaque + translucent materials on Nanite meshes

When you have a mesh with several materials using opaque and translucent materials, you need to separate the transparent mesh from the rest.

Both materials can’t be on a Nanite mesh.

To fix this:

- Duplicate the mesh containing both materials, name the first one SM_Object and the new one SM_Object_Glass

![SM_case_Glass 01_10_2025 15_42_13.png](SM_case_Glass_01_10_2025_15_42_13.png)

- Drop both static meshes into you 3D viewport, next to each other.
    
    1 - Select the SM_Object

    2 - Change to Modeling Mode

    3 - Click on the Mesh icon

    4 - Click on the Tri Select option
    

![CreatorKit - Unreal Editor 01_10_2025 15_01_28.png](CreatorKit_-_Unreal_Editor_01_10_2025_15_01_28.png)

1 - Then change the Selection Mode to “By Material (Connected)”

2 - Click on the Glass mesh of the object

3 - Delete it

4 - Click on the Accept button

5 - Save your Static Mesh

(You may remove the extra unused material ID, but it can brake the other IDs, so may just put a default material instead)

![CreatorKit - Unreal Editor 01_10_2025 15_01_53.png](CreatorKit_-_Unreal_Editor_01_10_2025_15_01_53.png)

Then do the same for the other SM_Object_Glass static mesh, easy way is to select the glass again and click on the Invert button to select the other meshes to delete.

After you can remove the extra materials by:

1 - In the Modeling Mode

2 - Click on the Attribs icon

3 - Expand the Materials section

4 - Click on the Down Arrow of the material and click on Delete for all the opaque materials

![CreatorKit - Unreal Editor 01_10_2025 15_59_01.png](CreatorKit_-_Unreal_Editor_01_10_2025_15_59_01.png)

Then open both Static meshes and check:

- Collisions on both meshes

- Nanite enabled on the opaque material mesh

- Nanite desabled on the translucent material mesh

- Materials are well set up on both meshes

![SM_case 01_10_2025 16_27_52.png](SM_case_01_10_2025_16_27_52.png)

![SM_case_Glass 01_10_2025 16_28_08.png](SM_case_Glass_01_10_2025_16_28_08.png)

### Transparent shaders

If a tranparent material set as translucent blending mode as an issue. 
You can try to change its Blending Mode to Masked or to Addidive.

![M_glass 26_09_2025 12_55_14.png](M_glass_26_09_2025_12_55_14.png)

You can also adjust the material parameters for its material instance, that can also fix some visual issues.

## Textures

### Virtual Textures

All the textures should be converted to Virtual Textures (VT):

1 - Select your project folder in the Content Browser

2 - In the Filters tab choose only “Texture”, then select all the textures of your project

3 - Right click on them, and click on “Convert to Virtual Texture”

4 - Then click OK

![Content Browser 01_10_2025 13_31_41.png](Content_Browser_01_10_2025_13_31_41.png)

It is going to take some time depending of how many textures are processed.

WARNING:
!!! UE should manage and convert all the materials to use VT. 
However after converting to VT, if you have some issues with a master material that didn’t change its texture nodes to VT, you will need to change them manually (see below) !!!

### Master Material issue with Virtual Textures

If after converting textures to VT, some of the master materials are not displayed correctly, you need to:

- Open the master material
- Select the texture Node which has the error
- Change the “Sample Type” as follow:
    - “Color” into “Virtual Color”
    - “Normal” into “Virtual Normal”
    - “Mask” into “Virtual Mask”
    
    ![M_Stickers 01_10_2025 17_37_22.png](M_Stickers_01_10_2025_17_37_22.png)
    

### Decals

Some decals are not using power of two textures. This will result in failing the convertion to Virtual Texture.

To fix this:

1 - Open the texture

2 - Change the “Padding and Resizing” option to “Stretch to Power Of Two”

3 - Check the box “Virtual Texture Streaming”

4- Save your changes

![T_paperpages_03 01_10_2025 18_12_47.png](T_paperpages_03_01_10_2025_18_12_47.png)

## Lighting

### Static/Movable

If you see the “Preview” text on textures, select your lights and check the Mobility.

![Gym_U1 - Unreal Editor 30_09_2025 13_49_42.png](Gym_U1_-_Unreal_Editor_30_09_2025_13_49_42.png)

Make sure that your lights are set to Movable and not to Static.

![Gym_U1 - Unreal Editor 30_09_2025 13_49_58.png](Gym_U1_-_Unreal_Editor_30_09_2025_13_49_58.png)

The white “Preview” text should be gone, otherwise it means that you still have some lights set as Static. 

### Post Process

If you get very dark interiors, you may have a post process actor in your scene.

![Silent_City - Unreal Editor 26_09_2025 15_13_59.png](Silent_City_-_Unreal_Editor_26_09_2025_15_13_59.png)

Select the post process volume actor.
In the Details panel, go to the Ambient Cubemap section.
Add a cubemap texture (the texture MUST be inside your project folder).
You can also change the Intensity to adjust the interior brightness.

![Content Browser 26_09_2025 15_14_41.png](Content_Browser_26_09_2025_15_14_41.png)

### Megalight

You could find other lighting issues but that depends of what is used on the project.
Make sure to set Megalight On, for all the lights of your scene.

![Silent_City - Unreal Editor 26_09_2025 15_24_32.png](Silent_City_-_Unreal_Editor_26_09_2025_15_24_32.png)

1 - Select the light

2 - Search for Mega in the Details panel

3 - Check the Allow MegaLights option

4 - Make sure the Shadow Method is set to Virtual Shadow Map

## Collisions

### **The most common issue you will get is wrong or missing collisions.**

### View collision

To check the collision in your scene, click on the View Mode and change it to Player Collision.
You will see that some assets don’t have a correct collision:

![gothic_mansion - Unreal Editor 26_09_2025 11_40_16.png](gothic_mansion_-_Unreal_Editor_26_09_2025_11_40_16.png)

![gothic_mansion - Unreal Editor 26_09_2025 11_40_46.png](gothic_mansion_-_Unreal_Editor_26_09_2025_11_40_46.png)

### Auto collision

To fix it, open the mesh, and click on Show/Simple Collision

![SM_bench 26_09_2025 11_41_04.png](SM_bench_26_09_2025_11_41_04.png)

And you can try to rebuild the collision by clicking on Apply button at the Convex Decomposition tab at the bottom right column.
You can change the Hull Count, Max Hull Verts, Hull Precision, for more collision precission on complex meshes.

![SM_bench 26_09_2025 11_41_25.png](SM_bench_26_09_2025_11_41_25.png)

### Simple boxes

But the cheapest and more optimized way would be to create Boxes as simplified collision and to asjust them with the asset:

![SM_bench 26_09_2025 11_43_19.png](SM_bench_26_09_2025_11_43_19.png)

![gothic_mansion - Unreal Editor 26_09_2025 11_43_42.png](gothic_mansion_-_Unreal_Editor_26_09_2025_11_43_42.png)

### Foliage collision

You may find some painted foliage like trees without collisions.
To find the mesh, select the painted foliage group, scroll though the FoliageInstancedStaticMeshComponent, once you’ve found your tree click on the Static Mesh magnifying glass icon to select it from the Content Browser.
Then fix the collision like the other assets.

![gothic_mansion - Unreal Editor 26_09_2025 12_24_16.png](gothic_mansion_-_Unreal_Editor_26_09_2025_12_24_16.png)

### No collision showing even the Static Mesh has collision

You may enconter missing collision ingame even when the Mesh has collision.

That’s because it is set as NoCollision in the Details/InstanceFoliageActor/FoliageInstancedStaticMeshComponent/Collision:
Change it to BlockAll to fix this issue.

![gothic_mansion - Unreal Editor 26_09_2025 12_40_53.png](gothic_mansion_-_Unreal_Editor_26_09_2025_12_40_53.png)

## Player Start

### Player Start in the map

Make sure that you have a Player Start in your map, named “PlayerStart”, and make sure it is correctly placed on your map.

![Silent_City - Unreal Editor 29_09_2025 09_52_25.png](Silent_City_-_Unreal_Editor_29_09_2025_09_52_25.png)

1 - Go to the Outliner tab

2 - Search for player

3 - Double click on the Player Start

### Missing Player Start

If there is no Player Start in your map:

![Place Actors 29_09_2025 10_02_10.png](Place_Actors_29_09_2025_10_02_10.png)

1 - Go on the Place Actors tab

2 - Click on Basic icon

3 - Drag and drop in your map the Player Start actor

## Game Mode

Make sure that there is no game mode already set in your map.

![Silent_City - Unreal Editor 29_09_2025 09_54_14.png](Silent_City_-_Unreal_Editor_29_09_2025_09_54_14.png)

1 - Go on the World Settings tab

2 - Go to the Game Mode section
Make sure that there is nothing in “GameMode Override”

3 - If there is a game mode file, click on the return arrow icon to remove it.