---
title: Rendering WebUI in 3D Space
tags: [scripting]
---
# Rendering WebUI in 3D Space
This example demonstrates how to render a live WebUI (such as an embedded video or webpage) directly onto a 3D object in the game world.
It creates a TV-like display using a `StaticMeshActor`, attaches a widget component with a browser UI, and dynamically binds the browser’s render target to a material on the mesh.
Audio is spatialized using an `AudioComponent`, allowing the sound to fade naturally with distance.

This setup is ideal for things like:

- In-world televisions
- Kiosks or info panels
- Diegetic UI elements like terminals or displays

```lua title="Example"
local function CreateTV()
    -- Spawn a StaticMeshActor with a basic cube mesh at a specific location
    TV = StaticMesh(
        Vector(-10490.0, 11010, 250),  -- Position
        Rotator(0, 0, 0),              -- Rotation
        '/Engine/BasicShapes/Cube.Cube',   -- Mesh path
        CollisionType.Normal               -- Collision type
    )
    if not TV or not TV.Object then return end

    -- Get the cube's primitive component (used for applying the material)
    local Component = TV:K2_GetComponentsByClass(UE.UPrimitiveComponent)[1]

    -- Set the mesh scale to be very thin like a screen
    TV:SetActorScale3D(Vector(0.05, 8.0, 5.0))

    -- Create a widget component to render the browser UI
    local WidgetComponent = TV:AddComponentByClass(UE.UWidgetComponent, false, nil, false)

    -- Create a new instance of the WorldBrowserCEF widget
    local Browser = UE.UWidgetBlueprintLibrary.Create(HWorld, UE.UClass.Load('/Script/Blu.WorldBrowserCEF'))
    if not Browser or not Browser:IsValid() then
        return print('Error: Failed to create browser')
    end

    -- Create an audio component for spatialized browser sound
    local SoundComponent = TV:AddComponentByClass(UE.UAudioComponent, false, nil, false)

    -- Create a dynamic material instance with a texture parameter
    local Material = Component:CreateDynamicMaterialInstance(0, UE.UObject.Load('/Game/LuaContent/Material/M_LuaTexture.M_LuaTexture'), nil)
    if not Material or not Material:IsValid() then
        return print('Error: Failed to create material')
    end

    -- Disable auto-destroy for the sound so it persists
    SoundComponent.bAutoDestroy = false

    -- Prevent widget from rendering in the main pass (only as texture)
    WidgetComponent.bRenderInMainPass = false

    -- Bind the browser brush delegate to update the material’s texture dynamically
    Browser.BrushDelegate:Bind(WidgetComponent, function(arg1)
        Material:SetTextureParameterValue("Texture", arg1:GetRenderTarget())
        return Browser.Brush
    end)

    -- Assign the browser widget to the widget component
    WidgetComponent:SetWidget(Browser)

    -- Load a YouTube video with embedded settings
    Browser:LoadURL('https://www.youtube-nocookie.com/embed/nwywfZuhHH4?si=OIbLjAYEcjaG0-aj&amp;controls=0')

    -- Apply the dynamic material to the widget component
    WidgetComponent:SetMaterial(0, Material)

    -- Wait 2 seconds before interacting with the browser and enabling audio
    Timer.SetTimeout(function()
        if not Browser.Eye then
            return print('Error: Browser Eye is not valid')
        end

        -- Simulate a left-click at a screen coordinate to "wake" the browser
        Browser.Eye:TriggerLeftClick(UE.FVector2D(200, 200), 1.0)

        -- Enable audio streaming from the browser and assign it to the sound component
        local Audio = Browser.Eye:EnableAudio()
        SoundComponent:SetSound(Audio)
        SoundComponent:SetUISound(false)
        SoundComponent.bAllowSpatialization = true

        -- Configure spatial attenuation settings for realistic audio fade-out
        local AttenuationSettings                   = UE.FSoundAttenuationSettings()
        AttenuationSettings.bAttenuate              = true
        AttenuationSettings.bSpatialize             = true
        AttenuationSettings.bAttenuateWithLPF       = true
        AttenuationSettings.FalloffDistance         = 1500
        AttenuationSettings.DistanceAlgorithm       = AttenuationFunction.Linear
        AttenuationSettings.AttenuationShape        = AttenuationShape.Sphere
        AttenuationSettings.AttenuationShapeExtents = UE.FVector(1000, 0, 0)

        -- Apply the attenuation overrides and play the sound
        SoundComponent.bOverrideAttenuation = true
        SoundComponent:SetAttenuationOverrides(AttenuationSettings)
        SoundComponent:Play(0)
    end, 2000)
end

```