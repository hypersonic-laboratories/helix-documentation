# 🏪 qb-shops
Ya'll got doritos?

## Introduction

- Works in conjunction with [qb-inventory](qb-inventory.md) to let players buy items
- Includes delivery system for players to earn money while refilling stock of shop

/// warning
The NPC's, blips and delivery portion of this package are a work-in-progress!
///

## Configuration

### Defining Products
You can define a table of items inside a unique product list with multiple options available.
The index of our table of items will be our unique product list name that we can use later so make sure to keep them different!
Let's go over what needs to be included in our product list

- product list: `string`
- name: `string`
- amount: `number`
- <mark style="color:yellow;">info</mark>: `table`
- <mark style="color:yellow;">requiredJob</mark>: `table | string`
- <mark style="color:yellow;">requiredGang</mark>: `table | string`
- <mark style="color:yellow;">requiredGrade</mark>: `number`
- <mark style="color:yellow;">requiredLicense</mark>: `table | string`

/// tip
When using a table for requirements, they are EITHER/OR and not both. So if we add police and ambulance as requirements, you will not need both jobs, only one of them!
///

```lua title="Example"
['normal'] = {
    { name = 'sandwich',      price = 2,   amount = 50, },
    { name = 'water_bottle',  price = 2,   amount = 50, info = { quality = 100 } },
    { name = 'kurkakola',     price = 2,   amount = 50, requiredJob = 'police' },
    { name = 'twerks_candy',  price = 2,   amount = 50, requiredGang = 'ballas' },
    { name = 'kurkakola',     price = 2,   amount = 50, requiredJob = { 'police', 'ambulance' } },
    { name = 'twerks_candy',  price = 2,   amount = 50, requiredGang = { 'ballas', 'lostmc' } },
    { name = 'snikkel_candy', price = 2,   amount = 50, requiredGrade = 3 },
    { name = 'sandwich',      price = 2,   amount = 50, requiredLicense = 'weapon' },
    { name = 'sandwich',      price = 2,   amount = 50, requiredLicense = { 'weapon', 'driver' } },
},
```

### Defining Locations
You can define a list of shops which are indexed by a unique identifier.
These identifier's must be different because it allows for the restocking of the shop if it's set to true.

- label: `string`
- products: `table`
- coords: `vector`
- delivery: `vector`
- <mark style="color:yellow;">ped</mark>: `string`
- <mark style="color:yellow;">scenario</mark>: `string`
- <mark style="color:yellow;">radius</mark>: `float`
- <mark style="color:yellow;">targetIcon</mark>: `string`
- <mark style="color:yellow;">targetLabel</mark>: `string`
- <mark style="color:yellow;">showblip</mark>: `boolean`
- <mark style="color:yellow;">blipsprite</mark>: `number`
- <mark style="color:yellow;">blipscale</mark>: `float`
- <mark style="color:yellow;">blipcolor</mark>: `number`
- <mark style="color:yellow;">radius</mark>: `float`
- <mark style="color:yellow;">useStock</mark>: `boolean`
- <mark style="color:yellow;">requiredJob</mark>: `string | table`
- <mark style="color:yellow;">requiredGang</mark>: `string | table`
- <mark style="color:yellow;">requiredItem</mark>: `string | table`

/// tip
When setting `requiredJob`, `requiredGang` or `requiredItem` do not use both string and table methods, only choose one!
///

```lua title="Example"
['minimart'] = {
	['label'] = 'MiniMart',
    ['products'] = Config.Products['normal'],
    ['coords'] = Vector(-2322.078254, 15228.652227, -299.849995),
    ['delivery'] = Vector(-2322.078254, 16228.652227, -299.849995),
    ['ped'] = 'mp_m_shopkeep_01',
    ['scenario'] = 'WORLD_HUMAN_STAND_MOBILE',
    ['targetIcon'] = 'fas fa-shopping-basket',
    ['targetLabel'] = 'Open Shop',
    ['showblip'] = true,
    ['blipsprite'] = 52,
    ['blipscale'] = 0.6,
    ['blipcolor'] = 0,
    ['radius'] = 1.5,
    ['useStock'] = true,
    ['requiredJob'] = 'police', -- string
    ['requiredJob'] = { ['mechanic'] = 4 }, -- table
    ['requiredGang'] = 'ballas', -- string
    ['requiredGang'] = { ['ballas'] = 4 }, -- table
    ['requiredItem'] = 'lockpick', -- string
    ['requiredItem'] = { 'lockpick', 'sandwich' } -- table
},
```