import React, {Component} from 'react';
import * as echarts from 'echarts'
import {reqAnSex} from '../../public/api/ReqApi'
import Qs from 'qs'
import '../../CSS/Analysis.css'

class AnAility extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            error:''
        }
    }
    componentDidMount(){
        reqAnSex(Qs.stringify({
            account: 666,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            this.setState({data:res.data})
            pie.series[0].data['0'].value = res.data.man;
            pie.series[0].data['1'].value = res.data.woman;
        })
        .catch((e) => {
            this.setState({error:'网络错误,请重试'});
            console.log('网络错误,请重试', e)
        });


        var chartDom = document.getElementById('pie');
        var myChart = echarts.init(chartDom);
        myChart.setOption(pie)
    }
    render(){
        // pie.series[0].data['0'].value = 9;
        // pie.series[0].data['1'].value = 1;
        // console.log(pie.series[0].data);
        // console.log(this.state.data.man)
        return (
            <div id="ana-container">
                <div className="ana-g">
                    <div id="pie">#</div>
                </div>
                {this.state.error}
            </div>
        )
    }


}
export default AnAility;

const pie = {
    title: {
        text: '男女比例',
        subtext: '---',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源：员工基础信息表',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 5, name: '女'},
                {value: 5, name: '男'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};