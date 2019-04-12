import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {

    return (
        <>
            <button onClick={props.handler}>{props.text}</button>
        </>
    )
}
const Display = (props) => {
    return (
        <>
            <p>{props.text} {props.value}</p>
        </>
    )
}

const Buttons = (props) => {
    return (
        <>
            <Button text="Hyvä" handler={props.goodHandler} />
            <Button text="Neutraali" handler={props.neutralHandler} />
            <Button text="Huono" handler={props.badHandler} />
        </>
    )
}
const Stats = ({bad,neutral,good}) => {
    return(
    <>
        <Display text="Hyvä" value={good} />
        <Display text="Neutraali" value={neutral} />
        <Display text="Huono" value={bad} />
        <Display text="Yhteensä" value={bad+good+neutral} />
        <Display text="Keskiarvo" value={(good-bad)/(bad+good)} />
        <Display text="Postiivisia" value={good/(good+bad+neutral)} />
    </>)
}
const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodHandler = () => {
        setGood(good + 1)
    }
    const badHandler = () => {
        setBad(bad + 1)
    }
    const neutralHandler = () => {
        setNeutral(neutral + 1)
    }
    return (
        <div>
            <h1>Anna palautetta </h1>
            <Buttons goodHandler={goodHandler} neutralHandler={neutralHandler} badHandler={badHandler} />
            <h3>Tilastot</h3>
            <Stats good={good}neutral={neutral}bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)