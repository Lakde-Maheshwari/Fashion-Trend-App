# Fashion-Trend-App
Page 1: Category and Trendy Designs Page
Dynamic Category Display
The top of the page displays the category name fetched via a Django API call based on user selection or URL params.

New Trendy Designs Section
Below the category name, users can view a grid of trendy designs dynamically fetched from the backend (Django REST API) using the selected category as a filter.

Design Interaction
Clicking on any design redirects the user to Page-2 (Product Details Page) while passing selected design data and category info.

Responsiveness
Optimized for mobile, tablet, and desktop with clean UI/UX patterns.
Detailed View of Selected Design
Displays:

Design image(s)

Price

Available colors

Sizes

Description and other metadata

Related Products
Below the main product details, related products from the same category are shown — fetched dynamically using another Django API call.

Smooth Scrolling Effects
Smooth transitions and scrolling behaviors are implemented for a premium user experience, as per the Figma design.

Performance Optimization
Since this page can be accessed directly from external links:

Lazy loading images

AJAX-based partial loads

Code-splitting and asset compression

Ensures load time < 5 seconds

Responsive & Visually Appealing
The layout adjusts gracefully across screen sizes, and animations/microinteractions elevate the user interface.
Page 1:
![image](https://github.com/user-attachments/assets/80c0ef0c-3359-4156-85d6-816c0e569f4d)

Page 2 :
![image](https://github.com/user-attachments/assets/88401969-df3a-4af0-931b-862fd7cf1eb0)


