function App() {
    const handleClick = () => {
        console.log('Buttom was clicked')
    }

    return <div>
        <button onClick={handleClick}> Add Animal! </button>
        <p>Aniamls to show: </p>
    </div>
}

export default App