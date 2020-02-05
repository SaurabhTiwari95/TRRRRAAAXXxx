import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HRRoutingModule } from "./hr-routing.module";
import { HrHomeComponent } from "./hr-home/hr-home.component";
import { MatDialogModule } from "@angular/material";
import { SharedServiceModuleModule } from "src/app/shared/modules/shared-service-module/shared-service-module.module";
import { OrgChartsComponent } from "./org-charts/org-charts.component";
import { OrgChartStep1Component } from "./org-charts/org-chart-step1/org-chart-step1.component";
import { LocalHrService } from "./org-charts/local-hr.service";
import { OrgChartStep2Component } from "./org-charts/org-chart-step2/org-chart-step2.component";
import { OrgChartStep2SelfComponent } from "./org-charts/org-chart-step2-self/org-chart-step2-self.component";
import { SalaryPaymentCreationComponent } from "./salary-payment-creation/salary-payment-creation.component";
import { PaymentEmployeesComponent } from "./salary-payment-creation/salary-payment-creation-folder/payment-employees/payment-employees.component";
import { PaymentBankDetailsComponent } from "./salary-payment-creation/salary-payment-creation-folder/payment-bank-details/payment-bank-details.component";
import { PaymentVoucherComponent } from "./salary-payment-creation/salary-payment-creation-folder/payment-voucher/payment-voucher.component";
import { KpiMasterComponent } from "./training-module/kpi-master/kpi-master.component";
import { KpiMasterAddComponent } from "./training-module/kpi-master/kpi-master-add/kpi-master-add.component";
import { KpiMasterViewComponent } from "./training-module/kpi-master/kpi-master-view/kpi-master-view.component";
import { BreadcrumbsComponent } from "./org-charts/breadcrumbs/breadcrumbs.component";
import { OrgChartStep2OthersComponent } from "./org-charts/org-chart-step2-others/org-chart-step2-others.component";
import { ModalVoucherDetailsComponent } from "./salary-payment-creation/salary-payment-creation-folder/modal-voucher-details/modal-voucher-details.component";
import { PositionMasterComponent } from "./position-master/manage/position-master.component";
import { PositionMasterViewComponent } from "./position-master/manage/position-master-view/position-master-view.component";
import { PositionMasterEditComponent } from "./position-master/manage/position-master-edit/position-master-edit.component";
import { KpiMasterService } from "./training-module/kpi-master/local-kpi-master.service";
import { KpiWithPositionComponent } from "./position-master/manage/position-master-edit/kpi-with-position/kpi-with-position.component";
import { VoucherCreationComponent } from "./salary-payment-creation/voucher-creation/voucher-creation.component";
import { DivisionHistoryComponent } from "./org-charts/org-chart-step2/division-history/division-history.component";
import { JDWithPositionTableComponent } from "./position-master/manage/position-master-edit/jd-with-position-table/jd-with-position-table.component";
import { ViewPositionComponent } from "./position-master/manage/position-master-view/view-position/view-position.component";
import { PositionListComponent } from "./position-master/manage/position-master-view/position-list/position-list.component";
import { VoucherDeletionComponent } from "./salary-payment-creation/voucher-deletion/voucher-deletion.component";
import { SalaryStatementComponent } from "./salary-payment-creation/salary-statement/salary-statement.component";
import { SalaryCreationComponent } from "./salary-payment-creation/salary-creation/salary-creation.component";
import { FullNFinalComponent } from "./salary-payment-creation/full-n-final-folder/full-n-final/full-n-final.component";
import { FullNFinalPaymentComponent } from "./salary-payment-creation/full-n-final-folder/full-n-final-payment/full-n-final-payment.component";
import { FullNFinalModalComponent } from "./salary-payment-creation/full-n-final-folder/full-n-final-modal/full-n-final-modal.component";
import { FullNFinalPrintComponent } from "./salary-payment-creation/full-n-final-folder/full-n-final-print/full-n-final-print.component";
import { TimeOfficeHomeComponent } from "./time-office/time-office-home/time-office-home.component";
import { ShiftMasterComponent } from "./time-office/shift-master/shift-master.component";
import { ShiftRosterComponent } from "./time-office/shift-roster/shift-roster.component";
import { CtcViewComponent } from "./ctc-folder/ctc-view/ctc-view.component";
import { PerformanceManagementSystemComponent } from "./performance-management-system/performance-management-system.component";
import { PmsStep1Component } from "./performance-management-system/pms-step1/pms-step1.component";
import { PmsStep2Component } from "./performance-management-system/pms-step2/pms-step2.component";
import { PmsHistoryComponent } from "./performance-management-system/pms-history/pms-history.component";
import { ViewReportComponent } from "./position-master/view-report/view-report.component";
import { CtcGenerateComponent } from "./ctc-folder/ctc-generate/ctc-generate.component";
import { EmpHrSettingComponent } from "./emp-hr-setting/emp-hr-setting.component";
import { AdvanceLedgerMappingComponent } from "./emp-hr-setting/advance-ledger-mapping/advance-ledger-mapping.component";
import { ImprestLedgerMappingComponent } from "./emp-hr-setting/imprest-ledger-mapping/imprest-ledger-mapping.component";
import { NoticePeriodComponent } from "./emp-hr-setting/notice-period/notice-period.component";
import { JdInsidePmsComponent } from "./performance-management-system/jd-inside-pms/jd-inside-pms.component";
import { SuretyBondComponent } from "./emp-hr-setting/surety-bond/surety-bond.component";
import { KpiJdModalComponent } from "./org-charts/kpi-jd-modal/kpi-jd-modal.component";
import { PmsReportsHomeComponent } from "./performance-management-system/pms-reports/reports-home/reports-home.component";
import { PmsReadOnlyForAdminComponent } from "./performance-management-system/pms-reports/pms-read-only-for-admin/pms-read-only-for-admin.component";
import { PositionMasterKpiEditComponent } from "./position-master/manage/position-master-edit/kpi-with-position/position-master-kpi-edit/position-master-kpi-edit.component";
import { PositionMasterEditJdComponent } from "./position-master/manage/position-master-edit/jd-with-position-table/position-master-edit-jd/position-master-edit-jd.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { AllEmpAttendanceComponent } from "./attendance/all-emp-attendance/all-emp-attendance.component";
import { OneEmpAttendanceComponent } from "./attendance/one-emp-attendance/one-emp-attendance.component";
import { KraEmployeesComponent } from "./salary-payment-creation/kra-employees/kra-employees.component";
import { KraPaymentComponent } from "./salary-payment-creation/kra-payment/kra-payment.component";
import { KraVoucherCreationComponent } from "./salary-payment-creation/kra-voucher-creation/kra-voucher-creation.component";
import { CanteenDeductionsComponent } from "./canteen-deductions/canteen-deductions.component";
import { CanteenDeductionReportsComponent } from "./canteen-deductions/canteen-deduction-reports/canteen-deduction-reports.component";
import { AttendanceReportComponent } from "./attendance-report/attendance-report.component";
import { OrgChartCreateComponent } from "./org-charts/org-chart-create/org-chart-create.component";
import { OrgChartAddEducationComponent } from "./org-charts/org-chart-create/org-chart-add-education/org-chart-add-education.component";
import { OrgChartAddExperienceComponent } from "./org-charts/org-chart-create/org-chart-add-experience/org-chart-add-experience.component";
import { ManagerWiseAttendanceEntryReportComponent } from "./attendance-report/manager-wise-attendance-entry-report/manager-wise-attendance-entry-report.component";
import { ManagerWisePointEntryReportComponent } from "./attendance-report/manager-wise-point-entry-report/manager-wise-point-entry-report.component";
import { EmpMasterCreateComponent } from "./org-charts/emp-master-create/emp-master-create.component";
import { CtcDetailsComponent } from "./ctc-folder/ctc-details/ctc-details.component";
import { CtcTemplateComponent } from "./ctc-folder/ctc-template/ctc-template.component";
// import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ViewNewJoineeCtcComponent } from "./ctc-folder/view-new-joinee-ctc/view-new-joinee-ctc.component";
import { UpdateJoineeDetailsComponent } from "./ctc-folder/update-joinee-details/update-joinee-details.component";
import { CtcPrintTemplateComponent } from './ctc-folder/ctc-print-template/ctc-print-template.component';
import { ManageLeaveComponent } from './manage-leave/manage-leave.component';
import { EmpNewCtcComponent } from './ctc-folder/employee-ctc/emp-new-ctc/emp-new-ctc.component';
import { AppraisalCtcComponent } from './ctc-folder/employee-ctc/emp-new-ctc/appraisal-ctc/appraisal-ctc.component';
import { MapNewJoineeCtcComponent } from './ctc-folder/employee-ctc/emp-new-ctc/map-new-joinee-ctc/map-new-joinee-ctc.component';
import { CtcApprovalComponent } from './ctc-folder/employee-ctc/emp-new-ctc/ctc-approval/ctc-approval.component';
import { ApprovalMadalComponent } from './ctc-folder/employee-ctc/emp-new-ctc/ctc-approval/approval-madal/approval-madal.component';
import { ElEncashmentComponent } from './manage-leave/el-encashment/el-encashment.component';
import { ViewApprovalDetailsComponent } from './ctc-folder/employee-ctc/emp-new-ctc/ctc-approval/view-approval-details/view-approval-details.component';
import { GenerationComponent } from './manage-leave/el-encashment/generation/generation.component';
import { VoucherComponent } from './manage-leave/el-encashment/voucher/voucher.component';
import { PaymentComponent } from './manage-leave/el-encashment/payment/payment.component';
import { EmployeeDetailsComponent } from './manage-leave/el-encashment/payment/employee-details/employee-details.component';
import { BankDetailsComponent } from './manage-leave/el-encashment/payment/bank-details/bank-details.component';
import { VoucherDetailsComponent } from './manage-leave/el-encashment/payment/voucher-details/voucher-details.component'



@NgModule({
  declarations: [
    HrHomeComponent,
    OrgChartsComponent,
    OrgChartStep1Component,
    OrgChartStep2Component,
    OrgChartStep2SelfComponent,
    SalaryPaymentCreationComponent,
    PaymentEmployeesComponent,
    PaymentBankDetailsComponent,
    PaymentVoucherComponent,
    KpiMasterComponent,
    KpiMasterAddComponent,
    KpiMasterViewComponent,
    BreadcrumbsComponent,
    OrgChartStep2OthersComponent,
    ModalVoucherDetailsComponent,
    PositionMasterComponent,
    PositionMasterViewComponent,
    PositionMasterEditComponent,
    KpiWithPositionComponent,
    VoucherCreationComponent,
    DivisionHistoryComponent,
    JDWithPositionTableComponent,
    ViewPositionComponent,
    PositionListComponent,
    VoucherDeletionComponent,
    SalaryStatementComponent,
    SalaryCreationComponent,
    FullNFinalComponent,
    FullNFinalPaymentComponent,
    FullNFinalModalComponent,
    FullNFinalPrintComponent,
    TimeOfficeHomeComponent,
    ShiftMasterComponent,
    ShiftRosterComponent,
    CtcViewComponent,
    PerformanceManagementSystemComponent,
    PmsStep1Component,
    PmsStep2Component,
    PmsHistoryComponent,
    ViewReportComponent,
    CtcGenerateComponent,
    CtcViewComponent,
    EmpHrSettingComponent,
    AdvanceLedgerMappingComponent,
    NoticePeriodComponent,
    ImprestLedgerMappingComponent,
    JdInsidePmsComponent,
    SuretyBondComponent,
    KpiJdModalComponent,
    PmsReportsHomeComponent,
    PmsReadOnlyForAdminComponent,
    PositionMasterKpiEditComponent,
    PositionMasterEditJdComponent,
    AttendanceComponent,
    AllEmpAttendanceComponent,
    OneEmpAttendanceComponent,
    KraEmployeesComponent,
    KraPaymentComponent,
    KraVoucherCreationComponent,
    CanteenDeductionsComponent,
    OrgChartCreateComponent,
    OrgChartAddEducationComponent,
    OrgChartAddExperienceComponent,
    CanteenDeductionReportsComponent,
    AttendanceReportComponent,
    ManagerWiseAttendanceEntryReportComponent,
    ManagerWisePointEntryReportComponent,
    EmpMasterCreateComponent,
    CtcDetailsComponent,
    CtcTemplateComponent,
    ViewNewJoineeCtcComponent,
    UpdateJoineeDetailsComponent,
    CtcPrintTemplateComponent,
    ManageLeaveComponent,
    EmpNewCtcComponent,
    AppraisalCtcComponent,
    MapNewJoineeCtcComponent,
    CtcApprovalComponent,
    ApprovalMadalComponent,
    ElEncashmentComponent,
    ViewApprovalDetailsComponent,
    GenerationComponent,
    VoucherComponent,
    PaymentComponent,
    EmployeeDetailsComponent,
    BankDetailsComponent,
    VoucherDetailsComponent,
  ],
  imports: [
    CommonModule,
    HRRoutingModule,
    MatDialogModule,
    SharedServiceModuleModule
    // DatePickerModule
  ],
  providers: [LocalHrService, KpiMasterService],
  entryComponents: []
})
export class HRModule {}
