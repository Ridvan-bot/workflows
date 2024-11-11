# Workflow Repository
This repository contains shared GitHub Actions workflows that can be reused across multiple repositories. By using these shared workflows, you can streamline your CI/CD pipelines and maintain consistency across projects.

## Available Shared Workflows
nodejs-test.yml - A workflow to run Node.js tests.
semantic-release.yml - A workflow for automating versioning and package releases using Semantic Release.

## 📋 How to Use These Workflows in Your Projects
To utilize these shared workflows, you can reference them from your project's GitHub Actions configuration.

Step 1: **Reference the Shared Workflow in Your Repository**
To use any of the workflows, include the following in your repository's .github/workflows YAML file.

## 📁 Using Templates from the templet Repository
To simplify the process of setting up these workflows in your own repositories, we have provided ready-to-use templates in the templet repository.

How to Use the Templates:
Go to the templet repository.
Copy the pre-configured workflow templates from there.
Paste them into your project's .github/workflows directory.
Customize the workflow files as needed.

## 🔧 Requirements
Ensure you have the following setup:

A GitHub Personal Access Token stored in your repository's secrets (e.g., GH_TOKEN).
For the semantic-release.yml workflow, make sure your default branch is set to main for releases to trigger.

## 📄 License
This project is licensed under the MIT License.

By using these shared workflows, you can automate your CI/CD processes efficiently across all your projects. If you have any issues, feel free to open an issue in this repository.

Happy coding! 🚀