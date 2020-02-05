import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _moment from 'moment';
import { Moment } from 'moment';
import { ManageLeaveServiceService } from './manage-leave-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { anima } from '../manage-leave/animation';
const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Component({
  selector: 'app-manage-leave',
  templateUrl: './manage-leave.component.html',
  styleUrls: ['./manage-leave.component.scss'],
  providers: [ManageLeaveServiceService],
  animations:[anima],
})
export class ManageLeaveComponent implements OnInit {

  constructor(
    public service              : ManageLeaveServiceService,/**/
    public serverService        : GetDataFromApiService,/*This service is Used for HTTP request*/
    private state               : StateService,/* state related service like the company details , progress bar setup etc */
    public modal                : ModalService /* For error and success popup */,
    public commonFunctionService: CommonFunctionService, /* sweet alert and the common functions used throughout the project like
    employee index etc*/
  ) { }

  locations = [];
  allActionTypes = [
    {
      actionId    : 1,
      categoryName: "EL En-Cashment",
      categoryId  : 1,
      actionType  : "Generation",
    },
    {
      actionId    : 2,
      categoryName: "EL En-Cashment",
      categoryId  : 1,
      actionType  : "Voucher",
    },
    {
      actionId    : 3,
      categoryName: "EL En-Cashment",
      categoryId  : 1,
      actionType  : "Payment",
    }
  ];
  getAllLocations() {
    let companyId = this.service.companyDetails["CompanyId"];
    let request   = { companyId, formId: this.service.formId };
    this.serverService
      .post({ request }, "commonUIfunctionsModule/getLocationsForThisUser", {
        module: "vendor"
      })
      .subscribe(data => {
        if (data["response"]) {
          this.locations = data["response"];
        }
      });
  }

  handleMonthElLeaveInCash(ref, event: Moment) {
    this.service.leaveManageObj.slctdLeaveMonth = moment(event).format('MMM-YYYY');;
    ref.close();
  }

  openCalender(ref) {
    ref.open();
  }

  getEmpForLeaveEncash = () => {
    this.state.progressBarStart();
    this.service.disabledButtonAndField = true;
    this.service.resetData();
    let companyId = this.service.companyDetails["CompanyId"];
    let companyLocationId = this.service.leaveManageObj.slctdLocation.companyLocationId;
    let request = { companyId, formId: this.service.formId,companyLocationId,
     leaveMonth :  this.service.leaveManageObj.slctdLeaveMonth };
    this.serverService
      .post({ request }, "leaveEncashmentModule/getEmpForLeaveEncash", {
        module: "humanResource"
      })
      .subscribe(data => {
        this.state.progressBarStop();
        this.service.disabledButtonAndField = false;
        if (data["response"]) {
          this.service.employeeDetails = data["response"];
          for (var i in this.service.employeeDetails) {
            this.service.employeeDetails[i].earnedLeavesEncashed = 0;
            if (this.service.employeeDetails[i].balanceLeaves > 15) {
              this.service.employeeDetails[i].earnedLeavesEncashed = this.service.employeeDetails[i].balanceLeaves - 15;
            }
            this.service.calculateEncashElAmount(i,"Onload");
            
          }
          
          //this.service.isAllSelected = false;
          // if(this.service.totalSlctdEmp == this.service.employeeDetails.length)this.service.isAllSelected = true;
          this.service._HoldEmployeeDetails   = JSON.parse(JSON.stringify(this.service.employeeDetails));
          this.service.dataForTable           = JSON.parse(JSON.stringify(this.service.employeeDetails));
          this.service.empArrayForServerCall  = JSON.parse(JSON.stringify(this.service.employeeDetails));
          this.service.animationState         = 1;
          this.service.hideTpls               = false;
          if(this.service.leaveManageObj.slctdAction.actionId == 3){
            this.service.animationState = 'step1';
          }
          this.checkBoxvaluesAtLoadTime();
       }
      });
  }

  serverCallsInElEncash()
  {
    // if(this.service.leaveManageObj.slctdAction && this.service.leaveManageObj.slctdAction.actionId==1)
    // {
      this.getEmpForLeaveEncash();  
    // }
    // else if(this.service.leaveManageObj.slctdAction && this.service.leaveManageObj.slctdAction.actionId==2)
    // {

    // }
    // else if(this.service.leaveManageObj.slctdAction && this.service.leaveManageObj.slctdAction.actionId==3)
    // {

    // }
  }


  // getEmpForLeaveEncash() {
  //   this.disableButtonAndFields = true;
  //   this.state.progressBarStart();
  //   let companyId = this.companyDetails.CompanyId;
  //   let formId = "156";
  //   let params = {};
  //   params = Object.assign(params, { companyId, formId });
  //   this.api
  //     .post(
  //       {
  //         request:
  //           Object.assign(params, {
  //             companyLocationName: this.contractorSalaryObj.slctdLocation.locationName,
  //             companyLocationId: this.contractorSalaryObj.slctdLocation.companyLocationId,
  //             approvalCategory: this.contractorSalaryObj.slctdApprovalCatagory.approvalCategory,
  //             salaryMonth: (new Date(this.contractorSalaryObj.slctdSalaryMonth).getMonth() + 1),
  //             salaryYear: (new Date(this.contractorSalaryObj.slctdSalaryMonth).getFullYear()),
  //           })
  //       },
  //       "salaryCreationModule/getEmpForLeaveEncash",
  //       {
  //         module: "contractor"
  //       }
  //     )
  //     .subscribe(data => {
  //       this.disableButtonAndFields = false;
  //       this.state.progressBarStop();
  //       if (data.response) {
  //         this.contractorSalaryObj.contractorWiseSalaryApprovalDetails = JSON.parse(JSON.stringify(data.response));
  //         this.contractorSalaryObj.filterContractorWiseSalaryApprovalDetails = JSON.parse(JSON.stringify(this.contractorSalaryObj.contractorWiseSalaryApprovalDetails));
  //       }
  //       if (data.errorCode) {
  //         this.modal.openModal(data.errorTitle, data.errorContent);
  //       };
  //     })
  // }

  checkBoxvaluesAtLoadTime =()=>
  {
    this.service.totalSlctdEmp = 0;
    for(let i = 0 ;i< this.service.dataForTable.length;i++ )
    {
      if(this.service.dataForTable[i].isSelected)
      {
        this.service.totalSlctdEmp++
      }
      if(this.service.totalSlctdEmp == this.service.dataForTable.length )
      this.service.isAllSelected = true;
    }

  }

  ngOnInit() {
    this.getAllLocations();
    this.service.leaveManageObj.slctdAction = null;
  }

}
