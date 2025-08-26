# Creating your first world

This guide walks you through the **concept of Worlds and Servers in HELIX**, and shows you step by step how to create, script, and publish your first World.

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://youtu.be/embed/Q283bqr40P0"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

## **1. Worlds vs. Servers**

- A **World** in HELIX is a bundle of **packages** (maps, props, vehicles, characters, scripts, etc.) combined with **Lua scripts** to form a 3D experience.
- A **Server** is a running **instance of a World** that players can join.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_1.png)

### **Types of Servers**

- **Local (Listen) Servers**
    - Peer-to-peer hosted.
    - The host is both **player and server**, simulating physics and handling authority.
    - Free to use but non-persistent (when the host leaves or crashes, the server ends).
    
    <aside>
    💡
    
    Add a screenshot of someone hosting a Listen server
    
    </aside>
    
- **Dedicated Servers**
    - Hosted separately (through [Creator Hub](https://development.helix-documentation.pages.dev/tutorials/creatorhub/)).
    - Provide persistence and higher specs.
    - Required for long-term RP servers or large communities.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_2.png)
    

---

## **2. Connecting to Servers**

- Each World/Server has a **LIX URL** (e.g., makers-world.lix) you can enter directly.
- You can also connect via **IP address**.
- When joining a server, make sure the underlying World is downloaded locally.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_3.png)

---

## **3. Creating Your First World**

1. From the HELIX main menu, click **Create World**.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_4.png)
    
2. This launches you into an **empty world** with a default avatar.
3. Press **N** to enter **Build Mode**.
    - Here you can place maps, props, vehicles, and other assets.
    - You can also add scripts for custom logic.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_5.png)

---

## **4. Workspaces**

- Every new World you create is backed by a **workspace** (a local folder on disk).
- Workspaces store your scripts and configuration files.
- By default, a workspace gets a random ID, but you can rename it for clarity (e.g., “DemoWorld1”).

For an in-depth, standalone tutorial on Workspaces, please see the [Workspaces Tutorial](https://development.helix-documentation.pages.dev/tutorials/create_join_servers/).

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_6.png)

---

## **5. Editing Scripts**

1. In Build Mode, click **Edit Scripts**.
2. This opens your workspace folder.
3. Inside you’ll find a package.json file:
    - Defines which Lua files to load.
    - Supports **client**, **server**, and **shared** scripts.
    - *If you’re coming from FiveM, this structure will feel familiar.*

### **Example: Adding a Script**

1. Create a new Lua file in the scripts folder (e.g., main.lua).
2. Open your workspace in a text editor (VS Code recommended).
3. Add your logic (e.g., spawn an actor, attach a YouTube browser UI, etc.).
4. Back in HELIX, click **Hot Reload** to load your updated scripts instantly.

💡 **Tip:** Remember to handle cleanup — e.g., despawn actors when players leave — to avoid duplication issues after multiple reloads.

---

## **6. Publishing a World**

1. In Build Mode, click **Publish**.
2. Give your World a name and assign it a **unique .lix URL**.
3. Choose whether it’s **Public** (visible to everyone) or **Private** (invite-only).
4. HELIX auto-generates a thumbnail for your World (you can replace it later).
5. After publishing, your World will appear under **Drafts** (local unpublished versions) and **Mine** (published Worlds).
6. Other players can now create servers from your published World.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_7.png)

For a more in-depth standalone tutorial on world creation, please see the [Creating & Publishing Worlds Tutorial.](https://development.helix-documentation.pages.dev/tutorials/create_publish_worlds/)

For a more in-depth standalone tutoral on Build Mode, please see the [Build Mode Tutorial](https://development.helix-documentation.pages.dev/tutorials/buildmode/).

---

## **7. Managing Permissions**

- In **Creator Hub**, you can:
    - Make Worlds public or private.
    - Grant access to specific users.
    - Control permissions such as **joinable**, **instanceable** (who can spin up servers), or **remixable**.

---

## **8. Adding Dependencies from the Vault**

- [The **Vault**](https://development.helix-documentation.pages.dev/tutorials/vault_package_management/) is HELIX’s central marketplace where you can find and get scripts and 3D assets (maps/ environments, interiors, vehicles, characters, props and packages) to create your Worlds.  There are hundreds of free assets created or licensed by HELIX for our creators.
- You can also upload your own assets using the HELIX Creator Kit to share for free or sell for LIX (HELIX’s currency).
- It is also a **directory of packages** stored on HELIX’s backend servers where you can upload and manage your own public or private packages that you will use to create Worlds".
- To add assets to your World:
    1. Open the Vault in Build Mode.
        
        ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_8.png)
        
    2. Click **Add to World** on any package (maps, props, vehicles, etc.).
        
        ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_9.png)
        
    3. Assets become available in your Library and can also be referenced in Lua scripts.

---

## **9. Next Steps**

- **Creator Kit:** To bring in custom assets (maps, props, textures), use the HELIX Creator Kit.  See the [HELIX Creator Kit Tutorial](https://development.helix-documentation.pages.dev/tutorials/creatorkit/).
- **Remixing:** You can build Worlds entirely from Vault assets without importing anything yourself.

---

✅ You’ve now created, scripted, and published your first HELIX World!