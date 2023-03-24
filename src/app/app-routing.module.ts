import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecryptComponent } from './components/decrypt/decrypt.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { PlansComponent } from './components/plans/plans.component';
import { ReactivePlansComponent } from './components/reactive-plans/reactive-plans.component';

const routes: Routes = [
  {path:'',component: PlansComponent},
  {
    path:'encrypt',component: EncryptComponent
  },{
    path:'decrypt',component: DecryptComponent
  },{
    path:'reactiveplans',component: ReactivePlansComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
