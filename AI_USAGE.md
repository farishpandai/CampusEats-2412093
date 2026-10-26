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


  
