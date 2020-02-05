import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ManageLeaveServiceService } from '../../manage-leave-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
//import * as _ from "lodash"; used to compare two objects
@Component({
  selector    : 'app-generation',
  templateUrl : './generation.component.html',
  styleUrls   : ['./generation.component.scss']
})
export class GenerationComponent implements OnInit {

  constructor(
    public service              : ManageLeaveServiceService,/**/
    public serverService        : GetDataFromApiService,/*This service is Used for HTTP request*/
    private state               : StateService,/* state related service like the company details , progress bar setup etc */
    public modal                : ModalService/* For error and success popup */,
    public commonFunctionService: CommonFunctionService, /* sweet alert and the common functions used throughout the project like
    employee index etc*/
  ) { }
 
  updateEncashEl = () => {
    for (var i in this.service.employeeDetails) {
      for (var j in this.service.dataForTable) {
        if (this.service.dataForTable[j].employeeId == this.service.employeeDetails[i].employeeId) {
          this.service.employeeDetails[i] = JSON.parse(JSON.stringify(this.service.dataForTable[j]));        
        }
      }
    }
    //console.log(this.service.employeeDetails);
    // function to save the updated details
    this.commonFunctionService.simpleSweetAlert("Successful", "You have Updated the Earned Leaves", "success")
  }

  /*Function for Search bar*/
  filterLeaveTable(event) {
    this.service.dataForTable = event.target.value ? this.service.employeeDetails.filter(elem => {
      // let text = elem.balanceLeaves.toString();
      // console.log(text)

      if (elem.employeeName.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1 ||
        elem.employeeId.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1 ||
        elem.division.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1 ||
        ('' + elem.balanceLeaves).toLowerCase().indexOf(event.target.value.toLowerCase()) != -1 ||
        //shorthand for typecasting of number to string
        elem.department.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1) {
        return true
      } else {
        return false
      }
    }) : this.service.employeeDetails
  }

  checkEncashEL = _Row => { 
    let _EmpIndexFromHoldArray  = this.commonFunctionService.getObjIndexInArray(this.service._HoldEmployeeDetails, 'employeeId', _Row.employeeId);
    let _Index                  = this.commonFunctionService.getObjIndexInArray(this.service.dataForTable, 'employeeId', _Row.employeeId);

    this.service.dataForTable[_Index].encashElChanged = false;
    if (_Row.earnedLeavesEncashed != this.service._HoldEmployeeDetails[_EmpIndexFromHoldArray].earnedLeavesEncashed) {
      this.service.dataForTable[_Index].encashElChanged = true;
    }

    if ((_Row.earnedLeavesEncashed > this.service._HoldEmployeeDetails[_EmpIndexFromHoldArray].balanceLeaves) || _Row.earnedLeavesEncashed < 0) {
      this.service.dataForTable[_Index].encashedAmount = "Invalid EL Count"; 
    } else {
      this.service.calculateEncashElAmount(_Index);
      this.service.empArrayForServerCall[_EmpIndexFromHoldArray].earnedLeavesEncashed = _Row.earnedLeavesEncashed;
      this.service.empArrayForServerCall[_EmpIndexFromHoldArray].earnedLeavesEncashed = JSON.parse(JSON.stringify(_Row.earnedLeavesEncashed));
      console.log(_Row.earnedLeavesEncashed);
      console.log( this.service.empArrayForServerCall[_EmpIndexFromHoldArray].earnedLeavesEncashed)
      this.service.empArrayForServerCall[_EmpIndexFromHoldArray].encashedAmount = _Row.encashedAmount;
    }
  }




  dataNotChanged;

  upsertleavesEncashed = () =>{
    this.state.progressBarStart();
    this.service.disabledButtonAndField = true;
    let companyId                       = this.service.companyDetails["CompanyId"];
    let companyLocationId               = this.service.leaveManageObj.slctdLocation.companyLocationId;
    let _EmpDetails                     = [];
    for(var i in this.service.empArrayForServerCall){
      if(this.service.empArrayForServerCall[i].earnedLeavesEncashed > 0 ){
        console.log(this.service.empArrayForServerCall[i].earnedLeavesEncashed)
        _EmpDetails.push(this.service.empArrayForServerCall[i]);
      }
    }
    let request = { 
      companyId, 
      formId: this.service.formId,
      companyLocationId,
      empDetails : _EmpDetails
    };
    this.serverService
      .post({ request }, "leaveEncashmentModule/upsertleavesEncashed", {
        module: "humanResource"
      })
      .subscribe(data => {
        this.state.progressBarStop();
        this.service.disabledButtonAndField = false;
        if (data["response"]) {
          this.commonFunctionService.simpleSweetAlert("Successful",data.response);
          this.service.resetData();
        }
        if(data.errorTitle){
          this.commonFunctionService.simpleSweetAlert(data.errorTitle,data.errorContent,"danger");
        }
      }); 
  }

  ngOnInit() {
    this.dataNotChanged = () =>{
      let count = 1;
      for (var i in this.service._HoldEmployeeDetails) {
        for (var j in this.service.dataForTable) {
          if(this.service.dataForTable[j].employeeId == this.service._HoldEmployeeDetails[i].employeeId){
            // if (this.service.dataForTable[j].earnedLeavesEncashed != this.service._HoldEmployeeDetails[i].earnedLeavesEncashed) {
            //   count = 1;
            // }
            if(this.service.dataForTable[j].earnedLeavesEncashed > this.service._HoldEmployeeDetails[i].balanceLeaves){
              count = 0;
            }
          }else if(this.service.dataForTable[j].earnedLeavesEncashed == null || this.service.dataForTable[j].earnedLeavesEncashed < 0){
            count = 0;
          }
        }
      }
      return count;
    }
  }
}