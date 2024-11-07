import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    wordsList: [],
    userInput: '',
  }

  onAddInputToList = event => {
    event.preventDefault()

    const {userInput, wordsList} = this.state

    const newObj = {
      id: uuidv4(),
      word: userInput,
    }

    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newObj],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  renderListItems = () => {
    const {wordsList} = this.state

    return (
      <ul className="words-list">
        {wordsList.map(eachItem => (
          <li className="detailed-card" key={eachItem.id}>
            <p className="word">{`${eachItem.word}: ${eachItem.word.length}`}</p>
          </li>
        ))}
      </ul>
    )
  }

  renderEmptyCard = () => (
    <div className="empty-view-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="empty-view-img"
      />
    </div>
  )

  render() {
    const {userInput, wordsList} = this.state

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <div className="counting-container">
            <div className="container">
              <h1 className="title">Count the characters like a Boss</h1>
            </div>
            {wordsList.length === 0
              ? this.renderEmptyCard()
              : this.renderListItems()}
          </div>
          <form className="input-container" onSubmit={this.onAddInputToList}>
            <h1 className="main-heading">Character Counter</h1>
            <div className="input-card">
              <input
                type="text"
                className="input-element"
                placeholder="Enter the Characters here"
                onChange={this.onChangeUserInput}
                value={userInput}
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
