import React, { Component } from 'react';
import Qs from 'qs';
import { reqLogin, reqJobList } from '../../public/api/ReqApi'
import '../../CSS/Personal.css'
import '../../CSS/Animation.css'

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }
    check = (account,password) => {
        if (password.value.length < 6) {
            console.log(account.value, password.value)
            this.setState({ error: "账号密码格式错误" });
            return false;
        }
        return true;
    }
    logining() {
        console.log('logining: ')
        reqLogin(Qs.stringify({
            account: this.props.workPlace,
            passWord: this.props.station
        }), 'POST')
            .then((res) => {
                console.log('login success ',);
                // this.props.history.push({ pathname: '/jobList', station: '技术' });
                return true;
            })
            .catch((e) => {
                this.setState({ error: "账号或密码错误" });
                return false;
            });
    }
    loginCheck(param) {
        this.props.token(param);
    }
    login = () => {
        var account = document.getElementById('account');
        var password = document.getElementById('password');
        if (!this.check(account,password)) {
            return;
        }
        this.loginCheck('pass');
    }
    render() {
        return (
            <div className="personal-container">
                {/* 配合 -fadeinT 异常 */}
                <div className="personal-g">
                    <span>账号登陆</span>
                    <div className="personal-f">
                        <div>
                            <label htmlFor="account" className="for-a"></label>
                            <input id="account" type="text" placeholder="请输入账号"></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="for-p"></label>
                            <input id="password" type="text" placeholder="请输入密码"></input>
                        </div>
                        <div style={{ display: "block", width: "380px", height: "50px", position: "absolute", textAlign: "center" }}>
                            <span style={{ color: "red" }}>{this.state.error}</span>
                        </div>
                        <div className="personal-btn" onClick={this.login}>登录</div>
                        <div className="personal-options ">
                            <span><a href="/">忘记密码</a></span>
                            <span>还没有账号？</span>
                            <span><a href="/">注册账号</a></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Personal;