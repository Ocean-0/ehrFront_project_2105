import React, {Component} from 'react';
import '../CSS/Header.css'

class Header extends Component{

    render(){
        return (
            <div id="header-container">
                <span className="fa-reorder"></span>
                <span>员工自主服务平台</span>
                    <input placeholder="手机/工号/姓名"></input>
                <span>姓名  编号</span>
            </div>
        )
    }

    
}
export default Header;
