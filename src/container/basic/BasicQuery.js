import React, {Component} from 'react';
import {observer,inject,Provider} from 'mobx-react'
import {itemName} from '../../static/ItemName'
import {Item} from '../../static/Item'
import Qs from 'qs'
import {reqPersonal,reqBasic} from '../../public/api/ReqApi'
import '../../CSS/Browse.css'


@observer
@inject('dataContainer')
class BasicQuery extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            bData:{}
        }
    }
    getData = (e) =>{
        console.log('query get data：')        
        if(e.charCode == 13){
            var input = document.getElementById('browse-input');
            console.log(input.value)
            reqPersonal(Qs.stringify({
                account: input.value,
                token: 'home login'+Math.random()
            }), 'POST')
            .then((res) => {
                this.setState({data:res.data})
            })
            .catch((e) => {
                this.setState({data:null,bData:null,});
                console.log('网络错误,请重试', e)
            });
            
            reqBasic(Qs.stringify({
                account: input.value,
                token: 'home login'+Math.random()
            }), 'POST')
            .then((res) => {
                this.setState({bData:res.data})
            })
            .catch((e) => {
                this.setState({data:null,bData:null,});
                console.log('网络错误,请重试', e)
            });
    
        }
    }
    componentDidMount(){
        this.setState({
            data:null,
            bData:null,
            // data:this.props.dataContainer.data,
            // bData:this.props.dataContainer.basicData,
        });
    }
    render(){
        const {basic,jobinfo,workin,workout,eduinfo,member,skill} = itemName;
        const {data,bData} = this.state;
        console.log(data,bData,this.state)
        var show = (data !== null && data !== {} && data !== '' && bData !== {} && bData !== null && bData !== '' )?(
            <div>
                <div className="browse-g">
                    <span>基础信息</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{basic[0]}：{bData.userName}</div>
						<div>{basic[1]}：{bData.sex}</div>
						<div>{basic[2]}：{bData.birthday}</div>
                        <div>{basic[3]}：{bData.nativePlace}</div>
						<div>{basic[4]}：{bData.nation}</div>
						<div>{basic[5]}：{bData.nationality}</div>
                        <div>{basic[6]}：{bData.highestEdu}</div>
						<div>{basic[7]}：{bData.highestDegree}</div>
						<div>{basic[8]}：{bData.idType}</div>
                        <div>{basic[9]}：{bData.idNum}</div>
						<div>{basic[10]}：{bData.enName}</div>
						<div>{basic[11]}：{bData.phone}</div>
                        <div>{basic[12]}：{bData.phoneTemp}</div>
						<div>{basic[13]}：{bData.email}</div>
						<div>{basic[14]}：{bData.politicalStatus}</div>
                        <div>{basic[15]}：{bData.contactTemp}</div>
						<div>{basic[16]}：{bData.contactPhoneTemp}</div>
						<div>{basic[17]}：{bData.maritalStatus}</div>
                        <div>{basic[18]}：{bData.homeAddress}</div>
						<div>{basic[19]}：{bData.registeredAddress}</div>
						<div>{basic[20]}：{bData.salary}</div>
                        <div>{basic[21]}：{bData.loginPhone}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>职务信息</span>
                    <div className="line"></div>
                    <div className="browse-content">
                    <div>{jobinfo[0]}：{data.company}</div>
						<div>{jobinfo[1]}：{data.department}</div>
						<div>{jobinfo[2]}：{data.station}</div>
                        <div>{jobinfo[3]}：{data.job}</div>
						<div>{jobinfo[4]}：{data.rank}</div>
						<div>{jobinfo[5]}：{data.base}</div>
                        <div>{jobinfo[6]}：{data.entryDate}</div>
						<div>{jobinfo[7]}：{data.internship}</div>
						<div>{jobinfo[8]}：{data.officialDate}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>内部工作经历</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workin[0]}：{data.inBeginTime}</div>
						<div>{workin[1]}：{data.inEndTime}</div>
						<div>{workin[2]}：{data.inDepartment}</div>
                        <div>{workin[3]}：{data.inStation}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>外部工作经历</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workout[0]}：{data.outBeginTime}</div>
						<div>{workout[1]}：{data.outEndTime}</div>
						<div>{workout[2]}：{data.outCompany}</div>
                        <div>{workout[3]}：{data.outDepartment}</div>
						<div>{workout[4]}：{data.outStation}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>教育信息</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{eduinfo[0]}：{data.eduBeginTime}</div>
						<div>{eduinfo[1]}：{data.eduEndTime}</div>
						<div>{eduinfo[2]}：{data.school}</div>
                        <div>{eduinfo[3]}：{data.edu}</div>
						<div>{eduinfo[4]}：{data.major}</div>
						<div>{eduinfo[5]}：{data.eduMode}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>家庭成员</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{member[0]}：{data.relation}</div>
						<div>{member[1]}：{data.otherName}</div>
						<div>{member[2]}：{data.otherSex}</div>
                        <div>{member[3]}：{data.otherBirthday}</div>
						<div>{member[4]}：{data.otherNationality}</div>
						<div>{member[5]}：{data.otherPhone}</div>
                        <div>{member[6]}：{data.otherAddress}</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>证书技能</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{skill[0]}：{data.certName}</div>
						<div>{skill[1]}：{data.certLevel}</div>
						<div>{skill[2]}：{data.certTime}</div>
                        <div>{skill[3]}：{data.dueDate}</div>
						<div>{skill[4]}：{data.appendixSize}</div>
						<div>{skill[5]}：{data.appendixType}</div>
                        <div>{skill[6]}：{data.comments}</div>
                    </div>
                </div>
            </div>
        ):(
            <div className='error'>未查询到该用户&nbsp;&nbsp;(*&gt;﹏&lt;*)</div>
        );
        
        return (
            <div id="browse-container">
                <div className="up" onClick={()=>window.scrollTo(0,0)}></div>
                <div className="browse-qu-header browse-qu-g home-g">
                    <div >
                        <input id="browse-input" placeholder="手机/工号/姓名" onKeyPress={this.getData}></input>                    
                    </div>
                </div>
                <div className="browse-qu-content browse-qu-g home-g">                    
                    {show}
                </div>
            </div>
        )
    }
}
export default BasicQuery;
