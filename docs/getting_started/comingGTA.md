---
title: FiveM (GTA)
status: wip
---
## Overview

The purpose of this page is to let experienced FiveM game developers get started using the unique features of the HELIX platform.

- For a general introduction to creating with HELIX, see [Creator Tools](creatorTools.md)
- For a complete technical overview, see the [HELIX API Documentation](../api/index.md)

### Main Differences From FiveM

ToDo (Kakarot)

### Terminology

| **Category**   | **FiveM**       | **HELIX**           |
| -------------  | --------------- | ------------------ |
| **Scripting**  | AddEventHandler      | Events.Subscribe          |
|                | RegisterNetEvent         | Events.SubscribeRemote           |
|                | TriggerEvent | Events.Call           |
|                | TriggerServer/ClientEvent  | Events.CallRemote      |
|                | `SetNuiFocus(enabe_input, enable_mouse)`      | `Input.SetInputEnabled(enable_input)` `Input.SetMouseEnabled(enable_mouse)` |
|                | ```SendNUIMessage({action = “togglePhone” data = not isOpen })``` | ```main_hud = WebUI("Phone", "file://ui/index.html") main_hud:CallEvent("togglePhone", not isOpen)```    |
|                | ```window.addEventListener('message', function(event) { if (event.data.action === "togglePhone") {```     |  ```Events.Subscribe("togglePhone", function(bool) {```         |
|                | ```SetTimeout(miliseconds, callback)```     |  ```Timer.SetTimeout(callback, milliseconds)```         |
|                | `vector3(X, Y, Z)`     |  `Vector(X, Y, Z)`         |
|                | `DeleteEntity(entity)`     |  `actor:Destroy()`         |
|                | `DropPlayer(src, reason)`     |  `my_player:Kick(reason)`         |
|                | `GetPlayerName(src)`     |  `my_player:GetAccountName()`         |
|                | ```local ped = PlayerPedID()```     |  `local player = Client.GetLocalPlayer()` <br>`local ped = player:GetControlledCharacter()`         |
|                | `TaskPlayAnim()`     |  `ped:PlayAnimation()`         |
|                | `SetEntityCoords(ped, coords)`     |  `ped:SetLocation(coords)`         |
|                | `GetEntityCoords(ped)`     |  `ped:GetLocation()`         |
|                | `SetEntityHeading(ped, rotation)`     |  `ped:SetRotation(0.0, rotation, 0.0)`         |
|                | `SetPlayerModel(ped, model)`     |  `ped:SetMesh(skeletal_mesh_asset)`         |
|                | `FreezeEntityPosition(ped, bool)`     |  `ped:SetInputEnabled(bool) or Input.SetInputEnabled(bool)`         |
|                | `GetVehiclePedIsIn(ped)`     |  `ped:GetVehicle()`         |
| **Other Terms**  | Placeholder            | Placeholder                |
