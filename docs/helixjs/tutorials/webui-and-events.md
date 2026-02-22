---
title: WebUI and events
---

# WebUI and events

Create a WebUI with a unique name and a path to your HTML. Send data into it with `SendEvent` and handle actions from the page with `RegisterEventHandler`. When and how you show the UI is up to your design: on load, on a key press, or when some condition in your own logic is met.

## Create the UI (client only)

Run UI code inside `Helix.client`. The path is relative to your workspace. One common layout is to keep HTML next to the script that uses it, e.g. `js/my-module/web/index.html`.

```javascript
let ui = null;

Helix.client(() => {
  ui = new Helix.WebUI('my_ui', 'js/my-module/web/index.html');
});
```

## When to show the UI

You decide when the UI is visible and on top. Examples:

- **Always visible (e.g. HUD)**: Call `ui.BringToFront()` and `ui.SendEvent('show', { ... })` once when your module is ready, then push updates on a timer or when data changes.
- **On key press**: Use `Helix.Input('Key', () => { ... })` to toggle: bring to front, send `show`, set `SetInputMode(1)` when the player should interact; on close, send `hide` and `SetInputMode(0)`.
- **On your own event**: If another part of your code (or another module) emits a custom event with `Helix.emit('YourEvent', data)`, you can listen with `Helix.on('YourEvent', (data) => { ... })` and then show or update the UI. The event name and payload are defined by your scripts, not by the engine.

Use `SetInputMode(1)` when the player needs to click or type in the UI; use `SetInputMode(0)` when the UI is overlay-only and the game should receive input.

## Sending data to the UI

From your script, call `ui.SendEvent(eventName, payload)`. The payload can be any JSON-serializable object. Your HTML/JS listens for these events and updates the DOM. You can send once or repeatedly (e.g. stats every 100 ms).

```javascript
function updateUI() {
  if (!ui) return;
  const stats = { health: 100, score: 0 };
  ui.SendEvent('updateStats', stats);
}
setInterval(updateUI, 100);
```

## Handling events from the UI

The page can send events back. Register handlers with `RegisterEventHandler`. Handlers can be async and call `Helix.call` to request data or perform actions on the server.

```javascript
ui.RegisterEventHandler('close', () => {
  ui.SetInputMode(0);
  ui.SendEvent('hide', {});
});

ui.RegisterEventHandler('submit', async (data) => {
  const result = await Helix.call('myEndpoint', data);
  if (result) ui.SendEvent('result', result);
});
```

## Coordinating modules with events

Use `Helix.on` and `Helix.emit` so modules stay decoupled. One script can emit an event when something happens; others listen and react (e.g. open a menu, refresh data).
