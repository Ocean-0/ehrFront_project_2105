import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import App from '../App';
import Personal from '../container/personal/Personal'


class Main extends Component{
    constructor(){
        super();
        this.state = {
            token: ""
        }
        this.loginCheck = this.loginCheck.bind(this);
    }
    loginCheck(tokenId){
        console.log("tokenid:",tokenId)
        this.setState({token:tokenId});
    }
    render(){
        if(this.state.token === "pass"){
            return (
                <App/>
                // <Redirect exact to='/user' />
            );
        }
        return (
            <Personal token={this.loginCheck}/>
        );
    }
}
export default Main;   