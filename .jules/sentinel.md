
## 2026-07-05 - Input Validation Enhancement
**Vulnerability:** Missing input validation in OrderModal and Reviews components allowed submission of empty, malformed, or excessively long user input strings.
**Learning:** In a frontend application without a strict backend validation layer, it's critical to add client-side validation for defense-in-depth to prevent minor DoS via huge payload sizes or junk data submission.
**Prevention:** Always implement basic regex validation (like phone numbers) and string length bounds checking (e.g. min/max lengths) on user inputs before processing or rendering.
