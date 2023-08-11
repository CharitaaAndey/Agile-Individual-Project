## Acceptance criteria to ensure both successful test execution and deployment to GitHub Pages or Vercel:

- **Given** a successful build and passing Playwright tests on the `main` branch,
- **When** changes are pushed or merged into the `main` branch,
- **Then** an automated deployment process is triggered for GitHub Pages and Vercel.

- **Given** the deployment process is triggered,
- **When** deploying to GitHub Pages,
- **Then** the latest build artifacts are published to the repository's GitHub Pages branch, and the web system is accessible via its GitHub Pages URL.

- **Given** the deployment process is triggered,
- **When** deploying to Vercel,
- **Then** the latest build artifacts are deployed to Vercel, and the web system is accessible via its Vercel URL.

- **Given** a deployment is successful on either GitHub Pages or Vercel,
- **When** the deployment is complete,
- **Then** a notification is sent to the development team indicating the successful deployment.

- **Given** a deployment fails on either GitHub Pages or Vercel,
- **When** the deployment process encounters errors,
- **Then** a notification is sent to the development team with details about the failure for further investigation.

- **Given** a need to troubleshoot deployment issues,
- **When** encountering deployment failures,
- **Then** relevant logs, error messages, and documentation are provided to assist in diagnosing and resolving the deployment issues.

- **Given** a desire to improve the deployment process,
- **When** new tools or optimizations become available,
- **Then** the deployment workflow is periodically reviewed and updated to incorporate these improvements.

- **Given** the deployment process is automated,
- **When** changes are made to the deployment workflow,
- **Then** the changes are tested in a controlled environment before being applied to the production deployment process.

- **Given** the deployment process is automated,
- **When** new team members join,
- **Then** the deployment workflow and its documentation are explained to them, ensuring they understand the process and can contribute effectively.

- **Given** a successful deployment on either GitHub Pages or Vercel,
- **When** new changes are deployed,
- **Then** the previous deployment artifacts are properly archived or removed to avoid clutter and maintain a clean deployment history.

- **Given** a successful deployment,
- **When** accessing the deployed web system on GitHub Pages or Vercel,
- **Then** the web system is functional, responsive, and behaves as expected based on the latest changes.

- **Given** the automated deployment process,
- **When** changes are made to the deployment workflow or infrastructure,
- **Then** the changes are reviewed and tested to ensure they do not introduce regressions or issues in the deployment process.

