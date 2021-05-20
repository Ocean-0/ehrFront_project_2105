import React, {Component} from 'react';
import * as echarts from 'echarts'
import {reqAnSex,reqAnAbility,reqAnEdu} from '../../public/api/ReqApi'
import Qs from 'qs'
import '../../CSS/Analysis.css'

class AnAility extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            data3:{},
            error:''
        }
    }
    pentagon_instance = null;

    getData = (e) =>{      
        if(e.charCode == 13){
            var input = document.getElementById('ana-input');
            reqAnAbility(Qs.stringify({
                account: input.value,
                token: 'home login'+Math.random()
            }), 'POST')
            .then((res) => {
                this.newArr(res.data)
                this.setState({
                    error:''
                })
            })
            .catch((e) => {
                this.setState({error:'未查询到该用户,请重试'});
            });    
        }
    }
    newArr = (arr) =>{
        var [a, ...rest] = arr;
        pentagon.title.text = a + ' > 能力审核';
        pentagon.series[0].data[0].value = rest;
        // pentagon.series[0].data[0].value = [1, 2.3, 4.6, 8.9, 5.4];
        console.log('new arr：',a,rest)
        if(this.pentagon_instance !== null  && this.pentagon_instance != "" && this.pentagon_instance != undefined){
            this.pentagon_instance.dispose();
        }
        var pentagon01Dom = document.getElementById('pentagon');
        this.pentagon_instance = echarts.init(pentagon01Dom);
        // var pentagon01 = echarts.init(pentagon01Dom);
        this.pentagon_instance.setOption(pentagon)
        // pentagon01.setOption(pentagon)
    }
    componentDidMount(){
        reqAnSex(Qs.stringify({
            account: 666,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            this.setState({
                data:res.data,
                error:''
            })
            pie.series[0].data['0'].value = res.data.man;
            pie.series[0].data['1'].value = res.data.woman;
        })
        .catch((e) => {
            this.setState({error:'网络错误,请重试'});
            console.log('网络错误,请重试', e)
        });
        reqAnEdu(Qs.stringify({
            account: 666,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            this.setState({
                data:res.data,
                error:''
            })
            report.series[0].data = res.data;
        })
        .catch((e) => {
            this.setState({error:'网络错误,请重试'});
            console.log('网络错误,请重试', e)
        });


        var chartDom = document.getElementById('pie');
        var myChart = echarts.init(chartDom);
        myChart.setOption(pie)

        var report01Dom = document.getElementById('report');
        var report01 = echarts.init(report01Dom);
        report01.setOption(report)

        var pentagon01Dom = document.getElementById('pentagon');
        var pentagon01 = echarts.init(pentagon01Dom);
        this.pentagon_instance = pentagon01;
        pentagon01.setOption(pentagon)
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
                    <div id="report">#</div>
                </div>
                <div className="ana-g ana-c">
                    <div id="pentagon">#</div>
                    <div className="ana-c-c">
                        <input id="ana-input" placeholder="工号" onKeyPress={this.getData}></input>                    
                    </div>
                </div>
                <span className="error">{this.state.error}</span>
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

const report = {
    title: {
        text: '学历分布'
    },
    tooltip: {},
    legend: {
        data:['学历分布']
    },
    xAxis: {
        data: ["中专","大专","本科","硕士","博士","博士后"]
    },
    yAxis: {},
    series: [{
        name: '学历',
        type: 'bar',
        data: [5, 5, 5, 5, 5, 5]
    }
    // ,
    // {
    //     name: '学历',
    //     type: 'bar',
    //     data: [5, 5, 5, 5, 5, 5]
    // }
    ]
};

const pentagon = {
    title: {
        text: '员工能力审核'
    },
    legend: {
        data: ['员工', '及格线（pass line）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '沟通（Communicate）', max: 10},
            { name: '管理（Administration）', max: 10},
            { name: '团队（Team）', max: 10},
            { name: '研发（Development）', max: 10},
            { name: '效率（Efficiency）', max: 10}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [6, 6, 6, 6, 6, 6],
                name: '员工'
            },
            {
                value: [4.5, 4.5, 4.5, 4.5, 4.5, 4.5],
                name: '及格线（pass line）'
            }
        ]
    }]
};