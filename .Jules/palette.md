## 2024-07-03 - Focus states and input labels
**Learning:** Adding explicit focus-visible rings (`focus-visible:ring-2`) and ensuring correct label-input associations (`htmlFor` and `id`) are critical but subtle accessibility improvements that don't affect standard visual design.
**Action:** Always check interactive elements (buttons, custom tabs) for keyboard focus rings and ensure form fields have properly associated labels, particularly in modal or quick-view components.

## 2025-03-05 - Missing form label associations
**Learning:** Found multiple instances where form inputs were missing `id` and `htmlFor` attributes in React components, which harms screen reader accessibility and prevents users from clicking labels to focus inputs.
**Action:** Always ensure every form input has a unique `id` and its corresponding `<label>` uses `htmlFor={id}`.

## 2025-07-05 - Pluralizing ARIA labels in Russian
**Learning:** When adding ARIA labels for dynamic values in Russian (like star ratings), pluralization rules must be handled correctly (e.g., 1 звезду, 2-4 звезды, 5 звезд) to provide a natural experience for screen reader users.
**Action:** Use a helper function or inline ternary logic `star === 1 ? 'у' : star > 1 && star < 5 ? 'ы' : ''` when generating Russian ARIA labels for numeric ratings.
