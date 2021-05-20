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
            error:''
        }
    }
    componentDidMount(){
        console.log(this.props.dataContainer.loginAcc)
        reqAttCount(Qs.stringify({
            account: this.props.dataContainer.loginAcc,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            console.log('att did mount：',res.data)
            option.series.data = res.data;
            this.setState({
                data:res.data,
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
    pickDate = (date, dateString) => {
        console.log(date, dateString);
    }
    render(){
        return (
            // id => class 组件空间width将占据页面
            <div id="att-container">
                <div className="att-g att-header">
                    <div id="timeMap">#</div>
                </div>
                <div className="att-g att-c">
                    <div className="ant-tabs">
                        {/* <DatePicker renderExtraFooter={() => 'extra footer'} /> */}
                        <DatePicker style={{ width: 120 }} getPopupContainer={this.props.root} popupStyle={{zIndex:9999,position:'relative',right:'500px'}}/>
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