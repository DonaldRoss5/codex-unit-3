# Build Only

## Objective

Deploy a site on GitHub with only a build, no source code.

## Benefits

To keep your repository public but your code private, your site can be deployed with just the build.

## Complete these tasks

1. NOTE: This level requires `prisma-template` and `react-deploy` from a previous level. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed.
3. Set up the website: In your system's file explorer or file picker, copy your `react-deploy` folder from a previous level into this level folder. You may want to delete the `node_modules` folder and any lock files before copying/pasting. In this level folder, rename `react-deploy` to `build-only`.
4. Use a separate VS Code workspace: With a new VS Code window, open the `build-only` folder directly. Save the project as a workspace. The name `build-only` should be presented automatically. This makes it a standalone frontend project separate from the `codex-unit-3` workspace.
5. Change the title of the website to `Deploy a React Site to GitHub Pages with just the Build`. In the terminal, navigate to the `build-only` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite.
6. View the website pages. It should work without errors after `node_modules` are installed.
7. Reset source control for the frontend folder: Open the terminal from the `build-only` workspace. It should automatically start in the `build-only` folder. Remove source control with this command: `rm -rf .git .github`. Then initialize source control by running the command `git init`. This will add new source control for the `build-only` folder. Do not commit files yet.
8. Ignore source files: Edit the file `.gitignore`. If `dist` is there, delete it so the build folder can be committed and deployed. Add `/src` and `/public` so source code isn't commited. Add any other files and folders to be ignored, but prefix them with `/`. Example: `/index.html`. The `/` specifies files in the root folder (not in the subfolders). For this exercise, don't ignore `README.md`. The only folder required for the build-only deployment is `dist`.
9. Build the website to distributable files: In the terminal, run the command `npm run build`. Vite will bundle the website code into the `dist` folder. Observe that there are less files in the `dist` folder than in your project. Bundling them together helps them run efficiently in the browser.
10. Commit the build: Commit the files in the `dist` folder. The commit message could be something simple. Example: `new build`
11. Create the online repo: In the GitHub website, create a repository called `build-only`. Default settings are OK.
12. Push to the repo: In VS Code, add a remote. Give it the URL to the `build-only` repository. Set the name of the remote to `origin`. Push to the `origin`.
13. Set up GitHub pages: In the GitHub website, go to `Settings` for the `build-only` repo. Then click on `Pages` in the sidebar. In the `Build and deployment` section, choose `GitHub Actions`. In the `Static HTML` card, click on `Configure`. On line 40, set `path: './dist'` which tells GitHub to render the files in the `dist` folder. Then click on `Commit changes` at the top right to save the changes.
14. View the deployed website in GitHub pages: Go back to `Settings` → `Pages`. Within 60 seconds, the link to your deployed website will appear. Open the link. Observe `/build-only/` in the browser URL address. That is the repo root path.
15. Sync the repo: Because a commit was done through the GitHub website, `Pull from` the `origin` to get the latest changes locally in VS Code.
16. Update the repo root path: With VS Code, in the `build-only/public/` folder, edit the file `public/repoRoot.js`. Let it export a string with the name of your repo, surrounded by forward slashes. Example: `export const repoRoot = "/build-only/"`. This is the same as the root path of your home page on GitHub. Because GitHub Pages renders repos in a subfolder, the repo root path is required.
17. View the site locally. Each page should render properly with the repo root in the browser address bar. Observe that navigating to an invalid page properly renders `Page404`.
18. Deploy the updates to GitHub: In the terminal, rebuild the website with the command `npm run build`. Commit the changes. Push the changes to GitHub.
19. View the deployed site. Observe that refreshing a page other than the home page works. Observe that `Page404` renders when an invalid URL is visited.
20. Add documentation: In VS Code, edit the file `README.md` adjacent to `package.json`. In `README.md`, edit the title. Example: `# Build Only`. Edit the subtitle. Example: `## How to deploy a build-only React website to GitHub`. Then add numbered instructions explaining in your own words how to deploy a build-only React website to GitHub.
21. Deploy the updates to GitHub: In the terminal, rebuild the website with the command `npm run build`. Commit the changes. Push the changes to GitHub.
22. View the `build-only` repo and its files in the GitHub website. Observe that `README.md` is displayed, providing information about your website.

## More Information

- For free GitHub accounts, a repository must be public to be deployed to GitHub pages.
- For public GitHub repositories, only commit the files that are ok for the public to view.
- For build-only deployments, do not ignore the `dist` and `.github` folders and their contents. All other files and folders can be ignored by listing them in `.gitignore`.
- To ignore files and folders in the project root (not in subfolders), prefix them with `/`. Example: `/index.html`
- The `.git` folder is hidden by default. Your system can be configured to show hidden files and folders.
- [How to configure your system to show files that start with a `.`](https://www.google.com/search?q=windows+and+mac+how+to+show+files+that+start+with+.)
- The `.git` folder contains source control information.
- To reset source control, delete the `.git` folder, then initialize source control again with `git init`.
- The `rm` command removes/deletes a file or folder. The `-rf` option stands for recursively force, which forces the system to delete a folder, all its files, and all its subfolders.
- By default, GitHub deploys `index.html` from the root of the repository. GitHub Actions is required if you want to deploy from a different folder.
- GitHub Pages deploys websites to a subfolder named after the repo. Example `/build-only/`. The subfolder is the root path for repos deployed by GitHub Pages.
- GitHub automatically displays `README.md`.

## Usage Tips

- Packages that your React website needs, like `react` and `react-router`, are in `node_modules`. Running the `npm run build` command bundles your code with necessary code from `node_modules`.
- The `node_modules` folder should not be pushed to GitHub. Your website only uses some code from `node_modules` - the code that was imported. The `build` script applies a concept called `tree shaking` - bundling together the code that your website actually uses and leaving out unused code.
- When changes are pushed to an online GitHub repo, it can take up to 30 seconds to appear.
- When an online GitHub repo is updated, it can take up to 60 seconds for GitHub Pages to render the changes.
- The `git add .` command stages changes in the current folder.
- The `git commit -m "this is the commit message"` commits changes with a message.
- The `git push` command pushes changes to the remote `origin` repo.

## Hints

- It helps to have a VS Code workspace for projects that will be deployed to the internet.
- Commands in NPM scripts can be chained with `&&`. Example: `"deploy": "vite build && git add ."`
- Use `\"` to include quotes in quotes. Example: `"git commit -m \"updated files\""`
