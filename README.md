# My React Vite Website

This is a React-based website created using Vite, styled with Tailwind CSS, and written in TypeScript. The website includes a home page with a registration button, which redirects users to a registration page where they can sign up. The registration form is managed with React Hook Form and validated using Zod.

## Features

- **Vite**: Fast and modern build tool for front-end development.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript at Any Scale.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Hook Form**: A performant, flexible, and extensible form library for React.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Zustand**: A small, fast, and scalable state management solution.

## Project Structure

```plaintext
├── public
│   └── index.html          # The main HTML file
├── src
│   ├── components          # Reusable components
│   ├── hooks               # Custom hooks for page navigation and state management
│   ├── pages               # Pages like Home and Registration
│   ├── App.tsx             # The main App component
│   ├── main.tsx            # The entry point for Vite
│   ├── index.css           # Global styles, including Tailwind CSS imports
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
