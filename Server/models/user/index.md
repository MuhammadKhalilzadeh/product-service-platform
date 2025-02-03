## **User Entity Breakdown**

### **1. Unique Identification**

Every user needs a unique identifier in the system. This can be:

- **`id` (UUID or auto-incrementing int)** – Primary unique identifier.
- **`email` (string, unique)** – Used for login and communication.
- **`username` (string, unique, optional)** – Public identifier.
- **`phoneNumber` (string, unique, optional)** – Used for verification (OTP, two-factor authentication).
- **`walletAddress` (string, optional, unique)** – If supporting crypto payments.
- **`externalAuthId` (string, optional, unique)** – If using OAuth (Google, Facebook, etc.).

---

### **2. Core Attributes**

- **`firstName` (string)**
- **`lastName` (string)**
- **`dateOfBirth` (date, optional)** – For age-restricted services.
- **`profilePicture` (string, optional)** – URL or file reference.
- **`bio` (string, optional)** – Short user description.
- **`languagePreference` (string, optional, default: `en` )** – Preferred UI language.
- **`timezone` (string, optional)** – Important for scheduling and trade coordination.
- **`createdAt` (timestamp)** – Account creation date.
- **`updatedAt` (timestamp)** – Last update date.

---

### **3. Authentication & Security**

- **`passwordHash` (string)** – Securely stored password.
- **`salt` (string, optional)** – For password security.
- **`isVerified` (boolean, default: `false`)** – Whether the user completed email/phone verification.
- **`twoFactorEnabled` (boolean, default: `false`)** – If 2FA is active.
- **`lastLogin` (timestamp, optional)** – Last successful login.
- **`failedLoginAttempts` (int, default: `0`)** – For tracking potential brute force attacks.
- **`accountStatus` (enum: `active`, `suspended`, `banned`, `deleted`)** – User account state.

---

### **4. Roles & Permissions**

- **`role` (enum: `buyer`, `seller`, `admin`, `moderator`, `superadmin`)** – Defines platform permissions.
- **`permissions` (JSON/Array, optional)** – Fine-grained control for custom roles.

---

### **5. Contact & Location**

- **`addresses` (array of Address references)** – Multiple addresses (billing, shipping, etc.).
- **`geoLocation` (lat, long, optional)** – For location-based services.

---

### **6. Financial Information**

- **`walletBalance` (decimal, default: `0.00`)** – Internal balance for transactions.
- **`preferredCurrency` (string, default: `USD`)** – For showing localized prices.
- **`paymentMethods` (array of PaymentMethod references)** – Stored payment options.
- **`transactions` (array of Transaction references)** – Purchase/sales history.

---

### **7. Social & Engagement**

- **`followers` (array of User references, optional)** – Social trading aspect.
- **`following` (array of User references, optional)** – Users they follow.
- **`rating` (float, default: `0.0`)** – User's reputation score.
- **`reviewsReceived` (array of Review references, optional)** – Feedback from other users.

---

### **8. Compliance & Privacy**

- **`kycStatus` (enum: `pending`, `verified`, `rejected`, `none`)** – For identity verification.
- **`gdprConsent` (boolean, default: `false`)** – If the user agrees to data processing.
- **`marketingOptIn` (boolean, default: `false`)** – Email notifications and promotional offers.

---

### **9. System-Level Fields**

- **`referralCode` (string, optional)** – For tracking referrals.
- **`accountType` (enum: `personal`, `business`)** – Distinguishes individual vs. company accounts.
- **`linkedAccounts` (array of ExternalAuth references, optional)** – Social logins.

---

## **User Relationships in the Ecosystem**

- **User ⇄ Product** (A user can list multiple products for sale/trade.)
- **User ⇄ Order** (A user places multiple orders.)
- **User ⇄ Transaction** (A user has a history of payments and sales.)
- **User ⇄ Review** (A user can write and receive reviews.)
- **User ⇄ Chat** (A user can send and receive messages.)
- **User ⇄ Address** (A user may have multiple addresses.)
- **User ⇄ PaymentMethod** (A user can have multiple saved payment options.)
- **User ⇄ Role & Permissions** (A user may have different levels of access.)
