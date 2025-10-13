# 🏦 qb-banking
Keep your money safe and quickly access!

## Introduction

- Multiple ATM's & banks around the map to interact with
- Handles all player interaction with bank/job/gang/shared accounts
- ATM and bank card integration
- Shared accounts between players
- Auto creation of job/gang accounts on bank first open
- Boss-only access to job/gang accounts

## Configuration
All configurable options listed below are found in the `config.lua`

### Player Accounts
This option allows you to define the amount of custom accounts each player can make

```lua title="Example"
Config.maxAccounts = 2
```

### Bank Locations
This options allows you to define all the locations where the bank is accessible

```lua title="Example"
Config.locations = {
    Vector(-6532.965029, 3279.234389, -299.849996),
}
```

## Server Functions

### CreatePlayerAccount

Creates a new shared account for a player and returns where it was successful or not

```lua title="Example"
exports['qb-banking']:CreatePlayerAccount(source, accountName, accountBalance, accountUsers)
```

- source: `controller`
- accountName: `string`
- accountBalance: `number`
- accountUsers: `table`
- returns: `boolean`

```lua title="Example"
RegisterServerEvent('createPlayerAccount', function(source)
    local accountName = 'My Shared Account'
    local accountBalance = 5000
    local accountUsers = {'LCC00307', 'LCC00308'} -- list of citizenid's
    exports['qb-banking']:CreatePlayerAccount(source, accountName, accountBalance, json.encode(accountUsers))
end, true)
```

### CreateJobAccount

Creates a new job type account, this is automatically done so shouldn't need this

```lua title="Example"
exports['qb-banking']:CreateJobAccount(accountName, accountBalance)
```

- accountName: `string`
- accountBalance: `number`

```lua title="Example"
RegisterServerEvent('createJobAccount', function()
    local accountName = 'police'
    local accountBalance = 10000
    exports['qb-banking']:CreateJobAccount(accountName, accountBalance)
end, true)
```

### CreateGangAccount

Creates a new gang type account, this is automatically done so shouldn't need this

```lua title="Example"
exports['qb-banking']:CreateGangAccount(accountName, accountBalance)
```

- accountName: `string`
- accountBalance: `number`

```lua title="Example"
RegisterServerEvent('createGangAccount', function()
    local accountName = 'ballas'
    local accountBalance = 10000
    exports['qb-banking']:CreateGangAccount(accountName, accountBalance)
end, true)
```

### AddMoney

Adds money to an account by name and returns where it was successful or not

```lua title="Example"
exports['qb-banking']:AddMoney(accountName, amount, reason)
```

- accountName: `string`
- amount: `number`
- <mark style="color:yellow;">reason</mark>: `string`
- returns: `boolean`

```lua title="Example"
RegisterServerEvent('addMoney', function()
    local accountName = 'police'
    local amount = 10000
    exports['qb-banking']:AddMoney(accountName, amount, 'test example')
end, true)
```

### RemoveMoney

Removes money from an account by name and returns where it was successful or not

```lua title="Example"
exports['qb-banking']:RemoveMoney(accountName, amount, reason)
```

- accountName: `string`
- amount: `number`
- <mark style="color:yellow;">reason</mark>: `string`
- returns: `boolean`

```lua title="Example"
RegisterServerEvent('removeMoney', function()
    local accountName = 'police'
    local amount = 10000
    exports['qb-banking']:RemoveMoney(accountName, amount, 'test example')
end, true)
```

### GetAccount

Returns all the information for the specified account by name

```lua title="Example"
exports['qb-banking']:GetAccount(accountName)
```

- accountName: `string`
- returns: `table | nil`

```lua title="Example"
RegisterServerEvent('getAccount', function()
    local accountName = 'police'
    local accountInfo = exports['qb-banking']:GetAccount(accountName)
    if not accountInfo then print('Account '..accountName..' does not exist') return end
    for _, info in pairs(accountInfo) do
        print('Account Name: '..info.account_name)
        print('Account Balance: '..info.account_balance)
        print('Account Type: '..info.account_type)
    end
end, true)
```

### GetAccountBalance

Returns just the balance of the specified account by name

```lua title="Example"
exports['qb-banking']:GetAccountBalance(accountName)
```

- accountName: `string`
- returns: `number`

```lua title="Example"
RegisterServerEvent('getBalance', function()
    local accountName = 'police'
    local balance = exports['qb-banking']:GetAccountBalance(accountName)
    print('Account: '..accountName..' Balance: '..balance)
end, true)
```

### CreateBankStatement

This will create a statement for a specified account and returns where it was successful or not

```lua title="Example"
exports['qb-banking']:CreateBankStatement(source, account, amount, reason, statementType, accountType)
```

- source: `controller`
- account: `string`
- amount: `number`
- reason: `string`
- statementType: `string`
- accountType: `string`
- returns: `boolean`

```lua title="Example"
RegisterServerEvent('createBankStatement', function(source)
    local account = 'My Shared Account'
    local amount = 5000
    local reason = 'Removed money'
    local statementType = 'withdraw' -- deposit
    local accountType = 'shared' -- 'player', 'job', 'gang'
    local statementCreated = exports['qb-banking']:CreateBankStatement(source, account, amount, reason, statementType, accountType)
    if statementCreated then print('Statement Created') return end
    print('Error creating statement')
end, true)
```