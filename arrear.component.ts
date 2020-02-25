import { Component, OnInit } from '@angular/core';
import { ArrearServiceService } from './arrear-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { Moment } from "moment";
import * as _moment from "moment";

const moment = (_moment as any).default ? (_moment as any).default : _moment;


@Component({
  selector: 'app-arrear',
  templateUrl: './arrear.component.html',
  styleUrls: ['./arrear.component.scss'],
  providers  : [ArrearServiceService],
})
export class ArrearComponent implements OnInit {
  api: any;

  constructor(
    public service              : ArrearServiceService,
    public serverService        : GetDataFromApiService,
    public modal                : ModalService,
    public commonFunctionService: CommonFunctionService
  ) { }

  locations = [];

  getAllLocations() {
    let companyId = this.service.companyDetails["CompanyId"];
    let request = { companyId, formId: this.service.formId };
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

  public Arrearoptions: any = {
    locale: { format: "YYYY-MM-DD" },
    alwaysShowCalendars: false
  };

  public selectedDate(value: any, datepicker?: any) {
    datepicker.startDate = value.startDate;
    datepicker.endDate = value.endDate;
     this.service.arrearManageObj.arrearDaterange = value.startDate;
     this.service.arrearManageObj.arrearDaterange = value.endDate;
  }

  handleMonthInArrear(ref, event: Moment) {
    this.service.arrearManageObj.slctdArrearMonth = moment(event).format('YYYY-MM-DD');
    
    ref.close();
  }

  openCalender(ref) {
    ref.open();
  }

                                                    /*  Server Call for Arrear Voucher getArrearVoucher()  */
getEmpForArrear = () =>{
 this.service._StartServerCall();
    let request = {
      companyLocationId: this.service.arrearManageObj.slctdLocation.companyLocationId,
      companyId: this.service.companyDetails.CompanyId,
      formId: this.service.formId,
      startDate: new Date(this.service.arrearManageObj.arrearDaterange.startDate).getFullYear() + '/' + (new Date(this.service.arrearManageObj.arrearDaterange.startDate).getMonth() + 1) + '/' + new Date(this.service.arrearManageObj.arrearDaterange.startDate).getDate(),
      endDate: new Date(this.service.arrearManageObj.arrearDaterange.endDate).getFullYear() + '/' + (new Date(this.service.arrearManageObj.arrearDaterange.endDate).getMonth() + 1) + '/' +  new Date(this.service.arrearManageObj.arrearDaterange.endDate).getDate(),
      // startDate: this.service.arrearManageObj.arrearDaterange.startDate,
      // endDate : this.service.arrearManageObj.arrearDaterange.endDate
    }
    this.serverService.post({request}, "arrearModule/getEmpForArrear",{
      module: "humanResource"
    })
    .subscribe(data => {
      this.service._EndServerCall();
      if(data.response){
        this.service.empArrayInArrearVoucherCreation = JSON.parse(JSON.stringify(data.response)) ;
        this.service.filteredArrayInArrearVoucherCreation = JSON.parse(JSON.stringify(data.response));
        this.checkBoxvaluesAtLoadTime();
      }
      if (data.errorCode) {
        this.commonFunctionService.simpleSweetAlert(
          data.errorTitle,
          data.errorContent,
          "error"
        );
      }
    })
  }

  setAnimationState = () =>{
    if(this.service.arrearManageObj.slctdAction.actionId == 1) return;
    this.service.animationState = 'step1';

  }

  serverCallsInArrear() 
  {
     if (this.service.arrearManageObj.slctdAction && this.service.arrearManageObj.slctdAction.actionId == 1) 
      {
        if (this.service.arrearManageObj.slctdVoucherCategory.categoryId == "1") 
        {
          this.getEmpForArrear();
          // server call for voucher creation
        } 
        else if(this.service.arrearManageObj.slctdVoucherCategory.categoryId == "2")
        {
          // server call for voucher deletion
        }
      } 
    else if (this.service.arrearManageObj.slctdAction && this.service.arrearManageObj.slctdAction.actionId == 2) 
      {
        // server call for payment
      }
  }
  checkBoxvaluesAtLoadTime = () => {
    this.service.totalSlctdEmp = 0;
    for (let i = 0; i < this.service.empArrearVoucherDetailsToSearch.length; i++) {
      if (this.service.empArrearVoucherDetailsToSearch[i].isSelected) {
        this.service.totalSlctdEmp++;
      }
    }
  };

  ngOnInit() {
    this.getAllLocations();
  }
  
}