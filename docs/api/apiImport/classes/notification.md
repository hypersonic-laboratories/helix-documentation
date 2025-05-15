---
title: Notification
description: Notification is a lightweight helper that fires a one-shot pop-up on the player’s HUD.
tags: [static-class]
---

<HeaderDeclaration type="StaticClass" name="Chat" is_static />
Notification is a lightweight helper that fires a **one-shot pop-up** on the player’s HUD.
Give it a line of text, an optional life-time, and a screen preset— `Center`, `TopRight`, `BottomRight`, B`ottomLeft`, or `TopLeft` and it will spawn a `Notification` widget, play its intro animation, hold for the chosen delay and then fade out.
<br> 
Ideal for ability errors, system tips, or quick achievements, it needs no replication or extra setup.

## Examples

```lua title="Client/Index.lua"
-- sends a chat notification to a client
Notification("This is a notification", 1.0, NotificationPosition.Center)
```

## Constructors

```lua
Notification(text, delay, position)
```

| Type                                        |     Parameter        | Default                        | Description                                                |
| ------------------------------------------  | ----------------------|--------------------------------| -----------------------------------------------------------|   
| [string](#string)                             | `text`          |                                | The text to display in the notification.                   |
| [integer](#number)                            | `delay?`         | `1.0`                          | The delay in seconds before the notification disappears.   |
| [NotificationPosition](#NotificationPosition) | `position?`     | `NotificationPosition.Center`  | The position of the notification.                          |
