import React from "react"

const DevFlow = () => {
  return (
    <>
      <p>
        <h1>frontend dev flow</h1>
        <ol>
          <li>run npm i react-router-dom in the front end</li>
          <li>Run 'rafce' in App.js after everything is cleared</li>
          <li> To return JSX in App.js, replace the {} with ( )</li>
          <li>Stop the server. Install react-router-dom in the frontend</li>
          <li>Delete everything in index.css</li>
          <li>Delete App.css and App.test</li>
          <li>App.js imports all of the routes</li>
          <li>
            If you are returning more than one element in a component, put them
            in brackets with a return statement
          </li>
        </ol>
      </p>
      <p>
        This error: Error: Invariant failed: You should not use Switch outside a
        Router To fix it, go to index.js and import BrowserRouter from
        reach-router-dom and then wrap the entire contents of ReactDom.render
        method in the BrowserRouter component.
      </p>
      <p>
        <h2>Video 9: Ant Design and Navigation</h2>
        <ul>
          <li>
            https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/getting-started/introduction/
          </li>
          <li>
            Take the CDN from this bootstrap resource and put it in index.html
          </li>
          <li>
            If you want to use react-bootstrap you have to npm i react-bootstrap{" "}
          </li>
          <li>
            Import components from RBS and then copy and paste the code into
            your component file
          </li>
        </ul>
      </p>
      <p>
        In the register component, create a function called registerForm .
        It should return a form.
        In the form, add an attribut of onSubmit=submitHandler
        This is a separate function you should initialize above. 
        Here the input needs four attributes:
        <ul>
          <li>type='email'</li>
          <li>class='form-control', for styling purposes</li>
          <li>value = in brackets: email. This is controled by the component state</li>
          <li>
            An onChange event handler that controls the state. The event calls the setEmail function at the target.value of the event, or e. 
          </li>
        </ul>
        Now in the submitHandler... you need e . prevent Default ( ) 
        It prevents the browser from reloading when the request is sent. 
      </p>
    </>
  )
}

export default DevFlow
