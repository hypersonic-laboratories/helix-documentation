---
title: Sound
description: Class for playing in-game 2D and 3D sounds
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="Sound" image="/img/docs/sound.webp" />

The `Sound` class provides a high-level interface for playing and controlling both 2D and 3D audio in-game. It allows you to spawn sounds at specific locations, adjust playback properties such as volume, pitch, and attenuation, and apply effects like fading, filtering, and modulation. The class also exposes functions for querying playback state, retrieving audio analysis data (such as FFT and envelope data), and customizing audio routing and parameters.

## Examples

```lua
local SoundActor = Sound(
    Vector(-7940, 7402, 150),
    '/Engine/VREditor/Sounds/UI/Enter_Play',
    false,
    false,
    1.0,
    1.0,
    400,
    600,
    AttenuationFunction.Linear,
    true
)
```
```lua
local SoundActor = Sound(
    Vector(-7940, 7402, 150),
    '/Engine/VREditor/Sounds/UI/Enter_Play',
    false,
    false,
    1.0,
    1.0,
    400,
    600,
    AttenuationFunction.Linear,
    true
)
print(SoundActor.Object) -- AActor
print(SoundActor.Component) -- UAudioComponent
```

## Variables

| Name              |       Type             |
| ----------------  | ------------------- |
| Component          | [UAudioComponent](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/UAudioComponent?application_version=5.5)    |


## Constructors

<ConstructorDeclaration type="Class" name="Sound" />
```lua
local SoundActor = Sound(Vector(0, 0, 0), 
'/Engine/VREditor/Sounds/UI/Enter_Play', 
false, false, 1.0, 1.0, 400, 600, 
AttenuationFunction.Linear, true)
```

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../../structs/vector) | `Location`   |  | The location to spawn the decal at.  |
| string | `SoundAsset`  |   | The path to a USoundBase asset. |
| boolean? | `bIs2D` |    `true`    | Whether the sound is to be 2D sound, or a 3D sound. |
| boolean | `bAutoDestroy` |  | Whether to automatically destroy the component once the sound has finished playing. |
| number | `Volume` | | The volume multiplier the sound will play at. |
| number | `Pitch` | | The pitch multiplier applied to the sound. |
| number | `Radius` | | The inner radius for sound attenuation. |
| number | `FalloffDistance` | | The falloff distance for sound attenuation. |
| AttenuationFunction NOTE: Needs Enum | `AttenuationFunction` | | The attenuation function enum to use for sound attenuation. |


### Returns
```ts
table: {
    Object: AActor,
    Component: UAudioComponent,
}
```

## Functions

<FunctionsDeclaration type="Class" name="Sound" />

### Play

Starts playing the targeted audio component’s sound.

```lua
Sound:Play(StartTime)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `StartTime` | `0` | Time offset (in seconds) to begin playback from. |

---

### Stop

Stops the audio component’s sound immediately and issues any relevant delegates.

```lua
Sound:Stop()
```

---

### StopDelayed

Cues a stop request after a given delay (in seconds). Stops immediately if `DelayTime <= 0`.

```lua
Sound:StopDelayed(DelayTime)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `DelayTime` | | Delay before stopping the sound. |

---

### FadeIn

Fades the sound in over a duration with optional volume curve.

```lua
Sound:FadeIn(FadeInDuration, FadeVolumeLevel, StartTime, FadeCurve)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `FadeInDuration` | | Duration of fade-in. |
| number | `FadeVolumeLevel` | `1.0` | Target volume level. |
| number | `StartTime` | `0` | Start time offset (optional). |
| [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) | `FadeCurve` | `Linear` | Curve shape used for fading. |

---

### FadeOut

Fades the sound out over a duration with optional volume curve.

```lua
Sound:FadeOut(FadeOutDuration, FadeVolumeLevel, FadeCurve)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `FadeOutDuration` | | Duration of fade-out. |
| number | `FadeVolumeLevel` | `0.0` | Final volume level. |
| [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) | `FadeCurve` | `Linear` | Curve shape used for fading. |

---

### SetPaused

Pauses or resumes the audio component’s playback.

```lua
Sound:SetPaused(bPause)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `bPause` | | Whether to pause the sound (`true`) or resume it (`false`). |

---

### SetVolumeMultiplier

Sets a new global volume multiplier for the sound.

```lua
Sound:SetVolumeMultiplier(NewVolumeMultiplier)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `NewVolumeMultiplier` | | New volume multiplier (0.0 to 1.0 typically). |

---

### SetPitchMultiplier

Sets a new pitch multiplier for the sound.

```lua
Sound:SetPitchMultiplier(NewPitchMultiplier)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `NewPitchMultiplier` | | Multiplier for playback pitch (e.g., 1.0 is normal pitch). |

---

### SetUISound

Marks the sound as UI sound (used for mixing purposes).

```lua
Sound:SetUISound(bInUISound)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `bInUISound` | | Whether this sound should be treated as a UI sound. |

---

### SetSound

Changes the sound asset being played by the component.

```lua
Sound:SetSound(NewSound)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [USoundBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundBase?application_version=5.5) | `NewSound` | | The new sound asset to play. |

---

### SetLowPassFilterEnabled

Enables/disables a low-pass filter for this sound.

```lua
Sound:SetLowPassFilterEnabled(InLowPassFilterEnabled)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `InLowPassFilterEnabled` | | Whether the LPF is enabled. |

---

### SetLowPassFilterFrequency

Sets the cutoff frequency (Hz) for the low-pass filter.

```lua
Sound:SetLowPassFilterFrequency(InLowPassFilterFrequency)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `InLowPassFilterFrequency` | | Frequency threshold for LPF (in Hz). |

---

### SetHighPassFilterEnabled

Enables/disables a high-pass filter for this sound.

```lua
Sound:SetHighPassFilterEnabled(InHighPassFilterEnabled)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `InHighPassFilterEnabled` | | Whether the HPF is enabled. |

---

### SetHighPassFilterFrequency

Sets the cutoff frequency (Hz) for the high-pass filter.

```lua
Sound:SetHighPassFilterFrequency(InHighPassFilterFrequency)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `InHighPassFilterFrequency` | | Frequency threshold for HPF (in Hz). |

---

### SetSubmixSend

Sets the send level to a specific submix.

```lua
Sound:SetSubmixSend(Submix, SendLevel)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [USoundSubmixBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSubmixBase?application_version=5.5) | `Submix` | | Submix to send sound to. |
| number | `SendLevel` | | Volume level of the send. |

---

### SetAudioBusSendPreEffect

Sets how much audio is sent to an Audio Bus before source effects.

```lua
Sound:SetAudioBusSendPreEffect(AudioBus, AudioBusSendLevel)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [UAudioBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/UAudioBus?application_version=5.5) | `AudioBus` | | Audio bus to send to pre-effects. |
| number | `AudioBusSendLevel` | | Volume level of the send. |

---

### SetAudioBusSendPostEffect

Sets how much audio is sent to an Audio Bus after source effects.

```lua
Sound:SetAudioBusSendPostEffect(AudioBus, AudioBusSendLevel)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [UAudioBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/UAudioBus?application_version=5.5) | `AudioBus` | | Audio bus to send to post-effects. |
| number | `AudioBusSendLevel` | | Volume level of the send. |

---

### SetSourceBusSendPreEffect

Sets the send level to a Source Bus before effect processing.

```lua
Sound:SetSourceBusSendPreEffect(SoundSourceBus, SourceBusSendLevel)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [USoundSourceBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSourceBus?application_version=5.5) | `SoundSourceBus` | | Source bus to send to pre-effects. |
| number | `SourceBusSendLevel` | | Volume level of the send. |

---

### SetSourceBusSendPostEffect

Sets the send level to a Source Bus after effect processing.

```lua
Sound:SetSourceBusSendPostEffect(SoundSourceBus, SourceBusSendLevel)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [USoundSourceBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSourceBus?application_version=5.5) | `SoundSourceBus` | | Source bus to send to post-effects. |
| number | `SourceBusSendLevel` | | Volume level of the send. |

---

### AdjustVolume

Adjusts the playback volume smoothly over time using a curve.

```lua
Sound:AdjustVolume(AdjustVolumeDuration, AdjustVolumeLevel, FadeCurve)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `AdjustVolumeDuration` | | Time to reach the target volume. |
| number | `AdjustVolumeLevel` | | Target volume level. |
| [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) | `FadeCurve` | `Linear` | Curve used for adjustment. |

---

### IsPlaying

Returns whether the sound is currently playing.

```lua
Sound:IsPlaying()
```

#### Returns
`boolean`: `true` if the sound is playing, `false` otherwise.

---

### IsVirtualized

Returns whether the sound is virtualized (paused due to distance or other factors).

```lua
Sound:IsVirtualized()
```

#### Returns
`boolean`: `true` if the sound is virtualized, `false` otherwise.

---

### GetPlayState

Returns the current play state of the audio component.

```lua
Sound:GetPlayState()
```

#### Returns
[EAudioComponentPlayState](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioComponentPlayState?application_version=5.5): Enum indicating current playback state.

---

### HasCookedFFTData

Checks if the current sound has precomputed FFT data available.

```lua
Sound:HasCookedFFTData()
```

#### Returns
`boolean`: `true` if FFT data is available.

---

### HasCookedAmplitudeEnvelopeData

Checks if the current sound has amplitude envelope data.

```lua
Sound:HasCookedAmplitudeEnvelopeData()
```

#### Returns
`boolean`: `true` if amplitude envelope data exists.

---

### GetCookedEnvelopeDataForAllPlayingSounds

Gets the current-time amplitude envelope data of the sounds playing on the audio component. Envelope data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.

```lua
local OutEnvelopeData = UE.TArray()
local DataFound = Sound:GetCookedEnvelopeDataForAllPlayingSounds(OutEnvelopeData)
```
OR
```lua
local DataFound, OutEnvelopeData = Sound:GetCookedEnvelopeDataForAllPlayingSounds(OutEnvelopeData)
```

#### Returns
`boolean`: `true` if data exists and audio is playing.</br>
`TArray<`[FSoundWaveEnvelopeDataPerSound](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundWaveEnvelopeDataPerSound?application_version=5.5)`>`: Array of envelope data.

---

### GetCookedEnvelopeData

Gets the current amplitude envelope value of the sound.

```lua
Sound:GetCookedEnvelopeData(OutEnvelopeData)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| number | `OutEnvelopeData` | | Output variable for the current envelope value. |

#### Returns
`boolean`: `true` if valid data was retrieved.

---

### GetCookedFFTDataForAllPlayingSounds

Gets the current-time cooked spectral data of the sounds playing on the audio component.
Spectral data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.

```lua
local OutSoundWaveSpectralData = UE.TArray()
local DataFound = Sound:GetCookedFFTDataForAllPlayingSounds(OutEnvelopeData)
```
OR
```lua
local DataFound, OutEnvelopeData = Sound:GetCookedFFTDataForAllPlayingSounds(OutEnvelopeData)
```

#### Returns
`boolean`: `true` if data exists and audio is playing.</br>
`TArray<`[FSoundWaveSpectralDataPerSound](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundWaveSpectralDataPerSound?application_version=5.5)`>`: Array of envelope data.

---

### GetCookedFFTData

Gets the spectral FFT data for specified frequencies.

```lua
Sound:GetCookedFFTData(FrequenciesToGet, OutSoundWaveSpectralData)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| TArray<number> | `FrequenciesToGet` | | List of frequencies to retrieve data for. |
| TArray<FSoundWaveSpectralData> | `OutSoundWaveSpectralData` | | Output array for spectral data. |

#### Returns
`boolean`: `true` if data was successfully retrieved.

---

### SetIntParameter

Sets a named integer parameter on the sound.

```lua
Sound:SetIntParameter(InName, InInt)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| string | `InName` | | Name of the parameter. |
| integer | `InInt` | | Value to set. |

---

### SetFloatParameter

Sets a named float parameter on the sound.

```lua
Sound:SetFloatParameter(InName, InFloat)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| string | `InName` | | Name of the parameter. |
| number | `InFloat` | | Value to set. |

---

### SetBoolParameter

Sets a named boolean parameter on the sound.

```lua
Sound:SetBoolParameter(InName, InBool)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| string | `InName` | | Name of the parameter. |
| boolean | `InBool` | | Value to set. |

---

### SetWaveParameter

Sets a named wave parameter on the sound.

```lua
Sound:SetWaveParameter(InName, InWave)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| string | `InName` | | Name of the parameter. |
| [USoundWave](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundWave?application_version=5.5) | `InWave` | | Wave to assign. |

---

### SetAttenuationSettings

Sets the attenuation settings for the sound.

```lua
Sound:SetAttenuationSettings(InAttenuationSettings)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [USoundAttenuation](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundAttenuation?application_version=5.5) | `InAttenuationSettings` | | The sound attenuation instance used to be set. |

---

### SetAttenuationOverrides

Sets the attenuation settings for the sound by overriding.

```lua
Sound:SetAttenuationOverrides(InAttenuationSettings)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) | `InAttenuationSettings` | | The sound attenuation structure used to override the attenuation settings. |

---

### AdjustAttenuation

Modifies the attenuation settings on the component.

```lua
Sound:AdjustAttenuation(InAttenuationSettings)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) | `InAttenuationSettings` | | Updated settings to apply. |

---

### BP_GetAttenuationSettingsToApply

Retrieves the current attenuation settings applied to the sound.

```lua
Sound:BP_GetAttenuationSettingsToApply(OutAttenuationSettings)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) | `OutAttenuationSettings` | | Output structure to receive settings. |

#### Returns
`boolean`: `true` if settings were retrieved.

---

### SetOutputToBusOnly

Controls whether the audio is output only to the bus.

```lua
Sound:SetOutputToBusOnly(bInOutputToBusOnly)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `bInOutputToBusOnly` | | Whether to route output only to the bus. |

---

### SetOverrideAttenuation

Overrides the default attenuation behavior.

```lua
Sound:SetOverrideAttenuation(bInOverrideAttenuation)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| boolean | `bInOverrideAttenuation` | | Whether to override attenuation settings. |

---

### SetModulationRouting

Sets modulation routing for a destination.

```lua
Sound:SetModulationRouting(Modulators, Destination, RoutingMethod)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| TSet<[USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5)> | `Modulators` | | Modulators to use. |
| [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) | `Destination` | | Where to apply modulation. |
| [EModulationRouting](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationRouting?application_version=5.5) | `RoutingMethod` | | Method of routing modulators. |

---

### AddModulationRouting

Adds modulators to existing modulation routing.

```lua
Sound:AddModulationRouting(Modulators, Destination)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| TSet<[USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5) | `Modulators` | | Modulators to add. |
| [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) | `Destination` | | Where to apply added modulators. |

---

### RemoveModulationRouting

Removes modulators from existing routing.

```lua
Sound:RemoveModulationRouting(Modulators, Destination)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| TSet<[USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5) | `Modulators` | | Modulators to remove. |
| [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) | `Destination` | | Where to remove modulators from. |

---

### GetModulators

Gets active modulators for a given modulation destination.

```lua
Sound:GetModulators(Destination)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) | `Destination` | | Which destination to query. |

#### Returns
`TSet<USoundModulatorBase>`: Set of active modulators.

---

### PlayQuantized

Plays the sound aligned to a quantization boundary using a clock handle.

```lua
Sound:PlayQuantized(WorldContextObject, InClockHandle, InQuantizationBoundary, InDelegate, InStartTime, InFadeInDuration, InFadeVolumeLevel, InFadeCurve)
```

| Type | Name | Default | Description |
| ---- | ---- | ------- | ----------- |
| UObject | `WorldContextObject` | | Context object, for example the world. |
| [UQuartzClockHandle](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioMixer/Quartz/UQuartzClockHandle?application_version=5.5) | `InClockHandle` | | Handle to the clock. |
| [FQuartzQuantizationBoundary](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FQuartzQuantizationBoundary?application_version=5.5) | `InQuantizationBoundary` | | Quantization boundary. |
| Delegate | `InDelegate` | | Delegate to call on completion. |
| number | `InStartTime` | `0` | Optional start time. |
| number | `InFadeInDuration` | `0` | Fade-in duration. |
| number | `InFadeVolumeLevel` | `1.0` | Target volume. |
| [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) | `InFadeCurve` | `Linear` | Fade curve. |

---

## Events

<EventsDeclaration type="Class" name="Sound" />
