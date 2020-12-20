import React from 'react'

const DevFlow = () => {
    return (
        <div>
            <p>
                <h1>frontend dev flow</h1>
                <ol>
                    <li>run npm i react-router-dom in the front end</li>
                    <li>Run 'rafce' in App.js after everything is cleared</li>
                    <li> To return JSX in App.js, replace the  { } with ( )</li>
                    <li>Stop the server. Install react-router-dom in the frontend</li>
                    <li>Delete everything in index.css</li>
                    <li>Delete App.css and App.test</li>
                    <li>App.js imports all of the routes</li>
                    <li>If you are returning more than one element in a component, put them in brackets with a return statement</li>
                </ol>
            </p>
            <p>
                This error: Error: Invariant failed: You should not use Switch outside a Router 
                To fix it, go to index.js and import BrowserRouter from reach-router-dom and then wrap the entire contents of ReactDom.render method in the BrowserRouter component. 
            </p>
            <p>
                
            </p>
        </div>
    )
}

export default DevFlow
