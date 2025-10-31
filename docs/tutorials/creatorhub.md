# Publish Package to Vault

You can use **Creator Hub** to upload packages (such as maps, worlds, characters, and addons) created using [Creator Kit](creatorkit.md) to the Vault.

👉 Access Creator Hub here: [hub.helixgame.com/dashboard/packages/manager](https://hub.helixgame.com/dashboard/packages/manager)

Follow the steps below to upload a package.

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/CNDf5BL1Bds"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

## 1. Create a New Package

1. From the **Package Management** page, click **Create Package** (top right).
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_1.png)
    

1. Fill in the following fields:
    - **Package Name** – The display name of your package.
    - **URL Slug** – A short, unique identifier (lowercase, no spaces, use dashes if needed).
    - **Description** – Write a short summary of what your package does or contains.
    - **Package Type** – Select from:
        - Map
        - World
        - Character
        - Addon
        - Script
        - Other
    - **Content Rating** – Choose the appropriate age rating:
        - Everyone
        - Teen
        - Mature
        - Adult
    - **Tags (Optional)** – Add relevant tags to help with discoverability.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_2.png)

---

## 2. Add Preview Images

- Upload one or more images to showcase your package.
- Supported formats: **JPEG, PNG, WebP**
- Images appear in the order you add them.
- At least one preview image is recommended.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_3.png)

---

## 3. Upload Package Files

### Script Packages

You must upload your entire package folder (which typically contains subfolders such as Server, Client, Shared) as a **single zip file**.

For script packages you can skip the next step. No version config file upload is needed.

### Other Packages (Addon, Map, etc)

You must upload at least one package file. All files must be in **PAK format**.

- **Client Files** – Files that run on the user’s device.
- **Server Files** – Backend logic that runs on the server.
- **Editor Files** – Tools or development resources.

<aside>
💡

If you followed the  [**Creator Kit tutorial](creatorkit.md)** on how to cook your packages, you should already have the necessary files ready for upload.

</aside>

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_4.png)

---

## 4. Version Config (Optional)

Upload a `config.json` file if your package needs specific execution settings. You can skip this step for script type packages.

This file should define:

- **execution_path**
- **MountFolder**

You can skip this step if your package doesn’t need it.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_5.png)

---

## 5. Add Dependencies (Optional)

If your package depends on other packages:

1. Click **Add Dependency**.
2. Search by package name.
3. Select the required version.

Dependencies can also be added later.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_6.png)

---

## 6. Finalize Upload

- Review all entered information.
- Confirm and upload your package.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/creatorhub_7.png)
