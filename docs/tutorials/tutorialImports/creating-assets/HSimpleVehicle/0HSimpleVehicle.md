---
title: HSimpleVehicle Guide
description: Create simple vehicles.
sidebar_position: 1
tags: [HSimpleVehicle]
keywords: [assets, studio, HSimpleVehicle, unreal]
status: old
---

--8<-- "old.md"

Create vehicles using the HSimpleVehicle class.

## Vehicle Tutorial
### Creation and testing

Studio provides a ready made template to start testing simple vehicle right away in just a few steps.

* Create and open a new studio project from launcher.

![](../../../../img/docs/assets-modding/creating-assets/studio/HSimpleVehicle/01_create_sutdio_project.png)


* Inside the new project select "New Item" then Select category “Vehicle” subcategory “Simple Vehicle”, set a name for the item and click "Create Item".

![](../../../../img/docs/assets-modding/creating-assets/studio/HSimpleVehicle/02_new_item.png)

* A new plugin will be created with a single blueprint item called “BP_Vehicle”, click the play button on studio and stop the game again, so the new plugin files are generated.


![](../../../../img/docs/assets-modding/creating-assets/studio/HSimpleVehicle/03_play_test.png)

* Now, open VS Code from the menu in studio, and in the Server root folder there is the config.toml file, click it and add the created plugin into the assets section.


![](../../../../img/docs/assets-modding/creating-assets/studio/HSimpleVehicle/04_configToml.png)


* Now, still in VS Code, find the index.lua file inside `Packages > Server > Index.lua` and add the following code at the end of the file:

```Lua title='Packages/Server/Index.lua'
SIMPLEVEHICLE = HSimpleVehicle(Vector(400, 0, 30), Rotator(0, 0, 0),"YourPlugin::BP_Vehicle", CollisionType.Normal,true)
```

* Replace the “YourPlugin” section for the correct name of the vehicle plugin folder. Now click play and test the vehicle!


![](../../../../img/docs/assets-modding/creating-assets/studio/HSimpleVehicle/05_playAndTest.png)