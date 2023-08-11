 ### Ensure Playwright Tests Pass Before Merging Pull Requests:

1. **Given** I have implemented a new feature,
   **When** I create a pull request for the changes,
   **Then** I ensure that all Playwright tests associated with the affected areas are passing without errors or failures.


2. **Given** Playwright tests are failing for a specific pull request,
   **When** the pull request is created or updated,
   **Then** the team members are notified about the test failures through the appropriate communication channels.


4. **Given** Playwright tests are integrated with the project's continuous integration (CI) system,
   **When** a pull request is created or updated,
   **Then** the CI system automatically runs Playwright tests and reports the status of the tests in the pull request.

6. **Given** a Playwright test fails due to a legitimate regression in the application,
   **When** the issue is identified,
   **Then** I address the regression, updates the Playwright test, and ensures it passes before merging the changes.

