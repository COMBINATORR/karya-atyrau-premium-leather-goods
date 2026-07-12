## 2024-07-03 - Focus states and input labels
**Learning:** Adding explicit focus-visible rings (`focus-visible:ring-2`) and ensuring correct label-input associations (`htmlFor` and `id`) are critical but subtle accessibility improvements that don't affect standard visual design.
**Action:** Always check interactive elements (buttons, custom tabs) for keyboard focus rings and ensure form fields have properly associated labels, particularly in modal or quick-view components.

## 2025-03-05 - Missing form label associations
**Learning:** Found multiple instances where form inputs were missing `id` and `htmlFor` attributes in React components, which harms screen reader accessibility and prevents users from clicking labels to focus inputs.
**Action:** Always ensure every form input has a unique `id` and its corresponding `<label>` uses `htmlFor={id}`.

## 2025-07-05 - Pluralizing ARIA labels in Russian
**Learning:** When adding ARIA labels for dynamic values in Russian (like star ratings), pluralization rules must be handled correctly (e.g., 1 звезду, 2-4 звезды, 5 звезд) to provide a natural experience for screen reader users.
**Action:** Use a helper function or inline ternary logic `star === 1 ? 'у' : star > 1 && star < 5 ? 'ы' : ''` when generating Russian ARIA labels for numeric ratings.

## 2025-07-06 - Accessible custom radio button groups
**Learning:** Found instances where custom radio button alternatives (like clickable buttons for selecting delivery or payment methods) were grouped under a `<label>` element. This is invalid HTML since `<label>` is only for labelling actual input fields. Screen readers won't announce the group properly, and custom buttons lack semantic state (`checked`) without ARIA attributes.
**Action:** When building custom radio button groups, replace `<label>` wrappers with a `<div>` holding `role="radiogroup"`. Use `aria-labelledby` pointing to an `id` on a descriptive `<span>` for the group title. Ensure child buttons have `role="radio"`, update their `aria-checked` state dynamically, and always provide clear keyboard focus indicators like `focus-visible:ring-2`.
## 2025-03-05 - Focus Visibility and Icon Buttons
**Learning:** Found several interactive elements (like custom map landmarks and social icons) that lacked keyboard focus indicators and ARIA labels. Using `focus-visible` classes with brand colors (e.g., `focus-visible:ring-[#C5A059]`) is a clean way to add accessibility without impacting mouse users.
**Action:** Always check custom interactive elements (not just standard `<button>` tags, but anything functioning as a button or link) for focus indicators and add ARIA labels to any icon-only controls.
## 2024-07-12 - Accessible custom radio button groups
**Learning:** Adding semantic attributes (`role="radiogroup"`, `aria-labelledby`, `role="radio"`, `aria-checked`) to custom radio buttons makes them accessible to screen readers, while visual focus outlines (`focus-visible:ring-2`) improve keyboard navigation for everyone. Wrapping radio buttons in `<label>` instead of `<div role="radiogroup">` is invalid HTML.
**Action:** When building custom radio button selections, always use semantic attributes instead of raw divs/buttons inside labels, and ensure clear `focus-visible` indicators.
