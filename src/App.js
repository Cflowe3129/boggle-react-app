import React, { useState } from 'react';
import BoggleSolver from './Boggle Implementation/boggle_solver';
// import StartButton from './StartButton';
// import StopButton from './StopButton';
import { Grid, Button, TextField, Input } from '@material-ui/core'
import './App.css';
import TextInput from './AnswerInput';

const gridItems1 = {
  0: { size: 3, label: "O" },
  1: { size: 3, label: "I" },
  2: { size: 3, label: "H" },
}

const gridItems2 = {
  0: { size: 3, label: "V" },
  1: { size: 3, label: "O" },
  2: { size: 3, label: "D" },
}

const gridItems3 = {
  0: { size: 3, label: "U" },
  1: { size: 3, label: "S" },
  2: { size: 3, label: "O" },
}



var validAnswers = [];

const findAllSolutions = require("./Boggle Implementation/boggle_solver");


async function getUserInput({ promptText }) {

  var value = "";
  // const [text, setText] = useState("no text set");
  const promptResoponse = prompt(promptText)
  console.log(promptResoponse);
  // setText(promptResoponse);

  let solutions = findAllSolutions.findAllSolutions([["O", "I", "H"], ["V", "O", "D"], ["U", "S", "O"]],

  /* lines 44 - 48 are the dictionary*/             ["div", "doo", "dso", "hods", "hood", "ids", "ods",
                                                    "oos", "ovoids", "sou", "vids", "divs", "doos", "hid",
                                                    "hoi", "hoods", "ios", "odso", "ous", "sod", "sov",
                                                    "void", "doh", "dos", "hod", "hoo", "hos", "odious",
                                                    "ooh", "ovoid", "soh", "vid", "voids"])

  solutions.forEach(word => {
    if (word === promptResoponse) {
      console.log("true")
      value = promptResoponse;
      console.log(value)
    }

  })
  return value;

}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startState: false,
      answers: validAnswers,
      word: '',
      correct: [],
    }
  }

  async componentDidMount() {
    
    let solutions = findAllSolutions.findAllSolutions([["O", "I", "H"], ["V", "O", "D"], ["U", "S", "O"]],

    /* lines 77 - 81 are the dictionary*/             ["div", "doo", "dso", "hods", "hood", "ids", "ods",
                                                      "oos", "ovoids", "sou", "vids", "divs", "doos", "hid",
                                                      "hoi", "hoods", "ios", "odso", "ous", "sod", "sov",
                                                      "void", "doh", "dos", "hod", "hoo", "hos", "odious",
                                                      "ooh", "ovoid", "soh", "vid", "voids"])


    await solutions.forEach(answer => {
      validAnswers.push(answer + " :")
    })

    console.log(this.state.answers)

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <header as='h1'>Boggle Game</header>
          {this.state.state === false && <p>Valid Answers</p>}
          {this.state.state === false && <p>{this.state.answers}</p>}
          {this.state.state === true && <p>Correct Answers</p>}
          {this.state.state === true && <p>{this.state.correct}</p>}
          {this.state.state === false && <p>Your Correct Answers</p>}
          {this.state.state === false && <p>{this.state.correct}</p>}
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

              {Object.keys(gridItems1).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems1[rowKey].size}>
                    {gridItems1[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>

            {/* Row 2 */}
            <Grid container justify="center" item xs={12} spacing={3}>
              {Object.keys(gridItems2).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems2[rowKey].size}>
                    {gridItems2[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>

            {/* Row 3 */}
            <Grid container justify="center" item xs={12} spacing={3}>
              {Object.keys(gridItems3).map((rowKey) => {
                return (
                  <Grid item key={rowKey} xs={gridItems3[rowKey].size}>
                    {gridItems3[rowKey].label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>}


          {/* <StartButton promptText="Start" />
          <StopButton promptText="Stop" />
          <TextInput promptText="Enter Word" />   */}

          {this.state.state === true && <Button variant="contained" color="white" prompt="Enter Word" onClick={() => {
            getUserInput(prompt).then(function (result) {
              console.log("Returned");
              console.log(result);
              return result;
            }).then((value) => {
              if (!this.state.correct.includes(value + " ") && (value != "")) {
                this.state.correct.push(value + " ")
                this.setState({ correct: this.state.correct })
                console.log("STATE:" + this.state.correct)
              } else if(value == ""){
                alert("This word is not in the dictionary. Please enter another word")
              } else {
                alert("You have already found this word. Please enter another word")
              }

            })

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

