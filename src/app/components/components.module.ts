import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncryptComponent } from './encrypt/encrypt.component';
import { PlansComponent } from './plans/plans.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecryptComponent } from './decrypt/decrypt.component';
import { ReactivePlansComponent } from './reactive-plans/reactive-plans.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    EncryptComponent,
    PlansComponent,
    DecryptComponent,
    ReactivePlansComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    EncryptComponent,
    PlansComponent,
    DecryptComponent,
    ReactivePlansComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
