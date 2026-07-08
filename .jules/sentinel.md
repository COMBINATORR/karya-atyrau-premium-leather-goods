## 2025-07-05 - Enhance Input Validation in Reviews and Orders\n **Vulnerability:** Unsanitized and unvalidated input from review and order forms.\n **Learning:** Forms in React applications still require strong input validation to prevent excessively large texts or blank/whitespace-only input.\n **Prevention:** Apply trimming to inputs and implement basic regex checks for phone numbers and specific constraints.

## 2026-07-06 - Implement Logic-Level Input Limits
 **Vulnerability:** Unenforced max lengths could allow excessively large input to cause client/server issues (DoS).
 **Learning:** HTML `maxLength` attributes are merely suggestions to the browser and are trivial to bypass.
 **Prevention:** Always enforce constraints like maximum length programmatically at the logic/state level.
