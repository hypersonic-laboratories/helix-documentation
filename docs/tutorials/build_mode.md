# How to Use Build Mode

*Note: As of now, creators must use Build Mode to create and publish worlds. Soon it will become purely optional, as creators will be able to publish worlds and packages directly from within Creator Kit.*

**Build Mode** is a **sandbox runtime editor** in HELIX that allows you to create and publish Worlds. You can also use it to create **Dyanmic Maps** by **dragging and dropping assets** from packages.

---

## **Intro to Build Mode**

Build Mode is only available in **single-player worlds** for now. Later on, we will add **multiplayer support** allowing multiple creators to collaborate on the same world together.

**You can:**

- Place meshes, materials, and other assets within mounted packages
- Edit dynamic maps in real time
- Add scripts and dependencies to the world
- Publish new worlds or update existing worlds

### **Accessing Build Mode**

**To enter Build Mode:**

1. Create a new world via **Create World**
2. Preview a map package from Vault tab, then pressing **`N`**

**Not available if:**

- You create or join a multiplayer server

---

## **Creating Dynamic Maps in Build Mode**

There are two types of maps in HELIX:
1. **Native Map**: Level created in Unreal Engine and packaged as a **map package** using Creator Kit.
2. **Dynamic Map**: Level created in Build Mode using primitives and assets from package dependencies.

### **Starting Map**

You can choose a **Native Map** as your starting point for your **dynamic map**.
1. Press **Create World** from Client > Worlds tab
2. Select a starting map
    - Blank level
    - Published map package from Vault
    - Unpublished, local map package from your PC (created using Creator Kit)

### **Using Assets from Vault Packages**

Click **Vault tab** on bottom navbar to browse and add package dependencies from Vault. Added packages will show under **Library panel > Packages folder**. You can place any Unreal asset (i.e. meshes, skeletal meshes, blueprints, even **native Unreal levels**) contained inside any of your dependencies to your Dynamic Map level. 

### **Level Instances:**

- Dragging a native level creates a **level instance**
- Great for static content, but **limitations** exist:
  - The level reference replicates in multiplayer
  - **Objects inside** do **not** replicate – e.g., a car placed inside appears differently for each client
- **Solution:** Convert static/native levels into **dynamic/editable** maps using the **Dereference** tool

### **Object Placement**

- **Basic:** Drag-and-drop objects directly into the scene
- Works with static assets (meshes, props) and materials

**For Vehicles & Complex Physics Objects:**

- Dragging them directly can cause physics glitches
- **Best practice:** Hold **Shift** while dragging
- The object only spawns when you release the mouse, reducing instability

### **Player Start**

Place a **Player Start Actor** (found in Top Toolbar > Create > Player Start) to define:

- Where your avatar spawns in single-player
- Teleport location in Build Mode
- Saved/published spawn points persist when reopening the world

### **Materials (Work in Progress)**

- Basic material placement works, but there are known glitches
- Drag-and-drop may fail in certain cases until the feature is finalized

### **Publishing Options**

**Publish as Map:**

- Only the map data is published as a Dynamic Map package
- Scripts and other bundled assets are excluded

**Publish as World:**
- Publishes the complete bundle (map + scripts + assets) as a World package

### **Current Limitations**

- No automated warnings for removing dependencies with referenced assets
- Removing such a dependency will break references after reload
- Manage dependency cleanup manually for now
