import React, { useState } from 'react';
import BoggleSolver from './Boggle Implementation/boggle_solver';
// import StartButton from './StartButton';
// import StopButton from './StopButton';
import { Grid, Button, TextField, Input } from '@material-ui/core'
import './App.css';
import TextInput from './AnswerInput';

const gridItems = {
  0: { size: 3, label: "A" },
  1: { size: 3, label: "B" },
  2: { size: 3, label: "C" },
  3: { size: 3, label: "D" },
}

var validAnswers = [];

const findAllSolutions = require("./Boggle Implementation/boggle_solver");


async function getUserInput({promptText}) {

  // const [text, setText] = useState("no text set");

  const promptResoponse = prompt(promptText)
  console.log(promptResoponse);
  // setText(promptResoponse);
  
  let solutions = findAllSolutions.findAllSolutions([['A', 'Qu'],
  ['C', 'D']], ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
      'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
      'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar', 'ab', 'abd', 'dca', 'qac'])
  
  await solutions.forEach(word => {
    if(word === promptResoponse) {
      console.log("true")
    }

  })

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startState: false,
      answers: validAnswers,
      word: '',
      correct: '',
    }
  }

  async componentDidMount() {
    // const response = await new StartButton();
    // console.log(response);
    // this.setState({ startState: response.state.state });
    // console.log(findAllSolutions)
    let solutions = await findAllSolutions.findAllSolutions([['A', 'Qu'],
    ['C', 'D']], ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
      'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
      'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar', 'ab', 'abd', 'dca', 'qac'])

    console.log(solutions)
    // this.setState({ answers: solutions})
    console.log(this.state.answers)

    await solutions.forEach(answer => {
      validAnswers.push(answer + " ")
    })

    console.log(this.state.answers)

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.state === true && <p>Valid Answers</p>}
          {this.state.state === true && <p>{this.state.answers}</p>}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}


          {this.state.state === true && <Grid container justify="center" spacing={100}>
            {/* Row 1 */}
            <Grid container justify="center" item xs={12} spacing={3}>

              {Object.keys(gridItems).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems[rowKey].size}>
                    {gridItems[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>

            {/* Row 2 */}
            <Grid container justify="center" item xs={12} spacing={3}>
              {Object.keys(gridItems).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems[rowKey].size}>
                    {gridItems[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>

            {/* Row 3 */}
            <Grid container justify="center" item xs={12} spacing={3}>
              {Object.keys(gridItems).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems[rowKey].size}>
                    {gridItems[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>

            {/* Row 4 */}
            <Grid container justify="center" item xs={12} spacing={3}>
              {Object.keys(gridItems).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems[rowKey].size}>
                    {gridItems[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>}


          {/* <StartButton promptText="Start" />
          <StopButton promptText="Stop" />
          <TextInput promptText="Enter Word" />   */}

          { this.state.state === true && <Button variant="contained" color="white" prompt = "Enter Word" onClick={() => { 
            getUserInput(prompt)

          }} >Enter Word</Button>}
          
          <Button variant="contained" color="primary" onClick={() => {
            console.log("Pressed");
            this.setState({ state: true });
            console.log(this.state.state);
          }}> Start </Button>

          <Button variant="contained" color="secondary" onClick={() => {
            console.log("Pressed");
            this.setState({ state: false });
            console.log(this.state.state);
          }}> Stop </Button>

        </header>
      </div>
    );
  }

}

export default App;

