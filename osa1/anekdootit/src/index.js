import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (
        <>
            <button onClick={props.handler} > {props.text} </button>
        </>
    )
}
const Display =({anecdote})=>{
    return(
        <>
        <h1>{anecdote.text}</h1>
        <h3>Has {anecdote.votes} votes</h3>
        </>

    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [anekdootit,setAnekdootit] = useState(anecdotes.map(item =>{return ({text:item,votes:0} )}))
    let RNGhandler = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
        
    }
    
    let voteHandler =()=>{
        let copy = [...anekdootit]
        copy[selected].votes += 1
        setAnekdootit(copy)
    }
    let sort =()=>{
        let russia = [...anekdootit].sort((a,b)=>(a.votes<b.votes)? 1 : -1)
        
        return russia
        
    }
    return (
        <>
        <div>
            <Display anecdote = {anekdootit[selected]}/>       

        </div>
        <div>
        <Button handler={RNGhandler} text = "Uusi anekdootti"/>    
        <Button handler={voteHandler} text = "Äänestä anekdoottia"/>
        </div>
        <div>

            <Display anecdote ={sort()[0]}/>

        </div>
        
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)