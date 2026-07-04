## 2024-07-03 - Focus states and input labels
**Learning:** Adding explicit focus-visible rings (`focus-visible:ring-2`) and ensuring correct label-input associations (`htmlFor` and `id`) are critical but subtle accessibility improvements that don't affect standard visual design.
**Action:** Always check interactive elements (buttons, custom tabs) for keyboard focus rings and ensure form fields have properly associated labels, particularly in modal or quick-view components.

## 2025-03-05 - Missing form label associations
**Learning:** Found multiple instances where form inputs were missing `id` and `htmlFor` attributes in React components, which harms screen reader accessibility and prevents users from clicking labels to focus inputs.
**Action:** Always ensure every form input has a unique `id` and its corresponding `<label>` uses `htmlFor={id}`.
