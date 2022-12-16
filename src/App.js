import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRamdomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([])
    
    const handleClick = () => {
        setAnimals([...animals, getRamdomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    })

    return (
    <div>
        <button onClick={handleClick}> 
            Add Animal 
        </button>
        <div>
            {renderedAnimals} 
        </div>
    </div>
    )
}

export default App