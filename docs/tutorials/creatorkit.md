# Creator Kit


The **HELIX Creator Kit** is an Unreal Editor project that lets you cook/package your maps, 3D assets, Blueprints, animations, and audio for use in **HELIX.**  You can use them in **HELIX Build** **Mode**(the sandbox editor) or upload to the **HELIX Vault** (the developer marketplace). Support for characters, vehicles, doors, and other entity types is coming soon.  Features include automatic thumbnail generation, with more functionality in development.

This guide walks you through preparing a HELIX package using the Creator Kit and testing it inside the HELIX client build.

---




## **Prerequisites**

- Install **Unreal Engine 5.5.4** (the version HELIX uses).
- Download the following:
    - **Creator Kit** → [Google Drive link](https://drive.google.com/file/d/15tv5piYJuZ-_dHiJ5v_lbWXf4OkdwjMm/view?usp=sharing)
    
    In this example, we are going to use a sample map called QA_HoldingCells → [Google Drive link](https://drive.google.com/file/d/1LfB6p_602zukYDkUvky_9cIjSj-jZKa7/view?usp=sharing), but you can use whatever asset you want.
    

💡 **Tip:** If your project uses an older version of Unreal, upgrade it before migrating assets.

---

## **Step 1. Prepare Your Project**

1. Extract **Creator Kit** into a folder of your choice.
2. Extract the **QA_HoldingCells** project (or your own project).
3. Open its `.uproject` file with Unreal Engine.

💡 **Note:** All assets you migrate will be included in the `.pak` file. To migrate only selected assets, right-click on the asset/level → **Migrate**. Unreal will automatically bring along its dependencies.

---

## **Step 2. Migrate Your Assets**

1. In your UE project, right-click the **folder** containing your assets → **Migrate**.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_1.png)
    

1. Confirm only that folder is selected and click **OK**.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_2.png)
    

1. Choose the **Content** folder (that you choice in Step 1.1) inside **Creator Kit** as the destination.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_3.png)
    

💡 **Important:** Keep all assets in a **single folder** under `Content/`. Avoid external plugins or references.

---

## **Step 3. Verify Migration**

1. Open the `.uproject` file in Creator Kit.
2. Confirm the migrated folder (e.g., `QA_HoldingCells`) appears in the Content Browser.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_4.png)

---

## **Step 4. Generate a Package (PAK)**

1. Go to **Content → Pakmaster**.
2. Right-click `WUT_CreatePAK` → **Run Editor Utility Widget**.
    
    *(This temporary widget will be replaced by a streamlined UI in future builds.)*
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_5.png)
    

1. Configure settings:
    - **Name:** Must match the folder name. Use only lowercase letters/numbers (no spaces or symbols).
    - **Path:** Select your project folder (e.g., `QA_HoldingCells`).
    - **Type:** Choose **Map**.
    - **Scene/Level:** Pick a map inside `QA_HoldingCells/Maps` (e.g., `QA_Holding_Cells_A`).
        
        ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_6.png)
        

1. Click **Generate** and wait for completion.
    - Processing may take 5 minutes to over an hour, depending on asset complexity.
    - Progress notifications appear in the editor’s bottom-right corner.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_7.png)

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_8.png)

---

## **Step 5. Locate Your Generated Files**

- Navigate to your Creator Kit folder → `Paks/Map/{YourPakName}/`.
- You’ll find:
    - Editor files
    - Client files
    - Server files

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_9.png)

---

## **Step 6. Test Your Package in HELIX**

1. Launch a **packaged build of HELIX** (e.g., Steam build).
2. Click **Create World** (top right).
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_10.png)
    

1. Once loaded, press **N** to open the Map Editor.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_11.png)
    

1. Go to **File → Load Package**.
2. Navigate to `Creator Kit/Paks/Map/{YourPak}/configFile.json` and select it.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_12.png)
    

1. Your assets should now appear in the editor, organized into folders.
    - Example: drag and drop `QA_Holding_Cells_A` into the world.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorkit_13.png)

---

## **Step 7. Editing Maps Inside HELIX**

- Select the level reference in the **Outliner**.
- In the **Properties Panel**, click **Dereference Level**.
- This converts the level into a **Dynamic Map**, allowing you to edit and save it directly in HELIX Build Mode.

---

✅ You’ve now successfully created, packaged, and tested a HELIX map using the Creator Kit!
