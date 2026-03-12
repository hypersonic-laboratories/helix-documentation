---
title: Notification
description: Notification is a lightweight helper that fires a one-shot pop-up on the player’s HUD.
tags: [static-class]
---
<HeaderDeclaration type="StaticClass" name="Chat" is_static />
Notification creates a temporary popup widget on the player's HUD with a type, and timeout.
These are useful for alerts, ability failures, errors, status info, or short-lived feedback messages.
The popups auto-fade after a set time and do not require manual cleanup

/// tip
`Notification` is callable — use it like `Notification("Text", notificationType, 5.0)` without creating an instance.
///

## Constructor
<ConstructorDeclaration type="Class" name="Notification" />

```lua title="Example"
Notification("Welcome to HELIX!", NotificationType.Success, 1.5)
```

| Name               | Type      | Default         | Description                                                  |
|--------------------|-----------|-----------------|--------------------------------------------------------------|
| `text`             | `string`  | **Required**    | The message to display                                       |
| `notificationType` | [NotificationType](../global-variables/enums.md#notificationtype) | [NotificationType.Success](../global-variables/enums.md#notificationtype) | The type of notification to display |
| `timeout`          | `number`  | `1.0`           | The duration of the notification                             |