## 2025-03-08 - Accessible Star Rating Component
**Learning:** Custom star rating components built with buttons are completely opaque to screen readers without proper ARIA attributes (radiogroup, radio roles, and aria-checked states), and they fail keyboard accessibility if focus states aren't clearly visible.
**Action:** Always wrap interactive star rating buttons in a `role="radiogroup"`, assign `role="radio"` with `aria-checked` to each star, ensure meaningful `aria-label`s on icon-only buttons, and provide explicit `focus-visible` styling.
