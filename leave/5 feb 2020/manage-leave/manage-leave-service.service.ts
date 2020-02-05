import { Injectable } from '@angular/core';
import { StateService } from 'src/app/shared/services/state.service';
import * as _moment from 'moment';
const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Injectable()
export class ManageLeaveServiceService {
  isAllSelected: boolean;
  filterreportDetailsForView: any;
  totalEmpSlctdForSaveAttendance: number;
  totalSlctdEmp: number;

  constructor(private state: StateService) { }
  
  companyDetails = this.state.getCompanyDetails();
  formId = '160';
  disabledButtonAndField = false;
  animationState : 'none' | 'step1' | 'step2' | 'step3' | 1 = 'none';

  voucherCategory = [
    {
      categoryId : "1",
      categoryName : "Voucher Creation"
    },
    {
      categoryId : "2",
      categoryName : "Voucher Deletion"
    }
  ]

  leaveManageObj = {
      slctdLocation: undefined,
      slctdAction  : {
        actionId     : null,
        categoryName : null,
        categoryId   : null,
        actionType   : null,
        slctdVoucherCategory : null,
      },
    slctdLeaveMonth: moment().format('MMM-YYYY')
  }

  // common Function to calculate encashEl Amount
 // totalSlctdEmp = 0;
  employeeDetails       = [];
  _HoldEmployeeDetails  = [];
  dataForTable          = [];
  empArrayForServerCall = [];
 // isAllSelected;

  calculateEncashElAmount = (_Index, _Type?) => {
    let _Array: any;
    if (_Type == 'Onload') {
      _Array = this.employeeDetails;
    } else {
      _Array = this.dataForTable;
    }
    _Array[_Index].encashedAmount = 0;
    _Array[_Index].encashedAmount = ((_Array[_Index].earnedLeavesEncashed * _Array[_Index].basicAmount) / 30).toFixed(2);
    // _Array[_Index].encashedAmount = ((_Array[_Index].earnedLeavesEncashed * _Array[_Index].basicSalary)).toFixed(2);
    // per day El-encash calculation
    +(_Array[_Index].encashedAmount)
  }

  hideTpls = true; 
  resetData = () =>{
    this.employeeDetails       = [];
    this._HoldEmployeeDetails  = [];
    this.dataForTable          = [];
    this.empArrayForServerCall = []; 
    this.animationState        = 'none';
    this.hideTpls              = true;
  } 

}