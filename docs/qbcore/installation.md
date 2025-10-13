# Downloading Packages

This guide will help you set up QBCore for HELIX so you can start developing right away.
QBCore is distributed as a single GitHub repository containing all of its Lua packages.
Simply download it, place it in your HELIX workspace, and you’re ready to go.

## 1. Download QBCore

Head to the official GitHub repository:

[HELIX QBCore](https://github.com/hypersonic-laboratories/qbcore-rp)

You can either:

- Click Code → Download ZIP to download it directly, or
- Clone it using Git:

```bash
git clone https://github.com/hypersonic-laboratories/qbcore-rp
```

---

## 2. Create A Workspace
Launch the HELIX client, click "Create World" & configure it. Click continue, once loaded into the world press the "N" key to open build mode.
Select the code icon that shows a tooltip stating "Edit Scripts". Save the world.
Once that's selected it will open Windows Explorer with the correct directory. Proceed to next step.

---

## 3. Add to Your Workspace
Extract (if downloaded as a ZIP) or copy the repository folder into your HELIX server workspace. For example:

```lua
-- workspace will be a long combo of numbers and letters
/workspace
  /scripts   <-- put the repo inside this folder
```

---

## 4. Configure Your Server
Open your HELIX server’s configuration file `config.json`.
Make sure the QBCore packages are listed under your packages section so HELIX can load it at startup:
This is already setup by default from the github repository.

```json
{
  "packages": [
    "qb-core",
    etc..
  ]
}
```

---

## 5. Start Coding
Once QBCore is in place, open build mode and save. Press escape and leave world, rejoin world.
All QBCore Lua APIs will now be available.
You can immediately begin creating scripts, resources, and game modes using the QBCore framework.

---

## 6. Keep QBCore Updated
Pull the latest changes periodically to stay up-to-date:

```bash
cd workspace/scripts
git pull
```

This ensures you have the newest fixes, features, and modules.