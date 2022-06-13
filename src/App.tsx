import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';

interface Props {};

const App = ({}: Props) => {
    return <h1>리액트 + 타입스크립트 + 바벨 + 웹팩</h1>;
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
