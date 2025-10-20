# Run a Dedicated Server

HELIX can be started with configuration parameters that let you:

- Host a **dedicated server (DS)**
- Run **local tests** with your own Workspaces or Worlds
- Connect clients directly to unpublished servers

This guide explains the most common parameters, how to set them, and provides example commands for both servers and clients.

---

## 🔑 How It Works

Servers can be:

- **Published** → Registered in Creator Hub, with a unique ID. Visible in the *Servers* tab of the Game Client (based on visibility rules).
- **Unpublished** → Run locally for testing or hosted on LAN/Internet. Not visible in the *Servers* tab; you must connect manually with parameters.

Parameters can be set in three ways (in order of priority):

1. Command line arguments or [URL parameters](https://dev.epicgames.com/documentation/en-us/unreal-engine/command-line-arguments-in-unreal-engine#additionalparameters)
    
    *(Default startup map: `/Game/Helix/Levels/L_HelixStartup.umap`)*
    
2. Environment variables
3. Steam launch options

📌 Example in Steam:

![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/ds.png)

## Common

| **Name** | **Description** |
| --- | --- |
| `HELIX_USER_EMAIL
HELIX_USER_PASSWORD` | Explicit user credentials. Most useful when the application is running in headless mode (without the UI) and there are no credentials cached locally (i.e., on a standalone DS). |
| `HELIX_WORKSPACE_ID` | ID of a local Workspace Draft. On Windows local Workspaces are located in `%LOCALAPPDATA%\Helix\Workspaces` folder. |
| `HELIX_SERVER_SLUG` | The Server Slug of a published server from the Creator Hub. |
| `HELIX_SERVER_ID` | The Server ID of a published server from the Creator Hub. |
| `HELIX_PACKAGE_SLUG` | The Package (World) Slug from the Creator Hub. |
| `HELIX_PACKAGE_VERSION_ID` | The Package (World) Version ID from the Creator Hub. |
| `HELIX_LOCAL_PAKS` | A `|` delimited list of paths to local folders created with a Creator Kit. |
| `HELIX_LEVEL_ASSET` | Full Object Path to the Level Asset that will replace the Default Blank Level hosting a Helix World. |

<aside>
💡

The load targets are listed in order of precedence. I.e. if a Workspace ID is provided, it will be loaded without trying other options. The Server Slug follows that and so on.

</aside>

<aside>
💡

A Package usually refers to a World package, which is equivalent to pressing the Join World button from the Main Menu. But it also can be any package from the Vault (e.g. a Map) which is equivalent to pressing the Preview button.

</aside>

## Server

| **Name** | **Description** |
| --- | --- |
| `HELIX_USER_TOKEN` | The Server Token of a published server from the Creator Hub. Should be used instead of explicit user credentials (login/password) for a published DS. |
| `HELIX_HEARTBEAT_PERIOD` | The server heartbeat period in seconds. Controls the server’s online status and IP address discovery. Should be set to a value of less than 10 min for a published DS. |
| `HELIX_NUCLEUS_PORT` | Experimental! Enables the Nucleus web admin panel on a server on a specified TCP port. Should not be used on public servers because authorization mechanisms are not implemented yet. |

Command line to start a published DS:

```bash
.\SandboxServer.exe -HELIX_USER_TOKEN=”...” -HELIX_SERVER_SLUG="sandbox-simple-server" -HELIX_HEARTBEAT_PERIOD=30
```

[2025-09-16 23-26-43.mp4](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/2025-09-16_23-26-43.mp4)

Command line to start an unpublished local DS from an existing workspace:

```bash
.\SandboxServer.exe -HELIX_WORKSPACE_ID="9d4c5900-472e-eac2-4abc-06926640bbf5"
```

Command line to start an unpublished DS from a published World:

```bash
.\SandboxServer.exe -HELIX_USER_EMAIL=”” -HELIX_USER_PASSWORD=”” -HELIX_PACKAGE_SLUG="sandbox-simple-map"
```

[2025-09-16 23-15-47.mp4](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/2025-09-16_23-15-47.mp4)

## Client

| **Name** | **Description** |
| --- | --- |
| `HELIX_CONNECT` | An address of a server to connect to. When connecting to a published Server by Slug or ID, it can be any non-empty value, e.g.
`*-HELIX_CONNECT=1*`

Important! When connecting to a server like this, the client needs to specify the exact same load target (Workspace, Server, World etc.) as the server.
 |

Command line to connect to an unpublished local DS started from an existing workspace:

```bash
.\SandboxGame.exe -HELIX_WORKSPACE_ID="9d4c5900-472e-eac2-4abc-06926640bbf5" -HELIX_CONNECT="127.0.0.1"
```
