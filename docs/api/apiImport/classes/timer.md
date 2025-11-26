---
title: Timer
description: Execute of code at specified time intervals.
tags: [static-class]
---
A global utility class for scheduling delayed or repeating callbacks
Provides both classic timer-based control and coroutine-style asynchronous flows for scripting convenience

## Functions

### `SetNextTick`
Schedules a one-time callback to run on the next engine tick

```lua title="Example"
Timer.SetNextTick(function()
    print("Runs on next tick")
end)
```

---

### `SetTimeout`
Schedules a one-time callback to execute after a delay (in milliseconds)

- timeout: `number` - timeout length

```lua title="Example"
Timer.SetTimeout(function()
    print("Runs after 1 second")
end, 1000)
```

---

### `SetInterval`
Runs the callback repeatedly every interval_ms milliseconds until cleared

/// tip
This is the preferred method of running a continuous loop versus using a thread
///

- interval: `number` - interval amount
- <mark style="color:yellow;">returns</mark>: `number`

```lua title="Example"
local handle = Timer.SetInterval(function()
    print("Repeats every 2 seconds")
end, 2000)
```

---

### `ClearInterval`
Alias of Timer.ClearTimeout

/// tip
Call this on the global onShutdown function
///

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.ClearInterval(myIntervalId)
```

---

### `ClearTimeout`
Stops a one-shot or repeating timer by ID

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.ClearTimeout(myIntervalId)
```

---

### `Pause`
Pauses a currently active timer

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.Pause(myIntervalId)
```

---

### `Resume`
Resumes a paused timer

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.Resume(myIntervalId)
```

---

### `IsValid`
Returns true if a timer is still active and not cleared or expired

- myIntervalId: `number` - timer id
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local valid = Timer.IsValid(myIntervalId) -- true or false
```

---

### `IsPaused`
Returns true if the timer is currently paused

- myIntervalId: `number` - timer id
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local paused = Timer.IsPaused(myIntervalId) -- true or false
```

---

### `GetElapsedTime`
Returns how much time (in milliseconds) has passed since the timer started or last ran

- myIntervalId: `number` - timer id
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
local time = Timer.GetElapsedTime(myIntervalId) -- e.g., 523
```

---

### `GetRemainingTime`
Returns the number of milliseconds left before the next callback execution

- myIntervalId: `number` - timer id
- <mark style="color:yellow;">returns</mark>: `number`

```lua title="Example"
local remaining = Timer.GetRemainingTime(myIntervalId) -- e.g., 477
```

---

### `Invalidate`
Manually invalidates a timer handle so that it won't run again, even if not cleared

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.Invalidate(myIntervalId)
```

---

### `HasHandle`
Returns true if a timer has a valid handle, even if paused

- myIntervalId: `number` - timer id
- <mark style="color:yellow;">returns</mark>: `boolean`

```lua title="Example"
Timer.HasHandle(myIntervalId) -- true or false
```

---

### `ResetElapsedTime`
Restarts a timer with the same delay and arguments, resetting its elapsed time

- myIntervalId: `number` - timer id

```lua title="Example"
Timer.ResetElapsedTime(myIntervalId)
```

---

### `Delay`
Coroutine-safe delay method that pauses execution for the given seconds, then runs the callback

- worldContext: `worldContext` - HPlayer or HWorld
- seconds: `number` - amount of time to delay
- function: `function` - callback

```lua title="Example"
Timer.Delay(HWorld, 1.5, function()
    print("Delayed by 1.5 seconds")
end)
```

---

### `CreateThread`
Runs a Lua function as a coroutine thread, similar to FiveM behavior

```lua title="Example"
Timer.CreateThread(function()
    print("Running async...")
    Timer.Wait(1000)
    print("1 second later")
end)
```

---

### `Timer.Wait(ms)`
Coroutine-only delay (must be called from inside Timer.CreateThread)

- waitTime: `number` - time in milliseconds

```lua title="Example"
Timer.Wait(1000) -- pauses the thread for 1 second
```