import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page-login/page-login.component';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then((module) => module.ClientsModule) },
  { path: 'clients/:id', loadChildren: () => import('./clients/clients.module').then((module) => module.ClientsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then((module) => module.OrdersModule) },
  { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then((module) => module.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
