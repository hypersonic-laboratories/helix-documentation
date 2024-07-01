---
title: Character
description: Characters represents Actors which can be possessed, can move and interact with world. They are the default Skeletal Mesh Character built for HELIX
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Character" />


Characters are Skeletal Meshes using Unreal's Mannequin Skeletal, with animations and interactivity already natively integrated into HELIX. It is possible to import any Skeletal Mesh (which uses Unreal's Mannequin Skeletal) to this Character.


## Examples

```lua title="Server/Index.lua"
-- The following examples are using all Skeletal Meshes which we currently have:
local male = Character(Vector(200, 0, 100), Rotator(0, 0, 0), "helix::SK_Male")
local manny = Character(Vector(300, 0, 100), Rotator(0, 0, 0), "helix::SK_Manny")
local quinn = Character(Vector(400, 0, 100), Rotator(0, 0, 0), "helix::SK_Quinn")

-- Adds head to Male
new_char:AddSkeletalMeshAttached("head", "helix::SK_Male_Head")
```

More related examples:

<ReferenceLink href="getting-started/code-examples/play-as-prop">Play as Prop</ReferenceLink>
<ReferenceLink href="getting-started/code-examples/name-tags">Nametags</ReferenceLink>
<ReferenceLink href="assets-modding/creating-assets/skeletal-meshes/characters-meshes">Character Meshes Guide</ReferenceLink>


## Constructors

<ConstructorDeclaration type="Class" name="Character" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="Character" />


## Functions

<FunctionsDeclaration type="Class" name="Character" />


## Events

<EventsDeclaration type="Class" name="Character" />


## HELIX Character Meshes list

### Head

- `helix::SK_Female_Head`
- `helix::SK_Male_Head`


### Beard

- `helix::SK_Beard_01`
- `helix::SK_Beard_02`


### Chest

- `helix::SK_Male_Chest`
- `helix::SK_Hoodie_Logo_Man`
- `helix::SK_Man_Outwear_01`
- `helix::SK_Man_Outwear_02`
- `helix::SK_Man_Outwear_03`
- `helix::SK_Man_Outwear_05`
- `helix::SK_Man_Outwear_06`
- `helix::SK_Man_Outwear_07`
- `helix::SK_Man_T_Shirts_01`
- `helix::SK_Man_T_Shirts_02`
- `helix::SK_Man_T_Shirts_03`
- `helix::SK_Man_T_Shirts_04`
- `helix::SK_Wife_Beater`


### Feet

- `helix::SK_Male_Feet`
- `helix::SK_Man_Boots_02`
- `helix::SK_Man_Boots_04`
- `helix::SK_Man_Boots_05`
- `helix::SK_Man_Boots_06`
- `helix::SK_Man_Boots_07`
- `helix::SK_Man_Boots_08`
- `helix::SK_Man_Boots_10`
- `helix::SK_Man_Boots_11`
- `helix::SK_Man_Boots_12`
- `helix::SK_Man_Boots_13`
- `helix::SK_Man_Boots_14`
- `helix::SK_Man_Boots_15`
- `helix::SK_Man_Boots_16`
- `helix::SK_Man_Boots_17`
- `helix::SK_Man_Boots_18`
- `helix::SK_Man_Boots_19`
- `helix::SK_Man_Boots_20`
- `helix::SK_Man_Boots_21`
- `helix::SK_Man_Boots_23`
- `helix::SK_Man_Boots_24`
- `helix::SK_Man_Boots_25`


### Hands

- `helix::SK_Male_Hands`


### Legs

- `helix::SK_Male_Legs`
- `helix::SK_Man_Pants_01`
- `helix::SK_Man_Pants_02`
- `helix::SK_Man_Pants_03`
- `helix::SK_Man_Pants_05`
- `helix::SK_Man_Pants_06`
- `helix::SK_Man_Pants_08`
- `helix::SK_Man_Pants_09`
- `helix::SK_Man_Pants_10`
- `helix::SK_Man_Pants_12`
- `helix::SK_Man_Pants_13`
- `helix::SK_Man_Pants_14`
- `helix::SK_Man_Pants_15`
- `helix::SK_Man_Pants_Short_01`
- `helix::SK_Man_Pants_Short_02`
- `helix::SK_Man_Pants_Short_03`
- `helix::SK_Man_Pants_Short_04`


### Etc

- `helix::SK_Eyebrows_01`
- `helix::SK_Eyebrows_02`
- `helix::SK_Eyelashes`
- `helix::SK_Eyelashes_Shape_01`
- `helix::SK_Eyelashes_Shape_02`
- `helix::SK_Nails_01`
- `helix::SK_Nails_02`
- `helix::SK_Invisible`


### Delivery

- `helix::SK_Delivery_Shoes`
- `helix::SK_Delivery_Top`
- `helix::SK_Delivery_Lower`


### Police

- `helix::SK_Police_Lower`
- `helix::SK_Police_Shoes`
- `helix::SK_Police_Top`
- `helix::SK_Police_Hat`


### Full Body

- `helix::SK_Female_Body`
- `helix::SK_Male`


## Character's Skeleton Bone Names

///info

Ugly list I know.

///

* `root`
  * `pelvis`
    * `spine_01`
      * `spine_02`
        * `spine_03`
          * `clavicle_l`
            * `upperarm_l`
              * `lowerarm_l`
                * `hand_l`
                  * `index_01_l`
                    * `index_02_l`
                      * `index_03_l`
                  * `middle_01_l`
                    * `middle_02_l`
                      * `middle_03_l`
                  * `pinky_01_l`
                    * `pinky_02_l`
                      * `pinky_03_l`
                  * `ring_01_l`
                    * `ring_02_l`
                      * `ring_03_l`
                  * `thumb_01_l`
                    * `thumb_02_l`
                      * `thumb_03_l`
                  * `weapon_l`
          * `clavicle_r`
            * `upperarm_r`
              * `lowerarm_r`
                * `hand_r`
                  * `index_01_r`
                    * `index_02_r`
                      * `index_03_r`
                  * `middle_01_r`
                    * `middle_02_r`
                      * `middle_03_r`
                  * `pinky_01_r`
                    * `pinky_02_r`
                      * `pinky_03_r`
                  * `ring_01_r`
                    * `ring_02_r`
                      * `ring_03_r`
                  * `thumb_01_r`
                    * `thumb_02_r`
                      * `thumb_03_r`
                  * `weapon_r`
          * `neck_01`
            * `head`
              * `lefteye`
              * `righteye`
              * `leftlidup`
              * `leftlidlow`
              * `rightlidup`
              * `rightlitlow`
    * `thigh_l`
      * `calf_l`
        * `foot_l`
          * `ball_l`
    * `thigh_r`
      * `calf_r`
        * `foot_r`
          * `ball_r`

