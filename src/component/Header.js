import React, {Component} from 'react';
import Singleton  from '../public/cache/Singleton'
import {observer,inject,Provider} from 'mobx-react'
import '../CSS/Header.css'

@observer
@inject('dataContainer')
class Header extends Component{

    render(){
        console.log('header props:', this.props)
        return (
            <div id="header-container">
                <div id="header-l">
                    <span className="fa-reorder"></span>
                    <span>员工自主服务平台</span>
                </div>
                <div id="header-r">
                    <input placeholder="手机/工号/姓名"></input>
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
export default Header;
