---
title: FiveM (GTA) 開發者指南
---

# FiveM (GTA) 開發者轉移指南

歡迎各位 FiveM 開發者加入 HELIX 的行列！ :wave:

在這裡，你將發現為什麼在 HELIX 上進行開發是一次革命性的體驗 — 以及它如何改善和優化你在 FiveM 中早已習慣的開發流程。讓我們一起來探索兩者之間的核心差異。

快速連結：

- [將你的 FiveM 資源轉換至 HELIX](../tutorials/ConvertingFivemAssets/converting-assets.md)
- [將你的 FiveM 腳本移植至 HELIX](../tutorials/porting-tutorial.md)

<div class="grid cards" markdown>

- :fontawesome-solid-people-line: __由模組創作者打造，專為創作者設計__<br>
  HELIX 不僅僅是一款遊戲 — 它是一個「開發者至上」的全新平台。所有的工具、工作流和系統均在設計之初就考慮到了創作者的需求，旨在消除你過去可能經常遇到的開發摩擦與維運開銷。<br><br>
  讓你將**更少的時間花在與引擎限制妥協**，而將**更多的精力專注於打造你所熱愛的遊戲體驗。**

- :material-unreal: __次世代 Unreal Engine 5 引擎__<br>
  FiveM 依賴於 GTA V 的舊世代遊戲引擎。而 HELIX 則是原生基於 Unreal Engine 5（虛擬引擎 5）構建，為你全面解鎖次世代的渲染、世界構建和極致的性能表現 — 從 Nanite（虛擬幾何體系統）和 Lumen（動態全域光照）到 Chaos 物理模擬和 MetaSounds（次世代音訊系統）。<br><br>
  這意味著**更廣闊的創作自由度**以及一套顯著領先時代的現代化開發工具箱。

- :material-api: __飛躍性的 API 設計__<br>
  HELIX 的腳本層提供了一套設計精良、基於類別（Class-based）的物件導向 API — 這對 Lua 開發者來說非常親切，但比過去的面向程序代碼更易於長期維護。它是為了清晰度、模組化和未來的可擴展性而生的。<br><br>
  你將享受到**更乾淨的代碼結構、更簡單的事件處理機制**，以及能支撐大型團隊協作項目的**可擴展架構底座**。

</div>

---

## 專案結構與模組化

HELIX 專案的整體代碼結構對於 FiveM 開發者來說會感到十分熟悉 — 但有一些核心的關鍵差異值得你留意：

- **清單文件 (Manifest Files)**：FiveM 使用 `fxmanifest.lua` 來定義資源元數據。而在 HELIX 中，這項工作是由符合業界現代標準的 `package.json` 文件來承擔，格式更加標準化且極具擴展彈性。

- **資源資料夾 (Resource Folders)**：與 FiveM 類似，HELIX 將腳本程式碼組織在各個文件夾中。不過，你可以完全自主地自訂文件夾結構並在 `package.json` 中進行聲明，這賦予了你對套件（Package）架構極高的掌控度。

- **伺服器配置文件 (Server Configuration)**：相較於 FiveM 傳統的 `server.cfg`，HELIX 採用現代的 `Config.json` 配置文件來管理伺服器的元數據和套件加載流程。兩者概念相近，但 HELIX 全面擁抱更易於編譯和解析的 JSON 格式。

---

## 物件與類別 (Class) 處理機制

HELIX 針對絕大多數的核心系統都採用了**基於類別（Class-based）**的架構，為遊戲開發提供高度組織化和物件導向（OOP）的方法。這種設計能讓你的代碼結構更加井然有序、模組化且極易於維護。

下面我們為你整理了 FiveM 與 HELIX 在核心開發場景下的直接代碼對照表：

### 網頁用戶界面 (Web UI / NUI)

| **開發場景** | **FiveM**                                                                                         | **HELIX**                                                                                              |
|--------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| UI 焦點鎖定   | `SetNuiFocus(enable_input, enable_mouse)`                                                         | `Input.SetInputEnabled(enable_input)`<br>`Input.SetMouseEnabled(enable_mouse)`                         |
| 發送 UI 消息  | `SendNUIMessage({action = "togglePhone", data = not isOpen })`                                    | `main_hud = WebUI("Phone", "file://ui/index.html")`<br>`main_hud:CallEvent("togglePhone", not isOpen)` |
| 訂閱 UI 事件  | `window.addEventListener('message', function(event) { if (event.data.action === "togglePhone") {` | `Events.Subscribe("togglePhone", function(bool) {`                                                     |

### 玩家物件 (Player)

| **開發場景** | **FiveM**                   | **HELIX**                                                                                 |
|--------------|-----------------------------|-------------------------------------------------------------------------------------------|
| 踢出玩家     | `DropPlayer(src, reason)`   | `my_player:Kick(reason)`                                                                  |
| 獲取玩家名稱 | `GetPlayerName(src)`        | `my_player:GetAccountName()`                                                              |
| 獲取玩家 Ped  | `local ped = PlayerPedID()` | `local player = Client.GetLocalPlayer()`<br>`local ped = player:GetControlledCharacter()` |

### 角色 Ped 控制 (Character)

| **開發場景**  | **FiveM**                         | **HELIX**                                                    |
|---------------|-----------------------------------|--------------------------------------------------------------|
| 播放動作/表情  | `TaskPlayAnim()`                  | `ped:PlayAnimation()`                                        |
| 設定坐標位置  | `SetEntityCoords(ped, coords)`    | `ped:SetLocation(coords)`                                    |
| 獲取當前坐標  | `GetEntityCoords(ped)`            | `ped:GetLocation()`                                          |
| 設定面朝方向  | `SetEntityHeading(ped, rotation)` | `ped:SetRotation(0.0, rotation, 0.0)`                        |
| 設定角色模型  | `SetPlayerModel(ped, model)`      | `ped:SetMesh(skeletal_mesh_asset)`                           |
| 凍結角色位置  | `FreezeEntityPosition(ped, bool)` | `ped:SetInputEnabled(bool)`<br>`Input.SetInputEnabled(bool)` |
| 獲取所坐車輛  | `GetVehiclePedIsIn(ped)`          | `ped:GetVehicle()`                                           |

### 車輛控制 (Vehicle)

| **開發場景**     | **FiveM**                                     | **HELIX**                                                            |
|------------------|-----------------------------------------------|----------------------------------------------------------------------|
| 生成載具車輛     | `local my_veh = CreateVehicle(hash, x, y, z)` | `local my_veh = HSimpleVehicle(location, rotation, blueprint_asset)` |
| 車門開關控制     | `SetVehicleDoorShut / SetVehicleDoorOpen`     | `my_veh:SetDoorState(Doorindex, NewState, Curvetype)`                |
| 獲取車輛行駛時速 | `GetEntitySpeed(entity)`                      | `my_veh:GetVehicleSpeed()`                                           |

### 實用工具與函數 (Utilities)

| **開發場景**  | **FiveM**                            | **HELIX**                                         |
|---------------|--------------------------------------|---------------------------------------------------|
| 延時定時器    | `SetTimeout(milliseconds, callback)` | `Timer.SetTimeout(callback, milliseconds)`        |
| 三維向量      | `vector3(X, Y, Z)`                   | `Vector(X, Y, Z)`                                 |
| 旋轉朝向      | `int`                                | `Rotator(0.0, int, 0.0)`  (Rotator Yaw = Heading) |
| 銷毀/刪除實體 | `DeleteEntity(entity)`               | `actor:Destroy()`                                 |

---

## 接下來的學習步驟

<div class="grid cards" markdown>

- :material-rocket-launch-outline: __快速上手教學__<br>
  最好的學習方式就是直接跳進去動手做。跟著我們的引導教學，在幾分鐘內打造你的第一個遊戲世界吧！<br><br>
  [:material-controller-classic-outline: 建立你的第一個世界](../tutorials/create_helix_world.md)

- :material-toolbox-outline: __專屬開發工具__<br>
  無論你專攻哪一個領域，HELIX 都準備了量身定制的專業工具來優化你的日常工作流。<br><br>
  [:octicons-command-palette-16: 腳本開發指引](../scripting/packageguide.md)<br>
  [:material-palette-outline: 美術創作者指南](../tutorials/creatorkit.md#-create-a-new-package)

- :material-book-open-variant: __瀏覽教學與精彩範例__<br>
  透過豐富的實戰指南、程式碼範例和真實場景，加速你的上手過程。<br><br>
  [:material-file-document-arrow-right-outline: 腳本開發實戰教學](../scripting/index.md)<br>
  [:material-file-document-arrow-right-outline: QBCore 框架文檔](../qbcore/index.md)

- :material-file-code-outline: __瀏覽 API 參考資料__<br>
  深入探索 HELIX 強大且全面的 API 體系，將平台提供的無限可能握於手心。<br><br>
  [:octicons-file-code-24: 檢視 API 參考](../api/index.md)

</div>
