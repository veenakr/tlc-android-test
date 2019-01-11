import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { testService } from '../services/testService';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginService } from '../services/login.service';
import { loginPage } from '../pages/welcome/login/login';
import { CaQueryComponent } from '../components/ca-query/ca-query';
import { ForgotPasswordPage } from '../pages/welcome/login/forgot-password/forgot-password';
import { PasswordComponent } from '../components/ha-password/ha-password';
import { CommonDetails } from '../services/commondetails.service';
import { MemberActivationPage } from '../pages/member-on-boarding/member-activation/member-activation';
import { BackButtonComponent } from '../components/ha-back-button/ha-back-button';
import { HaUserDetailsComponent } from '../components/ha-user-details/ha-user-details';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WelcomePage,
    loginPage,
    CaQueryComponent,
    ForgotPasswordPage,
    HaUserDetailsComponent,
    PasswordComponent,
    MemberActivationPage,
    BackButtonComponent,
    HaUserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    WelcomePage,
    loginPage,
    ForgotPasswordPage,
    MemberActivationPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    testService,
    LoginService,
    CommonDetails,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
