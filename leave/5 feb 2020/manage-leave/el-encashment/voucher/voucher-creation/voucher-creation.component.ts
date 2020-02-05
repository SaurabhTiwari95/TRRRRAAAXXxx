import { Component, OnInit, Input } from '@angular/core';
import { ManageLeaveServiceService } from '../../../manage-leave-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';

@Component({
  selector: 'app-voucher-creation',
  templateUrl: './voucher-creation.component.html',
  styleUrls: ['./voucher-creation.component.scss']
})
export class VoucherCreationComponent implements OnInit {

  constructor(
    public service: ManageLeaveServiceService /**/,
    public serverService: GetDataFromApiService /*This service is Used for HTTP request*/,
    private state: StateService /* state related service like the company details , progress bar setup etc */,
    public modal: ModalService /* For error and success popup */,
    public commonFunctionService: CommonFunctionService /* sweet alert and the common functions used throughout the project like
    employee index etc*/
  ) {

  }
  
  @Input('empDetail') empDetail;
  //function to check and Uncheck all the details

  checkUncheckAll = () => {
    this.service.totalSlctdEmp =0;
    if (this.service.isAllSelected == true) {
      for (let emp of this.service.dataForTable) {
        emp.isSelected = true;
      }
      this.service.totalSlctdEmp = this.service.dataForTable.length
    } else {
      for (let emp of this.service.dataForTable) {
        emp.isSelected = false 
      }
      this.service.totalSlctdEmp = 0 ;
    }
  } 


 

  // //  count = 0;
  checkIfEmpSlctd = (_Row) => {
    if (_Row.isSelected == false) {
      this.service.isAllSelected = false;
      this.service.totalSlctdEmp--
    } else {
      
      //  for (let emp of this.service.dataForTable) {
        
        if (_Row.isSelected == true) {
          this.service.totalSlctdEmp++;
         }
      // }
      if(this.service.totalSlctdEmp == this.service.dataForTable.length){
        this.service.isAllSelected = true;
      }
    }
  }
  // ngAfterViewInIt is replaced by ngOnInit

   // function to add the sum of the selected encashedAmount
  //  voucherPaymentCost = () => {
  //   let selectedVoucherCost = 0 
  //   for (let i of this.service.dataForTable){
  //     if(i.isSelected){
  //       selectedVoucherCost +=  i.encashedAmount;
  //     }
  //   }
  // }
  ngOnInit() {}
}