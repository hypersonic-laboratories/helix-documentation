# Creator Kit


# 📦 Preparing a Package

This guide walks you through the process of preparing and testing a package with the HELIX Creator Kit Lite.

We’ll use the **QA_HoldingCells** addon (asset pack) as an example.

- **Download Creator Kit Lite:** [Download Link](https://drive.google.com/file/d/15tv5piYJuZ-_dHiJ5v_lbWXf4OkdwjMm/view?usp=sharing)
- **Example Addon:** [QA_HoldingCells Download](https://drive.google.com/file/d/1LfB6p_602zukYDkUvky_9cIjSj-jZKa7/view?usp=sharing)

<aside>
💡

Please ensure your project is on **Unreal Engine 5.5.4**. Both HELIX and Creator Kit Lite use this version, so it’s best to upgrade before migrating assets.

</aside>

---

## 🔨 Migration Steps

1. **Extract Creator Kit Lite** to a folder of your choice.
2. **Extract QA_HoldingCells** and open the `.uproject` file with the marketplace engine.
3. Right-click the folder with your assets → **Migrate**. 
    
    ![image (5).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_1.png)
    

<aside>
💡

You can also migrate a single asset/level. Unreal Engine will automatically include its dependencies.

</aside>

1. In the migration window, make sure **only your asset folder** is selected → click **OK**.
    
    ![image (6).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_2.png)
    

<aside>
💡

To keep dependencies correct, all assets must:
- Be inside a single folder under `/Content`
- Have no external dependencies or external plugins

</aside>

1. Navigate to your **Creator Kit Lite > Content** folder → click **Select Folder**.
    
    ![image (7).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_3.png)
    

1. Open Creator Kit Lite’s `.uproject` file. Your **QA_HoldingCells** folder should now appear in the Content Browser.

![image (9).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_4.png)

---

## 📦 Generating the Package

1. Go to **Content > Pakmaster**.
2. Right-click `WUT_CreatePAK` → **Run Editor Utility Widget**.
    
    ![image (10).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_5.png)
    

<aside>
💡

 This is a temporary widget. A more streamlined UI will replace it in the future. 


</aside>
![image (11).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_6.png)

1. Fill in the configuration:
- **Name** → must match the folder name (only lowercase letters/numbers, no spaces or symbols)
- **Path** → select the `QA_HoldingCells` folder
- **Type** → Map
- **Scene Path** → choose a map inside `QA_HoldingCells/Maps` (e.g. `QA_Holding_Cells_A`)

<aside>
💡

 Matching the **Name** with the folder name ensures local testing works correctly.

</aside>

1. Click **Generate** and wait. Processing time ranges from a few minutes to over an hour depending on map size. Progress will appear in the notification area.
    
    ![image (12).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_7.png)
    
2. When finished, check the output in:
    
    ```
    CreatorKit/Paks/Map/{package-name}
    ```
    
    This folder contains **Editor, Client, and Server files**.
    
    ![image (13).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_8.png)
    

---

# 🔍 Testing the Package

1. Launch a packaged build of the game (e.g. from Steam).
2. Click **Create World** (top right).
    
    ![image (14).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_9.png)
    
3. Once loaded, press **N** (Build Mode) → **File > Load Package**.
    
    ![image (15).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_10.png)
    
4. Select `configFile.json` from your generated package:
    
    ```
    CreatorKit/Paks/Map/QA_HoldingCells/configFile.json
    ```
    
    ![image (16).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_11.png)
    
5. Your assets should now appear, ready to drag into the World.
    
    ![image (17).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_12.png)
    

---

# ➕ Preparing for Publishing

Step 6 is only for testing that your package functions properly inside HELIX.

To actually publish a world that uses your newly created package, you must:

1. **Publish your package to the Vault** using the [Creator Hub](https://development.helix-documentation.pages.dev/tutorials/creatorhub).
2. Once published, create or edit your world project.
3. Add the published Vault package as a **dependency** to your world.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_13.png)
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_14.png)
    
4. Only then can you publish your world, ensuring players can access the required package.

# 🛠️ Editing Maps in Build Mode

- To edit a packaged map in-game:
    - Select the level reference in the Outliner.
    - Click **Deference Level** in the Properties Panel.
    - Save it as a **Dynamic Map**.

---

## 🗺️ Creating Map + Addon Packages

<aside>
💡

**Why do this?** Splitting content into **Map + Addon** lets you publish your assets as a reusable **asset pack** (Addon). Other creators can use your Addon to build their own maps, while your Map package stays small and only references those assets. This is the standard workflow if you want your assets to be shared, reused, or extended by the community.

</aside>

You can split assets into two packs:

- **Addon** (assets)
- **Map** (uses those assets)

Steps:

1. Create a new folder `Map_QA_HoldingCells`.
    
    ![image (26).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_15.png)
    
2. Move your map file there → Update Redirectors.
    
    ![image (27).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_16.png)
    
    ![image (28).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_17.png)
    
3. Package the **Map** first (type = Map).
    
    ![image (29).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_18.png)
    
    - Map package will be small (just references).
4. Then package the **Addon** (type = Asset Pack).
    
    ![image (30).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_19.png)
    
5. Upload Addon first to Creator Hub, then upload Map and mark the Addon as its dependency.
    
    ![image (32).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_20.png)
    
    ![image (31).png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit2_21.png)