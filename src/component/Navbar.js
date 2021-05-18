import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css'
import '../CSS/Public.css'

class Navbar extends Component{

    /**
     * 展开隐藏列表
     * @param {表行号} id 
    */
    showDetail(id) {
        var elementId = document.getElementById(id);
        var showEle = elementId.getAttribute("data-show");
        if (showEle == 'true') {
            elementId.style.display = '';
            elementId.setAttribute("data-show", 'false');
        } else if (showEle == 'false') {
            elementId.style.display = 'none';
            elementId.setAttribute("data-show", 'true');
        }
    }
    
    render(){
        return (
            <nav id="nav-container">
                
                <div className="nav-header">
                </div>
                
                <div className="nav-column">
                    <Link to='/home' className="nav-g" onClick={this.showDetail.bind(this,"01")}>首页</Link>                
                    <div id="01" className="nav-d" style={{ display: 'none' }} data-show='true'>
                        {/* <Link to='/home' className="nav-d-c">首页</Link>    
                        <Link to='/home' className="nav-d-c">首页</Link>     */}
                    </div>
                    <Link to='/home' className="nav-g" onClick={this.showDetail.bind(this,"02")}>信息查询</Link>                
                    <div id="02" className="nav-d" style={{ display: 'none' }} data-show='true'>
                        <Link to='/home' className="nav-d-c">基础信息查询</Link>    
                    </div>
                    <Link to='/home' className="nav-g" onClick={this.showDetail.bind(this,"03")}>个人信息</Link>                
                    <div id="03" className="nav-d" style={{ display: 'none' }} data-show='true'>
                        <Link to='/home' className="nav-d-c">浏览</Link>    
                        <Link to='/home' className="nav-d-c">提交</Link>    
                    </div>
                    <Link to='/home' className="nav-g" onClick={this.showDetail.bind(this,"04")}>薪酬福利</Link>                
                    <div id="04" className="nav-d" style={{ display: 'none' }} data-show='true'>
                        <Link to='/home' className="nav-d-c">首页</Link>    
                    </div>
                    <Link to='/home' className="nav-g" onClick={this.showDetail.bind(this,"05")}>招聘管理</Link>                
                    <div id="05" className="nav-d" style={{ display: 'none' }} data-show='true'>
                        <Link to='/home' className="nav-d-c">首页</Link>    
                    </div>
                </div>            
              
            </nav>
        )    
    }

}
export default Navbar;