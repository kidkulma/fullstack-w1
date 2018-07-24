import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            pos: 0,
            neg: 0,
            neu: 0,
            ka: 0,
            tot: 0
        }
    }
    lisaaPos = () => this.setState({ pos: this.state.pos + 1, tot: this.state.tot + 1, ka: this.state.ka + 1 })
    lisaaNeu = () => this.setState({ neu: this.state.neu + 1, tot: this.state.tot + 1 })
    lisaaNeg = () => this.setState({ neg: this.state.neg + 1, tot: this.state.tot + 1, ka: this.state.ka - 1 })
    precise = (x, n) => Number.parseFloat(x).toPrecision(n)


    render() {
        const otsikko1 = 'Anna palautetta'
        const otsikko2 = 'Statistiikka'
        const teksti1 = 'Ei yhtään palautetta annettu'
        const stats =
            [
                { name: 'hyviä', arvo: this.state.pos, yks: '' },
                { name: 'neutraaleja', arvo: this.state.neu, yks: '' },
                { name: 'huonoja', arvo: this.state.neg, yks: '' },
                { name: 'keskiarvo', arvo: this.precise(this.state.ka / this.state.tot, 2), yks: '' },
                { name: 'positiivisia', arvo: this.precise(this.state.pos / this.state.tot, 2) * 100, yks: ' %' }
            ]
        if (this.state.tot === 0) {
            return (
                <div>
                    <Otsikko teksti={otsikko1} />
                    <Button onClick={this.lisaaPos} teksti='hyvä' />
                    <Button onClick={this.lisaaNeu} teksti='neutraali' />
                    <Button onClick={this.lisaaNeg} teksti='huono' />
                    <Otsikko teksti={otsikko2} />
                    <Teksti teksti={teksti1}/>
                </div>
            )
        }
        return (
            <div>
                <Otsikko teksti={otsikko1} />
                <Button onClick={this.lisaaPos} teksti='hyvä' />
                <Button onClick={this.lisaaNeu} teksti='neutraali' />
                <Button onClick={this.lisaaNeg} teksti='huono' />
                <Otsikko teksti={otsikko2} />
                <Statistics stats={stats} />
            </div>
        )
    }
}

const Button = (props) => <div><button onClick={props.onClick}>{props.teksti}</button></div>

const Statistics = ({ stats }) => {
    return (
        <table>
            <tbody>
                <Statistic name={stats[0].name} arvo={stats[0].arvo} yks={stats[0].yks} />
                <Statistic name={stats[1].name} arvo={stats[1].arvo} yks={stats[1].yks} />
                <Statistic name={stats[2].name} arvo={stats[2].arvo} yks={stats[2].yks} />
                <Statistic name={stats[3].name} arvo={stats[3].arvo} yks={stats[3].yks} />
                <Statistic name={stats[4].name} arvo={stats[4].arvo} yks={stats[4].yks} />
            </tbody>
        </table>

    )
}

const Statistic = (props) => {
    return (
        <tr><td>{props.name}</td><td>{props.arvo} {props.yks}</td></tr>
    )
}

const Otsikko = ({ teksti }) => <div><h1>{teksti}</h1></div>

const Teksti = ({ teksti }) => <div>{teksti}</div>

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
