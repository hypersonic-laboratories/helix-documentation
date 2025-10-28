# Client-Server Guide

*How clients and servers work in HELIX.*

---

## How the Server-Client Relationship Works in HELIX
Unlike FiveM or other traditional multiplayer frameworks, HELIX (powered by Unreal Engine) doesn’t require you to connect to a separate server executable to develop or test gameplay. This is because Unreal Engine’s multiplayer architecture works differently under the hood. 

In HELIX, the game client itself can host an “authoritative server instance”. In other words, the same process that runs your local game can also act as the server - managing the game state, processing logic, and replicating it to connected players.

### Why this matters:
  - You don’t need to run a separate dedicated server just to test scripts or game logic.
  - You still separate Lua files into client and server folders (more explained in below sections) - but both technically execute within the same game process during development.
  - In a live multiplayer environment, HELIX automatically handles which parts of the logic run on the host (server-side) and which run on connected players (client-side), using Unreal’s replication system.

The host instance (whether it's a client or a Dedicated Server) is always considered the authority - it owns the “truth” of the game state. Other clients receive updates and simulate what they can locally for smooth movement and interaction.

### Testing Multiplayer Functionality With Multiple Local Clients

Click the dropdown arrow next to "Play" button in BM toolbar and select the number of client instances to launch. In this case, the client that was launched first serves as both the client and server, and other client instances connect to it locally.

---

## How [Dedicated Servers](dedicated_server.md) Work

A [Dedicated Server](dedicated_server.md) is a headless build of HELIX - it runs without rendering or audio, so there’s no need for a GPU. Instead, it focuses entirely on simulating game logic, physics, collisions, inputs, and network replication. Its job is to maintain the authoritative world state and broadcast updates to all connected clients.

Because it simulates every player, vehicle, and interaction in the world, a dedicated server is CPU- and memory-intensive. Unlike a client, which only handles one player, the server must process all gameplay events at once. This headless design makes it far more efficient for large-scale multiplayer worlds, allowing it to run smoothly on high-performance CPU hardware without wasting resources on graphics.

When you connect to your server hosted on **HELIX Hosting**, you're connecting to a HELIX Dedicated Server on the cloud that's persistently running a copy of your HELIX World.
