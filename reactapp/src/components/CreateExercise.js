import React, { Component } from 'react'

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: '',
            date: new Date(),
            user: []
        }

    }
    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }
    
    isChangeData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }
    onSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };
        console.log(exercise)

    }
    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                
            </div>
        )
    }
}
