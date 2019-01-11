import { NgModule } from '@angular/core';
import { BackButtonComponent } from './ha-back-button/ha-back-button';
import { HaUserDetailsComponent } from './ha-user-details/ha-user-details';
@NgModule({
	declarations: [BackButtonComponent,
    HaUserDetailsComponent],
	imports: [],
	exports: [BackButtonComponent,
    HaUserDetailsComponent]
})
export class ComponentsModule {}
