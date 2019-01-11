import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberActivationPage } from './member-activation';

@NgModule({
  declarations: [
    MemberActivationPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberActivationPage),
  ],
})
export class MemberActivationPageModule {}
