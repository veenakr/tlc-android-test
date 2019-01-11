import { Component, OnInit } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";
import { ForgotPasswordPage } from "./forgot-password/forgot-password";
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { CaRegisterUserPage } from "../../memberOnboarding/signup/ca-register-user/ca-register-user";


@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class loginPage implements OnInit {
  LoginForm: FormGroup;
  forbiddenNumbers = ["1234567890", "0987654321"];
  forbiddenEmails = ["abc@tlc.com", "test@test.com"];
  showPass = true;
  eyeIcon = "ios-eye-outline";
  Login = "EmailLogin";
  type = "password";
  LoginTest = "Login";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {}
  ngOnInit() {
    this.LoginForm = new FormGroup({
      mobile: new FormControl(null),
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad loginPage");
  }
  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.eyeIcon = "ios-eye-outline";
      this.type = "password";
    } else {
      this.eyeIcon = "ios-eye-off-outline";
      this.type = "text";
    }
  }
  changeLoginTo(val) {
    this.Login = val;
  }
  onLogin() {
    console.log(this.LoginForm);
    if (
      (this.LoginForm.value.mobile === 9876543210 ||
        this.LoginForm.value.email === "abc@xyz.com") &&
      this.LoginForm.value.password === "moonraft"
    ) {
      alert("login Successful");
    } else {
      alert("invalid");
    }
  }
  onWrongCredentials() {
    let alert = this.alertCtrl.create({
      message:
        "We do not recognize your mobile number or email ID. Please Sign Up.",
      buttons: [
        {
          text: "Sign Up",
          role: "cancel",
          // handler: () => {
          //   this.navCtrl.push(CaRegisterUserPage);
          // }
        },
        {
          role: "cancel",
          cssClass: "close-btn",
          handler: () => {
          }
        }
      ],
      cssClass: "alertCustomCss"
    });
    alert.present();
  }
  forgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
