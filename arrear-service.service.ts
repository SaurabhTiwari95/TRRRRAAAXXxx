import { Injectable } from '@angular/core';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import * as _moment from 'moment';

const moment = (_moment as any).default ? (_moment as any).default : _moment;

@Injectable({
  providedIn: 'root'
})
export class ArrearServiceService {
  // empArrayInArrearVoucherCreation: any;
  // filteredArrayInArrearVoucher: any[];
  isAllEmpSlctdInVoucherCreation: boolean;
  totalSlctdEmp                 : number = 0;

  constructor(
    private state               : StateService,
    private serverService       : GetDataFromApiService,
    public commonFunctioService : CommonFunctionService
    ) { }
  
  companyDetails         = this.state.getCompanyDetails();
  formId                 = '170';
  disabledButtonAndField = false;
  
  animationState : 'none' | 'step1' | 'step2' | 'step3' | 1 = 'none';
  showVoucherCreatedDetails : boolean = false;

  showStep1: boolean = false;
  showStep2: boolean = false;
  showStep3: boolean = false;

  totalAmountPayable = null;

  arrearManageObj = {
    slctdLocation: undefined,
    slctdAction  : {
      actionId             : null,
      categoryName         : null,
      categoryId           : null,
      actionType           : null,
    },
    slctdVoucherCategory : {
      categoryId:null,
      categoryName:null
    },
    arrearDaterange : {
      startDate : new Date(),
      endDate : new Date(),
      // format: 'YYYY-MM-DD'
    },

    slctdArrearMonth: moment().format('YYYY-MM-DD'),



    slctdPaymentMode : {
      modeName : null,
      modeId:null,
      modeCode : null,
    },
    bankDetails:[],
    chequeIssuerListDetails : [],
    chequeBookDetails:[],
    chequeNumberDetails : [],
  
    leaveEncashLedgerDetails:{
      ledgerDetails : {
        ledgerName : null,
        ledgerId : null,

      },
      cashGroupDetails : {
        cashGroupName : null,
        cashGroupId: null
      }
    }   

  }


  bankDetailObj = {
    slctdChequeBookIssuer: null,
    slctdBank: null,
    slctdChequeBook: null,
    slctdChequeNumber: null,
  };


  voucherTotalDetails = {
    totalVoucherAmount : 0
  };


  empArrearVoucherDetailsToSearch = [];
  empDetailsAccordingToBankArray = [];
  getBankDetails = [];
  printName = null;
  ledgerAccount = null;
  cashGroupName = null;

  voucherCategory = [
    {
      categoryId   : "1",
      categoryName : "Voucher Creation"
    },
    {
      categoryId   : "2",
      categoryName : "Voucher Deletion"
    }
  ]

  allActionTypes = [
    {
      actionId    : 1,
      actionName  : "Arrear",
      actionType  : "Arrear Voucher",
    },
    // {
    //   actionId    : 2,
    //   categoryName: "Arrear",
    //   categoryId  : 1,
    //   actionType  : "Voucher Deletion",
    // },
    {
      actionId    : 2,
      actionName  : "Arrear",
      actionType  : "Arrear Payment",
    }

  ];

  paymentModes = [
    {modeId : 1, modeName:"Computerized",  modeCode: "C"},
    {modeId : 2, modeName:"Manual",  modeCode: "M"}
  ]

  // empVoucherDetailsToSearch = [];


  voucherDeletionDetails = [
    {
      totalEmployees : null,
      voucherDetails :[]
    }
  ];
  

  // arrearDetailsPendingForVoucher = {
  //   employeeVoucherDetails : [],
  // };
   empArrayInArrearVoucherCreation = [];

   filteredArrayInArrearVoucherCreation = [];

  _StartServerCall = () => {
    this.state.progressBarStart();
    this.disabledButtonAndField = true
  }

  _EndServerCall = () =>{
    this.state.progressBarStop()
    this.disabledButtonAndField = false;
  }

  resetData = () =>{
    this.animationState = 'none';
    // Data or Details you want to reset
  
  }


}
