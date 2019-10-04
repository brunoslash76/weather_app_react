import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Container from './src/components/Container/Container';

const App = () => {
    return <Container />;
};

ReactDOM.render(<App />, document.getElementById('app'));
