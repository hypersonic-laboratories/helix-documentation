# Basic Vehicles

This guide shows you how to import a bare minimum custom vehicle.


<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/G7Q8NTG-eXM?si=U9kheXDVCE8-U0WV"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>


# Standard Vehicles

This guide shows you how to import a custom vehicle. You'll learn how to prep meshes, set pivots, import into Unreal, assemble your vehicle Blueprint, and wire up doors, glass, seats, steering, tires (with deflation), and lights - then finally test the vehicle inside HELIX.


<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/uQ0L8N--ObQ?si=s55FDMyeQ07ASBf2"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>


---

## **1) Mesh Preparation (DCC app)**

**Goal:** split parts and set correct pivots so animations/logic work in-game.

- **Separate moving parts**
    - Doors (front-left, front-right, rear-left, rear-right, tailgate).
    - Steering wheel.
    - Glass pieces (per door/windshield as needed).
- **Set pivots**
    - **Doors:** pivot at the hinge line (so rotation swings correctly).
    - **Door glass:** shares the **exact same pivot** as its door.
    - **Steering wheel:** pivot at the steering column center.
- **Export**
    - Export meshes in an Unreal-compatible format (e.g. FBX). Keep scale/units consistent.

---

## **2) Import & Project Setup (Unreal Engine)**

1. In your project **create a folder** (e.g. Content/multiparts) and an Art/ subfolder.
2. **Import all meshes** (you can disable material import temporarily to stay focused).
3. **Save** everything.

---

## **3) Create the Vehicle Blueprint**

1. Create a **Vehicle Blueprint** (e.g. BP_MultiPartVehicle).
2. Add/assign:
    - **Base Body Mesh** (chassis/exterior).
    - **Interior Mesh** (optional; interior can be part of the main mesh if you prefer).

> 🔎 Tip: Interior meshes generally
> 
> 
> **should not have collision**
> 
> **doesn’t block the vehicle**
> 

---

## **4) Suspension & Axles (Child Actors)**

To speed things up, you can use the **pre-animated suspension** actor (from the kit) or your own skeletal suspension:

1. Add **Child Actor Components** for **Front Axle** and **Rear Axle**.
2. Assign the axle class (pre-animated suspension).
3. **Scale/position** axles to fit your vehicle.
4. Configure **Axle Data**:
    - Set the wheel data BP object
    - Assign **wheel mesh**.
    - Select **surface type** (affects skid smoke & sounds).
    - **Front axle**: SteerScale = 1.0, **no drive force**.
    - **Rear axle**: **Apply drive force**, **enable handbrake** (if RWD in your example).

---

## **5) Collision Pass**

1. In the mesh viewer, toggle **Show Collision**.
2. If auto collision is poor, use **Auto Convex Collision** 
3. Preferably, author **UCX_** collision in your DCC tool and re-import.
4. Ensure the **interior** either has **no collision** or uses a channel that **doesn’t block** the vehicle.

---

## **6) Make It Drivable (Quick Test)**

1. Drop the Blueprint into a test level.
2. Set **Auto Possess Player = Player 0** (for quick play-in-editor).
3. Assign your **vehicle data row** (the same one used by axles).
4. **Press Play** and sanity-check movement.
    
    If it flips easily:
    
    - Lower the **Center of Mass** (e.g. Z offset down by ~100 cm) until it turns predictably.

---

## **7) Doors (Components + Indexing)**

1. In the Blueprint, add **Simple Vehicle Door** components:
    - Door_FrontLeft (driver), Door_FrontRight, Door_RearLeft, Door_RearRight, Door_Tailgate (if present).
2. **Place** each door component at the correct world location (it will hinge around the pivot you authored).
3. **Name** them clearly (e.g., Door_FL, Door_FR, etc.).
4. **Indexing** (example):
    - Driver = **0**, Front Passenger = **1**, Rear Right = **2**, Rear Left = **3**, etc.
        
        Use a consistent 0-based sequence.
        
5. If a door **doesn’t correspond to a seat** (e.g., cargo hatch), mark it **non-seat-interactable**.

---

## **8) Vehicle Glass (Breakable)**

1. Create a **glass material instance** (e.g., from a “car glass / damaged glass” parent).
    - Adjust **tint**, **opacity**, and **roughness** to taste.
2. Add **Glass Components** (the system that supports breakage) and assign each glass mesh.

---

## **9) Seats & Entry Points**

1. Add  **Seat Components**:
    - Seat **0** → **Driver**.
    - Seat **1** → Front Passenger.
    - Seat **2**, **3** → Rear passengers, etc.
2. Make sure **seat indices** match your door indices for consistent entry behavior.

### **Door Handle Align**

- Enable debug draw for a door component to visualize its **handle transform**.
- Adjust the **handle position/rotation** so the character reaches the correct spot.
- Repeat for each door.

---

## **10) Steering Wheel**

1. Add a **Steering Component**, assign the **steering wheel mesh**, and place it in the cockpit.
2. Enable steering **debug draw** and tune:
    - **Steer radius/angle** until rotation visually matches the wheel.
    - Iterate with small tweaks (e.g., try values like 17° if it looks oversized).

---

## **11) Wheels, Suspension & Handling**

- **Wheel Radius:** set approximate radius (e.g., 40 cm) to match visuals.
- **Suspension Length/Offset:**
    
    Use a consistent method so **editor preview** matches runtime behavior; tune until travel looks right.
    
- **Friction:** raise slightly if it slides too much.
- **Springs/Damping:** stiffer for off-road; increase damping to reduce bounce.

> 💡 Offset note: The suspension trace typically starts at the contact line and goes downward by
> 
> 
> **Suspension Length**
> 
> **offset**
> 

---

## **12) Deflatable Tires (Material-Driven)**

1. Create a **tire material** (e.g., MI_Tire) using a **tire deformation** material function:
    - Hook it into **World Position Offset**.
2. Set a **Physical Material** appropriate for tires.
3. Create a **material instance** to expose:
    - **Inner radius** (rim) → shouldn’t deform (e.g., ~30).
    - **Outer radius** (tire) → deforms (e.g., ~45).
    - **Pressure** parameter → 0 for fully deflated preview.
4. Assign the **tire material** in your vehicle Blueprint (Class Defaults / wheels).

---

## **13) Lights System (Material Parameters)**

- The **Light Manager** drives headlamps, brake lights, turn signals via **material parameter names**.
- Your light material should **respond** to those params (intensity/color masks).
- You can:
    - Use the **example material/texture** from the Creator Kit.
    - Or map your own UVs in DCC so the **light regions** align with the parameter mask.
- Consider using a dedicated **UV channel (UV1)** for light masks/normal maps.

---

## **14) Package & Test in HELIX**

1. Open a **World**, then **Load Package** and select your vehicle package.
2. **Hold Shift while dragging** the vehicle into the scene (safer spawn behavior).
3. Enter the vehicle, test:
    - **Driving**, **steering**, **suspension**.
    - **Seats/entry**, **door handles**.
    - **Turn signals**, **lights**.
    - **Tire deflation** effect.
4. Tweak Blueprint parameters and materials until it feels right.

---

## **Troubleshooting Checklist**

- **Door pivots wrong?** Re-author pivots at hinges; glass must share the door pivot.
- **Vehicle flipping?** Lower **Center of Mass** Z offset (e.g., −100 cm) and revisit collision.
- **Interior clipping/colliding?** Disable interior collision or ensure it doesn’t block the vehicle.
- **Seats not usable?** Align **seat indices** and **door indices**; fix handle transforms.
- **Steering looks off?** Adjust **steer radius/angle** with debug draw enabled.
- **Tire deformation odd?** Recheck inner/outer radii and pressure; verify wheel material assignment.
- **Lights not reacting?** Confirm material parameter names match the Light Manager’s expectations.

---

### **You’re done!**

You now have a fully featured **multi-part vehicle** with functioning doors, glass, seats, steering, deflatable tires, and reactive lights—ready to drop into HELIX Worlds.
