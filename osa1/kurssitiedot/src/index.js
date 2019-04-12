import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14


    const Header = (props) => (

        <>
            <h1>{props.course}</h1>
        </>

    )
    const Part = (props) => (
        <>
            <p>
                {props.name} {props.amount}
            </p>
        </>

    )
    const Content = (props) => (
        <>
            <Part name={props.part1} amount={props.exercises1} />
            <Part name={props.part2} amount={props.exercises2} />
            <Part name={props.part3} amount={props.exercises3} />
        </>

    )

    const Total = (props) => (
        <>
            <p>yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää</p>
        </>
    )

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))