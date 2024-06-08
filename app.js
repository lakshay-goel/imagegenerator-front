// import React from 'react';
// import ReactDom from 'React-Dom/client';
// const parent = document.getElementById('root');
// const root  = ReactDom.createRoot(parent);

// const Heading = React .createElement('h1',{},"Hello React");
// root.render(Heading);
// const Title = ()=>{
//     return react.createElement('h1',{},'Hello React 2');
// }
// root.render(Heading);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import navbar from './src/pages/common/navbar/navbar.js';
// import homepage from './src/pages/homepage/homepage.js';

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const App = ()=>{
//     return <homepage />;
// }

// root.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Navbar from "./src/pages/common/Navbar/navbar.js";
// import HomePage from "./src/pages/HomePage/homepage.js";
// import ImageGenerator from "./src/pages/ImageGenerator/imageGenerator";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <HomePage />,
//     },
//     {
//         path: "/image-generator",
//         element: <ImageGenerator />,
//     }
// ]);

// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);

// const App = ()=>{
//     return <RouterProvider router={router} />;
// }

// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './src/pages/common/Navbar/navbar.js';
import HomePage from "./src/pages/HomePage/homepage.js";
// import ImageGenerator from './src/pages/ImageGenerator/imageGenerator.js';\
import ImageGenerator from './src/pages/ImageGenerator/imageGenerator.js';

import HistoryPage from "./src/pages/HistoryPage/historyPage.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryInformationPage from "./src/pages/HistoryInformationPage/historyInformationPage.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/image-generator",
        element: <ImageGenerator />,
    },
    {
        path: '/history',
        element: <HistoryPage />
    },
    {
        path: '/history/:historyId',
        element: <HistoryInformationPage />
    }
]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <RouterProvider router={router} />;
}

root.render(<App />);