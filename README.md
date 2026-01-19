# HR System Frontend Design

This document outlines the design and architectural considerations for the HR System Frontend. The goal of this frontend is to provide a clean, intuitive, and responsive user interface for managing human resources data and functionalities.

# NOT RESPONSIVE YET TO ALL DEVICES

## Technologies Used

*   **HTML5:** For structuring the web content.
*   **CSS3:** For styling and layout, including modern Flexbox and Grid techniques.
*   **JavaScript (ES6+):** For interactive elements, dynamic content, and client-side logic.
*   **Font Awesome:** For scalable vector icons used throughout the interface.
*   **Google Fonts (Poppins):** Utilized for consistent typography.

## Design Principles and Structure

The frontend is built with a focus on usability, maintainability, and responsiveness.

### 1. Overall Layout

The application utilizes a two-column layout:
*   **Sidebar:** A persistent left-hand navigation menu.
*   **Main Content Area:** The primary display area for page-specific content.

The entire application structure is managed using CSS Flexbox for efficient and flexible distribution of space.

### 2. Sidebar Navigation

The sidebar is a core navigation component with the following features:
*   **Nested Menus:** Supports multi-level navigation with expandable/collapsible submenus.
*   **Dynamic Active Link Highlighting:** JavaScript dynamically highlights the currently active page's link in the sidebar. If an active page is within a submenu, both the child link and its parent menu item are highlighted, and the submenu remains expanded.
*   **Collapsible Design:** The sidebar can be collapsed to a narrower state (icon-only view) via a toggle button, optimizing screen real estate.
*   **Fixed Bottom Section:** A dedicated section at the bottom of the sidebar contains essential links (e.g., Logout) and a footer, which remain fixed even if the main navigation content scrolls. This section adapts its display when the sidebar is collapsed, showing an abbreviated logo or text.

### 3. Main Content Area

The main content area is designed to be flexible and adaptable to various page types. It typically includes:
*   **Main Header:** Contains elements like a search bar (if applicable), page title/header, and user profile information. It is designed to be sticky at the top, allowing it to remain visible during scrolling.
*   **Dashboard Cards:** For summary statistics and quick overviews, utilizing CSS Grid for a responsive card-based layout.
*   **Tables:** Used for displaying tabular data, such as recent activity, with clear headers and row separation.
*   **Forms:** Structured for clear input and user interaction (e.g., for manual time-in/out, IT requests).

### 4. Styling Conventions

*   **CSS Variables:** Used for consistent color schemes, spacing, and font sizes, facilitating easy theme changes and maintenance.
*   **Poppins Font:** A modern, readable sans-serif font applied consistently throughout the UI.
*   **Responsiveness:** The layout is designed to adapt to different screen sizes, with media queries ensuring optimal viewing on mobile, tablet, and desktop devices.
*   **Transitions:** Smooth CSS transitions are applied to interactive elements (e.g., hover states, sidebar collapse/expand) to enhance user experience.

### 5. Key UI Components

*   **Buttons:** Standardized styling for primary and secondary actions.
*   **Input Fields:** Consistent look and feel for text inputs, selects, and text areas.
*   **Cards:** Reusable card components for displaying information effectively.
*   **Status Badges:** Visual indicators for different states (e.g., Onboarding, Active, On Leave).

This design aims to create a cohesive, functional, and user-friendly experience for the HR System.

*This was made with the help of AI.*