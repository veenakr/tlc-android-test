import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { GoogleAnalytics } from "@ionic-native/google-analytics";
// import {
//   NativeTransitionOptions,
//   NativePageTransitions
// } from "@ionic-native/native-page-transitions";
import { loginPage } from "./login/login";
// import { MemberActivationPage } from "../memberOnboarding/member-activation/member-activation";
// import { CaRegisterUserPage } from "../memberOnboarding/signup/ca-register-user/ca-register-user";
import { LoginService } from "../../services/login.service";

// @IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public ga: GoogleAnalytics,
    // public nativePageTransitions: NativePageTransitions,
    public loginserv: LoginService
  ) {
    // this.ga
    //   .startTrackerWithId("UA-127853070-1")
    //   .then(() => {
    //     console.log("Google analytics is ready now");
    //     this.ga.trackView("home");
    //   })
    //   .catch(e => console.log("Error starting GoogleAnalytics", e));
  }

  pushPage(page) {
      this.navCtrl.push(loginPage);
  //   if (page == "MemberActivation") {
  //     this.loginserv.usertype = "member";
  //   }else{
  //     this.loginserv.usertype = "visitor";
  //   }
  //   let options: NativeTransitionOptions = {
  //     direction: "left",
  //     duration: 200,
  //     slowdownfactor: -1,
  //     iosdelay: 50
  //   };
  //   this.nativePageTransitions.slide(options);
  //   let tobepushpage =
  //     page === "login"
  //       ? loginPage
  //       : page === "MemberActivation"
  //       ? MemberActivationPage
  //       : CaRegisterUserPage;
  //   this.navCtrl.push(tobepushpage);
  }
}
