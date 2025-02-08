# Project Name

Short project description here. This should explain what the project is and what it does.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them. For example:

- Node.js
- npm or yarn

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the repository:

```bash
git clone https://github.com/alex-lenk/alexlenk-react.git
```

Install dependencies:

```bash
npm install
# or yarn install
```

Start the development server:

```bash
npm start
```

Open http://localhost:3000 to view it in the browser.

## Project Structure
```
src/
├── api/
│   ├── apiConfig.js
│   ├── blogApiSlice.js
│   └── postsApiSlice.js
├── app/
│   ├── AppRouter.js
│   └── index.js
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── img/
├── components/
│   ├── blog/
│   │   ├── Pagination/
│   │   │   ├── index.jsx
│   │   │   └── pagination.module.scss
│   │   ├── BlogSide.jsx
│   │   ├── Post.jsx
│   │   ├── PostsList.jsx
│   │   └── SinglePost.js
│   ├── common/
│   │   ├── Form/
│   │   │   └── index.js
│   │   ├── Loader/
│   │   │   ├── index.jsx
│   │   │   └── loader.module.scss
│   │   ├── MainButton/
│   │   │   └── index.js
│   │   ├── navbar/
│   │   │   ├── AuthPanel.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NavbarMenu.jsx
│   │   │   └── NavbarPanel.jsx
│   │   ├── Sprite/
│   │   │   └── index.jsx
│   │   └── ErrorPage.jsx
│   ├── pages/
│   │   ├── AddPost/
│   │   │   ├── AddPostComponents.jsx
│   │   │   └── index.jsx
│   │   ├── blog/
│   │   │   └── Blog.jsx
│   │   ├── Contacts/
│   │   │   ├── contacts.module.scss
│   │   │   └── index.jsx
│   │   ├── Experience/
│   │   │   ├── experience.module.scss
│   │   │   ├── index.jsx
│   │   │   ├── Job.jsx
│   │   │   ├── JobItem.jsx
│   │   │   └── Side.jsx
│   │   ├── Home/
│   │   │   ├── card.module.scss
│   │   │   ├── home.module.scss
│   │   │   ├── HomeCard.jsx
│   │   │   └── index.jsx
│   │   ├── Login/
│   │   │   └── index.jsx
│   │   ├── NotFound/
│   │   │   ├── index.jsx
│   │   │   └── notfound.module.scss
│   │   ├── Portfolio/
│   │   │   ├── index.jsx
│   │   │   ├── notfound.module.scss
│   │   │   └── ProjectsList.jsx
│   │   ├── Profile/
│   │   │   └── index.jsx
│   │   ├── Register/
│   │   │   └── index.jsx
│   │   └── Skills/
│   │       ├── index.jsx
│   │       └── skills.module.scss
│   ├── ui/
│   │   ├── Breadcrumb/
│   │   │   ├── breadcrumb.module.scss
│   │   │   └── index.jsx
│   │   ├── form/
│   │   │   ├── *.jsx
│   │   │   └── ...
│   │   ├── ProfileComponent/
│   │   │   ├── index
│   │   │   └── ProfileComponentsindex.jsx
│   │   ├── LoginComponent.jsx
│   │   └── RegisterComponent.jsx
│   ├── PrivateRoute.jsx
│   └── ErrorBoundary.js
├── hooks/
│   ├── useData.js
│   └── usePosts.js
├── redux/
│   ├── slices/
│   │   ├── auth.js
│   │   ├── post.js
│   │   └── posts.js
├── store/
│   ├── store.js
│   └── StoreProvider.js
├── styles/
│   └── components/
│       ├── *.scss
│       └── ...
├── utils/
│   ├── api.js
│   ├── calculateEmploymentDuration.js
│   ├── formatDate.js
│   ├── getNoun.js
│   ├── handleAxiosError.js
│   └── SetAuthToken.js
├── routes.js
└── index.js
```

## Built With
- React - A JavaScript library for building user interfaces
- Redux Toolkit - The official, opinionated, batteries-included toolset for efficient Redux development
- React Router - Declarative routing for React

## Contributing
Explain how to contribute to your project. For example:

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
- Hat tip to anyone whose code was used
- Inspiration
- etc

## Available Scripts
In the project directory, you can run:

`npm start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
