import React, {Component} from 'react';
import {observer,inject,Provider} from 'mobx-react'
import {itemName} from '../../static/ItemName'
import {Item} from '../../static/Item'
import '../../CSS/Browse.css'


@observer
@inject('dataContainer')
class BasicBrowse extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            bData:{}
        }
    }
    // copy = () => {
    //     var data = this.props.dataContainer.data;
    //     var bData = this.props.dataContainer.basicData;
    // }
    componentDidMount(){
        // let temp = JSON.stringify(this.props);
        // console.log('browse didmount:',JSON.parse(temp));
        // let tempA = JSON.stringify(this.props.dataContainer.data);
        // let tempB = JSON.stringify(this.props.dataContainer.basicData);

        this.setState({
            data:this.props.dataContainer.data,
            bData:this.props.dataContainer.basicData,
            // data:JSON.parse(tempA),
            // bData:JSON.parse(tempB),
        });
    }
    render(){
        const {basic,jobinfo,workin,workout,eduinfo,member,skill} = itemName;
        const {p,b} = this.state;
        return (
            <div id="browse-container">
                <div className="browse-g">
                    <span>基础信息</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{basic[0]}:</div><div>{basic[1]}:</div><div>{basic[2]}:</div>
                        <div>{basic[3]}:</div><div>{basic[4]}:</div><div>{basic[5]}:</div>
                        <div>{basic[6]}:</div><div>{basic[7]}:</div><div>{basic[8]}:</div>
                        <div>{basic[9]}:</div><div>{basic[10]}:</div><div>{basic[11]}:</div>
                        <div>{basic[12]}:</div><div>{basic[13]}:</div><div>{basic[14]}:</div>
                        <div>{basic[15]}:</div><div>{basic[16]}:</div><div>{basic[17]}:</div>
                        <div>{basic[18]}:</div><div>{basic[19]}:</div><div>{basic[20]}:</div>
                        <div>{basic[21]}:</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>职务信息</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{jobinfo[0]}:</div> <div>{jobinfo[1]}:</div> <div>{jobinfo[2]}:</div>
                        <div>{jobinfo[3]}:</div> <div>{jobinfo[4]}:</div> <div>{jobinfo[5]}:</div>
                        <div>{jobinfo[6]}:</div> <div>{jobinfo[7]}:</div> <div>{jobinfo[8]}:</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>内部工作经历</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workin[0]}:</div> <div>{workin[1]}:</div> <div>{workin[2]}:</div>
                        <div>{workin[3]}:</div>
                    </div>
                </div>
                <div className="browse-g">
                    <span>外部工作经历</span>
                    <span>设置</span>
                    <div className="line"></div>
                    <div className="browse-content">
                        <div>{workout[0]}:</div> <div>{workout[1]}:</div> <div>{workout[2]}:</div>
                        <div>{workout[3]}:</div> <div>{workout[4]}:</div>
                    </div>
                </div>


            </div>
        )
    }
}
export default BasicBrowse;



// render(){
//     const {data,bData} = this.state;
//     console.log('browse render:',this.state,data,bData);
//     var ba = new Array();
//     ba.push(bData.userName);
//     ba.push(bData.sex);
//     ba.push(bData.birthday);
//     ba.push(bData.nativePlace);
//     ba.push(bData.nation);
//     ba.push(bData.nationality);
//     ba.push(bData.highestEdu);
//     ba.push(bData.highestDegree);
//     ba.push(bData.idType);
//     ba.push(bData.idNum);
//     ba.push(bData.enName);
//     ba.push(bData.phone);
//     ba.push(bData.phoneTemp);
//     ba.push(bData.email);
//     ba.push(bData.politicalStatus);
//     ba.push(bData.contactTemp);
//     ba.push(bData.contactPhoneTemp);
//     ba.push(bData.maritalStatus);	
//     ba.push(bData.homeAddress);
//     ba.push(bData.registeredAddress);
//     ba.push(bData.salary);
//     ba.push(bData.loginPhone);
//     return(
//         <div id="browse-container">BasicBrowse
//             <Item label={itemName.basic} arr={ba}/>
//         </div>
//     )
// }