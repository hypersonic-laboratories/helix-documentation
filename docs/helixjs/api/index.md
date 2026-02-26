---
title: API Reference
---

# HelixJS API Reference

The HelixJS runtime exposes a single global, `Helix`. All APIs are members of `Helix`; use `Helix.Player`, `Helix.Database`, `Helix.WebUI`, and so on. No `require` is needed.

| Member | Description |
|--------|-------------|
| [Helix](helix.md) | Core: `client`, `server`, `on`, `emit`, `endpoint`, `call`, `playerJoined` |
| [Helix.Player](player.md) | Player and character: health, pawn, controller, `fetchData`, `setCharacter` |
| [Helix.Database](database.md) | Sequelize-backed DB: connect, models, create, findOne, findAll, update, remove, raw |
| [Helix.WebUI](webui.md) | Web UI widgets: `new Helix.WebUI(...)`, SendEvent, RegisterEventHandler, SetInputMode, Destroy |
| [Helix.Input](input.md) | Key bindings: `Helix.Input(key, callback)` |
| [Helix.State](state.md) | Global state: `set`, `get` |
