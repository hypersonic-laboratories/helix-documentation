# Account Creation

This guide walks you through the core **user account management** features in HELIX, including account creation, login, profile editing, and password reset. It also covers current known issues and upcoming improvements.

---

### **1. Creating a New User Account**

1. Open the **Account Creation** screen.
2. Enter your desired **username** and other required details.
    - **Important:** Usernames must be **unique**.
        
        If the name already exists, you’ll receive an error.
        
        ![image.png](attachment:22025c31-fcec-4caa-b5da-11831a86c5bf:image.png)
        
3. Once the account is successfully created, you can proceed to the login tab.

---

### **2. Logging In**

1. Go to the **Login** tab.
2. Enter your **e-mail** and **password**. 
3. Click **Log In** to enter the game.

![image.png](attachment:653d0b1f-0fdc-40e7-85b4-127341d9e0b1:image.png)

---

### **3. Editing Your Profile**

1. Navigate to the **Edit Profile** page.
    
    ![image.png](attachment:fe42ee8b-2989-4915-94aa-82b771e862ff:image.png)
    
2. Update any available fields — these changes will appear **in real-time** on the right-hand preview pane.
3. Click **Save** to commit your changes.
    - All updates are stored on the server.

![image.png](attachment:8555ad86-3d7d-4e1c-a800-d9c3d4fe96d3:image.png)

---

### **4. Avatar, Banner, and Location Support (In Progress)**

- Avatar and banner customization is **partially implemented**.
- By the end of the week, the following will be fully supported:
    - User avatars
    - Profile banners
    - Location display
- **Email verification** is currently **not required** — users receive a notification email upon account creation, but no action is needed.

---

### **5. Asset Ownership Display**

- Owners/creators of certain in-game assets or packages are displayed in the profile view.
- For now, avatars use a placeholder image until the avatar system is complete.

![image.png](attachment:4a70c6a2-6fce-439e-a5a6-474ce7d9542b:image.png)

---

### **6. Known Issues**

1. **Profile Title Not Updating**
    - Changes to the title field don’t appear until the game restarts.
2. **Login & Password Reset Bugs**
    - Some users report issues logging in or resetting passwords.
    - The reset flow works if followed precisely:
        1. Click **Forgot Password**.
        2. Enter your email.
        3. Wait for the reset email.
        4. Set your new password.
        5. Return to login and sign in with the updated credentials.
3. **Infinite Dialog Loop**
    - Closing certain password reset dialogs in unusual ways can cause multiple overlapping dialogs, leading to a loop.
    - This bug has been reproduced and is currently being fixed.

---

### **7. Upcoming Fixes (Target: End of Week)**

- Fully functional avatar, banner, and location settings.
- Fix for profile title updates.
- Resolution of password reset dialog loop.
- Improved handling of unique username errors.

---

**Status:**

The account system is functional but in an **active development and bug-fix phase**. Expect updates and improvements in the coming days.
