# Trader Board
*A web app built entirely by AI agents following a software development process*

[![CI](https://github.com/xenirio/trader-board/actions/workflows/ci.yml/badge.svg)](https://github.com/xenirio/trader-board/actions/workflows/ci.yml)

## About This Project

This project is an experiment to explore how Agentic AI can autonomously build a complete web application from the ground up. The AI agents follow a structured software development lifecycle, including epic planning, ticket breakdown, code implementation, automated testing, code review, and deployment.

The goal is to demonstrate that a team of specialized AI agents can collaborate to deliver a functional software product with minimal human intervention.

## How It Works

The process starts when a human creates a high-level "Epic" issue in GitHub. From there, a team of AI agents takes over and autonomously performs the following steps:

1.  **System Analyst Agent**: Breaks the epic down into smaller, manageable task issues.
2.  **Senior Software Engineer Agent**: Creates detailed implementation tickets with technical specifications for each task.
3.  **Software Engineer Agent**: Writes the code, creates a feature branch, and opens a pull request.
4.  **DevOps Engineer Agent**: Runs CI checks (linting, testing) on the pull request and reports failures.
5.  **Software Engineer Agent**: Fixes any CI failures by pushing new commits.
6.  **Code Reviewer Agent**: Reviews the code for quality, best practices, and adherence to the ticket requirements. Provides feedback if necessary.
7.  **Software Engineer Agent**: Addresses any code review feedback.
8.  **DevOps Engineer Agent**: Once the PR is approved and all checks pass, it merges the code into the `main` branch and deploys it to production on Vercel.

This entire workflow is orchestrated by a framework built on [CrewAI](https://www.crewai.com/), with specialized agents designed for each role in the software development process.

## Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI**: [React 18](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment**: [Vercel](https://vercel.com/)

## Powered By

*   **Agent Orchestration**: [CrewAI](https://www.crewai.com/)
*   **LLM Backbone**: Google Gemini
*   **CI/CD**: [GitHub Actions](https://github.com/features/actions)
*   **Orchestration Framework**: [Synth Force](https://github.com/xenirio/synth-force)
