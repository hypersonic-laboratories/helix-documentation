# Creating and Joining Servers

## **HELIX Developer Tutorial: Hosting & Joining Multiplayer Games**

*A guide to creating and connecting to multiplayer servers in HELIX*

---

### **1. Overview**

Multiplayer in HELIX allows you to host **Listen Servers** that other players can join, or connect to existing sessions.

- **Pre-requisite:** Worlds must be **published packages** and **downloaded locally** before hosting or joining.
- Draft worlds **cannot** be used for multiplayer.

---

### **2. Hosting a Multiplayer Server**

1. **Publish your world** as a package.
2. **Download the package locally**:
    - The **Create Server** button is disabled until the package is downloaded.
3. Go to the **world’s detail page** and click **Create Server**.
    
    ![image.png](attachment:ff6d39a8-3fa3-46f6-9a06-76f30630bb5a:image.png)
    
4. **Name** the server (optional).
5. Click **Create and Join**:
    - The session becomes visible to other players in the server list.
    - Anyone can join your session once it appears.

![image.png](attachment:a6b902fa-b1cc-49ff-99e2-bc713e0048fe:image.png)

---

### **3. Joining a Multiplayer Server**

You can join in two ways:

### **Option A: Join from a Specific World**

- Open the **world’s detail page**.
- Go to the **Servers** tab.
- See existing sessions for that world.
- **Download the world** first if not already downloaded.
- Click **Join**.

![image.png](attachment:832b523f-472e-449a-8ac8-575b5e3e2cc7:image.png)

### **Option B: Join from the Global Servers Tab**

- Go to the **Servers** tab in the main menu.
- Switch to the **EOS** (global) filter.
- See **all active Listen Servers** for any world.
- **Download the corresponding world** before joining.
- Click **Join**.

![image.png](attachment:46ad5b05-2037-4bbf-b7cf-3cd07a38f0d4:image.png)

---

### **4. Current Limitations (Pre-Alpha / Closed Alpha)**

- You **must manually download** the world before joining a session:
    - Attempting to join without the download will fail.
- There is **no automatic download & loading screen** yet.
    - Planned feature: Automatically fetch required assets when joining.
- The **Servers tab** does not currently display which world a session belongs to.
    - Planned fix before public release.

---

### **5. Best Practices**

- Publish and download your world before hosting to avoid delays.
- Check that all dependencies for your world are downloaded to ensure smooth joining for players.
- Communicate the **world name** to players so they can download it before attempting to join.
