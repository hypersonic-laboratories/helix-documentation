# DS and local testing guide

The HELIX application accepts several configuration parameters, which are primarily useful for running a dedicated server (DS) or supporting specific local testing scenarios.

The DS can be either published (registered with a Creator Hub) or unpublished. In the case of a published DS, the server will have its unique ID and will be displayed in the Servers tab of the Game Client according to visibility rules. Unpublished DSs are usually run on a local machine for testing but can also be run on a LAN or internet server. Connecting game clients to unpublished servers is not possible from the Main Menu yet and must be done manually with configuration parameters.

All parameters can be passed as [URL parameters](https://dev.epicgames.com/documentation/en-us/unreal-engine/command-line-arguments-in-unreal-engine#additionalparameters) (Map name is `/Game/Helix/Levels/L_HelixStartup.umap`), as command line arguments, or set as environment variables, in that order of precedence.

One can also specify them directly in Steam:
![image.png](https://r2.fivemanage.com/Xspz7pZ6XgY1ICg3KwrkM/steamwebhelper_4N8LdvOaeH.png)

## Common

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid black; padding: 5px;">Name</th>
    <th style="border: 1px solid black; padding: 5px;">Description</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_USER_EMAIL<br>
      HELIX_USER_PASSWORD
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      Explicit user credentials. Most useful when the application is running in headless mode (without the UI) and there are no credentials cached locally (i.e., on a standalone DS).
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_WORKSPACE_ID
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      ID of a local Workspace Draft. On Windows local Workspaces are located in <pre><code>%LOCALAPPDATA%\Helix\Workspaces</code></pre> folder.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_SERVER_SLUG
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The Server Slug of a published server from the Creator Hub.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_SERVER_ID
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The Server ID of a published server from the Creator Hub.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_PACKAGE_SLUG
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The Package (World) Slug from the Creator Hub.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_PACKAGE_VERSION_ID
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The Package (World) Version ID from the Creator Hub.
    </td>
  </tr>
 <tr>
  <td style="border: 1px solid black; padding: 5px;">
      HELIX_LOCAL_PAKS
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      A `|` delimited list of paths to local folders created with a Creator Kit.
    </td>
  </tr>
 <tr>
  <td style="border: 1px solid black; padding: 5px;">
      HELIX_LEVEL_ASSET
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      Full Object Path to the Level Asset that will replace the Default Blank Level hosting a Helix World.
    </td>
  </tr>
</table>

<div style="border-left: 4px solid #f0c040; background-color: #f0f0f0; padding: 10px; margin: 10px 0;">
💡 The load targets are listed in order of precedence. I.e. if a Workspace ID is provided, it will be loaded without trying other options. The Server Slug follows that and so on.
</div>

<div style="border-left: 4px solid #f0c040; background-color: #f0f0f0; padding: 10px; margin: 10px 0;">
💡 A Package usually refers to a World package, which is equivalent to pressing the Join World button from the Main Menu. But it also can be any package from the Vault (e.g. a Map) which is equivalent to pressing the Preview button.
</div>

## Server

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid black; padding: 5px;">Name</th>
    <th style="border: 1px solid black; padding: 5px;">Description</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_USER_TOKEN
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The Server Token of a published server from the Creator Hub. Should be used instead of explicit user credentials (login/password) for a published DS.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_HEARTBEAT_PERIOD
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      The server heartbeat period in seconds. Controls the server’s online status and IP address discovery. Should be set to a value of less than 10 min for a published DS.
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_NUCLEUS_PORT
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      <pre><code>Experimental!</code></pre> Enables the Nucleus web admin panel on a server on a specified TCP port. Should not be used on public servers because authorization mechanisms are not implemented yet.
    </td>
  </tr>  
</table>

A typical command line to start a published DS:

`.\SandboxServer.exe -HELIX_USER_TOKEN=”...” -HELIX_SERVER_SLUG="sandbox-simple-server" -HELIX_HEARTBEAT_PERIOD=30`

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/3bvEie6l6CU"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

<br>

A typical command line to start an unpublished local DS from an existing workspace:

`.\SandboxServer.exe -HELIX_WORKSPACE_ID="9d4c5900-472e-eac2-4abc-06926640bbf5"`

A typical command line to start an unpublished DS from a published World:

`.\SandboxServer.exe -HELIX_USER_EMAIL=”” -HELIX_USER_PASSWORD=”” -HELIX_PACKAGE_SLUG="sandbox-simple-map"`

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/0ZHsIxZ6Azw"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

## Client

<table style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid black; padding: 5px;">Name</th>
    <th style="border: 1px solid black; padding: 5px;">Description</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; padding: 5px;">
      HELIX_CONNECT
    </td>
    <td style="border: 1px solid black; padding: 5px;">
      An address of a server to connect to. When connecting to a published Server by Slug or ID, it can be any non-empty value, e.g.
-HELIX_CONNECT=1.<br><br>
<pre><code>Important!</code></pre> When connecting to a server like this, the client needs to specify the exact same load target (Workspace, Server, World etc.) as the server.<br>
    </td>
  </tr>  
</table>

A typical command line to connect to an unpublished local DS started from an existing workspace:

`.\SandboxGame.exe -HELIX_WORKSPACE_ID="9d4c5900-472e-eac2-4abc-06926640bbf5" -HELIX_CONNECT="127.0.0.1"`
