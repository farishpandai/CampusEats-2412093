# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1
- Tool(s):NONE
- What I asked for:
- What I kept, changed or rejected, and why:
- One thing the AI got wrong and how I fixed it:

# AI Usage Log

## Week 2
- **Tool(s):** 
  Gemini

- **What I asked for:**
  - Asked for the boilerplate structure to split `App.jsx` and refactor `MenuItemCard` to accept props and handle immutable state updates for the cart.
  - Asked for debugging assistance when Vite threw a module resolution error (`Failed to resolve import "./data/vendors.js"`) and when the browser crashed on an unhandled syntax error with a blank screen.
  - Asked how to implement the isolated state toggle for the Digit 3 personal feature (favorite heart button).

- **What I kept, changed or rejected, and why:**
  - **Kept:** 
    - The immutable array update pattern `setCart((prev) => [...prev, item])` instead of mutating state with `.push()`.
    - The isolated `useState(false)` hook pattern inside `MenuItemCard.jsx` to toggle the heart icon (`♡` / `♥`) without triggering parent re-renders.
  - **Changed:** 
    - The AI generated generic placeholder mock items. I replaced all vendor details and menu lists myself in `src/data/vendors.js` to feature actual Mahallah stalls, prices, and categories matching my registered restaurant.
    - Adjusted the JSX markup and button classes in `MenuItemCard` and `VendorCard` to preserve my own styling from `index.css`.
  - **Rejected:** 
    - The AI initially suggested handling routing logic for the Header nav links ("My Orders" / "Vendors"). I rejected this because the Week 2 specification explicitly confines navigation to `href="#"` and only requires state lifting for vendor selection and cart count.

- **One thing the AI got wrong and how I fixed it:**
  - When debugging an import path warning (`differing only in casing`), the AI initially assumed it was just a typo in the import string. In reality, Windows had cached the folder name as `Components` while Git and Vite expected lowercase `components`. I resolved it manually by renaming the directory via a temporary name (`components-temp` -> `components`) and reloading the VS Code developer window to clear the language server cache.

  # AI Usage Log
  
  ## Week 3
- **Tool(s):** 
  Gemini

- **What I asked for:**
  - Asked for the structural template of `CheckoutForm.jsx` with controlled inputs and field-level validation rules.
  - Asked how to lift the cart state into an array of `{ item, qty }` objects with pure derived totals using `reduce`.
  - Asked for debugging help when the build threw a pre-transform error looking for `src/data/vendor.js` after moving mock data to `public/api/vendors.json`.
  - Asked how to lift the Digit 3 personal feature (favourites) to `App.jsx` to filter dishes dynamically.

- **What I kept, changed or rejected, and why:**
  - **Kept:** 
    - The `useEffect` fetch pattern with `AbortController` cleanup and reload key dependency for handling network retries.
    - The validation logic for name length, Mahallah dropdown selection, and pickup time range (`07:00` to `22:00`).
    - The lifted state pattern in `App.jsx` managing `favorites` as an array of IDs and a boolean filter toggle.
  - **Changed:** 
    - Customized `public/api/vendors.json` to feature real stalls from Mahallah Ali, Aminah, and Faruq with matching menu items, matric-prefixed IDs, and descriptions.
    - Adjusted the header button styling to retain proper contrast and alignment against the theme header.
  - **Rejected:** 
    - Rejected a multi-field state pattern for the form; retained the single `values` object pattern using computed property names `[name]: value` to keep the input handlers concise.

- **One thing the AI got wrong and how I fixed it:**
  - When removing `src/data/vendor.js`, the AI initially suggested importing the JSON file directly. Because the lab requires fetching mock data asynchronously to simulate an external API, I moved the data to `public/api/vendors.json` and loaded it via native `fetch()` inside `useEffect` with proper error and loading fallbacks.


  
