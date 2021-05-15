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
    check = (account, password) => {
        if (password.value.length < 6) {
            this.setState({ error: "账号密码格式错误" });
            return false;
        }
        return true;
    }
    logining = (account, password) => {
        reqLogin(Qs.stringify({
            account: account.value,
            passWord: password.value
        }), 'POST')
            .then((res) => {
                console.log('login success ', res.data, res.data != 'connection');
                if (res.data != 'connection') {
                    this.loginFail('error');
                    return false;
                }
                this.loginSuccess('pass',account.value);
                return true;
            })
            .catch((e) => {
                // this.setState({ error: "请刷新页面重试" });
                return false;
            });
    }
    loginSuccess = (param,accountId) => {
        this.props.token(param,accountId);
    }
    loginFail = (param) => {
        this.setState({ error: "账号或密码错误" });
    }
    login = () => {
        var account = document.getElementById('account');
        var password = document.getElementById('password');
        // check01
        if (!this.check(account,password)) {
            return;
        }
        // check02
        this.logining(account,password);
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