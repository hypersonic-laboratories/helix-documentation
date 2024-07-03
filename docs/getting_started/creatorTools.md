---
title: Creator Tools
status: change
---

# HELIX's Tooling Ecosystem

**HELIX Studio** is a collection of tools built on top on Unreal Engine 5. In combination with the **Launcher**, it provides the tools needed to create fantastic worlds and experiences.

## Studio

![](../_images/getting_started/StudioSpam.jpg)

- As an Unreal plugin everything you know about Unreal is relevant, and everything you learn will help you progress as a developer
- HELIX adds functions for the most common use cases, allowing you to make an RP game far easier than without our tooling (e.g. asset cooking, code linking, hot reload, etc.).
    - The table below highlights some of the most common elements (accessible via the top center icons):

| :material-earth:  | :material-pencil-ruler: |
|:------------------|:-----|
| Start VS Code     | Import Asset |
| Server Hot Reload | New Assets/Packages/Items|
| Publish World     | Publish Assets |

??? abstract "Full Studio Feature List"

    #### World
    ![Studio World](/img/docs/assets-modding/studio-features/01-world-features.png)

    - **Start VS Code**: Initiates Visual Studio Code within the Package folder.
    - **Regenerate Placeholder**: Refreshes the placeholder file located in the package.
    - **Server Hot Reload**: When enabled, the plugin checks for changes in the package file and automatically performs a hot reload within the editor.
    - **Publish**: 
    - **All**: Cooks and publishes both the world asset and package.
    - **Package**: Only publishes the package.

    #### Asset
    ![Studio Assets](/img/docs/assets-modding/studio-features/02-asset-feature.png)

    - **Open Creator Exchange**: Display the creator exchange where assets created by other users can be imported into the project.
    - **Import Asset**: Allows users to import asset packs that have been downloaded.
    - **New Package**: Initiates the creation of a new server package.
    - **New Asset Pack**: Initiates the creation of a new asset pack.
    - **New Item**: Initiates the creation of a new item.
    - **Publish Asset**: Cooks and uploads to the HUB a specified asset pack.

## Launcher

Note that **HELIX's Launcher** also contains some key tools to ease your development experience.

![](../_images/getting_started/HELIXLauncher.png)

- Access to the [HELIX Vault](https://helixgame.com/vault)
- Easily launch new/old projects, start standalone servers, and more

## Next Steps
<div class="grid cards" markdown>

-   __Quickstart__

    The best way to learn is by doing. Make your first game with us, in minutes!

    [:material-controller-classic-outline: Making Your First Game](firstGame.md)

-   __Explore more tools__

	Check out the hub links to choose where you go next.

    [:material-palette-outline: Modelers](modelers.md)

    [:octicons-server-16: RP Server Owners](rpServerOwners.md)

-   __View tutorials and examples__

    See how it's done directly, either step-by-step or through examples.

    [:material-file-document-check-outline: See Tutorials](../tutorials/index.md)

-   __Start Coding__

    Start VS Code from Studio, and get cracking!

    [:octicons-file-code-24: View API](../api/index.md)

    [:octicons-command-palette-16: Scripting Home](../scripting/index.md)
</div>
