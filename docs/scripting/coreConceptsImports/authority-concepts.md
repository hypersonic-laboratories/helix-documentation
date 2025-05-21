---
title: Authority Concepts
tags: [scripting]
---

# Authority Concepts

## What Is Authority?
In multiplayer scripting, **authority** refers to which side (Client or Server) has control over a spawned class or entity. Some classes can **only** be spawned on the **Server**, some only on the **Client**, and others can be spawned on **either side**. The side that spawns a class is considered the **Authority** of that object.

---

## Method and Event Availability by Authority
Some API methods and events are restricted to specific authority contexts:

### Server Side Only
**Methods and events** that can only be called from the **Server**.

### Client Side Only
**Methods and events** that can only be called from the **Client**.

### Authority Side
**Methods and events** that can only be used on the **side that originally spawned the entity**.

### Network Authority Side
**Methods and events** that can be used by:
- The **Server**
- The **Client**, if the **Local Player** is the Network Authority of the entity

### Both Sides
Methods and events that can be safely called on either the **Client** or **Server**.

/// tip
- All entities spawned on the **Server** are automatically synchronized with **Clients**. This means Clients can interact with server-spawned entities without manually syncing them.
- However, entities spawned **only on the Client** exist exclusively for that Client and cannot be accessed by the Server — attempting to do so will result in errors.
///

---

## What Is Network Authority?

Your platform uses a **Distributed Network Authority** model. This means that physics and AI calculations are automatically assigned to appropriate Clients instead of always being computed on the Server.

The **Network Authority** is the **player responsible for calculating and syncing the behavior** of an entity. This assignment is dynamic and decided by the server based on specific conditions.

### When Does a Player Become the Network Authority?

A player becomes the Network Authority of an object when:

- Their character is **close** to the object
- They are **grabbing** a prop
- They are **handling** a pickable object
- They are **driving** a vehicle
- They have **fired a weapon** that interacted with it

---

## Overriding Network Authority

You can manually assign a new Network Authority using:

- `:SetNetworkAuthority()`

To disable automatic reassignment to other players:

- `:SetNetworkAuthorityAutoDistributed(false)`

/// tip
- You can check if an entity supports network authority override by calling `:IsNetworkDistributed()`.
///

/// warning
- Always remember to re-enable automatic authority distribution after manual overrides by calling `:SetNetworkAuthorityAutoDistributed(true)`.
- If you forget, the entity may behave unpredictably.
///

---

## Behavior Limited to the Network Authority

Only the current **Network Authority** of an actor will execute certain actions, such as:

- **Physics sync** (e.g., calling `:SetForce()`)
- **AI/NPC movement** using `:MoveTo()` or `:Follow()`

---

## Debugging Network Authority

Enable **Network Debug** mode in:

**Settings → Debug → Draw Network Debug**

This will display colored squares and movement traces over networked entities.

### Square Colors (Entity Authority State)

| Color   | Meaning |
|---------|---------|
| **Blue**   | You **are** the Network Authority for this entity |
| **White**  | You **are not** the Network Authority; the entity is idle |
| **Green**  | You **are not** the Authority; sync is **good** |
| **Orange** | You **are not** the Authority; sync is **okay** (< 100ms delay) |
| **Red**    | You **are not** the Authority; sync is **poor** (> 100ms delay or packet loss) |

### Trace Colors (Sync Accuracy)

If you're not the Network Authority, you'll see arrows showing sync offsets.

| Color   | Meaning |
|---------|---------|
| **Green**  | Sync is good |
| **Orange** | Sync has minor delay (< 100ms) |
| **Red**    | Sync is poor (> 100ms) |

---

**Visual Example:**
![Network Debug Visualizer](/img/docs/debug-visualizer.jpg)
