import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const defaultTheme = {
  backgroundColor: 'transparent',
  border: '2px solid white',
  borderRadius: '4px',
  primaryFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  primaryFontColor: 'white',
  treeBackgroundColor: '#282c34',
  disabledTreeOpacity: 0.8,
  headingFont: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  headingFontColor: 'white',
  headingFontSize: '24px',
  headingHoverColor: '#35373b',
  headingHoverColorTransition: 'background 0.3s ease-out',
  tooltipBackgroundColor: 'white',
  tooltipFontColor: '#16181c',
  tooltipZIndex: 99999,
  nodeBackgroundColor: '#282c34',
  nodeBorderColor: 'white',
  nodeAlternativeFontColor: 'white',
  nodeAltenativeActiveFontColor: 'white',
  nodeOverlayColor: 'white',
  nodeAlternativeActiveBackgroundColor: `
  linear-gradient(
    to right,
    #b9e562 0%,
    #41e2bd 50%,
    #c284d8 100%
  )`,
  nodeActiveBackgroundColor: `linear-gradient(
      to right,
      #b9e562 0%,
      #41e2bd 50%,
      #c284d8 100%
    )`,
  nodeHoverBorder: '4px solid',
  nodeHoverBorderColor: `linear-gradient(
      to right,
      #b9e562 0%,
      #41e2bd 50%,
      #c284d8 100%
    )`,
  nodeIconWidth: '64px',
  nodeMobileTextNodeHeight: '32px',
  nodeMobileTextNodeWidth: '108px',
  nodeMobileFontSize: '14px',
  nodeDesktopTextNodeHeight: '28px',
  nodeDesktopTextNodeWidth: '144px',
  nodeDesktopFontSize: '16px',
  edgeBorder: '1px solid white',
};

export default defaultTheme;


const customTheme = {
  ...defaultTheme,
  backgroundColor: '#333',
  primaryFontColor: '#ccc',
  nodeActiveBackgroundColor: `linear-gradient(
      to right,
      #f06292 0%,
      #5c6bc0 50%,
      #26c6da 100%
    )`,
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
