import {Component} from "@angular/core"
import {Employee} from "../Models/employee"
import {EmployeeService} from "../Logics/EmployeeService"
@Component({
    selector:'employee-add',
    templateUrl:'./emp.add.component.html'
})
export class EmployeeAddComponent{
    constructor(private eLogic:EmployeeService){
    }
    SaveEmployee():void{
        this.eLogic.SaveEmployee
        (new Employee("E",50000));
    }
}