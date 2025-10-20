# Add Lua Scripts to Your World with Workspaces

*A technical overview of workspace creation, persistence, detachment, and duplication*

---


<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/HOAPoJABycw?list=PLpvikbDcD_mgusf_RJ5lqTD7NbFzrI47z&index=2"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>



### **1. Overview**

A **Workspace** in HELIX is a **local folder** containing all files for a world you are editing.

- Used to store **unpublished changes** before publishing to the HELIX server.
- Can be **temporary** (deleted automatically) or **persistent** (saved as a draft).
- Workspaces allow multiple local versions (drafts) of the same world.

---

### **2. Temporary Workspaces**

- Created automatically whenever you:
    - Join a world.
    - Create a new world.
    - Preview assets from a world.
    - Connect to a remote server.
- **Purpose:** Required technically for the game to run, but **not shown to the user** in drafts.
- **Behavior:**
    - Deleted automatically when you leave the world.
    - Does not clutter the user’s disk.
    - Invisible in the Drafts list.

---

### **3. Converting to a Persistent Workspace**

A workspace becomes **persistent** when you:

1. **Save** the world (via Save button or menu).
2. **Publish** it for the first time.
3. **Auto-save** it using the quick-save function (no name prompt).

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/workspaces_1.png)

When saved:

- The workspace gets a **permanent ID**.
- It appears in the **Drafts** list.
- It will be offered as an option next time you join that world.

---

### **4. Opening, Creating, and Replacing Workspaces**

When joining a world with an existing draft:

- You are prompted to:
    - **Open existing workspace**.
    - **Create a new one**.
    - **Replace** the existing workspace.
- This prompt exists because:
    - There may be **local changes** you could overwrite.
    - There may be **remote changes** that require a fresh copy.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/workspaces_2.png)
    

---

### **5. Multiple Workspaces per World**

- You can have multiple drafts of the same world:
    - Example: `MyWorld` and `MyWorld 2` both reference the same server world.
- Each draft has its own local folder.
- Deleting a draft removes only that local workspace.

---

### **6. Detached Workspaces**

- **Detached Workspace:** A workspace **not linked** to its original world.
- Created when:
    - You save a workspace for a **world you do not own**.
    - You manually **detach** it from its original world.
- Detached workspaces:
    - Cannot be published to the original world’s package.
    - Publishing creates a **new world** on the server.
    - Are treated as independent projects.

---

### **7. Duplication vs. Detachment**

- **Duplication:** Simply creating another draft workspace for the same world.
    - Both drafts can publish to the same original world.
- **Detachment:** Explicitly breaking the link to the original world.
    - Future publishes create a new world.
- Both are **separate actions**:
    - Duplication keeps the link.
    - Detachment removes the link.

---

### **8. Publishing from a Workspace**

- If linked: Publishing updates the existing world on the server.
- If detached: Publishing creates a **new world package**.
- UI:
    - Linked workspace → option to “Update World.”
    - Detached workspace → option to “Publish as New World.”

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/workspaces_3.png)

---

### **9. Best Practices**

- **Save before exiting** to avoid losing work in temporary workspaces.
- Use **multiple drafts** to experiment without affecting your main version.
- **Detach** only when you need to create a new, independent world from an existing one.
- Keep your **Drafts folder** clean by deleting old or unused workspaces.
