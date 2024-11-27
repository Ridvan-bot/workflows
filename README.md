# Workflow Repository
This repository contains shared GitHub Actions workflows that can be reused across multiple repositories. By using these shared workflows, you can streamline your CI/CD pipelines and maintain consistency across projects.

## Available Shared Workflows
nodejs-test.yml - A workflow to run Node.js tests.
semantic-release.yml - A workflow for automating versioning and package releases using Semantic Release.
prep-gcould.yml - A worfklow to enable requiered services in Google Cloud.


## 📋 How to Use These Workflows in Your Projects
To utilize these shared workflows, you can reference them from your project's GitHub Actions configuration.

## 📁 Using Templates from the templet Repository
To simplify the process of setting up these workflows in your own repositories, we have provided ready-to-use templates in the templet repository.

How to Use the Templates:
Go to the templet repository https://github.com/Ridvan-bot/templet.
Clone the repository to your local machine.
Paste them into your project's .github/workflows directory.
Customize the workflow files as needed.

## 🔧 Requirements
Ensure you have the following setup:

A GitHub Personal Access Token stored in your repository's secrets (e.g., GH_TOKEN).
For the semantic-release.yml workflow, make sure your default branch is set to main for releases to trigger.
Ensure that the token used by the CI has the necessary permissions by:
Go to your GitHub repository's Settings → Actions → General → Workflow permissions.
Make sure that the option "Read and write permissions" is enabled for the GitHub token in the CI.

### Unit Test Setup
To set up unit tests, you need to:

1. Create a folder named `__tests__` in the root of your repository.
2. Add your unit test files in the `__tests__` folder.

Example structure:
your-repo/
├── __tests__/
│   ├── example.test.tsx
│   └── anotherExample.test.tsx
├── app/
│   ├── page.tsx
│   └── anotherFile.tsx
├── package.json
└── ...

## Prep GCloud Workflow
The Prep Google Cloud With Required Services Worflow can be used to setup the requierd services in your Google Cloud Project. To succesfully run the workflow, by manually running it, you must first:
1. Be a customer at Pohlman Protean
2. Create a Project in Google Cloud, the name of the project must start with main- or dev-. Or ask Pohlman Protean to do it for you.
3. Create a service Account in Google Cloud, or ask Pohlman Protean to do it.
4. Create a JSON key connected to your service Account in Google cloud, or ask Pohlman Protean to do it.
5. Add the JSON KEY as a secret in workflow repo, named BRANCH_GCP_CUSTOMERNAME_SA_KEY e.g, DEV_GCP_POHLMANPROTEAN_SA_KEY. 
6. Run the workflow.

## 📄 License
This project is licensed under the MIT License.

By using these shared workflows, you can automate your CI/CD processes efficiently across all your projects. If you have any issues, feel free to open an issue in this repository.

Happy coding! 🚀