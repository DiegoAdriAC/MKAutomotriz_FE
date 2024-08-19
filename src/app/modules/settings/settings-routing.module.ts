import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./User/User.component";
import { PreciosComponent } from "./Precios/Precios.component";

const routes: Routes = [
    {
        path: 'User',
        component: UserComponent
    },
    {
        path: 'Precios',
        component: PreciosComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {}