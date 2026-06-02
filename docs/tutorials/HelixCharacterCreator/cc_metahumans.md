# Creating Custom MetaHumans

This guide walks you through creating a custom MetaHuman head in **Helix Studio**, packaging it as a wearable vault package, and registering it so it appears in the in-game character creator.

By the end you will have a custom MetaHuman head that players can select and equip on their characters at runtime.

---

## Prerequisites

- Helix Studio installed.
- An Epic account (required for the cloud rigging step).
- Familarity with MetaHuman Creator for sculpting a custom head shape.

---

## 1. Create a Project

Launch Helix Studio and create either a **new wearable sample project** or a **blank project** to start from.

![Creating a new project in Helix Studio](custom_cc_metahumans_assets/01-create-project.png)

---

## 2. Create a Wearable Vault Package

1. From the toolbar menu, select **Packages → Manage Packages → New Package**.

    ![New Package dialog with type set to Wearable](custom_cc_metahumans_assets/02-new-package.png)

2. Fill in the details for your wearable vault package. Set the **type** to **Wearable**.

    ![New Package dialog with type set to Wearable](custom_cc_metahumans_assets/03-new-package.png)

3. Click **Create Package**.

    Package creation generates a new plugin folder named after your package. This folder is the **root** where you gather all MetaHuman-related assets.

    ![New Package dialog with type set to Wearable](custom_cc_metahumans_assets/04-new-package.png)

---

## 3. Create the MetaHuman Character Asset

1. Open your new package plugin folder.
2. Right-click an empty area in the content browser and choose **MetaHuman → MetaHuman Character**.

    ![MetaHuman Character entry in the content browser context menu](custom_cc_metahumans_assets/05-metahuman-creator-entry.png)

3. Name your MetaHuman character asset and open it.

    ![MetaHuman character editor](custom_cc_metahumans_assets/06-character-editor.png)

    /// note | Note
    The MetaHuman Character UI is tailored to HELIX requirements. Some features available in standard Unreal Engine may not be available in the HELIX MetaHuman character creator.
    ///

---

## 4. Enable Skin Textures

To display skin textures on the character, select **Topology → Skin** from the viewport toolbar menu.

![Topology menu with Skin selected](custom_cc_metahumans_assets/07-topology-skin.png)

---

## 5. Choose a Body Type

Open the **Body** section from the side toolbar and click the body type you want.

![Body section with body type options](custom_cc_metahumans_assets/08-body-type.png)

/// warning | Warning
The body type determines gender compatibility for items, so choose it carefully. If you select a **female** body type try to use it for male characters, the height difference between the two MetaHuman bodies will make the generated head incompatible with male facial accessories and hair.
///

/// note | Note
Body sculpting is **currently not supported**, and the generated body mesh won't be used by the character creator. You can adjust body proportions in the HELIX Character Creator's body section instead.
///

---

## 6. Sculpt the Head

Open the **Head** section from the side toolbar to begin sculpting.

![Head sculpting section](custom_cc_metahumans_assets/09-head-sculpt.png)

For detailed head sculpting controls, see the [MetaHuman Head Controls documentation](https://dev.epicgames.com/documentation/metahuman/head-controls).

### Adjusting Head Scale

To tweak the overall scale of your character, use the **Head Scale** slider inside the **Transform** tool. From the same panel you can also:

- Reset the head to its identity state.
- Align the neck to the body after modifying the head.

![Transform tool with Head Scale slider](custom_cc_metahumans_assets/10-head-scale.png)

/// note | Note
It's recommended to align the neck to body after finalizing the head sculpting, to ensure neck proportions match the head size.
///

---

## 7. Adjust Materials

Open the **Materials** section to tweak your character's textures. Here you can change:

- Skin texture and color
- Eye color and iris type
- Teeth
- Makeup

![Materials section](custom_cc_metahumans_assets/11-materials.png)

For detailed material controls, see the [MetaHuman Materials documentation](https://dev.epicgames.com/documentation/metahuman/materials-controls).

/// note | Note
Even though skin color is also configurable in the HELIX Character Creator UI, the skin color chosen in MetaHuman Creator still affects your character when the head is selected. The skin color originating from MetaHuman Creator becomes the **base** skin color once the head is selected, and the in-UI skin color override is applied **additively** on top of it.
///

/// warning | Warning
You can add makeup to your character from MetaHuman Creator, but they will conflict with makeup added through the HELIX Character Creator UI, and the MetaHuman Creator makeup will be **always visible**. Unless you have a specific reason, do not add makeup to custom heads.
///

---

## 8. Prepare for Export (Cloud Rigging)

After finalizing your character, click the following buttons in the top toolbar:

1. **Download Texture Sources**
2. **Create Joints Only Rig**

This may prompt you to log into an Epic account for the cloud rigging process.

---

## 9. Assemble the Character

Once rigging completes, click **Assembly** in the side toolbar.

1. Set the assembly type to **HELIX Optimized**.

    ![Assembly settings with HELIX Optimized type](custom_cc_metahumans_assets/12-assembly-settings.png)

1. Set **Root Directory** to your new package plugin folder.

    ![Assembly settings with HELIX Optimized type](custom_cc_metahumans_assets/13-assembly-settings.png)

3. Ensure there are **no face or body material baking overrides**. Click the trash can icons next to those fields to clear any overrides.

    ![Clearing material baking overrides](custom_cc_metahumans_assets/14-clear-overrides.png)

    /// note | Note
    MetaHuman Creator can export higher-resolution textures via override parameters, but this is **not recommended** for performance reasons. Use the HELIX Optimized defaults by clearing any override parameters.
    ///

4. Once every field is correct, click **Assemble** and wait for the export to complete.

    ![Rigging process](custom_cc_metahumans_assets/15-progress.png)

    The export creates two folders: **Body** and **Face**. You will need to use:

    - **`T_Body_VC_VT`**, the base skin texture in **`Body/Baked/`** folder:

    ![Folder contents](custom_cc_metahumans_assets/15-body-skin-texture-asset.png)

    - The custom head mesh from the **`Face`** folder:

    ![Folder contents](custom_cc_metahumans_assets/15-face-mesh-asset.png)

    /// warning | Warning
    The generated head mesh should have **3 LODs** and use the LOD data exported from MetaHuman Creator. Modifying the mesh's LOD data may cause it to stop working correctly in the HELIX Character Creator. It's not recommended to do any modifications to LOD setup of exported heads.
    ///

---

## 10. Register the Head in the Data Asset

1. Open the **`DA_Wearables`** data asset inside your package folder.

    ![DA_Wearables data asset](custom_cc_metahumans_assets/16-da-wearables.png)

2. Select the **Face Types** category in the left panel, then click **+ Add** above it.

    ![Adding a new Face Type entry](custom_cc_metahumans_assets/17-add-face-type.png)

3. Double-click the tile's name section and give it a meaningful string ID (e.g. `M_Face_MyCustomMetahuman`). 

4. In the properties panel, configure the entry:

    ![Face Type properties panel](custom_cc_metahumans_assets/18-face-type-properties.png)

    | Field | Value |
    |---|---|
    | **Body Base Color Texture** | Assign the `T_Body_VC_VT` texture from your assembled metahuman character |
    | **Head Accessory Offset Transform** | Custom transform offset to apply to attached head accessories to your head mesh |
    | **Hair Offset Transform** | Custom transform offset to apply to attached hair to your head mesh |
    | **Supported Gender** | Match the body type you chose in MetaHuman Creator |
    | **Display Name** | A meaningful name shown in the UI |
    | **Preset Icon** | An icon texture, if you have one |
    | **Material Override Template** | List of available material slot runtime parameter modifications for your head mesh. See next section about how to set this up. |
    | **Hides Slots** | List of cosmetic slots to hide when this head is selected. Usually, you wouldn't need to assign a tag into this field |
    | **Additional Tags** | List of additional metadata tags for your head. Those tags are used for categorization purposes on HELIX Character Creator UI |
    | **Is Hidden From Database** | Hides your entry from the HELIX Character Creator UI, if enabled |
    | **Preset Skeletal Mesh** | Assign your new head mesh here |

---

## 11. Enable Runtime Skin Coloring

To support runtime skin coloring:

1. Expand the **Material Override Template** section.
2. Click **Auto-Fill From Mesh**.

    ![Material Override Template with Skin Tint in Slot 7](custom_cc_metahumans_assets/19-material-override.png)

    This adds a **Skin Tint** template to **Slot 7**, where the head's main skin material resides. If it does not populate automatically, add the template type to Slot 7 manually.

3. Save the data asset.

---

## 12. Test in Play-in-Editor

1. Enter Play-in-Editor in any level.
2. Press **P** or use `CustomizeCharacter` console command while in game to open the HELIX Character Creator.
3. Go to the **Head** section, your custom head mesh should appear in the list.
4. Click it to apply your custom head to the character.

    ![Custom head appearing in the in-game character creator](custom_cc_metahumans_assets/20-pie-test.png)

---

## 13. Fix Attachment Clipping

After equipping different hairstyles or facial accessories, you may notice clipping against your custom head. This typically happens when the head is heavily sculpted and differs noticeably in proportion from the identity MetaHuman head.

![Offset transform fields for attachments](custom_cc_metahumans_assets/20-offset-transforms-before.png)

To fix this, tweak the following fields on your head mesh entry in the data asset:

- **Head Accessory Offset Transform**
- **Hair Offset Transform**

![Offset transform fields for attachments](custom_cc_metahumans_assets/20-offset-transforms-after.png)

/// note | Note
The further you sculpt the forehead from the identity head, the harder existing hair and facial accessories are to fit. You will need to provide custom scale values as described in this step to better fit attachments to your custom head mesh.
///

---

## 14. Publish the Package to the Vault

Once everything works as expected, publish your package so it is available for download.

1. From the toolbar menu, select **Packages → Manage Packages** and click your package name in the context menu. This opens the vault publish window.

    ![Vault publish window](custom_cc_metahumans_assets/21-publish-vault.png)

2. Adjust the publish fields to your liking.
3. Click **Publish** to make your custom MetaHuman available for download in the **HELIX Vault**. Your package can now be tested on game builds by accessing vault.

---

## Bonus: Alternative Creation Methods

Instead of sculpting a head manually, you can also:

- Conform your MetaHuman character head to an existing skeletal mesh.
- Import a **DNA file** authored in Blender/Maya.
- Conform your MetaHuman character to a MetaHuman identity created from a photo scan or a static mesh. See the [Mesh to MetaHuman documentation](https://dev.epicgames.com/documentation/metahuman/mesh-to-metahuman) for more details about creating a MetaHuman identity.

![Conform Window](custom_cc_metahumans_assets/22-bonus.png)
