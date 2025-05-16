---
title: Timer
description: Execute of code at specified time intervals.
tags: [static-class]
---
<HeaderDeclaration type="StaticClass" name="Timer"/>
A global utility class for scheduling delayed or repeating callbacks
Provides both classic timer-based control and coroutine-style asynchronous flows for scripting convenience

## Functions
<StaticFunctionsDeclaration type="StaticClass" name="Timer" />

### `Timer.SetNextTick(callback, ...)`
Schedules a one-time callback to run on the next engine tick.
```lua title="Example"
Timer.SetNextTick(function()
    print("Runs on next tick")
end)
```

---

### `Timer.SetTimeout(callback, delay_ms, ...)`
Schedules a one-time callback to execute after a delay (in milliseconds).
```lua title="Example"
Timer.SetTimeout(function()
    print("Runs after 1 second")
end, 1000)
```

---

### `Timer.SetInterval(callback, interval_ms, ...)`
Runs the callback repeatedly every interval_ms milliseconds until cleared.
```lua title="Example"
Timer.SetInterval(function()
    print("Repeats every 2 seconds")
end, 2000)
```

---

### `Timer.ClearTimeout(id)`
Stops a one-shot or repeating timer by ID.
```lua title="Example"
Timer.ClearTimeout(myTimerId)
```

---

### `Timer.ClearInterval(id)`
Alias of Timer.ClearTimeout.
```lua title="Example"
Timer.ClearInterval(myIntervalId)
```

---

### `Timer.Pause(id)`
Pauses a currently active timer.
```lua title="Example"
Timer.Pause(myIntervalId)
```

---

### `Timer.Resume(id)`
Resumes a paused timer.
```lua title="Example"
Timer.Resume(myIntervalId)
```

---

### `Timer.IsValid(id)`
Returns true if a timer is still active and not cleared or expired.
```lua title="Example"
Timer.IsValid(myIntervalId) -- true or false
```

---

### `Timer.IsPaused(id)`
Returns true if the timer is currently paused.
```lua title="Example"
Timer.IsPaused(myIntervalId) -- true or false
```

---

### `Timer.GetElapsedTime(id)`
Returns how much time (in milliseconds) has passed since the timer started or last ran.
```lua title="Example"
Timer.GetElapsedTime(myTimerId) -- e.g., 523
```

---

### `Timer.GetRemainingTime(id)`
Returns the number of milliseconds left before the next callback execution.
```lua title="Example"
Timer.GetRemainingTime(myTimerId) -- e.g., 477
```

---

### `Timer.Invalidate(id)`
Manually invalidates a timer handle so that it won't run again, even if not cleared.
```lua title="Example"
Timer.Invalidate(myTimerId)
```

---

### `Timer.HasHandle(id)`
Returns true if a timer has a valid handle, even if paused.
```lua title="Example"
Timer.HasHandle(myTimerId) -- true or false
```

---

### `Timer.ResetElapsedTime(id)`
Restarts a timer with the same delay and arguments, resetting its elapsed time.
```lua title="Example"
Timer.ResetElapsedTime(myTimerId)
```

---

### `Timer.Delay(context, seconds, callback)`
Coroutine-safe delay method that pauses execution for the given seconds, then runs the callback.
```lua title="Example"
Timer.Delay(self, 1.5, function()
    print("Delayed by 1.5 seconds")
end)
```

---

### `Timer.CreateThread(fn)`
Runs a Lua function as a coroutine thread, similar to FiveM behavior.
```lua title="Example"
Timer.CreateThread(function()
    print("Running async...")
    Timer.Wait(1000)
    print("1 second later")
end)
```

---

### `Timer.Wait(ms)`
Coroutine-only delay (must be called from inside Timer.CreateThread).
```lua title="Example"
Timer.Wait(1000) -- pauses the thread for 1 second
```