# Build Mode

*A guide to editing, asset placement, dependencies, and map handling in HELIX Build Mode*

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/-vktTGVAez8?list=PLpvikbDcD_mgusf_RJ5lqTD7NbFzrI47z"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>


### **1. What is Build Mode?**

- **Build Mode** is a **sandbox runtime editor** in HELIX.
- It allows you to create **Worlds** by simply **dragging and dropping assets** — no coding required.
- You can:
    - Place meshes, materials, and prefabs.
    - Edit maps in real time.
    - Add scripts and dependencies directly from within the session.
- **Availability:**
    - **Pre-Alpha & Closed Alpha:** Single-player worlds only.
    - **Open Alpha (Q4 2025):** Multiplayer Build Mode with **collaborative building** support.

---

### **2. Accessing Build Mode**

- Build Mode is only available in **single-player worlds** (for now).
- To enter Build Mode:
    1. Create a new world via **Create World**.
    2. Or join an existing world via **Join World**.
- **Not available** if:
    - You create a multiplayer server.
    - You join an existing multiplayer session.
- **Shortcut:** Press **`N`** to toggle Build Mode once inside a world.

---

### **3. Object Placement**

- **Basic:** Drag-and-drop objects directly into the scene.
- Works with static assets (meshes, props) and materials.
- **Vehicles & complex physics objects:**
    - Dragging them directly can cause physics glitches.
    - **Best practice:** Hold **Shift** while dragging.
        - The object only spawns when you release the mouse, reducing instability.

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/buildmode_1.png)

---

### **4. Managing Dependencies**

- Worlds start with no dependencies.
- Open the **Vault** dialog (same as main menu) from Build Mode to:
    - Add dependencies.
    - View and manage downloaded packages.
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/buildmode_2.png)
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/buildmode_3.png)
    
- Added dependencies appear in:
    - **Dependencies list**.
    - **Downloads tab** (with live progress).
    
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/buildmode_4.png)
    
- **Pack files:** If dependency is a `.pak`, its assets mount into the **Library** tab.

---

### **5. Using Vault Assets in Build Mode**

- You can place meshes, materials, and **native Unreal levels** from dependencies.
- **Level Instances:**
    - Dragging a native level creates a **level instance**.
    - Great for static content, but **limitations** exist:
        - The level reference replicates in multiplayer.
        - **Objects inside** do **not** replicate — e.g., a car placed inside appears differently for each client.
- **Solution:** Convert static/native levels into **dynamic/editable** maps using the **Dereference** tool.

---

### **6. Player Start Actor**

- Place a **Player Start Actor** to define:
    - Where your avatar spawns in single-player.
    - Teleport location in Build Mode.
- Saved/published spawn points persist when reopening the world.

---

### **7. Reference Tracking Limitations**

- No automated warnings for removing dependencies with referenced assets.
- Removing such a dependency will break references after reload.
- Manage dependency cleanup manually for now.

---

### **8. Downloading New Assets During Build**

- From the Vault panel inside Build Mode:
    1. Download a new package.
    2. Add it as a dependency.
    3. Place its assets immediately in your scene.
- Active downloads appear in the Vault list and **Downloads tab**.

---

### **9. Materials (Work in Progress)**

- Basic material placement works, but there are known glitches.
- Drag-and-drop may fail in certain cases until the feature is finalized.

---

### **10. Best Practices**

- For multiplayer compatibility, keep **interactive objects** outside static/native level instances.
- Use **Shift + Drag** for large/complex objects.
- Convert maps to dynamic ones if they’ll contain interactive content.
- Save workspaces frequently.

