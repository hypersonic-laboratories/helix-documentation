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
    
    ![image.png](attachment:50ce50e2-5e16-4297-b55d-a3db6e4dbedf:image.png)
    

1. Confirm only that folder is selected and click **OK**.
    
    ![image.png](attachment:be0b5369-ad6c-4b19-8706-c157a74deff5:image.png)
    

1. Choose the **Content** folder (that you choice in Step 1.1) inside **Creator Kit** as the destination.
    
    ![image.png](attachment:50fddc38-76e9-4890-98c2-99af5653eeba:image.png)
    

💡 **Important:** Keep all assets in a **single folder** under `Content/`. Avoid external plugins or references.

---

## **Step 3. Verify Migration**

1. Open the `.uproject` file in Creator Kit.
2. Confirm the migrated folder (e.g., `QA_HoldingCells`) appears in the Content Browser.

![image.png](attachment:1a43f2fc-14ec-4d70-9fd2-45505399f899:image.png)

---

## **Step 4. Generate a Package (PAK)**

1. Go to **Content → Pakmaster**.
2. Right-click `WUT_CreatePAK` → **Run Editor Utility Widget**.
    
    *(This temporary widget will be replaced by a streamlined UI in future builds.)*
    
    ![image.png](attachment:df078eec-6c56-48e9-b751-853f4a42ccf4:image.png)
    

1. Configure settings:
    - **Name:** Must match the folder name. Use only lowercase letters/numbers (no spaces or symbols).
    - **Path:** Select your project folder (e.g., `QA_HoldingCells`).
    - **Type:** Choose **Map**.
    - **Scene/Level:** Pick a map inside `QA_HoldingCells/Maps` (e.g., `QA_Holding_Cells_A`).
        
        ![image.png](attachment:e9c8fe6e-f4ed-480f-bd7b-8d510b0ba6cc:image.png)
        

1. Click **Generate** and wait for completion.
    - Processing may take 5 minutes to over an hour, depending on asset complexity.
    - Progress notifications appear in the editor’s bottom-right corner.

![image.png](attachment:ccca249e-7000-4ad0-99bb-a0f0a4250b39:image.png)

![image.png](attachment:bb2c19b3-b096-43aa-a614-0e4b901ea33a:image.png)

---

## **Step 5. Locate Your Generated Files**

- Navigate to your Creator Kit folder → `Paks/Map/{YourPakName}/`.
- You’ll find:
    - Editor files
    - Client files
    - Server files

![image.png](attachment:5e1ffb8e-4aed-4c71-be21-671d46a7939b:image.png)

---

## **Step 6. Test Your Package in HELIX**

1. Launch a **packaged build of HELIX** (e.g., Steam build).
2. Click **Create World** (top right).
    
    ![image.png](attachment:a9b59c5c-6d72-460d-97e0-4554e4d62820:image.png)
    

1. Once loaded, press **N** to open the Map Editor.
    
    ![image.png](attachment:b07f8267-b98e-4207-8bca-99ea40331aef:image.png)
    

1. Go to **File → Load Package**.
2. Navigate to `Creator Kit/Paks/Map/{YourPak}/configFile.json` and select it.
    
    ![image.png](attachment:bfae570f-99dc-4719-8804-d0a37f91533e:image.png)
    

1. Your assets should now appear in the editor, organized into folders.
    - Example: drag and drop `QA_Holding_Cells_A` into the world.

![image.png](attachment:3cde24e6-77e8-4260-ab1d-db093b9ca905:image.png)

---

## **Step 7. Editing Maps Inside HELIX**

- Select the level reference in the **Outliner**.
- In the **Properties Panel**, click **Dereference Level**.
- This converts the level into a **Dynamic Map**, allowing you to edit and save it directly in HELIX Build Mode.

---

✅ You’ve now successfully created, packaged, and tested a HELIX map using the Creator Kit!
