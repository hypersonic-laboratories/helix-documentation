# ↖️ qb-menu
I like buttons

## Introduction

- Dynamic menu creation
- Support for icons and images
- Menu sorting functionality
- Client-server communication
- Easy-to-use Lua and JavaScript interfaces
- Exports and events for extensive integration

## Functions

### openMenu
Opens the menu with provided data

- data: `table`
    - header: `string` _(optional)_
    - txt: `string` _(optional)_
    - icon: `string` _(optional)_
    - isMenuHeader: `boolean` _(optional)_
    - disabled: `boolean` _(optional)_
    - hidden: `boolean` _(optional)_
    - params: `table` _(optional)_
        - event: `string`
        - args: `any` _(optional)_
        - isServer: `boolean` _(optional)_
        - isCommand: `boolean` _(optional)_
        - isQBCommand: `boolean` _(optional)_
        - sort: `boolean`
        - skipFirst: `boolean`

```lua title="Example"
exports['qb-menu']:openMenu({
    {
        header = "First Item",
        icon = "icon-name",
        txt = "Description",
        isMenuHeader = false,
        disabled = false,
        hidden = false,
        params = {
            event = "event:name",
            args = { arg1 = "value1" },
            isServer = false,
            isCommand = false,
            isQBCommand = false,
            isAction = false
        }
    },
    {
        header = "Second Item",
        txt = "Another description",
        isMenuHeader = false,
        disabled = true,
        hidden = false
    }

}, true, false)
```

### closeMenu
Closes the menu

```lua title="Example"
exports['qb-menu']:closeMenu()
```

## Events

### Opening Menu
This event allows you to open the input menu

```lua title="Example"
local data = {
    {
        header = 'City Hall',
        isMenuHeader = true
    },
    {
        header = 'ID Card',
        txt = 'Get your ID Card',
        params = {
            event = 'qb-cityhall:client:openIdentityMenu'
        }
    }
}

TriggerClientEvent(source, 'qb-menu:client:openMenu', data)
```

### Closing Menu
This event allows you to close the input menu

```lua title="Example"
TriggerClientEvent(source, 'qb-menu:client:closeMenu')
```