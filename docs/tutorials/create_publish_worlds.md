# Creating & Publishing Worlds

*A guide to creating, editing, and publishing Worlds in HELIX*

---

### **1. What is a World?**

- A **World** is a **special type of package** in HELIX.
- Like packages, worlds follow the same rules for:
    - Viewing, filtering, downloading, and deleting.
    - Handling dependencies and caching.
- **Key Difference:**
    - Packages are **building blocks**.
    - Worlds are **bundles** of multiple assets that form a playable, editable experience.

---

### **2. Contents of a World**

A World typically contains:

- A **dynamic map** — editable in build mode.
- **Lua scripts** — bundled with the map to define game logic.
- (Future) Imported assets — textures, meshes, or other user-imported resources.

---

### **3. Worlds vs. Packages**

| Feature | Package | World |
| --- | --- | --- |
| Purpose | Modular building block | Playable, bundled experience |
| Playable | No | Yes |
| Editable | No | Yes (via workspace) |
| Publishing | As package | As world (and optionally as map) |
| Dependencies | Yes | Yes (same rules) |

---

### **4. Workspaces**

- A **Workspace** is a **local folder** that stores all files for a world you are editing.
- Created automatically when:
    - You create a new world.
    - You join a world for editing.
- Purpose:
    - Store **unpublished changes** locally.
    - Allow revision control and local file access.
- Two types:
    - **Draft Workspace** — saved locally and listed in your drafts.
    - **Transient Workspace** — temporary, deleted if not saved.

---

### **5. Creating a World**

1. Press **Create World**.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/create_publish_worlds_1.png)
    
2. A **local workspace** is created.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/create_publish_worlds_2.png)
    
3. The workspace is editable in build mode.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/create_publish_worlds_3.png)
    
4. Save changes to keep them locally.
5. **Drafts tab** shows saved workspaces.
6. Publish to make the world available on the HELIX server.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/create_publish_worlds_4.png)

---

### **6. Editing & Publishing**

- **Local Draft**:
    - Editable.
    - Can be published at any time.
- **Server World**:
    - Static copy on HELIX backend.
    - To edit, create or open a workspace.
- You can have **multiple drafts** for the same world.

---

### **7. Map vs. World Publishing**

- Publish as **Map**:
    - Only the map data is published.
    - Scripts and other bundled assets are excluded.
- Publish as **World**:
    - Publishes the complete bundle (map + scripts + assets).

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/create_publish_worlds_5.png)

---

### **8. Lua Script Integration**

- Worlds can include Lua scripts to add game logic.
- Editing flow:
    1. Open Lua editor (planned: auto-open VS Code or similar).
    2. Modify or add `.lua` files.
    3. Update `manifest.json` to define script execution context:
        - `shared` → runs on both client and server.
        - `server` → runs on server only.
    4. Reload in HELIX to apply changes.
- Example: Spawn vehicles from a script and see them appear instantly in your workspace.

---

### **9. Transient Workspaces**

- Created when joining or creating a world but not yet saved.
- Stored in a temporary folder.
- Deleted automatically if not saved.
- Once saved, becomes a **draft**.

---

### **10. Creating a World from a Package**

- From Vault package details, press **Create World**:
    - Creates a local workspace.
    - Spawns the package asset into the workspace.
    - Can be saved/published as a world.
- Works with maps, Lua scripts, or other asset packages.

---

### **11. Best Practices**

- Save frequently to avoid losing work in transient workspaces.
- Use separate drafts for major variations of a world.
- Keep scripts organized and clearly scoped (server/client/shared).
- Publish both as **Map** and **World** when you need both reusable level geometry and a full game experience.
