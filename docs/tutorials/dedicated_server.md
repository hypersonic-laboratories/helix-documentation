# Host a Dedicated Server

You can host a HELIX Dedicated Server in just a few minutes. Follow this guide to get your server up and running!

First, it's very important to understand that a HELIX server differs greatly from a traditional game server that you may be used to (such as FiveM server). A HELIX server is an **instance of a HELIX World** - the server itself does NOT contain any logic or assets - instead, those are contained within the World package. You do not connect remotely to a HELIX server to update its logic or assets. Instead, you must publish a new version of the HELIX world to Vault, then restart your server.

The server and client directly downloads the latest World package and its package dependencies from the Vault CDN. The server maintains the authoritative game state and replicates updates to all clients. Read [this guide](create_helix_world.md) to understand how HELIX worlds and servers work before proceeding.

---

## Step 1: Create Your World

1. Launch the HELIX game client
2. Follow the [world creation guide](create_helix_world.md) to create and publish your world

## Step 2: Access Creator Hub

1. Navigate to the [Creator Hub](https://hub.helixgame.com/)
2. Log in with your credentials
3. Select **Server Management** from the sidebar

## Step 3: Register Your Server

1. Click the **Create Server** button
2. Configure your server settings:
   - **Server Name**: Choose a display name for your server
   - **Slug**: Create a unique identifier (cannot be changed later—keep it short!)
   - **Description**: Add details about your server
   - **Visibility**: Check the box to make your server public, or leave unchecked for private
   - **World**: Select the world you created in Step 1
   - **Settings**: Set content rating, max players, tags, and preview images
3. Click **Create Server**
4. **IMPORTANT**: Copy and save your server token immediately—you'll need it in the next step
5. Registration complete!

## Step 4: Configure Firewall (If Needed)

If you're hosting on a dedicated machine or behind a firewall, you'll need to open port 7777:

1. Open **port 7777** for both **TCP** and **UDP** protocols
2. Configure port forwarding on your router if hosting from home
3. Allow the port through Windows Firewall or your system's firewall software

**Note**: If you're using a hosting provider, check their documentation for port configuration.

## Step 5: Launch Your Server

### Install the Dedicated Server
1. Open your Steam library on your dedicated machine
2. Locate **HELIX Dedicated Server** (requires access)
3. Install the application

### Create the Startup Script
1. Create a new file named `start_server.bat` on your server machine's desktop
2. Add the following content:
```bat
@echo off
cd /d "C:\Program Files (x86)\Steam\steamapps\common\HELIX Dedicated Server"
SandboxServer.exe -HELIX_USER_TOKEN="" -HELIX_SERVER_SLUG="" -HELIX_HEARTBEAT_PERIOD=30 -log
```

3. Configure the script:
   - **Path**: Update the `cd /d` path if your installation differs (find it by right-clicking HELIX Dedicated Server in Steam → **Browse Local Files**)
   - **Token**: Paste your token from Step 3 between the quotes after `HELIX_USER_TOKEN`
   - **Slug**: Enter your server slug between the quotes after `HELIX_SERVER_SLUG`
4. Save the file and run it
5. Verify your server shows as **Online** in Creator Hub's Server Management section

## Step 6: Update Your Server

Your server is linked to the world you selected in Step 3. To update your server:

1. Make changes to your world on your local machine
2. Save and publish the updated world
3. Restart your dedicated server to load the latest version

The server will automatically pull the newest published version of your world.

## Step 7: Connect to Your Server

### Public Servers
- Visible to all players in the **Servers** tab of the HELIX client
- Anyone can browse and join

### Private Servers
- Only visible to you when logged into the same account used to create the server
- Find it in the **Servers** tab and click **Join**

---

## Launch Options

### Common

| **Name** | **Description** |
| --- | --- |
| `HELIX_USER_EMAIL` |
| `HELIX_USER_PASSWORD` | Explicit user credentials. Most useful when the application is running in headless mode (without the UI) and there are no credentials cached locally (i.e., on a standalone DS). |
| `HELIX_WORKSPACE_ID` | ID of a local Workspace Draft. On Windows local Workspaces are located in `%LOCALAPPDATA%\Helix\Workspaces` folder. |
| `HELIX_SERVER_SLUG` | The Server Slug of a published server from the Creator Hub. |
| `HELIX_SERVER_ID` | The Server ID of a published server from the Creator Hub. |
| `HELIX_PACKAGE_SLUG` | The Package (World) Slug from the Creator Hub. |
| `HELIX_PACKAGE_VERSION_ID` | The Package (World) Version ID from the Creator Hub. |
| `HELIX_LOCAL_PAKS` | A `|` delimited list of paths to local folders created with a Creator Kit. |
| `HELIX_LEVEL_ASSET` | Full Object Path to the Level Asset that will replace the Default Blank Level hosting a Helix World. |

### Server

| **Name** | **Description** |
| --- | --- |
| `HELIX_USER_TOKEN` | The Server Token of a published server from the Creator Hub. Should be used instead of explicit user credentials (login/password) for a published DS. |
| `HELIX_HEARTBEAT_PERIOD` | The server heartbeat period in seconds. Controls the server’s online status and IP address discovery. Should be set to a value of less than 10 min for a published DS. |
| `HELIX_NUCLEUS_PORT` | Experimental! Enables the Nucleus web admin panel on a server on a specified TCP port. Should not be used on public servers because authorization mechanisms are not implemented yet. |

### Client

| **Name** | **Description** |
| --- | --- |
| `HELIX_CONNECT` | An IP address of a server to connect to. When connecting to a published Server by Slug or ID, it can be any non-empty value, e.g. `*-HELIX_CONNECT=1*`<br><br>Important! When connecting to a server like this, the client needs to specify the exact same load target (Workspace, Server, World etc.) as the server. |
