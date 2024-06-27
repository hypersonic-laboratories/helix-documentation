---
title: Authority Concepts
description: All you need to know about Authority & Network Authority concepts.
sidebar_position: 2
tags: [scripting]
---


All you need to know about Authority & Network Authority concepts.

import { Structs, BasicType, AuthorityType, Classes } from '@site/docs/components/_nanos.mdx';

## Authority

Some Classes can only be spawned on the Server, others can only be spawned in the Client, and there are some which can be spawned in both Server or Client. The side which the Class is spawned is called **Authority**.


### Methods and Events Availability

Some methods and events in the API are only available on a specific side \(Client or Server\), others are only available in the side which spawned it Authority side\):

#### <AuthorityType.ServerOnly />**`Server Side`**
Method or Events which can only be called in the **Server** side.

#### <AuthorityType.ClientOnly />**`Client Side`**
Methods or Events which can only be called in the **Client** side.

#### <AuthorityType.AuthorityOnly />**`Authority Side`**
Methods or Events which can only be called in the side which spawned it.

#### <AuthorityType.NetworkAuthority />**`Network Authority Side`**
Methods or Events which can be called in the **Server** and also in the **Client** if the Local Player is the Network Authority of that entity.

#### <AuthorityType.Both />**`Both Sides`**
Methods or Events which can only be called in any side.

///tip

All entities spawned in the **Server** will be automatically synced in the **Client**. I.e. you can access it's methods and get all data from it without needing to manually sync it.

In the same way, entities spawned in the **Client** will only exist for that Client, trying to send those entities to the server will cause errors.

///


## Network Authority

Another important concept in HELIX is the **Network Authority**. We have a _"distributed network authority"_ concept, which means the work of calculating physics and AI (for example) are automatically assigned and distributed to the clients. In general, if an [Actor](/scripting-reference/classes/base-classes/actor.mdx) is near an in-game Character, it's physics will be calculated by that player's device. The Player that is responsible for calculating and sharing the results is called **Network Authority**.

The Player assigned is automatically calculated by the server and takes some things into consideration, this calculation is only made if the Player is possessing a Character:

* The **distance** from the Character to the object
* If the Character is **grabbing** a <Classes.Prop />
* If the Character is **handling** a [Pickable](/scripting-reference/classes/base-classes/pickable.mdx)
* If the Character is **driving** a Vehicle
* If the Character has just **shot** something

In all this cases, the Player will be automatically assigned to be the **Network Authority** of that Object.


### Overriding the current Network Authority

It is possible to override the current Network Authority of a specific entity by using the method `:SetNetworkAuthority()`.

///tip

Under certain circumstances, actors may not be in **Distributed Network Authority** mode. This means they cannot have their current network authority changed. Example: if a player is driving a Vehicle or using a Weapon, mandatorily he is the the Vehicle and Weapons's Network Authority, and this cannot be overwritten through scripting. To validate if an Actor can have it overridden, you can use the method `:IsNetworkDistributed()`.

///


You can also prevent it from being automatically distributed to other Players by calling `:SetNetworkAuthorityAutoDistributed(false)`.

///caution

Always remember to restore the automatic **Network Authority Distribution** by calling `:SetNetworkAuthorityAutoDistributed(true)`. Otherwise that entity may behave completely weird.

///


#### Examples of actions that are only executed by the Network Authority of that Actor

* Objects Physics sync (including when calling `:SetForce()`).
* NPCs walking with `:MoveTo()` or `:Follow()`.


### Debugging Network & Network Authority

We've added a new option in the settings to **Draw Network Debug** information in the World, you can toggle it in the settings (*Settings -> Debug -> Draw Network Debug*), it will draw squares on each entity and traces representing their networked movement.

![](/img/docs/debug-visualizer.jpg)

#### Entity Square Colors Meaning

The Square in the entities represent the state in the Network Authority and it's health.

| Color | Meaning |
| :--- | :--- |
| **<span style={{"color": "#306CCE"}}>BLUE</span>** | You **are the current Network Authority** of that entity. <br/>You are sharing sync data to the other players. |
| **WHITE** | You **are not the Network Authority** and the entity is sleeping. <br/>The current Network Authority is not sending sync data because the entity is sleeping. |
| **<span style={{"color": "#00A400"}}>GREEN</span>** | You **are not the Network Authority** and the entity is being synced in a **good** cadence (no lag). |
| **<span style={{"color": "#FFA500"}}>ORANGE</span>** | You **are not the Network Authority** and the entity is being synced in an **ok** cadence (small lag - < 100ms). |
| **<span style={{"color": "#FF0000"}}>RED</span>** | You **are not the Network Authority** and the entity is being synced in an **bad** cadence (big lag - > 100ms, maybe even with packet loss). |


#### Entity Trace Colors Meaning

The Traces in the entities represent the network data received from the server. If you are the network authority you won't see the traces. The arrow points from where the entity is currently in your machine and where it should be accordingly to the network authority.

| Color | Meaning |
| :--- | :--- |
| **<span style={{"color": "#00A400"}}>GREEN</span>** | The entity is being synced in a **good** cadence (no lag). |
| **<span style={{"color": "#FFA500"}}>ORANGE</span>** | The entity is being synced in an **ok** cadence (small lag - < 100ms). |
| **<span style={{"color": "#FF0000"}}>RED</span>** | The entity is being synced in an **bad** cadence (big lag - > 100ms, maybe even with packet loss). |