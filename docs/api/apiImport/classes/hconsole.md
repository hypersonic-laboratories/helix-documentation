---
title: Console
description: ''
tags: [class]
---

<HeaderDeclaration type="Class" name="Console" />

`Console` is the in-game developer console used to register, execute, and manage text commands.
It is backed by the `BP_HelixConsoleActor` and exposes both high-level helpers and low-level
access to the underlying Helix log system.

The console actor can be obtained via its tag:

```lua
local Console = GetActorByTag("HConsole") -- BP_HelixConsoleActor
````

Once you have a `Console` reference, you can register commands, execute them programmatically,
inspect the log, and listen to events.

---

## Functions

<FunctionsDeclaration type="Class" name="Console" />

### `RegisterCommand`

Registers a new console command.

* Name `string`: Unique command name.
* Description `string`: Short help/description text.
* OnRawCommand `delegate(Command: BP_HelixConsoleCommand, Raw: string)`
  Raw is the full untokenized string **including** the command name.
* OnTokenizedCommand `delegate(Command: BP_HelixConsoleCommand, Tokens: UE.TArray(string))`
  Tokens are the trailing arguments, **excluding** the command name.
* <span style="color: #facc15;">returns:</span> `BP_HelixConsoleCommand` | `nil`
  Returns a valid command on success. Fails (returns `nil`) if a command with the same `Name` already exists.

```lua title="Example"
local Console = GetActorByTag("HConsole")

local greetCommand = Console:RegisterCommand(
    "greet",
    "Greets a player by name",
    function (Command, Raw)
        -- Called with the full string, e.g. "greet John Doe"
        Command:Output("Received raw input: " .. Raw, "Log")
    end,
    function (Command, Tokens)
        -- Called with arguments only, e.g. { "John", "Doe" }
        local name = table.concat(Tokens, " ")
        Command:Output("Hello, " .. (name ~= "" and name or "stranger") .. "!", "Display")
    end
)
```

---

### `UnregisterCommand`

Unregisters a previously registered command.

> Commands are **not** automatically unregistered when a Lua package restarts.
> You should explicitly unregister commands on cleanup.

* Command `BP_HelixConsoleCommand`

```lua title="Example"
if greetCommand then
    Console:UnregisterCommand(greetCommand)
    greetCommand = nil
end
```

---

### `FindCommand` (exact match)

Finds a command by its exact name.

* Name `string`
* <span style="color: #facc15;">returns:</span> `BP_HelixConsoleCommand` | `nil`

```lua title="Example"
local cmd = Console:FindCommand("greet")

if cmd then
    cmd:Output("This command exists.", "Log")
end
```

---

### `FindCommand` (substring search)

Searches for commands matching a substring.

* Substring `string`: The text to search for in command names.
* StartsWith `boolean`: If `true`, only commands with names starting with `Substring` are returned.
  If `false`, any command whose name contains `Substring` is returned.
* <span style="color: #facc15;">returns:</span> `UE.TMap(string, BP_HelixConsoleCommand)`
  A map of `Name -> Command`.

```lua title="Example"
-- Find all commands starting with "inv_"
local commands = Console:FindCommand("inv_", true)

for name, command in pairs(commands) do
    command:Output("Matched in search: " .. name, "Log")
end
```

---

### `Execute`

Executes a console command from code.

* Command `string`: Full untokenized command line, starting with the command name.

```lua title="Example"
-- Equivalent to typing this into the console:
--   greet John Doe
Console:Execute("greet John Doe")
```

---

### `GetLog`

Returns the underlying Helix log object used by the console.

* <span style="color: #facc15;">returns:</span> `HelixLog` (undocumented internal type)

```lua title="Example"
local log = Console:GetLog()

-- Exact API of `log` is undocumented, but you can pass it to systems
-- that expect the Helix Log object.
```

---

## Events

The console exposes several events you can subscribe to using `Add`.

### `OnRegisterCommand`

Invoked whenever a command is registered.

```lua title="Example"
Console.OnRegisterCommand:Add(_, function (_, Command)
    Command:Output("Command registered: " .. Command:GetName(), "Log")
end)
```

---

### `OnUnregisterCommand`

Invoked whenever a command is unregistered.

```lua title="Example"
Console.OnUnregisterCommand:Add(_, function (_, Command)
    print("Command unregistered:", Command:GetName())
end)
```

---

### `OnOutput`

Invoked on every `Command:Output` call after the message has been added to the log.

* Command `BP_HelixConsoleCommand`
* Message `string`
* Verbosity `string` (stringified `ELogVerbosity` enum)

```lua title="Example"
Console.OnOutput:Add(_, function (_, Command, Message, Verbosity)
    print(("[%s] %s: %s"):format(Verbosity, Command:GetName(), Message))
end)
```

---

## `BP_HelixConsoleCommand`

`BP_HelixConsoleCommand` represents a single registered console command.
Instances are created by `Console:RegisterCommand` and can be inspected,
executed (via events), and used to output messages.

```lua
local command = Console:RegisterCommand("greet", "Greets a player", OnRaw, OnTokens)
```

### `GetName`

Returns the command’s registered name.

* <span style="color: #facc15;">returns:</span> `string`

```lua title="Example"
local name = command:GetName()
print("Command name:", name)
```

---

### `GetDescription`

Returns the command’s registered description/help text.

* <span style="color: #facc15;">returns:</span> `string`

```lua title="Example"
local description = command:GetDescription()
print("Description:", description)
```

---

### `Output`

Outputs a message to the console/log from the command implementation.

* Message `string`
* Verbosity `string`: Stringified `ELogVerbosity` enum (e.g. `"Log"`, `"Warning"`, `"Error"`)

```lua title="Example"
command:Output("Something happened inside this command.", "Log")
```

---

## Command Events

Each command exposes its own events, mirroring the callbacks provided
when registering the command.

### `OnExecuteRaw`

Fired when the command is executed with the raw command line text.

* Command `BP_HelixConsoleCommand`
* Raw `string`

```lua title="Example"
command.OnExecuteRaw:Add(_, function (_, Command, Raw)
    Command:Output("Raw input: " .. Raw, "Verbose")
end)
```

---

### `OnExecuteTokenized`

Fired when the command is executed with tokenized arguments.

* Command `BP_HelixConsoleCommand`
* Tokens `UE.TArray(string)`: Arguments excluding the command name.

```lua title="Example"
command.OnExecuteTokenized:Add(_, function (_, Command, Tokens)
    Command:Output("Received " .. tostring(#Tokens) .. " arguments.", "Log")
end)
```

---

### `OnOutput`

Fired whenever this command outputs a message.

* Command `BP_HelixConsoleCommand`
* Message `string`
* Verbosity `string`

```lua title="Example"
command.OnOutput:Add(_, function (_, Command, Message, Verbosity)
    print("Command", Command:GetName(), "output:", Message, "(" .. Verbosity .. ")")
end)
```
