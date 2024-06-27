---
title: Payment
description: Charge LIX from other players.
--- 

Charge LIX from other players.
    
LIX is the in-game currency for HELIX that powers every transaction within the HELIX ecosystem (similar to V-Bucks in Fortnite or Robux in Roblox). Players can purchase LIX with traditional payment methods such as credit cards or PayPal.

Players use LIX to purchase items within worlds or avatar items in the HELIX Exchange or Collectibles Exchange.

Verified users can cash out their LIX balance into USD or a real world currency once they reach a certain balance threshold.  We use Tipalti to facilitate creator payouts to over 120 countries and currencies.  We will provide more information about how to cash out your LIX in the near future.


![](/img/docs/charge-player.png)

## Examples

```lua title="Server/Index.lua"
function ChargeTax(player)
    -- Charges a Player, this will show a PopUp on the Player's screen
    Payment.ChargePlayer(
        player, -- Player to charge
        3500, -- LIX Amount
        "a269ab5f-b68c-48dc-a17c-930696f1766f", -- Player ID to send amount
        "BUY ITEM", -- Title
        "YOU SHALL NOT PASS, UNLESS YOU PAY A TAX.", -- Description
        function(success, intent_id) -- Callback if charge succeeded or not
            if success then
                Console.Log("Intent ID " .. intent_id .. " was created")
            else
                Console.Error("Something wrong happened while charging player")
            end
        end
    )
end

function SellItemToPlayer(player)
    -- Sell a item to a player, this will show a Popup on Player's screen
    Payment.SellItem(
        player, -- Player to charge
        "033968d6-b5d8-4f29-a86c-61a911cf364f", -- Selling item
        1, -- Quantity
        "BUY MY ITEM", -- Charge Title
        "MY AWESOME DESCRIPTION.", -- Charge Description
        function(success, intent_id)
            if success then
                Console.Log("Intent ID " .. intent_id .. " was created")
            else
                Console.Error("Something wrong happened while selling item to player")
            end
    end)
end

-- This will be called when the Player accepts or refuses the Charge
Payment.Subscribe("ChargePlayerComplete", function(success, id, amount, status)
    Console.Log("ChargePlayerCompleted %s %d %s", id, amount, status)
end)

-- This will be called when the Player accepts or refuses the item sale
Payment.Subscribe("SellItemToPlayerComplete", function(success, id, item_id, status)
    Console.Log("ChargePlayerCompleted %s %s %s", id, item_id, status)
end)

-- Charges someone random
ChargeTax(Player.GetByIndex(1))

-- Sell item
SellItemToPlayer(Player.GetByIndex(1))
```

## Static Functions

<StaticFunctionsDeclaration type="StaticClass" name="Payment" />


## Events

<EventsDeclaration type="StaticClass" name="Payment" />