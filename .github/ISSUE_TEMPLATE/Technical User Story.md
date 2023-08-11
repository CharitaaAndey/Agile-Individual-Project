## User Story 1

**Title**: Automate User Journey Testing using Playwright

**As a** Developer,  
**I want** to implement automated testing using Playwright  
**So that** we can efficiently validate the user journey and functionality of our web application.

#### Story Points: 
**Points**: 5

#### Assignee: 

**Name**: Charitaa

### Acceptance Criteria: 

**Given** the user is on the homepage of the web application  
**When** the user navigates to the login page  
**Then** Playwright should simulate user input and interactions, such as entering valid credentials and clicking the "Login" button, and verify that the user is successfully logged in.

**Given** the user is logged in and on the dashboard page  
**When** the user interacts with various UI elements, such as clicking buttons, submitting forms, and navigating between pages  
**Then** Playwright should automate these interactions, ensuring that UI elements respond correctly and the user flow remains smooth.

**Given** the user is on the checkout page with items in the cart  
**When** the user completes the checkout process by providing shipping information and confirming the purchase  
**Then** Playwright should validate that the checkout process is completed successfully, including verifying the order summary and confirmation message.

**Given** the user submits a contact form with valid information  
**When** the form is submitted  
**Then** Playwright should simulate form submission, capture the network request, and validate that the form data is correctly sent to the server.

