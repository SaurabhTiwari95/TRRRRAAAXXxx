import { Component, OnInit } from '@angular/core';
import { ManageLeaveServiceService } from '../../../manage-leave-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';

@Component({
  selector: 'app-voucher-details',
  templateUrl: './voucher-details.component.html',
  styleUrls: ['./voucher-details.component.scss']
})
export class VoucherDetailsComponent implements OnInit {

  constructor(
    public service              : ManageLeaveServiceService,/**/
    public serverService        : GetDataFromApiService,/*This service is Used for HTTP request*/
    private state               : StateService,/* state related service like the company details , progress bar setup etc */
    public modal                : ModalService /* For error and success popup */,
    public commonFunctionService: CommonFunctionService, /* sweet alert and the common functions used throughout the project like
    employee index etc*/
  ) { }

  ngOnInit() {
  }

}
