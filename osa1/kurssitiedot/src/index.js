import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {name:'Half Stack -sovelluskehitys',
    parts : [{
        name: 'Reactin perusteet',
        exercises: 10
    },
    {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    },
    {
        name: 'Komponenttien tila',
        exercises: 14
    }]
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
            <Part data={props.osat[0]}  />
            <Part data={props.osat[1]} />
            <Part data={props.osat[2]}  />
        </>

    )

    const Total = (props) => (
        <>
            <p>yhteensä {props.osat[0].exercises + props.osat[1].exercises + props.osat[2].exercises} tehtävää</p>
        </>
    )

    return (
        <div>
            <Header course={course.name} />
            <Content osat={course.parts}  />
            <Total osat = {course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))