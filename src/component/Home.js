import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Singleton  from '../public/cache/Singleton'
import Qs from 'qs'
import {reqPersonal,reqBasic} from '../public/api/ReqApi'
import '../CSS/Home.css'
import '../CSS/Public.css'

import {observer,inject,Provider} from 'mobx-react'

@observer
@inject('dataContainer')
class Home extends Component{
    constructor(){
        super();
        this.state = {
            change:false,
            data:{},
            bData:{}
        }
    }
    componentDidMount(){
        console.log('home didmount: ',this.props)
        reqPersonal(Qs.stringify({
            account: this.props.dataContainer.loginAcc,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            console.log('home getData', res.data);
            this.props.dataContainer.setData(res.data);
            this.setState({data:res.data})
        })
        .catch((e) => {
            console.log('网络错误,请重试', e)
        });
        
        reqBasic(Qs.stringify({
            account: this.props.dataContainer.loginAcc,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            console.log('home getData02', res.data);
            this.props.dataContainer.setBasicData(res.data);
            this.setState({bData:res.data})
        })
        .catch((e) => {
            console.log('网络错误,请重试', e)
        });

    }

    render(){
        console.log('home props:',this.props)
        // 不能及时更新
        // const {data}  = this.props.dataContainer.data;
        // 解构失败？
        // const {myState} = this.state.data;
        // console.log(myState)
        const {change,data,bData} = this.state

        return (
            <div id="home-container">
                <div className="home-header home-g">
                    <div>
                        <div>{bData.userName+" - "+bData.jobNum}</div>
                        <div>{data.station}</div>
                        <div>{data.job}</div>
                    </div>
                </div>
                <div className="home-body home-g">
                    <span>常用功能</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="home-content">
                        <div className="home-l home-c-g">
                            <div>
                                <Link to='/home' className="">基本信息</Link> 
                            </div>
                            <div>
                                <Link to='/home' className="">假期信息</Link> 
                            </div>
                            <div>
                                <Link to='/home' className="">餐费查询</Link> 
                            </div>
                            <div>
                                <Link to='/home' className="">员工查询</Link> 
                            </div>
                            <div>
                                <Link to='/home' className="">组织架构</Link> 
                            </div>
                            <div>
                                <Link to='/home' className="">实习生薪资调整申请</Link> 
                            </div>
                        </div>
                        <div className="home-r home-c-g">                            
                            <div>
                                <Link to='/home' className="">签到</Link> 
                            </div>
                        </div>                    
                    </div>
                    <div className="line"></div>
                </div>
            </div>
        )
    }

}
export default Home;