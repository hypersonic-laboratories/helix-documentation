---
title: Widget
description: ''
tags: [class]
---
<HeaderDeclaration type="Class" name="Widget" />
The **Widget** class lets Lua scripts spawn **User Widgets** (Blueprint classes) or **native Unreal Widgets** and then manipulate them exactly as you would in Blueprints.
It is the building‑block for creating 2‑D user interfaces in‑game.

/// tip
`Widget` inherits every method and event from **Entity**.
///

/// tip
Most widget‑specific functions are *not* exposed directly as Lua methods.
Use `CallBlueprintEvent()` to invoke any function or event on the underlying UWidget / UUserWidget.
///

## Constructor
<ConstructorDeclaration type="Class" name="Widget" />

#### UserWidget Constructor
```lua title="Example"
-- Spawning a custom UserWidget Blueprint
local menu = Widget("/Game/UI/WBP_MainMenu.WBP_MainMenu_C")
menu:AddToViewport()
```

| Name                       | Type           | Default           | Description                                  |
| -------------------------- | -------------- | ----------------- | -------------------------------------------- |
| `BlueprintPath`            | `string`       | `(0,0,0)`         | A custom UserWidget Blueprint to spawn       |


### NativeWidget Constructor
```lua title="Example"
-- Creating a VerticalBox with a Text and a Button
local vbox = Widget(NativeWidget.VerticalBox)
vbox:AddToViewport()

local txt  = Widget(NativeWidget.Text)
txt:CallBlueprintEvent("SetText", "Hello World!")

local btn  = Widget(NativeWidget.Button)

vbox:AddChild(txt)
vbox:AddChild(btn)
```

| Name                       | Type           | Default           | Description                                  |
| -------------------------- | -------------- | ----------------- | -------------------------------------------- |
| `NativeWidget`            | `enum`         | `NativeWidget.VerticalBox` | A native Unreal Widget to spawn       |

## Functions
<FunctionsDeclaration type="Class" name="Widget" />

### `SetVisibility`
Sets the visibility of the widget on screen

- visibility: `number` - 0 Hidden, 1 Visible, 2 VisibleNotHitTestable

```lua
my_widget:SetVisibility(0)
```

---

### `GetVisibility`
Returns the current visibility state

- <mark style="color:yellow;">returns</mark>: `ESlateVisibility`

```lua
local isVisible = my_widget:GetVisibility()
```

---

### `SetFocus`
Gives keyboard / game‑pad focus to this widget

```lua
my_widget:SetFocus()
```

---

### `BringToFront`
Moves this widget to the top‑most Z‑order

```lua
my_widget:BringToFront()
```

---

### `AddToViewport`
Adds the widget to the game viewport and stretches it full‑screen

```lua
my_widget:AddToViewport()
```

---

### `AddChild`
Adds another widget as a child, if parent widget is a Panel

- widget: `enum`

```lua
local child = Widget(NativeWidget.Text)
parent:AddChild(child)
```

---

### `SetContentForSlot`
Sets the widget for a given slot by name, if this is a **UserWidget**

- name: `string`
- widget: `UWidget`

```lua
my_widget:SetContentForSlot("InventorySlot", some_other_widget)
```

---

### `SetCanvasLayout`
Sets anchors / position / size when the widget is a child of a **CanvasPanel**

- position: `Vector2D`
- size: `Vector2D`

```lua
my_widget:SetCanvasLayout(Vector2D(50,50), Vector2D(200,100))
```

---

### `CallBlueprintEvent`
Calls any Blueprint function or event on the underlying widget and returns its results

- widget: `enum`

```lua
local my_text = Widget(NativeWidget.Text)
my_text:CallBlueprintEvent("SetText", "Hello World!")
```

---

### `BindBlueprintEventDispatcher`
Binds a Blueprint dispatcher and returns the Lua callback reference

```lua
my_button:BindBlueprintEventDispatcher("OnClicked", function()
    print("Button clicked!")
end)
```

---

### `UnbindBlueprintEventDispatcher`
Unbinds a previously bound dispatcher

```lua
my_button:UnbindBlueprintEventDispatcher("OnClicked", cb)
```

---

### `SetBlueprintPropertyValue`
Sets a Blueprint variable directly

```lua
my_widget:SetBlueprintPropertyValue("bIsEnabled", false)
```

---

### `GetBlueprintPropertyValue`
Gets a Blueprint variable value

```lua
local enabled = my_widget:GetBlueprintPropertyValue("bIsEnabled")
```

---

## NativeWidget ↔ Unreal Widget map

| Enum value                           | Unreal Class                  | Panel? |
|--------------------------------------|-------------------------------|:------:|
| `NativeWidget.Border`                | `UBorder`                     | ✅ |
| `NativeWidget.Button`                | `UButton`                     | ✅ |
| `NativeWidget.CheckBox`              | `UCheckBox`                   | ✅ |
| `NativeWidget.Image`                 | `UImage`                      | ❌ |
| `NativeWidget.ProgressBar`           | `UProgressBar`                | ❌ |
| `NativeWidget.RichTextBlock`         | `URichTextBlock`              | ❌ |
| `NativeWidget.Slider`                | `USlider`                     | ❌ |
| `NativeWidget.Text`                  | `UTextBlock`                  | ❌ |
| `NativeWidget.ComboBox`              | `UComboBoxString`             | ❌ |
| `NativeWidget.EditableText`          | `UEditableText`               | ❌ |
| `NativeWidget.EditableTextMultiLine` | `UMultiLineEditableText`      | ❌ |
| `NativeWidget.SpinBox`               | `USpinBox`                    | ❌ |
| `NativeWidget.TextBox`               | `UEditableTextBox`            | ❌ |
| `NativeWidget.TextBoxMultiLine`      | `UMultiLineEditableTextBox`   | ❌ |
| `NativeWidget.CanvasPanel`           | `UCanvasPanel`                | ✅ |
| `NativeWidget.GridPanel`             | `UGridPanel`                  | ✅ |
| `NativeWidget.HorizontalBox`         | `UHorizontalBox`              | ✅ |
| `NativeWidget.Overlay`               | `UOverlay`                    | ✅ |
| `NativeWidget.ScaleBox`              | `UScaleBox`                   | ✅ |
| `NativeWidget.ScrollBox`             | `UScrollBox`                  | ✅ |
| `NativeWidget.SizeBox`               | `USizeBox`                    | ✅ |
| `NativeWidget.UniformGridPanel`      | `UUniformGridPanel`           | ✅ |
| `NativeWidget.VerticalBox`           | `UVerticalBox`                | ✅ |
| `NativeWidget.WrapBox`               | `UWrapBox`                    | ✅ |
| `NativeWidget.BackgroundBlur`        | `UBackgroundBlur`             | ✅ |


