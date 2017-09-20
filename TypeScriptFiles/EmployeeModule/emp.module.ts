import {NgModule} from "@angular/core"
import { EmployeeComponent } from "./emp.component";
import { EmployeeListComponent } from "./emp.list.component";
import { EmployeeAddComponent } from "./emp.add.component";
import { CommonModule } from "@angular/common";
import { EmployeeService } from "../Logics/EmployeeService";
@NgModule({
    imports:[CommonModule],
    declarations:[EmployeeComponent,EmployeeListComponent,
        EmployeeAddComponent],
        exports:[EmployeeComponent],
        providers:[{provide:EmployeeService,
        useClass:EmployeeService}]
})
export class EmployeeModule{

}