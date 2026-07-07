# Inventory Function Libraries

## Helix|Inventory|Authority Actions

These nodes are latent nodes. Each node has Success and Failure execution pins which will be called when the request is processed.

### `GiveItem and GiveItems`

```
Creates an item for a given inventory component. Has options for automatically equipping and adding to the quickbar.
```

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to give the items to |
| `Item` | `FHinventoryGiveItemOptions` | details of the item to give. |
| `Item Definition` | `UHInventoryItemDefinition*` | The item asset to give to the inventory |
| `Stack Count` | `int` | The amount of the item to grant. If the item definition does not support stacks this will default to 1 |
| `Slot Mode` | `EHGiveItemSlotMode` | -Determines how the item is added to the inventory. 	- 'Standard' - The item is added to the first available slot. - 'Add To Quickbar' - The item is added to the first available unequipped quickbar slot.	- 'Add To Quickbar And Equip' - The item is added to the first available quickbar slot and then automatically equipped. |
| `Quickbar Slot` | `int` | If SlotMode is set to a quickbar option, the item will be added to this slot. If -1 the item will be added to the best available slot, preferring empty ones. |

**Returns:** `FHInventorySystemItemID, If the request succeeds, the ID of the created item(s) will be returned`
**Returns:** `EHInventoryRequestResponse, If the request fails, the reason it failed will be returned`

---

### `RemoveItem and RemoveItems`

```
Removes an item from an inventory.
```

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to remove the item(s) from |
| `Item` | `FHInventorySystemItemID` | The ID of the item to remove. |
| `Count` | `int` | The number of items to remove from the stack. If -1 the entire stack will be removed. |

---

### `RemoveAllItems`

```
Removes all of the items from an inventory component.
```

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to remove the item(s) from |

**Returns:** `EHInventoryRequestResponse, If the request fails, the reason it failed will be returned`

---

### `RemoveAllItemsOfType`

```
Removes all of the items from an inventory component that are defined by a given item definition.
```

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to remove the item(s) from |
| `ItemDefinition` | `UHInventoryItemDefinition*` | The type of item to remove |

---

**Returns:** `EHInventoryRequestResponse, If the request fails, the reason it failed will be returned`

---

### `GetItemInfo`

```
Get the details about an item, including item instance, inventory coordinate, and the item definiton.
```

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to get the items of |
| `ItemID` | `FHInventorySystemItemID*` | The item ID to get the info of |
	
---
	
**Returns:** `FHInventorySlotInfo`
	
---

### `GetAllItems`

```
Gets the details of all items in an inventory.
```

Returns an array of ItemIDs for every item contained within an inventory.

| Parameter | Type | Description |
|---|---|---|
| `InventoryComponent` | `UHInventoryManagerComponent*` | The component to get the items of |

---
---

## Component Getters

These functions retrieve inventory-related components from an actor.

---

### `GetInventoryComponent`

```
GetInventoryComponent(TargetActor) → UHInventoryManagerComponent*
```

Returns the **Inventory Manager Component** attached to `TargetActor`. Returns the first inventory component found on an actor. Note some actors .e.g. vehicles may have multiple inventory components.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to retrieve the component from. |

**Returns:** `UHInventoryManagerComponent*`

---

### `GetEquipmentComponent`

```
GetEquipmentComponent(TargetActor) → UHEquipmentManagerComponent*
```

Returns the **Equipment Manager Component** attached to `TargetActor`. Returns `null` if the actor doesn't have one.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to retrieve the component from. |

**Returns:** `UHEquipmentManagerComponent*`

---

### `GetQuickBarComponent`

```
GetQuickBarComponent(TargetActor) → UHQuickBarComponent*
```

Returns the **QuickBar Component** from the controller associated with `TargetActor`. Returns `null` if no valid controller is found.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor (typically a Pawn) whose controller is checked. |

**Returns:** `UHQuickBarComponent*`

---

## Item Definition Queries

These functions search the Asset Registry for item definitions.

---

### `Get Item Definition By Name`

```
GetItemDefinitionByAssetName(AssetName, bExactMatch) → UHInventoryItemDefinition*
```

Finds an item definition by its asset name. Supports partial matching by default — for example, `"Pistol"` will match `ID_Weapon_Pistol`.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `AssetName` | `FName` | — | Full or partial asset name to search for (e.g., `ID_Weapon_Pistol` or just `Pistol`). |
| `bExactMatch` | `bool` | `false` | If `true`, the name must match exactly. If `false`, a partial/contains match is used. |

**Returns:** `UHInventoryItemDefinition*` — The first matching definition, or `null` if not found.

---

### `GetItemDefinitionsByPartialName`

```
GetItemDefinitionsByPartialName(PartialName) → TArray<UHInventoryItemDefinition*>
```

Finds **all** item definitions whose asset name contains `PartialName`. Useful when multiple items share part of a name (e.g., `"Pistol"` matching both `ID_Weapon_Pistol` and `ID_Weapon_PistolSilenced`).

| Parameter | Type | Description |
|---|---|---|
| `PartialName` | `FString` | The string to search for within asset names. |

**Returns:** `TArray<UHInventoryItemDefinition*>` — All matching definitions. Empty array if none found.

---

### `Get Item Definition By Display Name`

```
GetItemDefinitionByDisplayName(DisplayName, bExactMatch) → UHInventoryItemDefinition*
```

Finds an item definition by its player-facing display name. Slower than asset name lookups because matching assets must be loaded to verify their display name.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `DisplayName` | `FText` | — | The display name to search for. |
| `bExactMatch` | `bool` | `false` | If `true`, requires an exact text match. If `false`, performs a partial/contains match. |

**Returns:** `UHInventoryItemDefinition*` — The first matching definition, or `null` if not found.

---

### `GetItemDefinitionsByTag`

```
GetItemDefinitionsByTag(Tag) → TArray<UHInventoryItemDefinition*>
```

Finds all item definitions that have a specific Gameplay Tag. Only matching assets are loaded.

| Parameter | Type | Description |
|---|---|---|
| `Tag` | `FGameplayTag` | The tag to filter by. |

**Returns:** `TArray<UHInventoryItemDefinition*>` — All definitions containing the given tag.

---

### `GetItemDefinitionsByTags`

```
GetItemDefinitionsByTags(Tags, bMatchAll) → TArray<UHInventoryItemDefinition*>
```

Finds all item definitions matching a set of Gameplay Tags.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `Tags` | `FGameplayTagContainer` | — | The set of tags to filter by. |
| `bMatchAll` | `bool` | `false` | If `true`, items must have **all** provided tags. If `false`, items need **at least one**. |

**Returns:** `TArray<UHInventoryItemDefinition*>` — All definitions matching the tag criteria.

---

### `GetAllItemDefinitions`

```
GetAllItemDefinitions() → TArray<UHInventoryItemDefinition*>
```

Returns every registered item definition in the project.

> **Warning:** This loads **all** item definition assets. Use sparingly and avoid calling this every frame.

**Returns:** `TArray<UHInventoryItemDefinition*>` — Every item definition.

---

### `DoesItemDefinitionExist`

```
DoesItemDefinitionExist(AssetName) → bool
```

Checks whether an item definition with the given asset name exists, **without loading the asset**.

| Parameter | Type | Description |
|---|---|---|
| `AssetName` | `FName` | The exact asset name to check (e.g., `ID_Weapon_Pistol`). |

**Returns:** `bool` — `true` if an asset with that name exists in the registry.

---

## Equipment Operations

---

### `UnequipItem` `[Server Only]`

```
UnequipItem(TargetActor, EquipmentInstance) → bool
```

Unequips a specific equipment instance from the actor.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to unequip from. |
| `EquipmentInstance` | `UHEquipmentInstance*` | The equipment instance to remove. |

**Returns:** `bool` — `true` if the item was successfully unequipped.

---

### `UnequipAllItems` `[Server Only]`

```
UnequipAllItems(TargetActor)
```

Unequips every currently equipped item on the actor, including both quickbar-equipped and script-equipped items.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to unequip all items from. |

---

### `GetEquippedItems`

```
GetEquippedItems(TargetActor) → TArray<UHEquipmentInstance*>
```

Returns all equipment instances currently active on the actor.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to query. |

**Returns:** `TArray<UHEquipmentInstance*>` — All active equipment instances. Empty if nothing is equipped.

---

## QuickBar Operations

---

### `RemoveItemFromQuickBarSlot` `[Server Only]`

```
RemoveItemFromQuickBarSlot(TargetActor, SlotIndex) → UHInventoryItemInstance*
```

Removes and returns the item occupying a specific quickbar slot. The slot is left empty.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor whose quickbar to modify. |
| `SlotIndex` | `int32` | The zero-based slot index to clear. |

**Returns:** `UHInventoryItemInstance*` — The item that was removed, or `null` if the slot was already empty.

---

### `ClearQuickBar` `[Server Only]`

```
ClearQuickBar(TargetActor)
```

Removes all items from every quickbar slot.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor whose quickbar to clear. |

---

### `SetActiveQuickBarSlot` `[Server Only]`

```
SetActiveQuickBarSlot(TargetActor, SlotIndex)
```

Sets the active quickbar slot, equipping the item in that slot through the normal quickbar flow.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to update. |
| `SlotIndex` | `int32` | The zero-based slot index to activate. |

---

### `DeactivateQuickBarSlot` `[Server Only]`

```
DeactivateQuickBarSlot(TargetActor)
```

Deactivates the currently selected quickbar slot, switching the actor to an unarmed/empty-handed state.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to update. |

---

### `GetActiveQuickBarSlot`

```
GetActiveQuickBarSlot(TargetActor) → int32
```

Returns the index of the currently active quickbar slot.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to query. |

**Returns:** `int32` — The active slot index, or `-1` if no slot is active.

---

### `GetQuickBarSlotCount`

```
GetQuickBarSlotCount(TargetActor) → int32
```

Returns the total number of slots in the actor's quickbar.

| Parameter | Type | Description |
|---|---|---|
| `TargetActor` | `AActor*` | The actor to query. |

**Returns:** `int32` — The number of available quickbar slots.

---

## Utility Functions

---

### `GetItemDefinition`

```
GetItemDefinition(ItemInstance) → UHInventoryItemDefinition*
```

Returns the item definition data asset associated with an inventory item instance.

| Parameter | Type | Description |
|---|---|---|
| `ItemInstance` | `UHInventoryItemInstance*` | The item instance to inspect. |

**Returns:** `UHInventoryItemDefinition*` — The definition for this item, or `null` if the instance is invalid.

---

### `GetItemDisplayName`

```
GetItemDisplayName(ItemInstance) → FText
```

Returns the localizable display name of an inventory item instance.

| Parameter | Type | Description |
|---|---|---|
| `ItemInstance` | `UHInventoryItemInstance*` | The item instance to inspect. |

**Returns:** `FText` — The player-facing display name of the item.

---

### `GetItemTags`

```
GetItemTags(ItemInstance) → FGameplayTagContainer
```

Returns the full set of Gameplay Tags from an inventory item's definition.

| Parameter | Type | Description |
|---|---|---|
| `ItemInstance` | `UHInventoryItemInstance*` | The item instance to inspect. |

**Returns:** `FGameplayTagContainer` — All tags assigned to the item's definition.

---

### `IsItemEquippable`

```
IsItemEquippable(ItemDefinition) → bool
```

Checks whether an item definition supports being equipped (i.e., has equipment data configured).

| Parameter | Type | Description |
|---|---|---|
| `ItemDefinition` | `UHInventoryItemDefinition*` | The item definition to check. |

**Returns:** `bool` — `true` if the item can be equipped.