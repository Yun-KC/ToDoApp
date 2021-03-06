import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const $root = document.getElementById('root');
if (!$root) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot($root);
root.render(<App />);
