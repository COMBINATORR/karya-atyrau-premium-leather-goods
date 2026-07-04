## 2024-07-03 - Focus states and input labels
**Learning:** Adding explicit focus-visible rings (`focus-visible:ring-2`) and ensuring correct label-input associations (`htmlFor` and `id`) are critical but subtle accessibility improvements that don't affect standard visual design.
**Action:** Always check interactive elements (buttons, custom tabs) for keyboard focus rings and ensure form fields have properly associated labels, particularly in modal or quick-view components.## 2024-05-15 - Missing form control connections in Reviews
**Learning:** Found that some forms in this app lack explicit connection between labels and their input fields.
**Action:** Always ensure \`htmlFor\` matches the \`id\` of the input for better accessibility.
