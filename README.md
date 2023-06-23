# Empty React Template

## This template comes with this already preloaded: 
- Boostrap v5.0.3 with JS (not popper) in the index.html
- React Router Dom
- React Redux with an example slice
- Axios

## Recommended dependencies but not installed:
- **@mui/material**
    - Prebuilt, customizable react components
- **@mui/x-data-grid**
    - Prebuilt, customizable table
- **antd**
    - Prebuilt, customizable react components (must add `import 'antd/dist/antd.css';` to index.js)
- **react-hot-toast**
    - Customizable notifications

### Notable mentions: 
- **react-socks**
    - Can enable certain elements to be viewed up to only certain breakpoints
- **recharts**
    - Many different graphs that can be used
- **formik**
    - used for form submission (complicated though and not fun)
    - used in conjunction with **yup** for form validation

## To remove a certain dependency:
1. Make sure elements that use that dependecy are removed from the project
2. Delete **package-lock.json** and **node_modules**
3. Remove listed dependency from **package.json**
4. run `npm install`