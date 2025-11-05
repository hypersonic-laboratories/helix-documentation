# Create Your First HELIX World

*A comprehensive guide to developing and publishing servers on HELIX. We'll cover core concepts such as Workspaces, Packages, Worlds, Creator Kit, Blueprints, Build Mode, and more.*

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://youtube.com/embed/Q283bqr40P0"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

---

## **1. Introduction to Core Concepts**

- A **Package** is a modular bundle of assets (Lua scripts, Blueprints, UIs, meshes, textures, etc.) that can be combined together with other Packages (via dependencies) to form a playable **World**. It is comparable to a **resource** in FiveM.
- A **World** is a **special type of Package** that contains main gameplay logic (Lua scripts, Blueprints) and a list of **package dependencies** to form a playable, editable experience in HELIX. It is comparable to a **recipe** in FiveM. 
- A **Server** is an **instance of a World** that multiple players can connect to and play in.  Unlike FiveM, servers do NOT contain any logic or assets - instead, they are contained within the World. Read more about this concept and how to host a Dedicated Server [here](dedicated_server.md).
    - **Local (Listen/P2P) Servers**
        - Peer-to-peer hosted.
        - Free to use but non-persistent (when the host leaves or crashes, the server ends).    
    - **Dedicated Servers**
        - Hosted on a dedicated machine, connect via IP address.
        - Persistence, higher player counts.
- The **Vault** is the centralized **package manager** in HELIX. Packages (including Worlds) are uploaded, versioned, and downloaded from Vault and cached/updated locally. It is comparable to **npm** in NodeJS or **pip** in Python.
- The **Creator Kit** is an Unreal Engine plugin released by HELIX to package custom assets to be imported into HELIX worlds. You can download it and get started [here](creatorkit.md).

**Key Differences:**

| Feature | Package | World | Server
| --- | --- | --- | --- |
| Purpose | Modular building blocks (assets) | Bundled game experience | Joinable instance of a World
| Playable | No | Yes (via servers) | Yes
| Editable | No | Yes (via workspace) | No (update World instead)
| Publishing | As package | As world package | As server instance
| Dependencies | Yes | Yes | No

**A World contains:**

- **Package dependencies list**, including a **default map package** and **imported assets** (textures, meshes, etc.)
- **Lua scripts** – defines game logic
- Optionally, a **dynamic map** editable in Build Mode (explained later)

---

## **2. Creating Your First World & Server**

### **Create New World**

A **Workspace** is a **local folder** that stores all files for a World you are editing. During development you will primarily be editing files in your **workspace**. You can connect this folder to version control such as Git.

1. Press **Create World** from Client > Worlds tab, select map
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_4.png)
2. Press the **Code button** in Build Mode ("N" key to activate) toolbar to open **local workspace folder**
3. Press the **Save button** to keep saves locally

### **Add Gameplay Logic**

You can use Lua or Blueprints in your workspace to add gameplay logic to your world. Follow [this guide](../scripting/packageguide.md) to get familiar with Lua scripting on HELIX and [Get Started with QBCore](../qbcore/installation/) to start with the QBCore RP server template. Blueprint scripting guide will be coming soon.

### **Add Package Dependencies**

You can add  packages (including frameworks such as [QBCore](../qbcore/)) to your world to extend its functionality. Press the **Vault button** on bottom navbar to browse and add packages. You can see the download progress in the **Downloads** UI.

Any package you add from Vault is **not directly editable**. Only files within your workspace are editable. You can reference and call classes, functions, assets from added packages in your own gameplay logic, as well as pass data and variables to/from them.

### **Import Custom Assets from Creator Kit**

You can import and use any type of custom asset (Blueprints, Classes, UIs, meshes, textures, materials, etc) in your world by following [these guides](creatorkit.md#-create-a-new-package).

### **Publish World**

You can publish your world as **Public** or **Private**. Once published, users with permissions will be able to see and join your world in the Client > **Worlds tab** or see it in [helixgame.com/worlds](https://helixgame.com/worlds).

/// Warning!
**IMPORTANT!** If your world contains imported custom assets from the previous step, **you must publish those local packages to the Vault first and add them as dependencies** before being able to publish your world. Follow [this guide](creatorhub.md) to publish packages to Vault.
///

Press the **Publish button** in Build Mode (rocket icon) to upload latest changes to Vault, and select Public/Private. This automatically **zips up your local workspace** and uploads it to Vault.

If set to Private, you can grant access to specific users from **[Creator Hub](https://hub.helixgame.com/)** > Manage Worlds > Grant Access.

### **Manage Draft Worlds**

You can see and edit your local draft worlds in Client > Worlds tab > **Drafts filter**.


### **Host Dedicated Server**

Follow [this guide](dedicated_server.md) to host a Dedicated Server of your world. This guide will soon be updated to cover **HELIX Instant Hosting**.

### **Update World / Server**

To update your world, press the **Publish button** and select "publish as new version" or "replace existing version". This will update your world with the latest local workspace. Make sure to restart any Dedicated Servers of this world for it to receive the updates. If you are using HELIX Instant Hosting, the server will be restarted automatically.

---

## **3. Additional Help**

If you get stuck or need help at any stage of your HELIX development journey, feel free to ask for help on our [Official Discord](https://discord.gg/helixgame). Our staff and other creators will be happy to help you.
