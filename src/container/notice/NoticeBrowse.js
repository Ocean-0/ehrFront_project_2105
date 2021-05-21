import React, {Component} from 'react';
import {reqNotice} from '../../public/api/ReqApi'
import {observer,inject,Provider} from 'mobx-react'
import Qs from 'qs'
import '../../CSS/Notice.css'

class NoticeBrowse extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            bData:{},
            cDate:{},
            error:''
        }
    }
        /**
     * 展开隐藏列表
     * @param {表行号} id 
     * @param {*} event 
     */
    showJobDetail(id, event) {
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
    deleteNotice = (id) => {
        console.log('delete notice',id)
    }
    componentDidMount(){
        reqNotice(Qs.stringify({
            account: 666,
            token: 'home login'+Math.random()
        }), 'POST')
        .then((res) => {
            this.setState({data:res.data})
        })
        .catch((e) => {
            this.setState({data:null,bData:null,error:'网络错误,请重试'});
            console.log('网络错误,请重试', e)
        });

    }
    render(){
        const {data,bData,cDate,error} = this.state;
        console.log('notice',data)
        let context = this;
        const dataList = data.length > 0 ? (
            data.map(function(d){
                let art01 = d.art01;
                let art02 = d.art02;
                let art03 = d.art03;
                let art04 = d.art04;
                let art05 = d.art05;
                return (
                    <div key={d.rowId}>
                        <div className="notice-c-h">
                            <span>{d.noticeTitle}</span>
                            <span>{d.noticeDate}</span>
                            <span className="arrow-down" onClick={context.showJobDetail.bind(context, d.rowId)}></span>
                        </div>
                        <div className="line"></div>
                        <div id={d.rowId} className="notice-c-c" style={{ display: 'none' }} data-show='true'>
                            <h1 style={{fontSize:'25px'}}>{d.noticeTitle}</h1>
                            <br/>
                            <p dangerouslySetInnerHTML={{ __html: art01 }}></p>
                            <br/>
                            <p dangerouslySetInnerHTML={{ __html: art02 }}></p>
                            <p dangerouslySetInnerHTML={{ __html: art03 }}></p>
                            <p dangerouslySetInnerHTML={{ __html: art04 }}></p>
                            <p dangerouslySetInnerHTML={{ __html: art05 }}></p>
                            <div className="notice-btn" onClick={context.deleteNotice.bind(context,d.rowId)}>删除</div>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="error">
                {this.state.error}
            </div>
        );
        return (
            <div id="notice-container">
                <div className="notice-h">
                    <span>公告</span>
                </div>
                {dataList}
            </div>
        );
    }
}
export default NoticeBrowse;