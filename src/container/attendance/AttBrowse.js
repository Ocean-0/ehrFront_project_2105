import React, {Component} from 'react';
import * as echarts from 'echarts'
import { DatePicker, Space } from 'antd';
import {reqAttCount} from '../../public/api/ReqApi'
import {observer,inject,Provider} from 'mobx-react'
import Qs from 'qs'
import '../../CSS/Attendance.css'

@observer
@inject('dataContainer')
class AttBrowse extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            bData:{},
            cDate:{},
            error:''
        }
    }
    componentDidUpdate(){
        this.reqBack();
    }

    componentDidMount(){
        this.reqBack();
    }
    reqBack = () => {
        reqAttCount(Qs.stringify({
            account: this.props.dataContainer.loginAcc,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            console.log('att did mount：',res.data)
            option.series.data = res.data;
            this.countDate(res.data);
            this.setState({
                data:res.data,
                cDate:this.countDate(res.data,150,30,20),
                error:''
            })
        })
        .catch((e) => {
            this.setState({error:'网络错误,请重试'});
            console.log('网络错误,请重试', e)
        });
        var chartDom = document.getElementById('timeMap');
        var myChart = echarts.init(chartDom);
        myChart.setOption(option)
    }
    countDate = (arr,salary,subsidy,meal) => {
        var index = 0;
        var count = 0;
        var sum_subsidy = 0;
        // 5月代表4月
        var oldMounth = new Date().getMonth() - 1;
        var result = {};
        console.log(oldMounth)
        for(index; index < arr.length; index++){
            if(oldMounth == new Date(Date.parse(arr[index][0])).getMonth()){
                console.log('countDate：',arr[index][0],new Date(Date.parse(arr[index][0])).getMonth(),arr[index][1])
                if(arr[index][1] > 8){
                    sum_subsidy += ((arr[index][1] - 8) * subsidy );
                }
                count++;
            }
        }
        index = null;
        oldMounth = null;
        result.workDate = count;
        result.freeDate = 30 - count;
        result.sum_subsidy = sum_subsidy;
        result.meal_supply = meal * count;
        result.pay = salary * count;
        return result;
    }
    // pickDate = (date, dateString) => {
    //     console.log(date, dateString);
    // }
    render(){
        return (
            // id => class 组件空间width将占据页面
            <div id="att-container">
                <div className="att-g att-header">
                    <div id="timeMap">#</div>
                </div>
                <div className="att-g att-c">
                    {/* <div className="ant-tabs">
                        <DatePicker renderExtraFooter={() => 'extra footer'} />
                        <DatePicker style={{ width: 120 }} getPopupContainer={this.props.root} popupStyle={{zIndex:9999,position:'relative',right:'500px'}}/>
                    </div> */}
                    <div className="att-c-header">
                        <span className="font-b">上月工资：</span>
                        <span>工作天数</span>
                        <span>请假天数</span>
                        <span>加班补贴</span>
                        <span>食堂补贴</span>
                        <span>实发工资</span>
                    </div>
                    <div className="line"></div>
                    <div className="att-c-header">
                        <span className="font-b">&gt;</span>
                        <span>{this.state.cDate.workDate}</span>
                        <span>{this.state.cDate.freeDate}</span>
                        <span>{this.state.cDate.sum_subsidy}</span>
                        <span>{this.state.cDate.meal_supply}</span>
                        <span>{this.state.cDate.sum_subsidy}+{this.state.cDate.meal_supply}+{this.state.cDate.pay}={this.state.cDate.sum_subsidy+this.state.cDate.meal_supply+this.state.cDate.pay}</span>
                    </div>
                    <div className="att-c-header">
                        <span className="font-b">本月工资：</span>
                        <span>工作天数</span>
                        <span>请假天数</span>
                        <span>加班补贴</span>
                        <span>食堂补贴</span>
                        <span>实发工资</span>
                    </div>
                    <div className="line"></div>
                    <div className="att-c-header">
                        <span className="font-b">&gt;</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}
export default AttBrowse;


const option = {
    title: {
        top: 30,
        left: 'center',
        text: '2021年每日工作时长（小时）'
    },
    tooltip: {},
    visualMap: {
        min: 6,
        max: 11,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2021',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [['2021-01-01', 6], ['2021-01-03', 7.9], ['2021-01-02', 11]]
    }
};