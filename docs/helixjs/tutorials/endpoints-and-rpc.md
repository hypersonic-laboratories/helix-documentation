---
title: Endpoints and RPC
---

# Endpoints and RPC

Server logic is exposed as named endpoints. You register them with `Helix.endpoint(name, handler)` and call them from with `Helix.call(name, ...args)`. 

## Modular naming

In a multi-module project, endpoints from different scripts share one namespace. To avoid clashes, use a prefix per module (e.g. `mymodule:getData`, `mymodule:doAction`). The format is up to you; colons or underscores are common.

## Server: register endpoints

Inside `Helix.server`, register named endpoints. Handlers can be async. Whatever you return is sent back to the caller (must be JSON-serializable).

```javascript
Helix.server(async () => {
  await db.connect();

  Helix.endpoint('mymodule:getData', async (helixId) => {
    const data = await loadData(helixId);
    return data;
  });

  Helix.endpoint('mymodule:doAction', async (helixId, param1, param2) => {
    const ok = await applyAction(helixId, param1, param2);
    return { ok };
  });
});
```

Often the first argument is the player’s `helixId` so the server knows who is calling. Get it on the client with `Helix.Player.helixId()` and pass it as the first argument to `Helix.call`.

## Client: call endpoints

From `Helix.client`, use `await Helix.call(name, ...args)`. The call is async and returns the value the handler returned. Handle errors with try/catch or `.catch()`.

```javascript
const id = Helix.Player.helixId();
if (!id) return;

try {
  const data = await Helix.call('mymodule:getData', id.toString());
  ui.SendEvent('dataLoaded', data);
} catch (e) {
  console.warn('getData failed', e);
}
```

You can call from UI event handlers, key handlers, or any client code. Each module can call any endpoint; the server does not care which script registered it.

## When to use endpoints

Use an endpoint whenever the client needs the server to read or change data, or to perform an action that must be authoritative (e.g. give item, start mission, save state). The client sends the endpoint name and arguments; the server runs the handler and returns a result.
