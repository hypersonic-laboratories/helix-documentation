---
title: Test Multiplayer Functionality
description: Information about multiplayer.
sidebar_position: 6
tags: []
status: old
---

--8<-- "old.md"


> 💡 How to connect with several clients to test multiplayer functionality within your world.

## General Recommendations

When testing - especially with multiple clients on your own device, it is best that you test with your Local Game Server and if you are comfortable with the product, you can upload it to your HELIX World and perform further testing on there. This is because it can take awhile for all players to constantly re-join on the World Hub, but on your own Server, you can refresh and modify code easily.   

## Solo Testing (on multiple clients)


You can already open multiple HELIX Clients by just opening it outside of EPIC Games, such as pinning it to your taskbar or opening your shortcut to the Client.

We recommend being careful when testing on the same account, as you might be using code that requires the player’s AccountID or various limitations that come when testing completely on your own. An easy way around this is using the Entity ID of the player for basic code and having the AccountID at the ready for any database or said player leaving.

