import { Component, OnInit } from "@angular/core";
import { CommonFunctionService } from "src/app/shared/services/common-function.service";
import { ManageLeaveServiceService } from "../manage-leave-service.service";
import { GetDataFromApiService } from "src/app/shared/services/get-data-from-api.service";
import { StateService } from "src/app/shared/services/state.service";
import { ModalService } from "src/app/shared/services/modal.service";

@Component({
  selector: "app-el-encashment",
  templateUrl: "./el-encashment.component.html",
  styleUrls: ["./el-encashment.component.scss"]
})
export class ElEncashmentComponent implements OnInit {
  constructor(
    public service: ManageLeaveServiceService /**/,
    public serverService: GetDataFromApiService /*This service is Used for HTTP request*/,
    private state: StateService /* state related service like the company details , progress bar setup etc */,
    public modal: ModalService /* For error and success popup */,
    public commonFunctionService: CommonFunctionService /* sweet alert and the common functions used throughout the project like
  employee index etc*/
  ) {}

  /* Dummy Data */

  // empDetail = [
  //   {
  //     employeeId         : "1",
  //     employeeName       : "A",
  //     balanceEarnedLeaves: "37",
  //     EL                 : "24",
  //     basicAmount        : 2000,
  //     division           : "Corporate",
  //     department         : "Finance"
  //   },
  // ];
  
  
  
  ngOnInit() {}
}
