---
title: File
description: A File represents an entry to a system file.
sidebar_position: 0
tags: [class]
---

<HeaderDeclaration type="Class" name="File" />

///info

It is not possible to open files from outside the server folder. All path must be relative to the Server's executable folder. All files are opened as binary file by default.

///


## Examples

```lua
local configuration_file = File("my_awesome_configuration.json")

local configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))
```


## Constructors

<ConstructorDeclaration type="Class" name="File" />


## Static Functions

<StaticFunctionsDeclaration type="Class" name="File" />


## Functions

<FunctionsDeclaration type="Class" name="File" />


## Events

<EventsDeclaration type="Class" name="File" />
