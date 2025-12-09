# Callbacks

## Overview

The Callback System provides a simple way to create request-response communication between client and server, as well as between different packages. It builds on top of the event system to provide a cleaner callback-based API.

## Key Concepts

- **Callbacks** are registered functions that can be called remotely and return values
- **Cross-package support** allows any package to call callbacks registered in other packages
- **Isolated environments** - each package has its own callback registry

## API Reference

### Client-Side Functions

#### `TriggerCallback(name, callback, ...)`
Triggers a server-side callback and receives the response.

**Parameters:**

- `name` (string) - Callback name, or `package:CallbackName` for cross-package calls

- `callback` (function) - Function to call with the response

- `...` - Arguments to pass to the server callback

```lua title="Example"
-- Same package
TriggerCallback('GetPlayerData', function(data)
    print('Player name: ' .. data.name)
end, playerId)

-- Cross-package
TriggerCallback('inventory:GetItems', function(items)
    print('Got ' .. #items .. ' items')
end, playerId)
```

### Server-Side Functions

#### `RegisterCallback(name, callback)`
Registers a callback that can be called by clients.

**Parameters:**

- `name` (string) - Callback name (no colon allowed)

- `callback` (function) - Function to execute when called. First parameter is always `source` (player). Returns value(s) to send back to client.

```lua title="Example"
RegisterCallback('GetPlayerData', function(source, playerId)
    local data = Database.GetPlayer(playerId)
    return data
end)

RegisterCallback('RentApartment', function(source, apartmentId)
    local success = RentApartment(source, apartmentId)
    local message = success and 'Rented!' or 'Failed'
    return success, message -- Multiple return values
end)
```

## Usage Examples

**Server:**
```lua title="server.lua"
RegisterCallback('GetApartmentData', function(source, apartmentId)
    local apartment = {
        id = apartmentId,
        name = "Luxury Apartment 101",
        price = 50000,
        owner = nil
    }
    return apartment
end)
```

**Client:**
```lua title="client.lua"
TriggerCallback('GetApartmentData', function(apartment)
    print('Apartment: ' .. apartment.name)
    print('Price: $' .. apartment.price)
end, 101)
```

### Cross-Package Communication

**Inventory Package**
```lua title="server.lua"
RegisterCallback('RefreshInventory', function(items)
    UpdateInventoryUI(items)
    return true
end)
```

**Apartments Package**
```lua title="client.lua"
TriggerCallback(source, 'inventory:RefreshInventory', function(updated)
    print('Inventory UI refreshed:', updated)
end, items)
```

## Important Notes

### Callback Naming Rules
- ⚠️ **Do NOT use colons (`:`) in callback names** - they are reserved for package targeting
- ✅ Good: `GetPlayerData`, `PurchaseItem`, `ShowNotification`
- ❌ Bad: `player:getData`, `item:purchase`

### Cross-Package Syntax
- To call a callback in the same package: `TriggerCallback('CallbackName', ...)`
- To call a callback in another package: `TriggerCallback('package:CallbackName', ...)`

### Best Practices

1. **Always handle nil/error cases in callbacks:**
```lua
TriggerCallback('GetData', function(data)
    if not data then
        print('Failed to get data')
        return
    end
    -- Process data
end, id)
```

2. **Use descriptive callback names:**
```lua
-- Good
RegisterCallback('GetPlayerInventory', ...)
RegisterCallback('PurchaseApartment', ...)

-- Bad
RegisterCallback('Get', ...)
RegisterCallback('Do', ...)
```

3. **Keep callbacks focused and single-purpose:**
```lua
-- Good - separate callbacks
RegisterCallback('GetPlayerData', ...)
RegisterCallback('UpdatePlayerData', ...)

-- Bad - one callback doing too much
RegisterCallback('PlayerDataHandler', ...)
```

4. **Return meaningful values:**
```lua
-- Good
return success, errorMessage, data

-- Bad
return true -- What does true mean?
```

## Troubleshooting

### Callback not firing
- Verify the callback is registered before being called
- Check that package names match exactly (case-sensitive)
- Ensure callback name doesn't contain colons unless targeting another package

### No response received
- Check server/client logs for errors
- Verify the callback is returning a value
- Make sure TriggerServerEvent/TriggerClientEvent are working

### Cross-package calls failing
- Verify target package has loaded and registered the callback
- Check package name spelling (e.g., `inventory:GetItems` not `Inventory:GetItems`)
- Ensure both packages have loaded the callback system

## Technical Details

- Each package maintains its own `RegisteredCallbacks` table in its isolated Lua environment
- Request IDs are unique per package instance to track callback responses
- Events use the format: `{packageName}:server:TriggerCallback` and `{packageName}:client:CallbackResponse`
- The system broadcasts events to all packages, but only the target package processes them