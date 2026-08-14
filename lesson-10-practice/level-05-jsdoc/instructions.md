# JSDoc

## Objective

Use JSDoc to provide usage instructions and details for the `Authentication` component and the custom hook `useControlledInput`.

## Benefits

Because JSDoc is compatible with VS Code IntelliSense, it's a good way to document code.

## Complete these tasks

1. NOTE: This level requires `prisma-template`, `barrel-file`, and `search-filter` from previous levels. Complete these tasks from scratch. Do not copy/paste unless the task permits it. Code for TW Elements can be copied/pasted.
2. Set up the Prisma web client: In your system's file explorer or file picker, copy your `prisma-template` folder from a previous level into this level folder. In the terminal, navigate to `prisma-template` and run `script.js`. It should work without errors after `node_modules` are installed. You may need to update it to work with foreign keys and join tables.
3. Set up the website: In your system's file explorer or file picker, copy your `barrel-file` folder from a previous level into this level folder. In this level folder, rename `barrel-file` to `jsdoc`. Change the title of the website to `Document code with JSDoc`. In the terminal, navigate to the `jsdoc` folder. Start the Vite server and open a React Debugger browser to the URL provided by Vite. View the website pages. They should work without errors after `node_modules` are installed.
4. Begin documenting the `Authentication` component: In `Authentication.jsx`, on the line above the `Authentication` component, add `/**`. Select the VS Code IntelliSense popup for JSDoc comments that appears. Observe that block comments and various JSDoc tags appear over the `Authentication` function.
5. Add destructured parameter descriptions: The `@param` tag signals the beginning of a parameter description. It can also be used to describe destructured properties. First, edit the tag to document the anonymous props object. Example: `@param {Object} props Component props.`
6. Then use dot notation to specify that `setLogin` is supposed to be a function. Example: `@param {Function} props.setLogin`. On the same line, describe `setLogin`. Example: `The setter function for storing an object containing an email and password.`
7. On the next line, add another `@param` description for `user` using dot notation. Example: `@param {Object} props.user Information about the currently logged in user.`
8. Describe the return value: Next to the `@returns` tag, describe what the `Authentication` component returns. Example: `@returns A login form or a logout button`.
9. Specify the specific type of return object: In `Authentication`, hover the mouse pointer over the return value. Observe that `JSX.Element` appears. After `@returns`, specify the object type. Example: `@returns {JSX.Element}`
10. Provide a summary: On the line above the `@param` tags, add `@summary` and a brief description of the `Authentication` component.
11. Provide usage instructions: On the line after `@returns`, add `@description` and a detailed explanation of how to use the `Authentication` component. The explanation can be multi-line and start on the line after `@description`.
12. View the website pages. After fixing any errors, the pages should render without console errors.
13. Access the documentation: Open `WebClient.jsx`. Hover the mouse pointer where `Authentication` is rendered. The JSDoc that you wrote should automatically pop up. Observe that `setLogin` is labeled as a function and `user` is labeled as an object.
14. Add more code to document: In your system's file explorer or file picker, open your `search-filter` folder from a previous level. Copy the file `search-filter/src/components/Search.jsx` to the `jsdoc/src/components/` folder. Copy these files - `useControlledInput.js`, `useProducts.js`, and `useSearch.js` - from the `search-filter/src/hooks/` folder to the `jsdoc/src/hooks/` folder. In the file `jsdoc/src/pages/WebClient.jsx`, under the `Authentication` component, render the `Search` component.
15. View the website pages. There will be various console errors because the new code hasn't been fully integrated into the project.
16. Fix the `setSearch` error: Refer to the file `search-filter/src/pages/WebClient.jsx` to see how to add `setSearch` to the file `jsdoc/src/pages/WebClient.jsx`.
17. View the website pages. After fixing the error, the pages should render without console errors, but won't be fully functional.
18. Document the `Search` component: In the file `jsdoc/src/components/Search.jsx`, use VS Code IntelliSense to add pre-filled JSDoc comments above the `Search` component. Add appropriate `@param` details for `props` and `props.setSearch`. Add appropriate `@returns` details for `{JSX.Element}`. Add a quick `@summary`. Add appropriate `@description` details and usage instructions. For more information, you may refer to `instructions.md` in the `search-filter` level.
19. Access the documentation: Open `WebClient.jsx`. Hover the mouse pointer where `Search` is rendered. The JSDoc that you wrote should automatically pop up. Observe that `setSearch` is labeled as a function and it returns a `JSX.Element`.
20. Add full functionality to the page: Refer to the file `search-filter/src/pages/WebClient.jsx` to see how to add `useProducts` and `useSearch` to the file `jsdoc/src/pages/WebClient.jsx`.
21. View the website pages. After fixing errors, adding full functionality, and rendering `searchResults`, the pages should render without console errors and display all products. The search filter should also work as expected.
22. Document the custom hook for controlled inputs: In `useControlledInput.js`, above the custom hook, add JSDoc comments with `@summary`. Add `@returns` with details and the type specified as `{[any,Function]}`. That represents an array where the first item can be any value, and the second item is a function. Add `@description` with more information and usage examples.
23. Access the documentation: Open `Search.jsx`. Hover the mouse pointer over `useControlledInput`. The JSDoc that you wrote should automatically pop up. Observe that the popup displays the return value as an array with two items - any value and a function.
24. In the `Home` component, add a `p` tag that explains how to document code with JSDoc.
25. View the website pages and make sure they run without errors.

## More Information

- JSDoc is used to document code.
- VS Code IntelliSense automatically presents information about functions documented with JSDoc.
- VS Code provides a template for JSDoc.
- Above a function, type `/**` to add a JSDoc comments template.
- JSDoc provides various tags - `@summary`, `@param`, `@returns`, `@description`, etc.
- JSDoc tags indicate the beginning of details. For example, `@param` details a parameter.
- Parameter types can be specified in curly braces. Example: `@param {Object} user`
- To describe destructured parameters, first describe the anonymous object. Example: `@param {Object} props`. Then use dot notation for the destructured properties. Example: `@param {Object} props.user`
- Try to be specific with object types. Example: `@returns {JSX.Element}`

## Usage Tips

- Details for JSDoc tags are usually short, except for `@description` which usually contains multi-line details.
- The type for `@param` and `@returns` should be specified in curly braces. Example: `@param {string} name The name of the student.`
- Types include `string`, `number`, `boolean`, `Object`, `Function`, `Array` and `any`.

## Hints

- Regular comments do not appear in VS Code IntelliSense.
- JSDoc comments appear in VS Code IntelliSense.
