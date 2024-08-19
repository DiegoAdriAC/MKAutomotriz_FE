import { NgModule } from "@angular/core";
import { ReportesRoutingModule } from "./reportes-routing.module";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        ReportesRoutingModule
    ]
})
export class ReportsModule { }