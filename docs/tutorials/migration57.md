# Unreal Engine 5.7 migration guide for Creator Kit users

>💡 This guide helps creators migrate their assets/projects from the now-deprecated **Creator Kit** into the new **HELIX Studio** (UE 5.7).

Legacy packages created in the **Creator Kit** and published via **Creator Hub** are not compatible with **HELIX Game Client** builds that use Unreal Engine 5.7. Those packages must be converted to **HELIX Studio** projects and re-published to the Vault.

Suggested steps to achieve this, using the default **Creator Kit** packages as an example:

1. Create a **Blank** **HELIX Studio** project:
    
    ![image.jpg](MigrationImages/1.jpg)
    
2. Identify the package folders to migrate (**Content** subfolders and/or **Content Plugins**):
    
    ![image.jpg](MigrationImages/2.jpg)
    
3. Open both the **Creator Kit** and **HELIX Studio** project folders in Windows Explorer, then copy the package folders to their corresponding places (**Content** Subfolders to Content, **Content Plugins** to **Plugins**):
    
    ![image.jpg](MigrationImages/3.jpg)
    
    ![image.jpg](MigrationImages/4.jpg)
    
4. Restart **HELIX Studio**
5. For Map packages:
    - Move all assets except the **METADATA** folder and any **DAAL_*** data assets into the **WorldMap** Content Plugin:
        
        ![image.jpg](MigrationImages/5.jpg)
        
    - Verify and repair broken references, then **Update Redirectors** and **Delete** the remaining folder:
        
        ![image.jpg](MigrationImages/6.jpg)
        
    - Open the **World Map** package properties and set your Level asset as the **Main Asset**:
        
        ![image.jpg](MigrationImages/7.jpg)
        
    - Save properties, then **Leave** the World and Join it again:
        
        ![image.jpg](MigrationImages/8.jpg)
        
    - The new level will be opened; you may now delete the default level asset (**L_WorldMap**)
6. For other packages:
    - Create a new package of the corresponding package type:
        
        ![image.jpg](MigrationImages/9.jpg)
        
    - Move all assets except the **METADATA** folder and any **DAAL_*** data assets into the created **Content Plugin**:
        
        ![image.jpg](MigrationImages/10.jpg)
        
    - Verify and repair broken references, then **Update Redirectors** and Delete the remaining folder:
        
        ![image.jpg](MigrationImages/11.jpg)
        
7. Test your migrated packages inside **HELIX Studio**, then publish them to the Vault following the [**HELIX** Studio User Guide](studio.md).
