# 🏨 qb-apartments
Welcome to your complimentary apartment

## Introduction
This package manages the apartment system for players.
It uses qb-interior to spawn shells at a specific set of coordinates and functions the same as housing except by default the apartments do not cost any money

## Configuration
All configurable options listed below are found in the `config.lua`

### Starting Apartments
This option allows you to enable/disable the giving of an apartment to a player when they create a character

```lua
Apartments.Starting = true
```

### Offsets
These options control the height at which the apartment model is created. If you need to make it lower/higher, change it here!
The max offset value is the highest it could ever be.

```lua
Apartments.SpawnOffset = 21000
Apartments.MaxOffset = 23000
```

### Apartment Locations
This option allows you to add/remove apartment locations as well as define the size of the targeting box for entering the apartment

```lua
Apartments.Locations = {
	apartment1 = {
		name = 'apartment1',
		label = 'Apartment',
		coords = { -66.599790, 15687.074097, -299.849999 },
		polyzoneBoxData = {
			heading = 180,
			length = 100,
			width = 100,
			distance = 1000,
			debug = true,
			created = false,
		},
	},
	apartment2 = {
		name = 'apartment2',
		label = 'House',
		coords = { -4657.669942, 15631.930482, -233.886309 },
		polyzoneBoxData = {
			heading = 90,
			length = 100,
			width = 100,
			distance = 1000,
			debug = true,
			created = false,
		},
	},
}
```