---
title: Default Weapons
description: Default HELIX Weapons and it's Parameters
tags: [assets]
keywords: [assets, weapons, built-in, default]
---


Default HELIX Weapons and it's Parameters.

![](/img/docs/weapons-pack.jpg)

HELIX provides a bunch of built-in Weapons Meshes ready to use!

![](/img/docs/default-weapons-01.jpg)

Here we will describe it's Material Parameters and how you can customize them!

#### Parameters Supported by HELIX Default Weapons Materials

| Type | Parameter | Default Value | Description |
| :--- | :--- | :--- | :--- |
| [Color](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`Tint`** | `Color.WHITE` | Affects `Base Color` input | **Tint** multiplies with **Texture** parameter to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Texture`** | White Texture | Image which multiplies with **Tint** to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`Normal`** | UP Normal Map `Vector(0.5, 0.5, 1)` | Image which affects how Light reflects on the object |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Specular`** | `0.5` | Affects `Specular` input - goes from 0 to 1 |
| [Scalar​](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Metallic`** | `0` | `Metallic` multiplier |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`Roughness`** | `1` | `Roughness` multiplier |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`MaterialMask`** | White Texture | Mask Image<br />**R** Channel - Roughness <br />**G** Channel - Metallic <br />**B** Channel - Ambient Occlusion <br />**A** channel - Pattern Mask |
| [Color](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialcolorparameter) | **`PatternTint`** | `Color.WHITE` | Affects `Base Color` input of Pattern Texture | **Tint** multiplies with **PatternTexture** parameter to generate the final color |
| [Texture](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialtextureparameter) | **`PatternTexture`** | White Texture | Image which multiplies with **PatternTint** to generate the final color |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternRoughness`** | `0.45` | Affects `Roughness` input - goes from 0 to 1 - Only applies on PatternTexture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternTilling`** | `1` | The size of Pattern Texture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternBlend`** | `0` | The Lerp used to blend the Pattern Texture and the base Texture |
| [Scalar](/scripting-reference/classes/base-classes/paintable.mdx#setmaterialscalarparameter) | **`PatternBlendSharpness`** | `0.01` | How Sharp is the Pattern Blend |


---
You can find a Package with the guns preconfigured on the [GIT repository](https://github.com/helix-game/helix-weapons)


### ACM

| **Name** | **Key** | **Type** |
| :--- |:--- |:--- |
| **SK_ACM**              | `“helix::SK_ACM“`             | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_ACM_Default**      | `“helix::SM_ACM_Default”`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_ACM_Mag**          | `“helix::SM_ACM_Mag”`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_ACM_MagEmpty**     | `“helix::SM_ACM_MagEmpty”`     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_ACM_Stock**        | `“helix::SM_ACM_Stock” `       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_ACM_Shot_001**      | `“helix::A_ACM_Shot_001“`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_ACM_Shot_002**      | `“helix::A_ACM_Shot_002“ `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_ACM_Shot_003**      | `“helix::A_ACM_Shot_003“`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_ACM_Shot_double**   | `“helix::A_ACM_Shot_double“`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_ACM_Shot_multiple** | `“helix::A_ACM_Shot_multiple“` | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### AUSTRO

|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Austro**              | `“helix::SK_Austro“`              | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Austro_Default**      | `“helix::SM_Austro_Default”`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Austro_Mag**          | `“helix::SM_Austro_Mag”     `     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Austro_MagEmpty**     | `“helix::SM_Austro_MagEmpty” `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Austro_Shot_001**      | `“helix::A_Austro_Shot_001“   `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Austro_Shot_002**      | `“helix::A_Austro_Shot_002“    `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Austro_Shot_003**      | `“helix::A_Austro_Shot_003“     ` | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Austro_Shot_double**   | `“helix::A_Austro_Shot_double“  ` | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Austro_Shot_multiple** | `“helix::A_Austro_Shot_multiple“ `| [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### BANSHEE              
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Banshee**                  | `“helix::SK_Banshee“     `             | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Banshee_Default**          | `“helix::SM_Banshee_Default”`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Banshee_Mag**              | `“helix::SM_Banshee_Mag”     `         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Banshee_MagEmpty**         | `“helix::SM_Banshee_MagEmpty” `        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Banshee_Shot_001**          | `“helix::A_Banshee_Shot_001“   `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Banshee_Shot_002**          | `“helix::A_Banshee_Shot_002“    `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Banshee_Shot_003**          | `“helix::A_Banshee_Shot_003“     `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Banshee_Shot_004**          | `“helix::A_Banshee_Shot_004“     `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Banshee_Shot_005**          | `“helix::A_Banshee_Shot_005“     `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### BISON 
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Bison**                    | `“helix::SK_Bison“               `     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Bison_Default**            | `“helix::SM_Bison_Default”       `     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Bison_Mag**                | `“helix::SM_Bison_Mag”           `     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Bison_RearGrip**           | `“helix::SM_Bison_RearGrip”      `     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Bison_Stock**              | `“helix::SM_Bison_Stock”         `     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Bison_InsertMag**           | `“helix::A_Bison_InsertMag“      `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_RemoveMag**           | `“helix::A_Bison_RemoveMag“      `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_001**            | `“helix::A_Bison_Shot_001“       `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_002**            | `“helix::A_Bison_Shot_002“       `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_003**            | `“helix::A_Bison_Shot_003“       `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_004**            | `“helix::A_Bison_Shot_004“       `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_005**            | `“helix::A_Bison_Shot_005“       `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Bison_Shot_Multiple**       | `“helix::A_Bison_Shot_Multiple“  `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### CS-446
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_CS-446**                   | `“helix::SK_CS-446“               `    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_CS-446_Default**           | `“helix::SM_CS-446_Default”       `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_CS-446_Mag**               | `“helix::SM_CS-446_Mag”           `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_CS-446_MagEmpty**          | `“helix::SM_CS-446_MagEmpty”      `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_CS-446_Shot_001**           | `“helix::A_CS-446_Shot_001“       `    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_CS-446_Shot_002**           | `“helix::A_CS-446_Shot_002“       `    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_CS-446_Shot_003**           | `“helix::A_CS-446_Shot_003“       `    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### CONDOR
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Condor**                   | `“helix::SK_Condor“                `   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Condor_Default**           | `“helix::SM_Condor_Default”        `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Condor_IronSight**         | `“helix::SM_Condor_IronSight”      `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Condor_MagEmpty**          | `“helix::SM_Condor_MagEmpty”       `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Condor_MagFull**           | `“helix::SM_Condor_MagFull”        `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Condor_RearGrip**          | `“helix::SM_Condor_RearGrip”       `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Condor_Shot_001**           | `“helix::A_Condor_Shot_001“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Condor_Shot_002**           | `“helix::A_Condor_Shot_002“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Condor_Shot_double**        | `“helix::A_Condor_Shot_double“     `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Condor_Shot_multiple**      | `“helix::A_Condor_Shot_multiple“   `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### CONVERT                     
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Convert**                  | `“helix::SK_Convert“              `    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Convert**                  | `“helix::SM_Convert”              `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Convert_Mag**              | `“helix::SM_Convert_Mag”          `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Convert_MagEmpty**         | `“helix::SM_Convert_MagEmpty”     `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Convert_MagExtended**      | `“helix::”SM_Convert_MagExtended“ `    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Convert_MagExtendedEmpty** | `“helix::SM_Convert_MagExtendedEmpty“ `| [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Convert_Shot_001**          | `“helix::A_Convert_Shot_001“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Convert_Shot_002**          | `“helix::A_Convert_Shot_002“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Convert_Shot_003**          | `“helix::A_Convert_Shot_003“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Convert_Shot_004**          | `“helix::A_Convert_Shot_004“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Convert_Shot_005**          | `“helix::A_Convert_Shot_005“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Convert_Shot_Multiple**     | `“helix::A_Convert_Shot_Multiple“  `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### DB-12
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_DB-12**                    | `“helix::SK_DB-12“                 `   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_DB-12**                    | `“helix::SM_DB-12“                 `   | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_DB-12_CloseLoader_001**     | `“helix::A_DB-12_CloseLoader_001“  `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_CloseLoader_002**     | `“helix::A_DB-12_CloseLoader_002“  `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_CloseLoader_003**     | `“helix::A_DB-12_CloseLoader_003“  `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_OpenLoader_001**      | `“helix::A_DB-12_OpenLoader_001“   `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_OpenLoader_002**      | `“helix::A_DB-12_OpenLoader_002“   `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_OpenLoader_003**      | `“helix::A_DB-12_OpenLoader_003“   `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_Shot_001**            | `“helix::A_DB-12_Shot_001“         `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_Shot_002**            | `“helix::A_DB-12_Shot_002“         `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_Shot_003**            | `“helix::A_DB-12_Shot_003“         `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_Shot_004**            | `“helix::A_DB-12_Shot_004“         `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DB-12_Shot_005**            | `“helix::A_DB-12_Shot_005“         `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### DMC-68
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_DMC-68**                   | `“helix::SK_DMC-68“           `        | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_DMC-68_Default**           | `“helix::SM_DMC-68_Default“   `        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_DMC-68_Mag**               | `“helix::SM_DMC-68_Mag“       `        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_DMC-68_MagEmpty**          | `“helix::SM_DMC-68_MagEmpty“  `        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_DMC-68_Shot_001**           | `“helix::A_DMC-68_Shot_001“    `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DMC-68_Shot_002**           | `“helix::A_DMC-68_Shot_002“    `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DMC-68_Shot_003**           | `“helix::A_DMC-68_Shot_003“    `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DMC-68_Shot_004**           | `“helix::A_DMC-68_Shot_004“    `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_DMC-68_Shot_005**           | `“helix::A_DMC-68_Shot_005“     `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### FANG
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Fang**                     | `“helix::SK_Fang“               `      | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Fang_Default**             | `“helix::SM_Fang_Default“       `      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Fang_Mag**                 | `“helix::SM_Fang_Mag“          `       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Fang_MagEmpty**            | `“helix::SM_Fang_MagEmpty“      `      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Fang_RearGrip**            | `“helix::SM_Fang_RearGrip“      `      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Fang_Stock**               | `“helix::SM_Fang_Stock“         `      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Fang_Shot_001**             | `“helix::A_Fang_Shot_001“       `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fang_Shot_002**             | `“helix::A_Fang_Shot_002“       `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fang_Shot_003**             | `“helix::A_Fang_Shot_003“       `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fang_Shot_004**             | `“helix::A_Fang_Shot_004“       `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fang_Shot_005**             | `“helix::A_Fang_Shot_005“       `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fang_Shot_Loop**            | `“helix::A_Fang_Shot_Loop“      `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### FIERRO
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Fierro**                   | `“helix::SK_Fierro“               `    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **A_Fierro_BulletInsert_001**   | `“helix::A_Fierro_BulletInsert_001“ `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_BulletInsert_002**   | `“helix::A_Fierro_BulletInsert_002“ `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_BulletInsert_003**   | `“helix::A_Fierro_BulletInsert_003“ `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_BulletInsert_004**   | `“helix::A_Fierro_BulletInsert_004“ `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Close_001**          | `“helix::A_Fierro_Close_001“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Close_002**          | `“helix::A_Fierro_Close_002“       `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Close_003**          | `“helix::A_Fierro_Close_003“        `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Open_001**           | `“helix::A_Fierro_Open_001“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Open_002**           | `“helix::A_Fierro_Open_002“          ` | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Open_003**           | `“helix::A_Fierro_Open_003“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Open_004**           | `“helix::A_Fierro_Open_004“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Shot_001**           | `“helix::A_Fierro_Shot_001“        `   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Shot_002**           | `“helix::A_Fierro_Shot_002“         `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Shot_003**           | `“helix::A_Fierro_Shot_003“         `  | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Shot_004**           | `“helix::A_Fierro_Shot_004“      `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Fierro_Shot_005**           | `“helix::A_Fierro_Shot_005“       `    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### FINISHER
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Finisher**                 | `“helix::SK_Finisher“          `       | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Finisher**                 | `“helix::SM_Finisher“          `       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Finisher_Shot_001**         | `“helix::A_Finisher_Shot_001“  `       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Finisher_Shot_002**         | `“helix::A_Finisher_Shot_002“   `      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Finisher_Shot_003**         | `“helix::A_Finisher_Shot_003“    `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Finisher_Shot_004**         | `“helix::A_Finisher_Shot_004“    `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Finisher_Shot_005**         | `“helix::A_Finisher_Shot_005“    `     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### FREQ
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Freq**                     | `“helix::SK_Freq"`                    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Freq_IronSight**           | `“helix::SM_Freq_IronSight"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Freq_Mag**                 | `“helix::SM_Freq_Mag"`                | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Freq_MagEmpty**            | `“helix::SM_Freq_MagEmpty"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Freq_Shot_001**             | `“helix::A_Freq_Shot_001"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Freq_Shot_002**             | `“helix::A_Freq_Shot_002"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Freq_Shot_003**             | `“helix::A_Freq_Shot_003"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Freq_Shot_double**          | `“helix::A_Freq_Shot_double"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Freq_Shot_multiple**        | `“helix::A_Freq_Shot_multiple"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### GASTON
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Gaston**                   | `“helix::SK_Gaston"`                  | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Gaston_Default**           | `“helix::SM_Gaston_Default"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Gaston_Mag**               | `“helix::SM_Gaston_Mag"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Gaston_MagEmpty**          | `“helix::SM_Gaston_MagEmpty"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Gaston_Shot_001**           | `“helix::A_Gaston_Shot_001"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Gaston_Shot_002**           | `“helix::A_Gaston_Shot_002"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Gaston_Shot_003**           | `“helix::A_Gaston_Shot_003"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Gaston_Shot_004**           | `“helix::A_Gaston_Shot_004"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Gaston_Shot_005**           | `“helix::A_Gaston_Shot_005"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### KAL
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_KAL**                      | `“helix::SK_KAL"`                     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_KAL_Default**              | `“helix::SM_KAL_Default"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KAL_Mag**                  | `“helix::SM_KAL_Mag"`                 | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KAL_MagEmpty**             | `“helix::SM_KAL_MagEmpty"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KAL_RearGrip**             | `“helix::SM_KAL_RearGrip"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KAL_Stock**                | `“helix::SM_KAL_Stock"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_KAL_Shot_001**              | `“helix::A_KAL_Shot_001"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KAL_Shot_002**              | `“helix::A_KAL_Shot_002"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KAL_Shot_003**              | `“helix::A_KAL_Shot_003"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KAL_Shot_double**           | `“helix::A_KAL_Shot_double"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KAL_Shot_multiple**         | `“helix::A_KAL_Shot_multiple"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### KFS
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_KFS**                      | `“helix::SK_KFS"`                     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_KFS_Default**              | `“helix::SM_KFS_Default"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_IronSight**            | `“helix::SM_KFS_IronSight"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_Mag**                  | `“helix::SM_KFS_Mag"`                 | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_MagEmpty**             | `“helix::SM_KFS_MagEmpty"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_Muzzle**               | `“helix::SM_KFS_Muzzle"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_RearGrip**             | `“helix::SM_KFS_RearGrip"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_KFS_Stock**                | `“helix::SM_KFS_Stock"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_KFS_Shot_001**              | `“helix::A_KFS_Shot_001"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KFS_Shot_002**              | `“helix::A_KFS_Shot_002"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KFS_Shot_003**              | `“helix::A_KFS_Shot_003"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### KTK
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_KTK**                      | `“helix::SK_KTK"`                     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_KTK**                      | `“helix::SM_KTK"`                     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_KTK_PumpReload_001**        | `“helix::A_KTK_PumpReload_001"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_PumpReload_002**        | `“helix::A_KTK_PumpReload_002"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_PumpReload_003**        | `“helix::A_KTK_PumpReload_003"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_PumpReload_004**        | `“helix::A_KTK_PumpReload_004"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_PumpReload_005**        | `“helix::A_KTK_PumpReload_005"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_Shot_001**              | `“helix::A_KTK_Shot_001"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_Shot_002**              | `“helix::A_KTK_Shot_002"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_Shot_003**              | `“helix::A_KTK_Shot_003"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_Shot_004**              | `“helix::A_KTK_Shot_004"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_KTK_Shot_005**              | `“helix::A_KTK_Shot_005"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### KRINK
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Krink**                    | `“helix::SK_Krink"`                   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Krink_Default**            | `“helix::SM_Krink_Default"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Krink_IronSight**          | `“helix::SM_Krink_IronSight"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Krink_Mag**                | `“helix::SM_Krink_Mag"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Krink_MagEmpty**           | `“helix::SM_Krink_MagEmpty"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Krink_RearGrip**           | `“helix::SM_Krink_RearGrip"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Krink_Stock**              | `“helix::SM_Krink_Stock"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Krink_Shot_001**            | `“helix::A_Krink_Shot_001"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Krink_Shot_002**            | `“helix::A_Krink_Shot_002"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Krink_Shot_003**            | `“helix::A_Krink_Shot_003"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Krink_Shot_multiple**       | `“helix::A_Krink_Shot_multiple"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### LWS-32
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_LWS-32**                   | `“helix::SK_LWS-32"`                  | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_LWS-32_Default**           | `“helix::SM_LWS-32_Default"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_LWS-32_IronSight**         | `“helix::SM_LWS-32_IronSight"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_LWS-32_Mag**               | `“helix::SM_LWS-32_Mag"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_LWS-32_MagEmpty**          | `“helix::SM_LWS-32_MagEmpty"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_LWS-32_Stock**             | `“helix::SM_LWS-32_Stock"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_LWS-32_Shot_001**           | `“helix::A_LWS-32_Shot_001"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_LWS-32_Shot_002**           | `“helix::A_LWS-32_Shot_002"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_LWS-32_Shot_003**           | `“helix::A_LWS-32_Shot_003"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### M77
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_M77**                      | `“helix::SK_M77"`                     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SK_M77_Belt**                 | `“helix::SK_M77_Belt"`                | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SK_M77_Stock**                | `“helix::SK_M77_Stock"`               | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_M77_Belt**                 | `“helix::SM_M77_Belt"`                | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_M77_Default**              | `“helix::SM_M77_Default"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_M77_IronSight**            | `“helix::SM_M77_IronSight"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_M77_Mag_Empty_X**          | `“helix::SM_M77_Mag_Empty_X"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_M77_Mag_X**                | `“helix::SM_M77_Mag_X"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_M77_Stock**                | `“helix::SM_M77_Stock"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_M77_Shot_001**              | `“helix::A_M77_Shot_001"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_M77_Shot_002**              | `“helix::A_M77_Shot_002"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_M77_Shot_003**              | `“helix::A_M77_Shot_003"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_M77_Shot_004**              | `“helix::A_M77_Shot_004"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_M77_Shot_005**              | `“helix::A_M77_Shot_005"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_M77_Shot_006**              | `“helix::A_M77_Shot_006"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### MK4
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_MK4**                      | `“helix::SK_MK4"`                     | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_MK4_Default**              | `“helix::SM_MK4_Default"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_MK4_IronSight**            | `“helix::SM_MK4_IronSight"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_MK4_Mag**                  | `“helix::SM_MK4_Mag"`                 | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_MK4_MagEmpty**             | `“helix::SM_MK4_MagEmpty"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_MK4_RearGrip**             | `“helix::SM_MK4_RearGrip"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_MK4_Stock**                | `“helix::SM_MK4_Stock"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_MK4_Shot_001**              | `“helix::A_MK4_Shot_001"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_MK4_Shot_002**              | `“helix::A_MK4_Shot_002"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_MK4_Shot_003**              | `“helix::A_MK4_Shot_003"`             | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_MK4_Shot_double**           | `“helix::A_MK4_Shot_double"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_MK4_Shot_multiple**         | `“helix::A_MK4_Shot_multiple"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### MIRAGE
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Mirage**                   | `“helix::SK_Mirage"`                  | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Mirage_Default**           | `“helix::SM_Mirage_Default"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mirage_Mag**               | `“helix::SM_Mirage_Mag"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mirage_MagEmpty**          | `“helix::SM_Mirage_MagEmpty"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Mirage_Shot_001**           | `“helix::A_Mirage_Shot_001"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mirage_Shot_002**           | `“helix::A_Mirage_Shot_002"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mirage_Shot_003**           | `“helix::A_Mirage_Shot_003"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mirage_Shot_004**           | `“helix::A_Mirage_Shot_004"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mirage_Shot_005**           | `“helix::A_Mirage_Shot_005"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### MOUFLAN
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Mouflan**                  | `“helix::SK_Mouflan"`                 | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Mouflan_Default**          | `“helix::SM_Mouflan_Default"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mouflan_IronSight**        | `“helix::SM_Mouflan_IronSight"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mouflan_Mag**              | `“helix::SM_Mouflan_Mag"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mouflan_MagEmpty**         | `“helix::SM_Mouflan_MagEmpty"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Mouflan_Stock**            | `“helix::SM_Mouflan_Stock"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Mouflan_Shot_001**          | `“helix::A_Mouflan_Shot_001"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mouflan_Shot_002**          | `“helix::A_Mouflan_Shot_002"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mouflan_Shot_003**          | `“helix::A_Mouflan_Shot_003"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mouflan_Shot_004**          | `“helix::A_Mouflan_Shot_004"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mouflan_Shot_005**          | `“helix::A_Mouflan_Shot_005"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Mouflan_Shot_Multiple**     | `“helix::A_Mouflan_Shot_Multiple"`    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### ORION
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Orion**                    | `“helix::SK_Orion"`                   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Orion_Default**            | `“helix::SM_Orion_Default"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_IronSight**          | `“helix::SM_Orion_IronSight"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_Mag**                | `“helix::SM_Orion_Mag"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_MagEmpty**           | `“helix::SM_Orion_MagEmpty"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_Muzzle**             | `“helix::SM_Orion_Muzzle"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_Stock**              | `“helix::SM_Orion_Stock"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Orion_StockSocket**        | `“helix::SM_Orion_StockSocket"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Orion_Shot_001**            | `“helix::A_Orion_Shot_001"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Orion_Shot_002**            | `“helix::A_Orion_Shot_002"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Orion_Shot_003**            | `“helix::A_Orion_Shot_003"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Orion_Shot_004**            | `“helix::A_Orion_Shot_004"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Orion_Shot_005**            | `“helix::A_Orion_Shot_005"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Orion_Shot_Loop**           | `“helix::A_Orion_Shot_Loop"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### PM-99
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_PM-99**                    | `“helix::SK_PM-99"`                   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_PM-99_Default**            | `“helix::SM_PM-99_Default"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PM-99_IronSight**          | `“helix::SM_PM-99_IronSight"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PM-99_Mag**                | `“helix::SM_PM-99_Mag"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PM-99_MagEmpty**           | `“helix::SM_PM-99_MagEmpty"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PM-99_Stock**              | `“helix::SM_PM-99_Stock"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_PM-99_Shot_001**            | `“helix::A_PM-99_Shot_001"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PM-99_Shot_002**            | `“helix::A_PM-99_Shot_002"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PM-99_Shot_003**            | `“helix::A_PM-99_Shot_003"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PM-99_Shot_004**            | `“helix::A_PM-99_Shot_004"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PM-99_Shot_005**            | `“helix::A_PM-99_Shot_005"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PM-99_Shot_Loop**           | `“helix::A_PM-99_Shot_Loop"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### PP-Y
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_PP-Y**                     | `“helix::SK_PP-Y"`                    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_PP-Y_Default**             | `“helix::SM_PP-Y_Default"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PP-Y_IronSight**           | `“helix::SM_PP-Y_IronSight"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PP-Y_Mag**                 | `“helix::SM_PP-Y_Mag"`                | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PP-Y_MagEmpty**            | `“helix::SM_PP-Y_MagEmpty"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PP-Y_RearGrip**            | `“helix::SM_PP-Y_RearGrip"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_PP-Y_Stock**               | `“helix::SM_PP-Y_Stock"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_PP-Y_Shot_001**             | `“helix::A_PP-Y_Shot_001"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PP-Y_Shot_002**             | `“helix::A_PP-Y_Shot_002"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PP-Y_Shot_003**             | `“helix::A_PP-Y_Shot_003"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PP-Y_Shot_double**          | `“helix::A_PP-Y_Shot_double"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PP-Y_Shot_multiple**        | `“helix::A_PP-Y_Shot_multiple"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### PATRIOT
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Patriot**                  | `“helix::SK_Patriot"`                 | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Patriot_Default**          | `“helix::SM_Patriot_Default"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Patriot_Mag**              | `“helix::SM_Patriot_Mag"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Patriot_MagEmpty**         | `“helix::SM_Patriot_MagEmpty"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Patriot_RearGrip**         | `“helix::SM_Patriot_RearGrip"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Patriot_Stock**            | `“helix::SM_Patriot_Stock"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Patriot_Shot_001**          | `“helix::A_Patriot_Shot_001"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Patriot_Shot_002**          | `“helix::A_Patriot_Shot_002"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Patriot_Shot_003**          | `“helix::A_Patriot_Shot_003"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Patriot_Shot_double**       | `“helix::A_Patriot_Shot_double"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Patriot_Shot_multiple**     | `“helix::A_Patriot_Shot_multiple"`    | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### PIT VIPER
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Pit_Viper**                | `“helix::SK_Pit_Viper"`               | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Pit_Viper_Default**        | `“helix::SM_Pit_Viper_Default"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Pit_Viper_IronSight**      | `“helix::SM_Pit_Viper_IronSight"`     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Pit_Viper_Mag**            | `“helix::SM_Pit_Viper_Mag"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Pit_Viper_MagEmpty**       | `“helix::SM_Pit_Viper_MagEmpty"`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Pit_Viper_RearGrip**       | `“helix::SM_Pit_Viper_RearGrip"`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Pit_Viper_Stock**          | `“helix::SM_Pit_Viper_Stock"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_PitViper_Shot_001**         | `“helix::A_PitViper_Shot_001"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PitViper_Shot_002**         | `“helix::A_PitViper_Shot_002"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PitViper_Shot_003**         | `“helix::A_PitViper_Shot_003"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PitViper_Shot_double**      | `“helix::A_PitViper_Shot_double"`     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_PitViper_Shot_multiple**    | `“helix::A_PitViper_Shot_multiple"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### QUEEN 80
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Queen-80**                 | `“helix::SK_Queen-80"`                | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Queen-80_Default**         | `“helix::SM_Queen-80_Default"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Queen-80_Mag**             | `“helix::SM_Queen-80_Mag"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Queen-80_MagEmpty**        | `“helix::SM_Queen-80_MagEmpty"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Queen-80_RearGrip**        | `“helix::SM_Queen-80_RearGrip"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Queen-80_Shot_001**         | `“helix::A_Queen-80_Shot_001"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Queen-80_Shot_002**         | `“helix::A_Queen-80_Shot_002"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Queen-80_Shot_003**         | `“helix::A_Queen-80_Shot_003"`        | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Queen-80_Shot_double**      | `“helix::A_Queen-80_Shot_double"`     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Queen-80_Shot_multiple**    | `“helix::A_Queen-80_Shot_multiple"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### REMI
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Remi**                     | `“helix::SK_Remi"`                    | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Remi**                     | `“helix::SM_Remi"`                    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Remi_PumpReload_001**       | `“helix::A_Remi_PumpReload_001"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_PumpReload_002**       | `“helix::A_Remi_PumpReload_002"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_PumpReload_003**       | `“helix::A_Remi_PumpReload_003"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_PumpReload_004**       | `“helix::A_Remi_PumpReload_004"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_PumpReload_005**       | `“helix::A_Remi_PumpReload_005"`      | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_Shot_001**             | `“helix::A_Remi_Shot_001"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_Shot_002**             | `“helix::A_Remi_Shot_002"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_Shot_003**             | `“helix::A_Remi_Shot_003"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_Shot_004**             | `“helix::A_Remi_Shot_004"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Remi_Shot_005**             | `“helix::A_Remi_Shot_005"`            | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### ROGER
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Roger**                    | `“helix::SK_Roger"`                   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Roger_Mag**                | `“helix::SM_Roger_Mag"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Roger_MagEmpty**           | `“helix::SM_Roger_MagEmpty"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Roger_Shot_001**            | `“helix::A_Roger_Shot_001"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roger_Shot_002**            | `“helix::A_Roger_Shot_002"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roger_Shot_003**            | `“helix::A_Roger_Shot_003"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roger_Shot_004**            | `“helix::A_Roger_Shot_004"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roger_Shot_005**            | `“helix::A_Roger_Shot_005"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### ROMA 12                     
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Roma-12**                  | `“helix::SK_Roma-12"`                 | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Roma-12_Default**          | `“helix::SM_Roma-12_Default"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Roma-12_Mag**              | `“helix::SM_Roma-12_Mag"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Roma-12_MagEmpty**         | `“helix::SM_Roma-12_MagEmpty"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Roma-12_RearGrip**         | `“helix::SM_Roma-12_RearGrip"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Roma-12_PumpReload_001**    | `“helix::A_Roma-12_PumpReload_001"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_PumpReload_002**    | `“helix::A_Roma-12_PumpReload_002"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_PumpReload_003**    | `“helix::A_Roma-12_PumpReload_003"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_PumpReload_004**    | `“helix::A_Roma-12_PumpReload_004"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_PumpReload_005**    | `“helix::A_Roma-12_PumpReload_005"`   | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_Shot_001**          | `“helix::A_Roma-12_Shot_001"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_Shot_002**          | `“helix::A_Roma-12_Shot_002"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_Shot_003**          | `“helix::A_Roma-12_Shot_003"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_Shot_004**          | `“helix::A_Roma-12_Shot_004"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Roma-12_Shot_005**          | `“helix::A_Roma-12_Shot_005"`         | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### RONIN 777
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Ronin-777**                | `“helix::SK_Ronin-777"`               | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Ronin-777_Default**        | `“helix::SM_Ronin-777_Default"`       | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Ronin-777_Mag**            | `“helix::SM_Ronin-777_Mag"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Ronin-777_MagEmpty**       | `“helix::SM_Ronin-777_MagEmpty"`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Ronin-777_Shot_001**        | `“helix::A_Ronin-777_Shot_001"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Ronin-777_Shot_002**        | `“helix::A_Ronin-777_Shot_002"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Ronin-777_Shot_003**        | `“helix::A_Ronin-777_Shot_003"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Ronin-777_Shot_004**        | `“helix::A_Ronin-777_Shot_004"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Ronin-777_Shot_005**        | `“helix::A_Ronin-777_Shot_005"`       | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### SABRA
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Sabra**                    | `“helix::SK_Sabra"`                   | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Sabra_Default**            | `“helix::SM_Sabra_Default"`           | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Sabra_Mag**                | `“helix::SM_Sabra_Mag"`               | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Sabra_MagEmpty**           | `“helix::SM_Sabra_MagEmpty"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Sabra_RearGrip**           | `“helix::SM_Sabra_RearGrip"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Sabra_Stock**              | `“helix::SM_Sabra_Stock"`             | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Sabra_Shot_001**            | `“helix::A_Sabra_Shot_001"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Sabra_Shot_002**            | `“helix::A_Sabra_Shot_002"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Sabra_Shot_003**            | `“helix::A_Sabra_Shot_003"`           | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### SOV WHISPER
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_SovWhisper**               | `“helix::SK_SovWhisper"`              | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_SovWhisper_Default**       | `“helix::SM_SovWhisper_Default"`      | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_SovWhisper_IronSight**     | `“helix::SM_SovWhisper_IronSight"`    | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_SovWhisper_Mag**           | `“helix::SM_SovWhisper_Mag"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_SovWhisper_MagEmpty**      | `“helix::SM_SovWhisper_MagEmpty"`     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_SovWhisper_RearGrip**      | `“helix::SM_SovWhisper_RearGrip"`     | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_SovWhisper_Stock**         | `“helix::SM_SovWhisper_Stock"`        | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |

### VULCAN
|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
| **SK_Vulcan**                   | `“helix::SK_Vulcan"`                  | [SkeletalMesh](/docs/core-concepts/assets#referencing-assets-in-scripting) |
| **SM_Vulcan_Default**           | `“helix::SM_Vulcan_Default"`          | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Vulcan_Mag**               | `“helix::SM_Vulcan_Mag"`              | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Vulcan_MagEmpty**          | `“helix::SM_Vulcan_MagEmpty"`         | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **SM_Vulcan_Stock**             | `“helix::SM_Vulcan_Stock"`            | [StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)   |
| **A_Vulcan_Shot_001**          | `“helix::A_Vulcan_Shot_001"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_002**           | `“helix::A_Vulcan_Shot_002"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_003**           | `“helix::A_Vulcan_Shot_003"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_004**           | `“helix::A_Vulcan_Shot_004"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_005**           | `“helix::A_Vulcan_Shot_005"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_006**           | `“helix::A_Vulcan_Shot_006"`          | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |
| **A_Vulcan_Shot_Multiple**      | `“helix::A_Vulcan_Shot_Multiple"`     | [Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)    |

### ATTACHMENTS

|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
|	SM_Compensator1	|	`“helix::SM_Compensator1”`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Compensator2	|	`“helix::SM_Compensator2”`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Compensator3	|	`“helix::SM_Compensator3”`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Compensator4	|	`“helix::SM_Compensator4”`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_FlashHider1	|	`“helix::SM_FlashHider1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_FlashHider2	|	`“helix::SM_FlashHider2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic1	|	`“helix::SM_Optic1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic2	|	`“helix::SM_Optic2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic3	|	`“helix::SM_Optic3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic4	|	`“helix::SM_Optic4“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic5	|	`“helix::SM_Optic5“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic6	|	`“helix::SM_Optic6“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic7	|	`“helix::SM_Optic7“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic8	|	`“helix::SM_Optic8“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Optic9	|	`“helix::SM_Optic9“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper1	|	`“helix::SM_OpticSniper1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper2	|	`“helix::SM_OpticSniper2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper3	|	`“helix::SM_OpticSniper3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper4	|	`“helix::SM_OpticSniper4“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper5	|	`“helix::SM_OpticSniper5“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_OpticSniper6	|	`“helix::SM_OpticSniper6“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Banshee	|	`“helix::SM_PicatinnyRail1_Banshee“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Bison	|	`“helix::SM_PicatinnyRail1_Bison“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Gaston	|	`“helix::SM_PicatinnyRail1_Gaston“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_M77	|	`“helix::SM_PicatinnyRail1_M77“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Mirage	|	`“helix::SM_PicatinnyRail1_Mirage“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Mouflan	|	`“helix::SM_PicatinnyRail1_Mouflan“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_PPY	|	`“helix::SM_PicatinnyRail1_PPY“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Remi	|	`“helix::SM_PicatinnyRail1_Remi“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_Roger	|	`“helix::SM_PicatinnyRail1_Roger“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail1_SovWhisper	|	`“helix::SM_PicatinnyRail1_SovWhisper“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail2	|	`“helix::SM_PicatinnyRail2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_PicatinnyRail3	|	`“helix::SM_PicatinnyRail3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip1	|	`“helix::SM_RearGrip1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip2	|	`“helix::SM_RearGrip2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip3	|	`“helix::SM_RearGrip3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip4	|	`“helix::SM_RearGrip4“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip5	|	`“helix::SM_RearGrip5“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip6	|	`“helix::SM_RearGrip6“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip7	|	`“helix::SM_RearGrip7“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_RearGrip8	|	`“helix::SM_RearGrip8“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_12	|	`“helix::SM_Shell_12“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_12_Empty	|	`“helix::SM_Shell_12_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_45ap	|	`“helix::SM_Shell_45ap“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_45ap_Empty	|	`“helix::SM_Shell_45ap_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_545x39	|	`“helix::SM_Shell_545x39“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_545x39_Empty	|	`“helix::SM_Shell_545x39_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_556x45	|	`“helix::SM_Shell_556x45“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_556x45_Empty	|	`“helix::SM_Shell_556x45_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_762x39	|	`“helix::SM_Shell_762x39“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_762x39_Empty	|	`“helix::SM_Shell_762x39_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_762x51	|	`“helix::SM_Shell_762x51“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_762x51_Empty	|	`“helix::SM_Shell_762x51_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_9mm	|	`“helix::SM_Shell_9mm“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_9mm_Empty	|	`“helix::SM_Shell_9mm_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_9x18	|	`“helix::SM_Shell_9x18“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Shell_9x18_Empty	|	`“helix::SM_Shell_9x18_Empty“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock1	|	`“helix::SM_Stock1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock2	|	`“helix::SM_Stock2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock3	|	`“helix::SM_Stock3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock4	|	`“helix::SM_Stock4“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock5	|	`“helix::SM_Stock5“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock6	|	`“helix::SM_Stock6“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock7	|	`“helix::SM_Stock7“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock8	|	`“helix::SM_Stock8“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Stock9	|	`“helix::SM_Stock9“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Suppressor1	|	`“helix::SM_Suppressor1“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Suppressor2	|	`“helix::SM_Suppressor2“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Suppressor3	|	`“helix::SM_Suppressor3“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Suppressor4	|	`“helix::SM_Suppressor4“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	SM_Suppressor5	|	`“helix::SM_Suppressor5“`	|	[StaticMesh](/docs/core-concepts/assets#referencing-assets-in-scripting)	|

### SOUNDS

|**Name**             | **Key**                      | **Type**     |
| :--- |:--- |:--- |
|	A_Aim	|	``“helix::A_Aim“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_AimZoom	|	`“helix::A_AimZoom“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DropBullet_001	|	`“helix::A_DropBullet_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DropBullet_002	|	`“helix::A_DropBullet_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DropBullet_003	|	`“helix::A_DropBullet_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DropBullet_004	|	`“helix::A_DropBullet_004“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DropBullet_005	|	`“helix::A_DropBullet_005“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_DryShot	|	`“helix::A_DryShot“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_CloseCoverA	|	`“helix::A_LMG_CloseCoverA“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_CloseCoverB	|	`“helix::A_LMG_CloseCoverB“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_InsertMag	|	`“helix::A_LMG_InsertMag“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_OpenCoverA	|	`“helix::A_LMG_OpenCoverA“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_OpenCoverB	|	`“helix::A_LMG_OpenCoverB“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LMG_RemoveMag	|	`“helix::A_LMG_RemoveMag“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LastShot_001	|	`“helix::A_LastShot_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LastShot_002	|	`“helix::A_LastShot_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_LastShot_003	|	`“helix::A_LastShot_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_InsertMag_001	|	`“helix::A_Pistol_InsertMag_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_InsertMag_002	|	`“helix::A_Pistol_InsertMag_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_InsertMag_003	|	`“helix::A_Pistol_InsertMag_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_RemoveMag_001	|	`“helix::A_Pistol_RemoveMag_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_RemoveMag_002	|	`“helix::A_Pistol_RemoveMag_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Pistol_RemoveMag_003	|	`“helix::A_Pistol_RemoveMag_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_ChargingHandle_001	|	`“helix::A_Rifle_ChargingHandle_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_ChargingHandle_002	|	`“helix::A_Rifle_ChargingHandle_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_ChargingHandle_003	|	`“helix::A_Rifle_ChargingHandle_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_InsertMag_001	|	`“helix::A_Rifle_InsertMag_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_InsertMag_002	|	`“helix::A_Rifle_InsertMag_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_InsertMag_003	|	`“helix::A_Rifle_InsertMag_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_RemoveMag_001	|	`“helix::A_Rifle_RemoveMag_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_RemoveMag_002	|	`“helix::A_Rifle_RemoveMag_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Rifle_RemoveMag_003	|	`“helix::A_Rifle_RemoveMag_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_SMG_ChargingHandle_001	|	`“helix::A_SMG_ChargingHandle_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_SMG_ChargingHandle_002	|	`“helix::A_SMG_ChargingHandle_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_SMG_ChargingHandle_003	|	`“helix::A_SMG_ChargingHandle_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_ShotgunBulletInsert_001	|	`“helix::A_ShotgunBulletInsert_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_ShotgunBulletInsert_002	|	`“helix::A_ShotgunBulletInsert_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_ShotgunBulletInsert_003	|	`“helix::A_ShotgunBulletInsert_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_ShotgunBulletInsert_004	|	`“helix::A_ShotgunBulletInsert_004“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_ShotgunBulletInsert_005	|	`“helix::A_ShotgunBulletInsert_005“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Sniper_ChargingHandle	|	`“helix::A_Sniper_ChargingHandle“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Sniper_RemoveMag_001	|	`“helix::A_Sniper_RemoveMag_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Sniper_RemoveMag_002	|	`“helix::A_Sniper_RemoveMag_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Sniper_RemoveMag_003	|	`“helix::A_Sniper_RemoveMag_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_001	|	`“helix::A_Suppressor_Shot_001“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_002	|	`“helix::A_Suppressor_Shot_002“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_003	|	`“helix::A_Suppressor_Shot_003“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_004	|	`“helix::A_Suppressor_Shot_004“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_005	|	`“helix::A_Suppressor_Shot_005“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
|	A_Suppressor_Shot_Loop	|	`“helix::A_Suppressor_Shot_Loop“`	|	[Sound](/docs/core-concepts/assets#referencing-assets-in-scripting)	|
