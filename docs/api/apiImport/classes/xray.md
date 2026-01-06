---
title: Xray
description: ''
tags: [class]
---

Xray is a static class that provides methods to manipulate and hook into the native Xray system used to outline actors in the game world. It provides detection, highlighting, and selection of actors with customizable outline colors and intensities. Xray listeners can be implemented to facilitate gameplay features, such as showing UI during Xray interactions.

## Functions

<FunctionsDeclaration type="Class" name="Xray" />

### RegisterListener
Registers a listener for generic Xray events that triggers when any actor's X-ray state changes

- **cb**: `function` - Callback function with parameters (Instigator: [AHPlayerController](./controller.md), Target: [AActor](./actor.md), State: [XrayState](../global-variables/enums.md#xraystate))

- <mark style="color:yellow;">returns</mark>: `boolean` - true if listener was registered successfully

```lua
Xray.RegisterListener(function(Instigator, Target, State)
    print('X-ray state changed:', State)
end)
```

---

### RemoveListeners
Removes all registered Xray listeners

- <mark style="color:yellow;">returns</mark>: `boolean` - true if listeners were cleared successfully

```lua
Xray.RemoveListeners()
```

---

### RegisterActor
Registers an actor into the Xray system and optionally adds a listener for its state changes

- **Actor**: [AActor](./actor.md) - The actor to make X-rayable
- **cb**: `function` - Optional callback function for state changes (Instigator: [AHPlayerController](./controller.md), Target: [AActor](./actor.md), State: [XrayState](../global-variables/enums.md#xraystate))

- <mark style="color:yellow;">returns</mark>: `UHXRayTargetActorComponent` - The X-ray component added to the actor

```lua
local XrayComp = Xray.RegisterActor(MyActor, function(Instigator, Target, State)
    print('Actor state changed:', State)
end)
```

---

### UnregisterActor
Unregisters an actor from the Xray system and removes its X-ray component

- **Actor**: [AActor](./actor.md) - The actor to unregister

- <mark style="color:yellow;">returns</mark>: `boolean` - true if actor was unregistered successfully

```lua
Xray.UnregisterActor(MyActor)
```

---

### SetOutlineIntensity
Sets scalar parameters for the X-ray outline material intensity

- **InnerlineIntensity**: `number` - Intensity of the inner line (optional)
- **OutlineIntensity**: `number` - Intensity of the outline (optional)

- <mark style="color:yellow;">returns</mark>: `boolean` - true if intensities were set successfully

```lua
Xray.SetOutlineIntensity(2.0, 3.0)
```

---

### SetOutlineColors
Sets color parameters for the X-ray outline material (standard colors)

- **HighlightColor**: `FLinearColor|FColor` - Color for highlighted state (optional, accepts FLinearColor or FColor with 0-255 values)
- **SelectColor**: `FLinearColor|FColor` - Color for selected state (optional, accepts FLinearColor or FColor with 0-255 values)

- <mark style="color:yellow;">returns</mark>: `boolean` - true if colors were set successfully

```lua
local highlightColor = UE.FLinearColor(1.0, 0.5, 0.0, 1.0)
local selectColor = UE.FColor(255, 255, 0, 255)
Xray.SetOutlineColors(highlightColor, selectColor)
```

---

### SetPremiumOutlineColors
Sets premium color parameters for the X-ray outline material (premium tier colors)

- **HighlightColor**: `FLinearColor|FColor` - Color for highlighted state (premium tier, optional)
- **SelectColor**: `FLinearColor|FColor` - Color for selected state (premium tier, optional)

- <mark style="color:yellow;">returns</mark>: `boolean` - true if premium colors were set successfully

```lua
local premiumHighlight = UE.FLinearColor(0.0, 1.0, 1.0, 1.0)
local premiumSelect = UE.FColor(255, 0, 255, 255)
Xray.SetPremiumOutlineColors(premiumHighlight, premiumSelect)
```

---

### SetSelectionMultiplier
Sets the strength multiplier for the selected outline relative to the highlight outline

- **Multiplier**: `number` - Strength of selected outline (1 = same as highlight)

- <mark style="color:yellow;">returns</mark>: `boolean` - true if multiplier was set successfully

```lua
Xray.SetSelectionMultiplier(1.5)
```

---

### GetDetectionDistance
Gets the minimum required distance to outline X-ray target actors

- <mark style="color:yellow;">returns</mark>: `number|boolean` - Distance in Unreal units, or false if Xray system is unavailable

```lua
local distance = Xray.GetDetectionDistance()
```

---

### SetDetectionDistanceOverride
Overrides the minimum required distance to outline X-ray target actors

- **NewDistance**: `number` - New distance to set

- <mark style="color:yellow;">returns</mark>: `boolean` - true on success, false if Xray system is unavailable

```lua
Xray.SetDetectionDistanceOverride(5000)
```

---

### GetMinFocusDistance
Gets the minimum required distance to focus on X-ray target actors to trigger additional events

- <mark style="color:yellow;">returns</mark>: `number|boolean` - Distance in Unreal units, or false if Xray system is unavailable

```lua
local focusDistance = Xray.GetMinFocusDistance()
```

---

### SetMinFocusDistanceOverride
Overrides the minimum required distance to focus on X-ray target actors to trigger additional events

- **NewDistance**: `number` - New distance to set

- <mark style="color:yellow;">returns</mark>: `boolean` - true on success, false if Xray system is unavailable

```lua
Xray.SetMinFocusDistanceOverride(1000)
```

---

### GetTraceRadius
Gets the radius used for trace sphere to detect X-ray target actors

- <mark style="color:yellow;">returns</mark>: `number|boolean` - Radius in Unreal units, or false if Xray system is unavailable

```lua
local radius = Xray.GetTraceRadius()
```

---

### SetTraceRadiusOverride
Overrides the radius used for trace sphere to detect X-ray target actors

- **NewRadius**: `number` - New radius to set

- <mark style="color:yellow;">returns</mark>: `boolean` - true on success, false if Xray system is unavailable

```lua
Xray.SetTraceRadiusOverride(500)
```

---

### GetTraceFrequency
Gets the frequency (per second) used for traces to detect X-ray target actors

- <mark style="color:yellow;">returns</mark>: `number|boolean` - Frequency (traces per second), or false if Xray system is unavailable

```lua
local frequency = Xray.GetTraceFrequency()
```

---

### `SetTraceFrequency`
Overrides the frequency used for traces to detect X-ray target actors

- **Frequency**: `number` - The number of traces per second

- <mark style="color:yellow;">returns</mark>: `boolean` - true on success, false if Xray system is unavailable

```lua
Xray.SetTraceFrequency(10)
```