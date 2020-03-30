import React from 'react';//import react
import axios from 'axios';//import axios for getting API
import './App.css';//import stylesheet
class App extends React.Component {//build app
    state = {
        advice: ''
    };//set a state: global object containing the most important things of that component
    componentDidMount() {
        this.fetchAdvice();//call function fetchAdvice
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')//fetch API
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });//set advice defined in fetchAdvice to advice in state
            })//fetch data from API
            .catch((error) => {
                console.log(error);
            });//error function
    }
    render() {
        const { advice } = this.state;//fetch advice from function and display it
        return (
            <div className="app" >
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="but" onClick={this.fetchAdvice} > 
                        <span>MAKE MY DAY!</span>
                    </button>
                </div>
            </div >
        )//class of advice
        

    }
}

export default App;