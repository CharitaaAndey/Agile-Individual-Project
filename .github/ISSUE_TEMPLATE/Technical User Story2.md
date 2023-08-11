**Title:** Ensure Playwright Tests Pass Before Merging Pull Requests

**As a** Developer,
**I want** to ensure that all Playwright tests related to the feature or bug fix I'm working on are passing,
**So that** I can maintain the integrity and functionality of the web system and prevent regressions.

#### Story Points:
**Points**: 5

#### Assignee:
**Name**: Charitaa

### Acceptance Criteria:
- **Given** I have implemented a new feature or fixed a bug,
- **When** I create a pull request for the changes,
- **Then** I ensure that all Playwright tests associated with the affected areas are passing without errors or failures.

- **Given** I am reviewing a pull request from another developer,
- **When** I see that there are Playwright tests associated with the changes,
- **Then** I verify that all Playwright tests are passing before approving the pull request for merging

- **Given** Playwright tests are failing for a specific pull request,
- **When** the pull request is created or updated,
- **Then** I am notified about the test failures through email.

- **Given** issues in  the playwright issues 
- **When** a pull request with failing Playwright tests is observed,
- **Then** I correct the playwright issues

