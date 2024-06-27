---
title: Artificial Intelligence
description: How AI works in HELIX
sidebar_position: 6
tags: [scripting]
keywords: [scripting, AI]
---


How AI works in HELIX

/// warning

🚧 This page is under construction.

///

Every [Character](/scripting-reference/classes/character.mdx) spawned without a [Player](/scripting-reference/classes/player.mdx) possessing it will automatically be possessed by an **AI** Controller. Which means you can use Character methods such as `:MoveTo()` and `:LookAt()`.

In HELIX, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players \(please refer to [Network Authority](/core-concepts/scripting/authority-concepts.mdx#network-authority)\), which means the **AI** will only work if there is a Player connected to the server.

///info

If you input a NPC to `:MoveTo()` somewhere and there is no Player connected, he will only start walking once a Player joins the server.

///

## Navigation Mesh

In order to NPCs to figure out the path to walk, the map will need to have a [NavMesh](https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/) configured.

![](/img/docs/artificial-intelligence.jpg)

