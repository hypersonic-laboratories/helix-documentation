# Unreal Engine 5.7 migration guide for Creator Kit users

>💡 This guide helps creators migrate their assets/projects from the now-deprecated **Creator Kit** (UE 5.5) into the new **HELIX Studio** (UE 5.7).

Legacy packages created in the **Creator Kit** and published via **Creator Hub** are not compatible with **HELIX Game Client** builds that use Unreal Engine 5.7. Those packages must be converted to **HELIX Studio** projects and re-published to the Vault.

****

## Migration Steps

Suggested steps to achieve this, using the default **Creator Kit** packages as an example:

### Map & Addon Packages

1. Open HELIX Studio and create a **Blank** **HELIX Studio** project:
    
    ![image.jpg](MigrationImages/1.jpg)

    <br>

2. Open Creator Kit using Unreal Engine 5.5 and identify the package folders to migrate (**Content** subfolders and/or **Content Plugins**):
    
    ![image.jpg](MigrationImages/2.jpg)

    ??? note "HELP! I'm struggling to find the right folders!"
        If you are struggling to locate the folders, click on "Open Helix Packaging" menu at the top, access the package you need to check and click "Browse". This will show you the folder it's linked to.

3. Open both the **Creator Kit** and **HELIX Studio** project folders in Windows Explorer, then copy the package folders to their corresponding places (**Content** Subfolders to **Content**, **Content Plugins** to **Plugins**):
    
    ![image.jpg](MigrationImages/3.jpg)
    
    <br>
   
    ![image.jpg](MigrationImages/4.jpg)
    
    <br>

4. Restart **HELIX Studio**
                 
5. The next step is different depending on the package

    1. For Map packages:

        - Move all assets except the **METADATA** folder and any **DAAL_*** data assets into the **WorldMap** Content Plugin:
            
            ![image.jpg](MigrationImages/5.jpg)
        
        <br>
            
        - If references get broken during migration, you will need to repair them manually. After that, click **Update Redirectors** and then Delete the remaining folder:
            
            ![image.jpg](MigrationImages/6.jpg)
         
        <br>
           
        - Open the **World Map** package properties and set your Level asset as the **Main Asset**:
            
            ![image.jpg](MigrationImages/7.jpg)
         
        <br>
           
        - The new level will be opened; you may now delete the default level asset (**L_WorldMap**)

    2. For other packages:

        - Create a new package of the corresponding package type:
            ![image.jpg](MigrationImages/9.jpg)
        
        <br>

        - Move all assets except the **METADATA** folder and any **DAAL_*** data assets into the created **Content Plugin**:

            ![image.jpg](MigrationImages/10.jpg)
        
        <br>  

        - If references get broken during migration, you will need to repair them manually. After that, click **Update Redirectors** and then Delete the remaining folder:

            ![image.jpg](MigrationImages/11.jpg)

#### Including package dependencies

In case your package has dependencies, you need to select it in the Properties menu ([please refer to this guide for details](studio.md#dependencies)).

??? note "reveal screenshot"
    ![image.png](StudioImages/image%208.png)

****

### World & Draft Packages

World and Draft (unpublished World) packages need to be migrated to 5.7 in a different way.

<br>

#### Pre-Conditions

1. Preparing packages

    If your old World and Draft has dependencies (map, addons etc), you first need to migrate them to 5.7 by following the steps above.

    /// info | Note
    When migrating your packages, make sure to select "PUBLISH TO VAULT" and not just "PACKAGE LOCALLY", as it is not possible to publish a World that depends on unpublished packages. If you are happy to keep your World only as a Draft (unpublished World), you can still import packages locally for testing.
    ///

2. Finding the unsupported World's local folder

    Once you have your migrated packages ready, you need to find the location of the unsupported World that you wish to rebuild on your computer.

    1. Launch the **HELIX Game** client and go to WORLDS.

    2. Find your unsupported World, click on it, then click on BROWSE to open it in your local folder.

        /// info | Note
        If you no longer have this World locally, instead of BROWSE you will see DOWNLOAD button first, click to download it.
        ///

    3. Keep this folder of the unsupported World open, you will need it later.

<br>

#### Rebuilding the World

Now when you have everything you need for your new world, you need to recreate it either in **HELIX Game** client or in **HELIX Studio**.

<br>

##### Via HELIX Game Client

1. Launch the game client.

2. If you are using a Map package, go to VAULT, find the package and click "PREVIEW". If you are only using addons and other packages (not Map), from the main menu, go to WORLDS and click "CREATE WORLD" button.

3. Press N to open Build mode.

    1. If you published your migrated packages to Vault, click on Vault, find the corresponding packages and click "ADD TO WORLD".

    2. If you only packaged them locally, click File -> Load Package -> Navigate to the configFile.json file of your migrated package (`Studio Project Folder\Project Name\Saved\HelixPackages\Package Name`).

        /// info | Note
        Local import of packages would only work for unpublished Worlds. After testing and before publishing your World, you must publish your packages to Vault.
        ///

4. While still in Build Mode, click the "Edit Scripts" button at the top. This will save your World and open its local folder.

5. Go up a level (to go from Scripts to the root folder of the World). Earlier in "Pre-Conditions" Step 2, you opened a local folder of your unsupported World that you are now converting. Copy "content" and "scripts" folder from that folder over the same folders in your new World's local folder.

6. Make other changes to your world in Build Mode if required (spawn assets etc).

7. Save your unpublished World (Draft). At this stage, your Draft has been migrated to 5.7 and can be played in game client. If you wish, you can now click the PUBLISH button in Build Mode to publish it.

<br>

##### Via HELIX Studio

1. Open **HELIX Studio** (it's accessible on Steam when you have access to **HELIX Game** client, see [this guide for details](studio.md#first-steps)).

2. Create a new Studio project (you can choose any template, for World it may be easier to start with Blank).

3. [Follow this guide](studio.md#worlds-and-packages-in-helix-studio) to add all dependencies you need for your new World, test it and publish.

4. At this stage, your World has been migrated to 5.7 and can be played in game client. To find it, open **HELIX Game** client and go to WORLDS.

****

## Package testing

Test your migrated packages inside **HELIX Studio** ([refer to this guide](studio.md#testing-in-editor)).

****

## Package publishing

Publish the migrated & tested packages to the Vault following the [**HELIX** Studio User Guide](studio.md#publishing).