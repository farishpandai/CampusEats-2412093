# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
In imperative UI code (like plain JavaScript DOM manipulation), you write step-by-step instructions to find elements, create nodes, and manually update attributes or text whenever data changes. In declarative UI code (React), you describe what the UI should look like for a given state using JSX, and React automatically handles updating the DOM when the data changes.

2. Why must a component name start with a capital letter?
React uses capitalization to distinguish between built-in HTML elements and custom React components in JSX. Tags starting with a lowercase letter (like `<div>` or `<header>`) are treated as standard HTML DOM elements, while tags starting with a capital letter (like `<Header />` or `<VendorCard />`) are compiled as references to custom JavaScript component functions.

3. What does a fragment <>...</> do, and why not just use a <div>?
A React Fragment (`<>...</>`) groups multiple sibling JSX elements together so a component can return a single root element without adding an extra node to the real HTML DOM. Using an unnecessary `<div>` adds extra wrapper elements that can break CSS Flexbox or Grid layouts and clutter the DOM tree.

4. Name one benefit of splitting the UI into small components.
Splitting the UI into small, focused components makes the code reusable and easier to maintain—for example, `MenuItemCard` and `VendorCard` can be written once and rendered repeatedly for different data items, and bugs or style changes in one part of the page stay isolated to that single component file.
