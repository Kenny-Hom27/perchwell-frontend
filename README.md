# Perchwell Frontend Interview File Explorer Take Home

## Background Information

Thank you for your interest in Perchwell and taking the time to complete this technical assessment.
We estimate that you will need 2 hours to complete this assignment.

## The Assignment

Build a VS Code–style file explorer in React/TypeScript using Next.js.

## Requirements

- Display files and folders in a tree.
- Folders can be expanded and collapsed.
- Use file-type icons for items.
- Clicking a file opens it in the main editor area.
- Fully keyboard accessible (tab, arrows, space, etc.).
- Sort items alphabetically.
- Data must come from an API request.
  - An example endpoint exists at `/api/file-tree` which generates a large tree structure.
  - You may modify the endpoint to return data in whatever shape you prefer.
- Provide a button to toggle light and dark modes.
- Hovering an item should show its full path.

You may use any UI framework, but the look and behavior should resemble the screenshot in the original prompt.

## Getting Started

### Local

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker

1. Build and start the container:
   ```bash
   docker compose up --build
   ```
2. The app will be available at [http://localhost:3000](http://localhost:3000).

### Notes

- The starter includes only minimal UI. Implement the explorer and editor as you see fit.
- Feel free to install additional packages or frameworks.
- Ensure the application works in both light and dark modes.

## Submission
Provide instructions on how to run your solution and a short write-up of any trade-offs or enhancements you'd make with more time. 

We will be reviewing the clarity of your documentation, the correctness of the application, the readability of the code, and the organization of the code.

**Please submit your solution via email as a zip file or with a link to a GitHub repository.**
# perchwell-frontend
