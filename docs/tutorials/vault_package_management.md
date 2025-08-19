## **HELIX Developer Tutorial: Using the Vault**

*A guide to package management, dependencies, caching, and versioning on the HELIX platform*

---

### **1. What is the Vault?**

- The **HELIX Vault** is a **directory of packages** stored on HELIX’s backend servers
- The HELIX Vault is the central marketplace where you can find and get scripts and 3D assets (maps/ environments, interiors, vehicles, characters, props and packages) to create your Worlds.
- There are hundreds of free assets created or licensed by HELIX for our creators.
- You can also upload your own assets using the HELIX Creator Kit to share for free or sell for LIX.
- A **package** is:
    - An asset or group of assets
    - Modular, reusable building blocks for creating games or experiences in HELIX.

---

### **2. Browsing and Filtering Packages**

- View all available packages in the Vault.
- Use filters to:
    - Show only your own packages.
    - Show packages cached locally on your machine.
- Sort packages in different orders.

![image.png](attachment:ea13325f-23ec-4dbd-beae-376fa6102eea:image.png)

---

### **3. Package Dependencies**

- Packages can **depend on other packages**, forming a **dependency graph**.
- When downloading a package:
    - All dependencies are automatically downloaded.
- **Known issue:** Sometimes requires multiple clicks to start download.

![image.png](attachment:c6f72c5b-814e-43e5-93ee-cb39c69efbdc:image.png)

---

### **4. Downloading & Caching**

- Download progress is interactive and visible in real time.
- Once downloaded, packages are stored locally in the **Vault Cache**.
- **Manage Packages** view:
    - Shows cached packages.
    - Current dependency graph display is not valid yet (number shown is incorrect).
- You can clean (clear) the cache at any time.

<aside>
❕

Screenshot in the next build, now the UI is broken

</aside>

---

### **5. Package Versioning**

- HELIX stores **multiple versions** of each package.
- Updating a package does **not** automatically update its dependencies to avoid breaking assets or references.
- Older versions remain in the Vault.
- Currently:
    - Only latest version details are visible in the package details view.
    - Other versions exist but are hidden.

![image.png](attachment:340f6961-2596-4e7e-8e03-adebd2502384:image.png)

---

### **6. Package Details View**

- Shows information about the selected package.
- Some tabs are not yet operational — may be hidden in the future.
- You can navigate through dependencies from this view.
- A **Downloads sidebar** exists but is not yet fully implemented.

![image.png](attachment:17418a6c-e955-428c-a0bc-6c1f7c7e3dca:image.png)

---

### **7. Deleting Packages**

- Every cached package (or package you own) has a **Delete Package** button.
- Before deletion, HELIX analyzes dependencies:
    - If other packages depend on it → **can only delete from cache**.
    - If no dependencies → can delete from server and it will be removed from the Vault.
- You **cannot** delete a package that has dependent packages.

![image.png](attachment:61225dd3-64b5-44a5-a486-b430958299a3:image.png)

---

### **8. Package Types & Categories**

- Most current packages are **Map Packages**:
    - Bundles of assets (materials, textures, meshes, blueprints, etc.).
    - Contains at least one map (often multiple).
    - One map is designated as the **main map** to showcase assets.
- Two types of maps:
    1. **Unreal Native Map** – static, part of Unreal’s native level system.
    2. **QRE Map** – dynamic, can be updated at runtime in build mode.
        - No packages can depend on a QRE map.

![image.png](attachment:f39b2067-6264-4375-af1a-b0d91795235c:image.png)

---

### **9. Not Yet Implemented**

- Search bar.
- Alternate package view mode.
- Complete state handling for package buttons.

---

### **10. Package State Indicators**

- Buttons reflect the current package state:
    - **Missing Dependency** → “Get Dependency” button.
    - **Outdated Version** → “Download” button to update to latest.
- Example:
    - If a dependency is deleted from cache, the main package will prompt you to download it again.

![image.png](attachment:1cd615c9-da2e-459c-bc75-c44eca357017:image.png)

---

### **11. Known Issues & Limitations**

- Dependency graph display shows incorrect data.
- Some UI elements (tabs, download sidebar) are incomplete.
- State logic for package availability can be complex and is still under refinement.
