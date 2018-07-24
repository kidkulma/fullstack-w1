import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            aanet: [0, 0, 0, 0, 0, 0]
        }
    }

    new = () => {
        const x = Math.floor((Math.random() * this.props.anecdotes.length))
        return this.setState({ selected: x })
    }

    vote = () => {
        const copy = this.state.aanet
        copy[this.state.selected] += 1
        return this.setState({ aanet: copy })
    }

    findMaxi = () => this.state.aanet.findIndex(this.findMax)


    findMax = (x) => {
        console.log(Math.max(...this.state.aanet))
        return x === Math.max(...this.state.aanet)
    }

    render() {
        const teksti1 = 'next anecdote'
        const teksti2 = 'vote'
        const otsikko = 'Anecdote with most votes'
        const maxi = this.findMaxi()
        console.log(maxi)
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <Votes votes={this.state.aanet[this.state.selected]} />
                <Button onClick={this.vote} teksti={teksti2} />
                <Button onClick={this.new} teksti={teksti1} />
                <Header teksti={otsikko}/>
                <p>{this.props.anecdotes[maxi]}</p>
                <Votes votes={this.state.aanet[maxi]} />
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => <button onClick={props.onClick}>{props.teksti}</button>

const Votes = (props) => <div>has {props.votes} votes</div>

const Header = (props) => <div><h1>{props.teksti}</h1></div>

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)