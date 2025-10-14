# 🙋 qb-multicharacter
Start your journey! Who will you be?

## Introduction
Allows your players to create a character by entering their name, date of birth, etc.

## Configuration
All configurable options listed below are found in the `config.lua`

## Character Deletion
This options allows you to enable/disable players being able to delete a character they've previously made

```lua title="Example"
Config.EnableDeleteButton = true
```

## Nationality
This option allows you to let players enter their own nationality. If false then gives a preset list

```lua title="Example"
Config.customNationality = false
```

## Skip Spawn Selection
This option allows you to enable/disable players being able to select their spawn location on login
If true, will return them to their last position on login automatically

```lua title="Example"
Config.SkipSelection = false
```

## Number of Characters
This option allows you to set how many characters each player can make on your server

```lua title="Example"
Config.DefaultNumberOfCharacters = 5
```

## Specific Allowed Number of Characters
This option allows you to enter a players identifier and grant them a different number of allowed characters to make without affecting the rest of your server

```lua title="Example"
Config.PlayersNumberOfCharacters = {
	{ license = '', numberOfChars = 2 },
}
```