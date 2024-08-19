import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    {
        path: 'Principal',
        component: MainComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportesRoutingModule {}