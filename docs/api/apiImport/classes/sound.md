---
title: Sound
description: Class for playing in-game 2D and 3D sounds
tags: [class]
---
The `Sound` class provides a high-level interface for playing and controlling both 2D and 3D audio in-game.
It allows you to spawn sounds at specific locations, adjust playback properties such as volume, pitch, and attenuation, and apply effects like fading, filtering, and modulation.
The class also exposes functions for querying playback state, retrieving audio analysis data (such as FFT and envelope data), and customizing audio routing and parameters.

## Constructor

```lua title="Example"
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

| Type              |       Name        | Default | Description                                                              |
| ---------------  | :----------------- | ----- | ----------------------------------------------------------------------  |
| [Vector](../global-variables/structs.md/#vector) | `Location`   |  | The location to spawn the decal at.  |
| string | `SoundAsset`  |   | The path to a USoundBase asset. |
| boolean? | `bIs2D` |    `true`    | Whether the sound is to be 2D sound, or a 3D sound. |
| boolean | `bAutoDestroy` |  | Whether to automatically destroy the component once the sound has finished playing. |
| number | `Volume` | | The volume multiplier the sound will play at. |
| number | `Pitch` | | The pitch multiplier applied to the sound. |
| number | `Radius` | | The inner radius for sound attenuation. |
| number | `FalloffDistance` | | The falloff distance for sound attenuation. |
| AttenuationFunction NOTE: Needs Enum | `AttenuationFunction` | | The attenuation function enum to use for sound attenuation. |

## Functions

### `Play`
Starts playing the targeted audio component’s sound.

- startTime: `number` - Time offset (in seconds) to begin playback from

```lua title="Example"
SoundActor:Play(30)
```

---

### `Stop`
Stops the audio component’s sound immediately and issues any relevant delegates.

```lua title="Example"
SoundActor:Stop()
```

---

### `StopDelayed`
Cues a stop request after a given delay (in seconds). Stops immediately if `DelayTime <= 0`.

- delayTime: `number` - Delay before stopping the sound

```lua title="Example"
SoundActor:StopDelayed(delayTime)
```

---

### `FadeIn`
Fades the sound in over a duration with optional volume curve

- FadeInDuration: `number` — Duration of the fade-in.
- FadeVolumeLevel: `number` (default: 1.0) — Target volume level.
- StartTime: `number` (default: 0) — Optional start time offset in seconds.
- FadeCurve: `EAudioFaderCurve` (default: Linear) — Curve shape used for fading.

```lua title="Example"
SoundActor:FadeIn(FadeInDuration, FadeVolumeLevel, StartTime, FadeCurve)
```

---

### `FadeOut`
Fades the sound out over a duration with optional volume curve

- FadeOutDuration: `number` - duration of fade-out
- FadeVolumeLevel: `number` - final volume level (default: `0`)
- FadeCurve: `EAudioFaderCurve` — curve shape used for fading

```lua title="Example"
SoundActor:FadeOut(FadeOutDuration, FadeVolumeLevel, FadeCurve)
```

---

### `SetPaused`
Pauses or resumes the audio component’s playback

- bPause: `boolean`

```lua title="Example"
SoundActor:SetPaused(bPause)
```

---

### `SetVolumeMultiplier`
Sets a new global volume multiplier for the sound

- NewVolumeMultiplier: `number`

```lua title="Example"
SoundActor:SetVolumeMultiplier(NewVolumeMultiplier)
```

---

### `SetPitchMultiplier`
Sets a new pitch multiplier for the sound

- NewPitchMultiplier: `number` - Multiplier for playback pitch (e.g., 1.0 is normal pitch)

```lua title="Example"
SoundActor:SetPitchMultiplier(NewPitchMultiplier)
```

---

### `SetUISound`
Marks the sound as UI sound (used for mixing purposes)

- bInUISound: `boolean` - Whether this sound should be treated as a UI sound

```lua title="Example"
SoundActor:SetUISound(bInUISound)
```

---

### `SetSound`
Changes the sound asset being played by the component

- NewSound: [USoundBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundBase?application_version=5.5)

```lua title="Example"
SoundActor:SetSound(NewSound)
```

---

### `SetLowPassFilterEnabled`
Enables/disables a low-pass filter for this sound

- InLowPassFilterEnabled: `boolean` - Whether the LPF is enabled

```lua title="Example"
SoundActor:SetLowPassFilterEnabled(InLowPassFilterEnabled)
```

---

### `SetLowPassFilterFrequency`
Sets the cutoff frequency (Hz) for the low-pass filter

- InLowPassFilterFrequency: `number` - Frequency threshold for LPF (in Hz)

```lua title="Example"
SoundActor:SetLowPassFilterFrequency(InLowPassFilterFrequency)
```

---

### `SetHighPassFilterEnabled`
Enables/disables a high-pass filter for this sound

- InHighPassFilterEnabled: `boolean` - Whether the HPF is enabled

```lua title="Example"
SoundActor:SetHighPassFilterEnabled(InHighPassFilterEnabled)
```

---

### `SetHighPassFilterFrequency`
Sets the cutoff frequency (Hz) for the high-pass filter

- InHighPassFilterFrequency: `number` - Frequency threshold for HPF (in Hz)

```lua title="Example"
SoundActor:SetHighPassFilterFrequency(InHighPassFilterFrequency)
```

---

### `SetSubmixSend`
Sets the send level to a specific submix

- Submix: [USoundSubmixBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSubmixBase?application_version=5.5)
- SendLevel: `number` - Volume level of the send

```lua title="Example"
SoundActor:SetSubmixSend(Submix, SendLevel)
```

---

### `SetAudioBusSendPreEffect`
Sets how much audio is sent to an Audio Bus before source effects

- AudioBus: [UAudioBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/UAudioBus?application_version=5.5) - Audio bus to send to pre-effects
- AudioBusSendLevel: `number` - Volume level of the send

```lua title="Example"
SoundActor:SetAudioBusSendPreEffect(AudioBus, AudioBusSendLevel)
```

---

### `SetAudioBusSendPostEffect`
Sets how much audio is sent to an Audio Bus after source effects

- AudioBus: [UAudioBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/UAudioBus?application_version=5.5) - Audio bus to send to pre-effects
- AudioBusSendLevel: `number` - Volume level of the send

```lua title="Example"
SoundActor:SetAudioBusSendPostEffect(AudioBus, AudioBusSendLevel)
```

---

### `SetSourceBusSendPreEffect`
Sets the send level to a Source Bus before effect processing

- SoundSourceBus: [USoundSourceBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSourceBus?application_version=5.5) - Source bus to send to pre-effects
- SourceBusSendLevel: `number` - Volume level of the send

```lua title="Example"
SoundActor:SetSourceBusSendPreEffect(SoundSourceBus, SourceBusSendLevel)
```

---

### `SetSourceBusSendPostEffect`
Sets the send level to a Source Bus after effect processing

- SoundSourceBus: [USoundSourceBus](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundSourceBus?application_version=5.5) - Source bus to send to pre-effects
- SourceBusSendLevel: `number` - Volume level of the send

```lua title="Example"
SoundActor:SetSourceBusSendPostEffect(SoundSourceBus, SourceBusSendLevel)
```

---

### `AdjustVolume`
Adjusts the playback volume smoothly over time using a curve

- AdjustVolumeDuration: `number` - Time to reach the target volume
- AdjustVolumeLevel: `number` - Target volume level
- FadeCurve: [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) - Curve used for adjustment

```lua title="Example"
SoundActor:AdjustVolume(AdjustVolumeDuration, AdjustVolumeLevel, FadeCurve)
```

---

### `IsPlaying`
Returns whether the sound is currently playing

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local bPlaying = SoundActor:IsPlaying()
```

---

### `IsVirtualized`
Returns whether the sound is virtualized (paused due to distance or other factors)

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local bVirtualized = SoundActor:IsVirtualized()
```

---

### `GetPlayState`
Returns the current play state of the audio component

- <mark style="color:yellow;">returns</mark>: [EAudioComponentPlayState](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioComponentPlayState?application_version=5.5) - Enum indicating current playback state

```lua title="Example"
local playState = SoundActor:GetPlayState()
```

---

### `HasCookedFFTData`
Checks if the current sound has precomputed FFT data available

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local hCookedF = SoundActor:HasCookedFFTData()
```

---

### `HasCookedAmplitudeEnvelopeData`
Checks if the current sound has amplitude envelope data

- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local hCookedA = SoundActor:HasCookedAmplitudeEnvelopeData()
```

---

### `GetCookedEnvelopeDataForAllPlayingSounds`
Gets the current-time amplitude envelope data of the sounds playing on the audio component.
Envelope data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.

- <mark style="color:yellow;">returns</mark>: `boolean | TArray`

```lua title="Example"
local OutEnvelopeData = UE.TArray()
local DataFound = SoundActor:GetCookedEnvelopeDataForAllPlayingSounds(OutEnvelopeData)
```
OR

```lua title="Example"
local DataFound, OutEnvelopeData = SoundActor:GetCookedEnvelopeDataForAllPlayingSounds(OutEnvelopeData)
```

---

### `GetCookedEnvelopeData`
Gets the current amplitude envelope value of the sound

- OutEnvelopeData: `number` - Output variable for the current envelope value
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local gCookedE = SoundActor:GetCookedEnvelopeData(OutEnvelopeData)
```

---

### `GetCookedFFTDataForAllPlayingSounds`
Gets the current-time cooked spectral data of the sounds playing on the audio component.
Spectral data is not averaged or interpolated. Instead an array of data with all playing sound waves with cooked data is returned.

- <mark style="color:yellow;">returns</mark>: `boolean | TArray`

```lua title="Example"
local OutSoundWaveSpectralData = UE.TArray()
local DataFound = SoundActor:GetCookedFFTDataForAllPlayingSounds(OutEnvelopeData)
```
OR

```lua title="Example"
local DataFound, OutEnvelopeData = SoundActor:GetCookedFFTDataForAllPlayingSounds(OutEnvelopeData)
```

---

### `GetCookedFFTData`
Gets the spectral FFT data for specified frequencies

- FrequenciesToGet: `TArray` - List of frequencies to retrieve data for
- OutSoundWaveSpectralData: `TArray` - Output array for spectral data
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
SoundActor:GetCookedFFTData(FrequenciesToGet, OutSoundWaveSpectralData)
```

---

### `SetIntParameter`
Sets a named integer parameter on the sound

- InName: `string` - Name of the parameter
- InInt: `integer` - Value to set

```lua title="Example"
SoundActor:SetIntParameter(InName, InInt)
```

---

### `SetFloatParameter`
Sets a named float parameter on the sound

- InName: `string` - Name of the parameter
- InFloat: `number` - Value to set

```lua title="Example"
SoundActor:SetFloatParameter(InName, InFloat)
```

---

### `SetBoolParameter`
Sets a named boolean parameter on the sound

- InName: `string` - Name of the parameter
- InBool: `boolean` - Value to set

```lua title="Example"
SoundActor:SetBoolParameter(InName, InBool)
```

---

### `SetWaveParameter`
Sets a named wave parameter on the sound

- InName: string - Name of the parameter
- InWave: [USoundWave](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundWave?application_version=5.5) - Wave to assign

```lua title="Example"
SoundActor:SetWaveParameter(InName, InWave)
```

---

### `SetAttenuationSettings`
Sets the attenuation settings for the sound

- InAttenuationSettings: [USoundAttenuation](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/USoundAttenuation?application_version=5.5) - The sound attenuation instance used to be set

```lua title="Example"
SoundActor:SetAttenuationSettings(InAttenuationSettings)
```

---

### `SetAttenuationOverrides`
Sets the attenuation settings for the sound by overriding

- InAttenuationSettings: [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) - The sound attenuation structure used to override the attenuation settings

```lua title="Example"
SoundActor:SetAttenuationOverrides(InAttenuationSettings)
```

---

### `AdjustAttenuation`
Modifies the attenuation settings on the component

- InAttenuationSettings: [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) - Updated settings to apply

```lua title="Example"
SoundActor:AdjustAttenuation(InAttenuationSettings)
```

---

### `BP_GetAttenuationSettingsToApply`
Retrieves the current attenuation settings applied to the sound

- OutAttenuationSettings: [FSoundAttenuationSettings](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FSoundAttenuationSettings?application_version=5.5) - Output structure to receive settings
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local success = SoundActor:BP_GetAttenuationSettingsToApply(OutAttenuationSettings)
```

---

### `SetOutputToBusOnly`
Controls whether the audio is output only to the bus

- bInOutputToBusOnly: `boolean` - Whether to route output only to the bus

```lua title="Example"
SoundActor:SetOutputToBusOnly(bInOutputToBusOnly)
```

---

### `SetOverrideAttenuation`
Overrides the default attenuation behavior

- bInOverrideAttenuation: `boolean` - Whether to override attenuation settings

```lua title="Example"
SoundActor:SetOverrideAttenuation(bInOverrideAttenuation)
```

---

### `SetModulationRouting`
Sets modulation routing for a destination

- Modulators: [USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5) - Modulators to use
- Destination: [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) - Where to apply modulation
- RoutingMethod: [EModulationRouting](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationRouting?application_version=5.5) - Method of routing modulators

```lua title="Example"
SoundActor:SetModulationRouting(Modulators, Destination, RoutingMethod)
```

---

### `AddModulationRouting`
Adds modulators to existing modulation routing

- Modulators: [USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5) - Modulators to add
- Destination: [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) - Where to apply added modulators

```lua title="Example"
SoundActor:AddModulationRouting(Modulators, Destination)
```

---

### `RemoveModulationRouting`
Removes modulators from existing routing

- Modulators: [USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5) - Modulators to remove
- Destination: [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) - Where to remove modulators from

```lua title="Example"
SoundActor:RemoveModulationRouting(Modulators, Destination)
```

---

### `GetModulators`
Gets active modulators for a given modulation destination

- Destination: [EModulationDestination](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/EModulationDestination?application_version=5.5) - Which destination to query
- <mark style="color:yellow;">returns</mark>: `TSet` [USoundModulatorBase](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioExtensions/USoundModulatorBase?application_version=5.5)

```lua title="Example"
SoundActor:GetModulators(Destination)
```

---

### `PlayQuantized`
Plays the sound aligned to a quantization boundary using a clock handle

- WorldContextObject: UObject - Context object, for example the world.
- InClockHandle: [UQuartzClockHandle](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/AudioMixer/Quartz/UQuartzClockHandle?application_version=5.5) - Handle to the clock.
- InQuantizationBoundary: [FQuartzQuantizationBoundary](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Sound/FQuartzQuantizationBoundary?application_version=5.5) - Quantization boundary.
- InDelegate: Delegate - Delegate to call on completion.
- InStartTime: number (default: `0`) - Optional start time.
- InFadeInDuration: number (default: `0`) - Fade-in duration.
- InFadeVolumeLevel: number (default: `1.0`) - Target volume.
- InFadeCurve: [EAudioFaderCurve](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/Components/EAudioFaderCurve?application_version=5.5) (default: `Linear`) - Fade curve.

```lua title="Example"
SoundActor:PlayQuantized(WorldContextObject, InClockHandle, InQuantizationBoundary, InDelegate, InStartTime, InFadeInDuration, InFadeVolumeLevel, InFadeCurve)
```