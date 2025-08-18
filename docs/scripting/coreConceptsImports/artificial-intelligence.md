---
title: Artificial Intelligence
tags: [scripting]
---

Every Character spawned without a Player possessing it will automatically be possessed by an **AI** Controller. Which means you can use Character methods such as `:MoveTo()` and `:LookAt()`.
In HELIX, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players, which means the **AI** will only work if there is a Player connected to the server

///info
If you input a NPC to `:MoveTo()` somewhere and there is no Player connected, he will only start walking once a Player joins the server.
///

## Navigation Mesh
In order to NPCs to figure out the path to walk, the map will need to have a [NavMesh](https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/) configured.

![](/img/docs/artificial-intelligence.jpg)

