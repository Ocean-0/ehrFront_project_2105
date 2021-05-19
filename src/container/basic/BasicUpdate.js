import React, {Component} from 'react';
import {observer,inject,Provider} from 'mobx-react'
import {itemName} from '../../static/ItemName'
import {Item} from '../../static/Item'
import '../../CSS/Browse.css'


@observer
@inject('dataContainer')
class BasicUpdate extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            bData:{}
        }
    }
    componentDidMount(){
        this.setState({
            data:this.props.dataContainer.data,
            bData:this.props.dataContainer.basicData,
        });
    }

    render(){
        const {basic,jobinfo,workin,workout,eduinfo,member,skill} = itemName;
        const {data,bData} = this.state;
        return (
            <div id="browse-container">
                <div className="browse-g">
                    <span>基础信息</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content browse-up-box">
                        <div>{basic[0]}：<input type="text" className="browse-up-c" placeholder={bData.userName}></input></div>
						<div>{basic[1]}：<input type="text" className="browse-up-c" placeholder={bData.sex}></input></div>
						<div>{basic[2]}：<input type="text" className="browse-up-c" placeholder={bData.birthday}></input></div>
                        <div>{basic[3]}：<input type="text" className="browse-up-c" placeholder={bData.nativePlace}></input></div>
						<div>{basic[4]}：<input type="text" className="browse-up-c" placeholder={bData.nation}></input></div>
						<div>{basic[5]}：<input type="text" className="browse-up-c" placeholder={bData.nationality}></input></div>
                        <div>{basic[6]}：<input type="text" className="browse-up-c" placeholder={bData.highestEdu}></input></div>
						<div>{basic[7]}：<input type="text" className="browse-up-c" placeholder={bData.highestDegree}></input></div>
						<div>{basic[8]}：<input type="text" className="browse-up-c" placeholder={bData.idType}></input></div>
                        <div>{basic[9]}：<input type="text" className="browse-up-c" placeholder={bData.idNum}></input></div>
						<div>{basic[10]}：<input type="text" className="browse-up-c" placeholder={bData.enName}></input></div>
						<div>{basic[11]}：<input type="text" className="browse-up-c" placeholder={bData.phone}></input></div>
                        <div>{basic[12]}：<input type="text" className="browse-up-c" placeholder={bData.phoneTemp}></input></div>
						<div>{basic[13]}：<input type="text" className="browse-up-c" placeholder={bData.email}></input></div>
						<div>{basic[14]}：<input type="text" className="browse-up-c" placeholder={bData.politicalStatus}></input></div>
                        <div>{basic[15]}：<input type="text" className="browse-up-c" placeholder={bData.contactTemp}></input></div>
						<div>{basic[16]}：<input type="text" className="browse-up-c" placeholder={bData.contactPhoneTemp}></input></div>
						<div>{basic[17]}：<input type="text" className="browse-up-c" placeholder={bData.maritalStatus}></input></div>
                        <div>{basic[18]}：<input type="text" className="browse-up-c" placeholder={bData.homeAddress}></input></div>
						<div>{basic[19]}：<input type="text" className="browse-up-c" placeholder={bData.registeredAddress}></input></div>
						<div>{basic[20]}：<input type="text" className="browse-up-c" placeholder={bData.salary}></input></div>
                        <div>{basic[21]}：<input type="text" className="browse-up-c" placeholder={bData.loginPhone}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>职务信息</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{jobinfo[0]}：<input type="text" className="browse-up-c" placeholder={data.company}></input></div>
						<div>{jobinfo[1]}：<input type="text" className="browse-up-c" placeholder={data.department}></input></div>
						<div>{jobinfo[2]}：<input type="text" className="browse-up-c" placeholder={data.station}></input></div>
                        <div>{jobinfo[3]}：<input type="text" className="browse-up-c" placeholder={data.job}></input></div>
						<div>{jobinfo[4]}：<input type="text" className="browse-up-c" placeholder={data.rank}></input></div>
						<div>{jobinfo[5]}：<input type="text" className="browse-up-c" placeholder={data.base}></input></div>
                        <div>{jobinfo[6]}：<input type="text" className="browse-up-c" placeholder={data.entryDate}></input></div>
						<div>{jobinfo[7]}：<input type="text" className="browse-up-c" placeholder={data.internship}></input></div>
						<div>{jobinfo[8]}：<input type="text" className="browse-up-c" placeholder={data.officialDate}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>内部工作经历</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workin[0]}：<input type="text" className="browse-up-c" placeholder={data.inBeginTime}></input></div>
						<div>{workin[1]}：<input type="text" className="browse-up-c" placeholder={data.inEndTime}></input></div>
						<div>{workin[2]}：<input type="text" className="browse-up-c" placeholder={data.inDepartment}></input></div>
                        <div>{workin[3]}：<input type="text" className="browse-up-c" placeholder={data.inStation}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>外部工作经历</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workout[0]}：<input type="text" className="browse-up-c" placeholder={data.outBeginTime}></input></div>
						<div>{workout[1]}：<input type="text" className="browse-up-c" placeholder={data.outEndTime}></input></div>
						<div>{workout[2]}：<input type="text" className="browse-up-c" placeholder={data.outCompany}></input></div>
                        <div>{workout[3]}：<input type="text" className="browse-up-c" placeholder={data.outDepartment}></input></div>
						<div>{workout[4]}：<input type="text" className="browse-up-c" placeholder={data.outStation}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>教育信息</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{eduinfo[0]}：<input type="text" className="browse-up-c" placeholder={data.eduBeginTime}></input></div>
						<div>{eduinfo[1]}：<input type="text" className="browse-up-c" placeholder={data.eduEndTime}></input></div>
						<div>{eduinfo[2]}：<input type="text" className="browse-up-c" placeholder={data.school}></input></div>
                        <div>{eduinfo[3]}：<input type="text" className="browse-up-c" placeholder={data.edu}></input></div>
						<div>{eduinfo[4]}：<input type="text" className="browse-up-c" placeholder={data.major}></input></div>
						<div>{eduinfo[5]}：<input type="text" className="browse-up-c" placeholder={data.eduMode}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>家庭成员</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{member[0]}：<input type="text" className="browse-up-c" placeholder={data.relation}></input></div>
						<div>{member[1]}：<input type="text" className="browse-up-c" placeholder={data.otherName}></input></div>
						<div>{member[2]}：<input type="text" className="browse-up-c" placeholder={data.otherSex}></input></div>
                        <div>{member[3]}：<input type="text" className="browse-up-c" placeholder={data.otherBirthday}></input></div>
						<div>{member[4]}：<input type="text" className="browse-up-c" placeholder={data.otherNationality}></input></div>
						<div>{member[5]}：<input type="text" className="browse-up-c" placeholder={data.otherPhone}></input></div>
                        <div>{member[6]}：<input type="text" className="browse-up-c" placeholder={data.otherAddress}></input></div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>证书技能</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                    <div>{skill[0]}：<input type="text" className="browse-up-c" placeholder={data.certName}></input></div>
						<div>{skill[1]}：<input type="text" className="browse-up-c" placeholder={data.certLevel}></input></div>
						<div>{skill[2]}：<input type="text" className="browse-up-c" placeholder={data.certTime}></input></div>
                        <div>{skill[3]}：<input type="text" className="browse-up-c" placeholder={data.dueDate}></input></div>
						<div>{skill[4]}：<input type="text" className="browse-up-c" placeholder={data.appendixSize}></input></div>
						<div>{skill[5]}：<input type="text" className="browse-up-c" placeholder={data.appendixType}></input></div>
                        <div>{skill[6]}：<input type="text" className="browse-up-c" placeholder={data.comments}></input></div>
                    </div>
                </div>


            </div>
        )
    }
}
export default BasicUpdate;
