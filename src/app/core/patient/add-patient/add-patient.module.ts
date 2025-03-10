import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { AddPatientRoutingModule } from './add-patient-routing.module';
import { AddPatientComponent } from './add-patient.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    AddPatientRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class AddPatientModule { }
