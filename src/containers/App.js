import React, { Fragment, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users }));
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render(){
        const { robots, searchField } = this.state;
        const isRobotsEmpty = !robots.length;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isRobotsEmpty ?
            <Fragment>
                <header className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                </header>
                <h1 className='tc f2'>loading...</h1>
            </Fragment>
            :(
            <Fragment>
                <header className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </header>
                <Scroll>  
                    <ErrorBoundry>  
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>
                </Scroll>
            </Fragment>
            );
        }   
    }   


export default App;