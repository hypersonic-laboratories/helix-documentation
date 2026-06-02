# 📱 qb-phone
There's an app for that

## Introduction
qb-phone is the in-game smartphone, opened with the **O** key. Opening the phone equips the `ID_Misc_Phone` item, so a player needs that item to use it. Most of the phone's data is database-driven (contacts, messages, mail, tweets, calendar, photos), so the config itself is minimal.

The phone bundles several apps:

- **Messages** — text conversations with other players, saved per contact
- **Contacts** — saved contacts keyed by phone number
- **Calls** — dial, ring, accept, and hang up; connected calls use HELIX voice channels so both parties can talk
- **Gene** — a social feed of posts (tweets) with comments
- **Hmail** — an email inbox (read/star mail)
- **Calendar** — personal events with date, time, and details
- **Gallery / Camera** — take front/back photos with the phone camera and store them in the gallery
- **Money transfer** — send bank money to another player by their phone number

## Configuration
All configurable options listed below are found in the `config.lua`

### OpenKey
The key used to open and close the phone. This is essentially the entire config — everything else the phone shows is loaded from the database at runtime.

```lua title="Example"
Config = {
    OpenKey = 'O'
}
```

/// info
There are no other config options. Contacts, conversations, mail, calendar events, gallery photos, and the social feed all live in their respective database tables and are loaded when the phone is opened.
///
