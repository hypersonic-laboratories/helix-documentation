---
title: Notification
description: Notification is a lightweight helper that fires a one-shot pop-up on the player’s HUD.
tags: [static-class]
---
<HeaderDeclaration type="StaticClass" name="Chat" is_static />
Notification creates a temporary popup widget on the player's HUD with optional animation, delay, and screen position.
These are useful for alerts, ability failures, errors, status info, or short-lived feedback messages.
The popups auto-fade after a set time and do not require manual cleanup

/// tip
`Notification` is callable — use it like `Notification("Text", delay, position)` without creating an instance.
///

## Constructor
<ConstructorDeclaration type="Class" name="Notification" />

```lua title="Example"
Notification("Welcome to HELIX!", 1.5, NotificationPosition.TopRight)
```

| Name       | Type      | Default         | Description                                                  |
|------------|-----------|-----------------|--------------------------------------------------------------|
| `text`     | `string`  | **Required**    | The message to display                                       |
| `delay`    | `number`  | `1.0`           | How long to show the notification before fading out          |
| `position` | `enum`    | `NotificationPosition.Center`      | One of `NotificationPosition` enum: `TopLeft`, `BottomRight`, etc. |