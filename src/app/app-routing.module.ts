import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/* Falta agregarle un canActive */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'MyKAutomotriz',
    component: LayoutComponent,
    children: [
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'Orden',
        redirectTo: 'Home'
      },
      {
        path: 'Reportes',
        loadChildren: () => import('./modules/reportes/reportes.module').then(m => m.ReportsModule)
      },
      {
        path: 'Catalogos',
        loadChildren: () => import('./modules/catalogos/catalogos.module').then(m => m.CatalogosModule)
      },
      {
        path: 'Settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
