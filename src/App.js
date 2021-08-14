import './App.css';

const StepInput = (props) => {
  return (
    <label>
      {props.label}
      <input type={props.type} id={props.inputID} />
    </label>
  )
}


const App = () => {
  console.log('Hello World')
  return (
    <div className="App">
      <header className="App-header">
        <h1>AdWords Calculator</h1>
      </header>
      <main>
        <div className="container">
          <h2>Outline</h2>
          <h3>v1: Import from memory</h3>
          <ul>
            <li>Get starting budget for the month</li>
            <li>Add projects + budget, ensure they match the final amount</li>
            <li>Ask for current spend of each budget</li>
            <li>Calculate days remaining in the month</li>
            <li>Propose new daily budgets</li>
          </ul>
          <h3>v2: Improvements</h3>
          <ul>
            <li>Add user account</li>
            <li>Save projects per user account</li>
          </ul>
          <h3>v3: 3rd party</h3>
          <ul>
            <li>Add connection to google adwords</li>
            <li>Add sync button to pull values and calculate new budgets</li>
            <li>Send new budgets to adwords, save</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col">
              <div id="stepOne" class="step">
                <h2>Step 1</h2>
                <StepInput
                  label="How many accounts do you have?"
                  inputID="numOfAccounts"
                  type="number" />
                <br />
                <StepInput
                  label="What's your starting budget?"
                  inputID="startingBudget"
                  type="number" />
                <br />
                <button id="saveStepOne">Next</button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
