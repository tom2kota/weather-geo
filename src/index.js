import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

import useLocation from "./useLocation";

const App = () => {
    const [lat, errorMessage] = useLocation()

    let content;
    (errorMessage) ? (content = <div>Error: {errorMessage}</div>) : (lat) ? (content =
        <SeasonDisplay lat={lat}/>) : (content = <Spinner message="Please accept location request"/>)

    return (
        <div className="border red">
            {content}
        </div>
    )

}

ReactDOM.render(<App/>, document.querySelector('#root'));
