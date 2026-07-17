## 2024-07-17 - Add missing focus visible styles to GiftAssistant buttons

**Learning:** Interactive components inside React frequently lack distinct keyboard focus styles (often relying only on hover states), which impairs navigation for keyboard users, a critical accessibility flaw.
**Action:** Always scan for unstyled `<button>` elements, especially inside interactive grids or wizards, and ensure they have explicitly defined `focus-visible` ring styles matching the site's primary accent color.
