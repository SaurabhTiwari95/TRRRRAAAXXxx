import { Component, OnInit } from '@angular/core';
import { ManageLeaveServiceService } from '../../../manage-leave-service.service';
import { GetDataFromApiService } from 'src/app/shared/services/get-data-from-api.service';
import { StateService } from 'src/app/shared/services/state.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';

@Component({
  selector: 'app-voucher-deletion',
  templateUrl: './voucher-deletion.component.html',
  styleUrls: ['./voucher-deletion.component.scss']
})
export class VoucherDeletionComponent implements OnInit {

  constructor(
    public service              : ManageLeaveServiceService,/**/
    public serverService        : GetDataFromApiService,/*This service is Used for HTTP request*/
    private state               : StateService,/* state related service like the company details , progress bar setup etc */
    public modal                : ModalService /* For error and success popup */,
    public commonFunctionService: CommonFunctionService,
  ) { }

  ngOnInit() {
  }

}
