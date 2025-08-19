---
title: Animation
description: Animation provides methods to interact with Animations on Actors, like starting and stopping.
tags: [static-class]
---
<HeaderDeclaration type="Class" name="Animation" />


/// info
`Animation` is a static module — you don’t instantiate it, but can access its methods.
///


## Structs
### FHelixPlayAnimParams

#### Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `LoopCount` | `number` | `1` | Number of times to loop the animation. `1` means play once. |
| `PlayRate` | `number` | `1.0` | The playback speed of the animation. `1.0` is normal speed. |
| `StartTimeSeconds` | `number` | `0.0` | Time offset in seconds to start the animation from. |
| `bIgnoreMovementInput` | `boolean` | `false` | If `true`, player movement input will be ignored during the animation. |
| `MovementMode` | [EMovementMode]() | `MOVE_Walking` | The character movement mode to use (e.g., Walking, Flying). Use `MOVE_Flying` for animations with vertical root motion. Use `MOVE_Walking` if character needs to be grounded during the animation. |
| `bIgnoreCorrections` | `boolean` | `false` | If `true`, the Character Movement Component will ignore network corrections during root motion. |
| `RootMotionTranslationScale` | `number` | `1.0` | A multiplier for the translation of root motion in the animation. Increasing the value will increase distance travelled for root motion animations. |
| `bEndAbilityOnAnimBlendOut` | `boolean` | `true` | If `true`, the animation ability will end early with animation’s blend-out event. Useful to smoothly blend to gameplay logic after animation. |
| `bCanBeCancelled` | `boolean` | `true` | If `false`, this animation cannot be cancelled by another gameplay ability trying to play an animation. Use this for critical animations. |
| `bUseMotionWarping` | `boolean` | `false` | If `true`, the actor will warp towards the `WarpTargetTransform` during the animation. Animation asset should have root motion enabled on its flags for this to work. |
| `WarpTargetTransform` | `Transform` | `Identity` | The world-space transform to use as the motion warping target. |
| `WarpTargetName` | `string` | `None` | The name of the motion warp target in the animation notify. Leave it as `None` if not sure about what to use. This will auto-create a motion warping window if no window exists. If there is at least one window in the animation, it will be automatically selected. |
| `AnimSlotName` | `string` | `None` | If the `AnimationAsset` is an anim sequence, this specifies which animation slot to play it in. `NAME_None` or `FullBody` plays on the full body. `UpperBody` plays the animation on the upper body. Not used if provided animation asset is an anim montage. |
| `BlendInTime` | `number` | `0.25` | Blend-in duration if the animation is played as a dynamic montage. Not used if provided animation asset is an anim montage. |
| `BlendOutTime` | `number` | `0.25` | Blend-out duration if the animation is played as a dynamic montage. Not used if provided animation asset is an anim montage. |

## Functions

### Play
Plays the specificed animation or animation montage on a Target Actor with parameters.
```lua
local bSuccess = Animation.Play(TargetActor, '/Path/To/Animation.Animation', UE.FHelixPlayAnimParams(), function() print('Animation Ended') end)
```

---
### Stop
Stops the animation being played on the TargetActor.
```lua
Animation.Stop(TargetActor)
```