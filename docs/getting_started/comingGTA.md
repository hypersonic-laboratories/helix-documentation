---
title: FiveM (GTA)
status: wip
---
## Overview

The purpose of this page is to let experienced FiveM game developers get started using the unique features of the HELIX platform.

- For a look into working with HELIX and the tools you'll use, see [Creator Tools](creatorTools.md)
- For a quickstart example, try out [Your First Game](firstGame.md)
- For an overview of scripting details, see [these links](scripters.md)

### Main Differences From FiveM

While both FiveM and HELIX offer robust scripting APIs for game development, HELIX provides a more structured and modular approach, with an emphasis on class-based architecture and simplified event handling. These differences can lead to more maintainable and scalable codebases, especially for larger projects. As the HELIX scripting API continues to evolve, it aims to streamline the development process, making it easier for developers to build and manage complex game functionalities.

Additionally, HELIX is built on Unreal Engine 5 (UE5) whereas FiveM uses GTA V's engine. This fundamental difference means that HELIX leverages the advanced features and capabilities of UE5, opening up more possibilities for game development. All assets in HELIX are designed for UE5, providing a high level of graphical fidelity and performance.


#### Event Handling and Remote Calls

| **Category**   | **FiveM**       | **HELIX**           |
| -------------  | --------------- | ------------------ |
| **Concepts**  | AddEventHandler  | Events.Subscribe    |
|                | RegisterNetEvent | Events.SubscribeRemote |
|                | TriggerEvent     | Events.Call         |
|                | TriggerServer/ClientEvent | Events.CallRemote |

In FiveM, event handling and remote calls are managed using functions like `AddEventHandler`, `RegisterNetEvent`, `TriggerEvent`, and `TriggerServerEvent`/`TriggerClientEvent`. HELIX, on the other hand, simplifies this process with `Events.Subscribe` for local events and `Events.SubscribeRemote` for network events. Similarly, HELIX uses `Events.Call` for local event triggering and `Events.CallRemote` for remote event triggering.

#### Structure and Modularity

The overall structure of the code in HELIX is similar to FiveM, but with some notable differences:
- **Manifest Files**: FiveM uses `fxmanifest.lua` to define resource metadata, while HELIX uses `Package.toml` for the same purpose.
- **Entry Point**: In HELIX, the main entry point for both client and server scripts is `Index.lua`, and this file must retain this name. All other modules need to be included within `Index.lua` using `Package.Require('module.lua')`.

Modules in HELIX are organized under `Client/`, `Server/`, or `Shared/` directories, and paths are relative to these directories.

#### Object and Class Handling

HELIX offers a class-based approach for most of its functionalities, providing a more structured and object-oriented programming experience. Below are some direct translations from FiveM to HELIX:

##### UI

| **Examples**  | **FiveM**                                         | **HELIX**                                       |
| ------------- | ------------------------------------------------- | ----------------------------------------------- |
| NUI Focus     | `SetNuiFocus(enable_input, enable_mouse)`         | `Input.SetInputEnabled(enable_input)`<br>`Input.SetMouseEnabled(enable_mouse)` |
| NUI Message   | `SendNUIMessage({action = "togglePhone", data = not isOpen })` | `main_hud = WebUI("Phone", "file://ui/index.html")`<br>`main_hud:CallEvent("togglePhone", not isOpen)` |
| NUI Event     | `window.addEventListener('message', function(event) { if (event.data.action === "togglePhone") {` | `Events.Subscribe("togglePhone", function(bool) {` |

##### Player

| **Examples**  | **FiveM**                                         | **HELIX**                                       |
| ------------- | ------------------------------------------------- | ----------------------------------------------- |
| Player Kick   | `DropPlayer(src, reason)`                         | `my_player:Kick(reason)`                        |
| Player Name   | `GetPlayerName(src)`                              | `my_player:GetAccountName()`                    |
| Player Ped    | `local ped = PlayerPedID()`                       | `local player = Client.GetLocalPlayer()`<br>`local ped = player:GetControlledCharacter()` |

##### Character (ped)

| **Examples**  | **FiveM**                                         | **HELIX**                                       |
| ------------- | ------------------------------------------------- | ----------------------------------------------- |
| Animation     | `TaskPlayAnim()`                                  | `ped:PlayAnimation()`                           |
| Set Coords    | `SetEntityCoords(ped, coords)`                    | `ped:SetLocation(coords)`                       |
| Get Coords    | `GetEntityCoords(ped)`                            | `ped:GetLocation()`                             |
| Set Heading   | `SetEntityHeading(ped, rotation)`                 | `ped:SetRotation(0.0, rotation, 0.0)`           |
| Set Model     | `SetPlayerModel(ped, model)`                      | `ped:SetMesh(skeletal_mesh_asset)`              |
| Freeze Entity | `FreezeEntityPosition(ped, bool)`                 | `ped:SetInputEnabled(bool)`<br>`Input.SetInputEnabled(bool)` |
| Get Vehicle   | `GetVehiclePedIsIn(ped)`                          | `ped:GetVehicle()`                              |

##### Vehicle

| **Examples**  | **FiveM**                                         | **HELIX**                                       |
| ------------- | ------------------------------------------------- | ----------------------------------------------- |
| (Placeholder) | (Placeholder)                                     | (Placeholder)                                   |

##### Utilities

| **Examples**  | **FiveM**                                         | **HELIX**                                       |
| ------------- | ------------------------------------------------- | ----------------------------------------------- |
| Timeout       | `SetTimeout(milliseconds, callback)`              | `Timer.SetTimeout(callback, milliseconds)`      |
| Vector        | `vector3(X, Y, Z)`                                | `Vector(X, Y, Z)`                               |
| Entity Delete | `DeleteEntity(entity)`                            | `actor:Destroy()`                               |

#### Integration with Other Tools and Frameworks

The integration with UI frameworks and other tools in HELIX is similar to FiveM. Both environments support extensive UI development and integration, allowing developers to create rich, interactive interfaces for their applications.
