---
title: FiveM (GTA)
# status: wip
---

# Coming From FiveM (GTA)

Welcome FiveM developers! :wave:

Discover why developing in HELIX is a game-changer — and how it improves on what you're used to in FiveM. Let's explore
the key differences.

Quick Links:

- [Convert your FiveM assets to HELIX](../tutorials/ConvertingFivemAssets/converting-assets.md)
- [Port your FiveM scripts to HELIX](../tutorials/porting-tutorial.md)

<div class="grid cards" markdown>

- :fontawesome-solid-people-line: __Built By Modders, For Modders__<br>
  HELIX isn’t just a game — it’s a developer-first platform. Every tool, workflow, and system is designed with modders
  in
  mind, removing the friction and overhead you’ve likely encountered before.<br><br>
  Spend **less time fighting limitations**, and **more time building what you love.**

- :material-unreal: __Unreal Engine 5__<br>
  FiveM relies on GTA V’s legacy engine. HELIX is built natively on Unreal Engine 5, unlocking access to next-gen
  rendering, world-building, and performance features — from Nanite and Lumen to Chaos physics and MetaSounds.<br><br>
  This means **greater creative freedom** and a significantly more modern toolset.

- :material-api: __API Improvements__<br>
  HELIX’s scripting layer offers a structured, class-based API — familiar to Lua developers, but far more maintainable.
  It’s built for clarity, modularity, and future growth.<br><br>
  Expect **cleaner code, simpler event handling,** and **a scalable foundation** for large or team-driven projects.

</div>

## Structure and Modularity

The overall structure of code in HELIX will feel familiar to FiveM developers — but there are some key differences worth
noting:

- **Manifest Files**: FiveM uses `fxmanifest.lua` to define resource metadata. In HELIX, this is handled by a
  `package.json` file, following a more standardized and flexible format.

- **Resource Folders**: Like FiveM, HELIX organizes scripts into folders. However, the folder structure is entirely
  customizable and defined in `package.json`, giving you more control over how your packages are structured.

- **Server Configuration**: Instead of `server.cfg`, HELIX uses a `Config.json` file for server metadata and resource
  loading. The concept is similar but aligns with a modern JSON-based configuration approach.

## Object and Class Handling

HELIX uses a class-based architecture for most of its core systems, offering a more structured and object-oriented
approach to development. This design makes your code more organized, modular, and easier to maintain.

Below are some direct comparisons between how things are done in FiveM versus HELIX:

### UI

| **Examples** | **FiveM**                                                                                         | **HELIX**                                                                                              |
|--------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| NUI Focus    | `SetNuiFocus(enable_input, enable_mouse)`                                                         | `Input.SetInputEnabled(enable_input)`<br>`Input.SetMouseEnabled(enable_mouse)`                         |
| NUI Message  | `SendNUIMessage({action = "togglePhone", data = not isOpen })`                                    | `main_hud = WebUI("Phone", "file://ui/index.html")`<br>`main_hud:CallEvent("togglePhone", not isOpen)` |
| NUI Event    | `window.addEventListener('message', function(event) { if (event.data.action === "togglePhone") {` | `Events.Subscribe("togglePhone", function(bool) {`                                                     |

### Player

| **Examples** | **FiveM**                   | **HELIX**                                                                                 |
|--------------|-----------------------------|-------------------------------------------------------------------------------------------|
| Player Kick  | `DropPlayer(src, reason)`   | `my_player:Kick(reason)`                                                                  |
| Player Name  | `GetPlayerName(src)`        | `my_player:GetAccountName()`                                                              |
| Player Ped   | `local ped = PlayerPedID()` | `local player = Client.GetLocalPlayer()`<br>`local ped = player:GetControlledCharacter()` |

### Character (ped)

| **Examples**  | **FiveM**                         | **HELIX**                                                    |
|---------------|-----------------------------------|--------------------------------------------------------------|
| Animation     | `TaskPlayAnim()`                  | `ped:PlayAnimation()`                                        |
| Set Coords    | `SetEntityCoords(ped, coords)`    | `ped:SetLocation(coords)`                                    |
| Get Coords    | `GetEntityCoords(ped)`            | `ped:GetLocation()`                                          |
| Set Heading   | `SetEntityHeading(ped, rotation)` | `ped:SetRotation(0.0, rotation, 0.0)`                        |
| Set Model     | `SetPlayerModel(ped, model)`      | `ped:SetMesh(skeletal_mesh_asset)`                           |
| Freeze Entity | `FreezeEntityPosition(ped, bool)` | `ped:SetInputEnabled(bool)`<br>`Input.SetInputEnabled(bool)` |
| Get Vehicle   | `GetVehiclePedIsIn(ped)`          | `ped:GetVehicle()`                                           |

### Vehicle

| **Examples**     | **FiveM**                                     | **HELIX**                                                            |
|------------------|-----------------------------------------------|----------------------------------------------------------------------|
| Spawn            | `local my_veh = CreateVehicle(hash, x, y, z)` | `local my_veh = HSimpleVehicle(location, rotation, blueprint_asset)` |
| Door Interaction | `SetVehicleDoorShut / SetVehicleDoorOpen`     | `my_veh:SetDoorState(Doorindex, NewState, Curvetype)`                |
| Get Speed        | `GetEntitySpeed(entity)`                      | `my_veh::GetVehicleSpeed()`                                          |

### Utilities

| **Examples**  | **FiveM**                            | **HELIX**                                         |
|---------------|--------------------------------------|---------------------------------------------------|
| Timeout       | `SetTimeout(milliseconds, callback)` | `Timer.SetTimeout(callback, milliseconds)`        |
| Vector        | `vector3(X, Y, Z)`                   | `Vector(X, Y, Z)`                                 |
| Heading       | `int`                                | `Rotator(0.0, int, 0.0)`  (Rotator Yaw = Heading) |
| Entity Delete | `DeleteEntity(entity)`               | `actor:Destroy()`                                 |

## Next Steps

<div class="grid cards" markdown>

- :material-rocket-launch-outline: __Quickstart__<br>
  The fastest way to learn is by jumping in. Follow this guided tutorial to build your first game in minutes<br><br>
  [:material-controller-classic-outline: Create Your First World](../tutorials/create_helix_world.md)

- :material-toolbox-outline: __Disciple specific tooling__<br>
  No matter your focus, HELIX has tailored tools to support your workflow<br><br>
  [:octicons-command-palette-16: Scripters](../scripting/packageguide.md)<br>
  [:material-palette-outline: Artists](../tutorials/creatorkit.md#-create-a-new-package)

- :material-book-open-variant: __View tutorials and examples__<br>
  Learn by example with step-by-step guides and real-world use cases<br><br>
  [:material-file-document-arrow-right-outline: Scripting Tutorials](../scripting/index.md)<br>
  [:material-file-document-arrow-right-outline: QBCore Documentation](../qbcore/index.md)

- :material-file-code-outline: __Browse the API__<br>
  Dive into the full HELIX API and see everything at your fingertips<br><br>
  [:octicons-file-code-24: View API](../api/index.md)

</div>
