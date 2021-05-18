import React, {Component} from 'react';
import {observer,inject,Provider} from 'mobx-react'
import {itemName} from '../../static/ItemName'
import {Item} from '../../static/Item'


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
        const basic = itemName.basic;
        const jobinfo = itemName.jobinfo;
        const workin = itemName.workin;
        const workout = itemName.workout;
        const eduinfo = itemName.eduinfo;
        const member = itemName.member;
        const skill = itemName.skill;
        return (
            <div id="browse-container">BasicBrowse
                
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