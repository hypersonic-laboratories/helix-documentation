# Creating Item

Items in Helix are defined by data assets of the type HInventoryItemDefinition which are made up of multiple HInventoryItemFragments.
Inventory Fragments are small pieces of logic or traits that make up what an item is. These fragments could for example allow the item to behave as a firearm or set how many of the same item can be in a stack.

### `Creating an item`

Create a new data asset and select HInventoryItemDefinition as the type. Name the new asset with the prefix 'ID_'.
Set a display name for your new item and add some fragments. Definition tags can also be added here which will allow searching for this item later on.

### `Fragment Types`

`InventoryFragmentInventoryIcon`

| Property | Type | Description |
|---|---|---|
|Brush | FSlateBrush | The brush to show when the item is in an inventory slot.|
	
`HInventoryFragmentWeight`

| Property | Type | Description |
|---|---|---|
| Weight | float | How heavy this item is in kilograms.|
	
`InventoryFragment_Stackable`

| Property | Type | Description |
|---|---|---|
| MaxStack | int | The maximum number of items of this type that can be stacked on top of each other.|
	
`InventoryFragment_WorldActor`

| Property | Type | Description |
|---|---|---|
| StackedMeshSettings | FInventoryFragment_WorldActor_MeshSettings | When the item is dropped on the ground, it will take the appearance of the defined mesh. If a stack of items are dropped, the array entry with the highest available count will be used.|
| ContainerActorClass | SubclassOf<AHInventoryLootContainer> | The class of actor to spawn when dropped on the ground. |
	
`HInventoryEquippableItem`

| Property | Type | Description |
|---|---|---|
| InstanceType | SubclassOf<UHEquipmentInstance> |The type of EquipmentInstance that will be created when the item is equipped.|
| Ability Sets To Grant | ArrayOf<UHAbilitySet> | When equipped, these abilities will be applied to the user's ability system component.|
| Actors To Spawn | ArrayOf<FHEquipmentActorToSpawn> |When equipped, an actor of this class will be spawened and attached to the user. This can be used for example to spawn a weapon in the player's hand.|

`HInventoryFragmentClothing` (Child of HInventoryEquippableItem)

| Property | Type | Description |
|---|---|---|
| ClothingItemID | FString | When placed in a clothing slot, the customization asset with this ID will be added to the character. |
| ClothingSlotTag | FGameplayTag | What customization slot to apply the item to. |
	
`HInventoryFragmentFirearm`

| Property | Type | Description |
|---|---|---|
| Firing Rate | float | Firing rate for this weapon (weapon fired per secs) |
| FiringGameplayCue | FGameplayCueTag | Gameplay cue to spawn with each weapon fire |
| SpreadExponent | float | Spread exponent, affects how tightly shots will cluster around the center line when the weapon has spread (non-perfect accuracy). Higher values will cause shots to be closer to the center (default is 1.0 which means uniformly within the spread range) |
| HeatToSpreadCurve | Float Curve | A curve that maps the heat to the spread angle. The X range of this curve typically sets the min/max heat range of the weapon. The Y range of this curve is used to define the min and maximum spread angle |
| HeatToHeatPerShotCurve | Float Curve | A curve that maps the current heat to the amount a single shot will further 'heat up'. This is typically a flat curve with a single data point indicating how much heat a shot adds, but can be other shapes to do things like punish overheating by adding progressively more heat. |
| HeatToCoolDownPerSecondCurve | Float Curve | A curve that maps the current heat to the heat cooldown rate per second. This is typically a flat curve with a single data point indicating how fast the heat wears off, but can be other shapes to do things like punish overheating by slowing down recovery at high heat. |
| SpreadRecoveryCooldownDelay | float | Time since firing before spread cooldown recovery begins (in seconds) |
| bAllowFirstShotAccuracy | bool | Should the weapon have perfect accuracy when both player and weapon spread are at their minimum value |
| SpreadAngleMultiplier_Aiming | float | Multiplier when in an aiming camera mode |
| SpreadAngleMultiplier_StandingStill | float | Multiplier when standing still or moving very slowly (starts to fade out at StandingStillSpeedThreshold, and is gone completely by StandingStillSpeedThreshold + StandingStillToMovingSpeedRange) |
| TransitionRate_StandingStill | float | Rate at which we transition to/from the standing still accuracy (higher values are faster, though zero is instant; @see FInterpTo) |
| StandingStillSpeedThreshold | float | Speeds at or below this are considered standing still |
| StandingStillToMovingSpeedRange | float | Speeds no more than this above StandingStillSpeedThreshold are used to feather down the standing still bonus until it's back to 1.0 |
| SpreadAngleMultiplier_Crouching | float | Multiplier when crouching, smoothly blended to based on TransitionRate_Crouching |
| TransitionRate_Crouching | float | Rate at which we transition to/from the crouching accuracy (higher values are faster, though zero is instant; @see FInterpTo) |
| SpreadAngleMultiplier_JumpingOrFalling | float | Spread multiplier while jumping/falling, smoothly blended to based on TransitionRate_JumpingOrFalling |
| TransitionRate_JumpingOrFalling | float | Rate at which we transition to/from the jumping/falling accuracy (higher values are faster, though zero is instant; @see FInterpTo) |
| BulletsPerCartridge | int | Number of bullets to fire in a single cartridge (typically 1, but may be more for shotguns) |
| MaxDamageRange | float | The maximum distance at which this weapon can deal damage |
| BulletTraceSweepRadius | float | The radius for bullet traces sweep spheres (0.0 will result in a line trace) |
| DistanceDamageFalloff | Float Curve | A curve that maps the distance (in cm) to a multiplier on the base damage from the associated gameplay effect. If there is no data in this curve, then the weapon is assumed to have no falloff with distance |
| ClipAmmoCapacity | int | Maximum amount of ammo a clip can take for this weapon type |
	
`HInventoryFragmentHeldItem`

| Property | Type | Description |
|---|---|---|
| EquipmentAnimSet | UHelixEquipmentAnimSet | Animation set to use with this held item |
| DefaultCopyMotionData | FHelixCopyMotionData | Copy motion data to use by default for animation poses |
	
`HInventoryFragment_Weapon` (Child of UInventoryFragment_HeldItem)

| Property | Type | Description |
|---|---|---|
| ApplicableDeviceProperties | ArrayOf<UInputDeviceProperty> | Device properties that should be applied while this weapon is equipped. These properties will be played in with the "Looping" flag enabled, so they will play continuously until this weapon is unequipped! | 
| MaterialDamageMultiplier | Map<FGameplayTag, float> | List of special tags that affect how damage is dealt. These tags will be compared to tags in the physical material of the thing being hit. If more than one tag is present, the multipliers will be combined multiplicatively |
| ImpactGameplayCue | FGameplayCueTag| Gameplay cue to spawn on damage impact location |
| DamageGameplayEffect | SubclassOf<UGameplayEffect> | Gameplay effect to use while applying damage |
| DamageTags | FGameplayTagContainer | Tags defining type of damage caused by this weapon  |
| BaseDamage | float | Damage dealt per hit to target with this weapon |
| AimingCopyMotionData | FHelixCopyMotionData | Copy motion data to use while aiming with this weapon |
	
`InventoryFragment_ReticleConfig`

| Property | Type | Description |
|---|---|---|
| ReticleWidgets | SubclassOf<UHReticleWidgetBase> | Defines what widget to use when aiming a weapon.|
	
`InventoryFragment_SetStats`

| Property | Type | Description |
|---|---|---|
| InitialItemStats | Map<FGameplayTag,int> | These tags (and the number of them) will be added to the inventory instance when it is created. |
