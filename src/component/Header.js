import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Singleton  from '../public/cache/Singleton'
import {observer,inject,Provider} from 'mobx-react'
import '../CSS/Header.css'

@observer
@inject('dataContainer')
class Header extends Component{
    constructor(){
        super()
        this.state = {
            showAcc:''
        }
    }
    goBasicQuery = (e) =>{
        if(e.charCode == 13){
            console.log('goBasicQuery');
            var input = document.getElementById('header-input')
            console.log(this.props)
            this.props.history.push({pathname:'/basicQuery',query:input.value});
        }
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('header update')
    //     return true;
    // }
    componentDidMount(){
        this.setState({showAcc:this.props.dataContainer.loginAcc})
    }
    // componentDidUpdate(prevProps) {
    //     console.log('header update',this.props.dataContainer.loginAcc)
    //     if (this.props.dataContainer.loginAcc!== prevProps.dataContainer.loginAcc) { // 比较前后props
    //         this.setState({showAcc:this.props.dataContainer.loginAcc})
    //         // this.setState(function(){  // 如果props发生变化，调用setState()
    //         //         return {showAcc:this.props.dataContainer.loginAcc}
    //         // })
    //     }
    // }
    render(){
        console.log('header props:', this.props,this.state)
        return (
            <div id="header-container">
                <div id="header-l">
                    {/* <i className="fa-reorder">i</i> */}
                    <span>员工自主服务平台</span>
                </div>
                <div id="header-r">
                    <input id="header-input" placeholder="手机/工号/姓名" onKeyPress={this.goBasicQuery}></input>
                    <span>欢迎!&nbsp;&nbsp;{this.props.dataContainer.loginAcc}</span>
                </div>
            </div>
            // <div id="header-container">
            //     <span className="fa-reorder"></span>
            //     <span>员工自主服务平台</span>
            //     <input placeholder="手机/工号/姓名"></input>
            //     <span>姓名  编号</span>
            // </div>
        )
    }

    
}
export default withRouter(Header);
