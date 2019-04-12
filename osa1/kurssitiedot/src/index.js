import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }
    
    
    


    const Header = (props) => (

        <>
            <h1>{props.course}</h1>
        </>

    )
    const Part = (props) => (
        <>
            <p>
                {props.data.name} {props.data.exercises}
            </p>
        </>

    )
    const Content = (props) => (
        <>
            <Part data={props.part1}  />
            <Part data={props.part2} />
            <Part data={props.part3}  />
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
            <Content part1={part1} part2={part2} part3={part3}  />
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))