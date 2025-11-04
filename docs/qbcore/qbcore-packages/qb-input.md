# 📝 qb-input
Enter stuff here

## Introduction
Allows for easy creation of multiple input types (text, password, number, radio, select, checkbox, color) through Lua

## Functions

### ShowInput
Displays an input form and returns user input data

- data: `table`
    - header :`string` _(optional)_
    - submitText:`string` _(optional)_
    - inputs: `table`
        - type: `string`
        - name: `string`
        - text: `string`
        - default: `any` _(optional)_
        - isRequired: `boolean` _(optional)_
        - options: `table` _(optional)_
            - text: `string`
            - value: `string`
            - checked: `boolean` _(optional)_


```lua title="Example"
local dialog = exports['qb-input']:ShowInput({
    header = "Test",
    submitText = "Bill",
    inputs = {
        {
            text = "Citizen ID (#)",
            name = "citizenid",
            type = "text",
            isRequired = true,
            default = "CID-1234",
        },
        {
            text = "Secret Code (Give to Nobody)",
            name = "code",
            type = "password",
            isRequired = true,
            default = "password123",
        },
        {
            text = "Bill Price ($)",
            name = "billprice",
            type = "number",
            isRequired = false,
            default = 1,
        },
        {
            text = "Bill Type",
            name = "billtype",
            type = "radio",
            options = {
                { value = "bill", text = "Bill" },
                { value = "cash", text = "Cash" },
                { value = "bank", text = "Bank" }
            },
            default = "cash",
        },
        {
            text = "Include Tax?",
            name = "taxincl",
            type = "checkbox",
            options = {
                { value = "gst", text = "10% incl."},
                { value = "business", text = "35% incl.", checked = true },
                { value = "othertax", text = "15% incl."}
            }
        },
        {
            text = "Some Select",
            name = "someselect",
            type = "select",
            options = {
                { value = "none", text = "None" },
                { value = "other", text = "Other"},
                { value = "other2", text = "Other2" },
                { value = "other3", text = "Other3" },
                { value = "other4", text = "Other4" },
                { value = "other5", text = "Other5" },
                { value = "other6", text = "Other6" },
            },
            default = "other3",
        },
        {
            text = "Favorite Color",
            name = "favoritecolor",
            type = "color",
            default = "#ff0000",
        }
    }
})

if dialog ~= nil then
    for k,v in pairs(dialog) do
        print(k .. " : " .. v)
    end
end
```

### CloseMenu
Closes the menu

```lua title="Example"
exports['qb-input']:CloseMenu()
```

## Events

### Opening Menu
This event allows you to open the input menu

```lua title="Example"
local data = {
    header = "Test",
    submitText = "Bill",
    inputs = {
        {
            text = "Citizen ID (#)",
            name = "citizenid",
            type = "text",
            isRequired = true,
            default = "CID-1234",
        },
    }
}

TriggerClientEvent(source, 'qb-input:client:openMenu', data)
```

### Closing Menu
This event allows you to close the input menu

```lua title="Example"
TriggerClientEvent(source, 'qb-input:client:closeMenu')
```