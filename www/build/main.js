webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_testService__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(testService) {
        this.testService = testService;
    }
    HelloIonicPage.prototype.ngOnInit = function () {
        this.testService.serviceSetSuccess();
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to your first Ionic ap!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_testService__["a" /* testService */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testService; });
var testService = /** @class */ (function () {
    function testService() {
    }
    testService.prototype.serviceSetSuccess = function () {
        console.log("Service folder created");
    };
    return testService;
}());

//# sourceMappingURL=testService.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GoogleAnalytics } from "@ionic-native/google-analytics";
// import {
//   NativeTransitionOptions,
//   NativePageTransitions
// } from "@ionic-native/native-page-transitions";

// import { MemberActivationPage } from "../memberOnboarding/member-activation/member-activation";
// import { CaRegisterUserPage } from "../memberOnboarding/signup/ca-register-user/ca-register-user";

// @IonicPage()
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, 
        // public ga: GoogleAnalytics,
        // public nativePageTransitions: NativePageTransitions,
        loginserv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginserv = loginserv;
        // this.ga
        //   .startTrackerWithId("UA-127853070-1")
        //   .then(() => {
        //     console.log("Google analytics is ready now");
        //     this.ga.trackView("home");
        //   })
        //   .catch(e => console.log("Error starting GoogleAnalytics", e));
    }
    WelcomePage.prototype.pushPage = function (page) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* loginPage */]);
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
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-welcome",template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/welcome.html"*/'<ion-content class="welcomepage">\n  <div class="welcomeImageContainer">\n    <img src="assets/imgs/welcome.jpg" alt="backgroundImage" class="welcomepage__image">\n  </div>\n  <div class="welcomePage__buttonContainer">\n    <button\n      ion-button\n      block\n      class="welcomepage__buttons  welcomepage__buttons--login"\n      color="lightdark"\n      (click)="pushPage(\'login\')"\n    >\n      Login\n    </button>\n    <!-- <button\n      ion-button\n      block\n      class="welcomepage__buttons welcomepage__buttons--activate-membership welcomepage__button--direction"\n      color="special"\n      (click)="pushPage(\'MemberActivation\')"\n    >\n      <ion-icon name="ca-star" large></ion-icon>\n      Activate Membership\n    </button> -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_login_service__["a" /* LoginService */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { CaRegisterUserPage } from "../../memberOnboarding/signup/ca-register-user/ca-register-user";
var loginPage = /** @class */ (function () {
    function loginPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.forbiddenNumbers = ["1234567890", "0987654321"];
        this.forbiddenEmails = ["abc@tlc.com", "test@test.com"];
        this.showPass = true;
        this.eyeIcon = "ios-eye-outline";
        this.Login = "EmailLogin";
        this.type = "password";
        this.LoginTest = "Login";
    }
    loginPage.prototype.ngOnInit = function () {
        this.LoginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    loginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad loginPage");
    };
    loginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.eyeIcon = "ios-eye-outline";
            this.type = "password";
        }
        else {
            this.eyeIcon = "ios-eye-off-outline";
            this.type = "text";
        }
    };
    loginPage.prototype.changeLoginTo = function (val) {
        this.Login = val;
    };
    loginPage.prototype.onLogin = function () {
        console.log(this.LoginForm);
        if ((this.LoginForm.value.mobile === 9876543210 ||
            this.LoginForm.value.email === "abc@xyz.com") &&
            this.LoginForm.value.password === "moonraft") {
            alert("login Successful");
        }
        else {
            alert("invalid");
        }
    };
    loginPage.prototype.onWrongCredentials = function () {
        var alert = this.alertCtrl.create({
            message: "We do not recognize your mobile number or email ID. Please Sign Up.",
            buttons: [
                {
                    text: "Sign Up",
                    role: "cancel",
                },
                {
                    role: "cancel",
                    cssClass: "close-btn",
                    handler: function () {
                    }
                }
            ],
            cssClass: "alertCustomCss"
        });
        alert.present();
    };
    loginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    loginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/login/login.html"*/'<ion-content class="background-properties">\n  <!-- <back-button></back-button> -->\n  <div class="loginPage-container">\n    <header class="loginPage_headerContainer">Login</header>\n    <form [formGroup]="LoginForm" (ngSubmit)="onLogin()">\n      <div class="form-group" [ngSwitch]="Login">\n        <div\n          *ngSwitchCase="\'EmailLogin\'"\n          class="common-card-block"\n        >\n          <label for="email">Enter Email</label>\n          <input\n            name="email"\n            class="loginPage__input form-control"\n            formControlName="email"\n          />\n          <button\n          type="button"\n            class="loginpage__button--email"\n            (click)="changeLoginTo(\'NumberLogin\')"\n          >\n            Login with Mobile\n          </button>\n        </div>\n        <div\n          *ngSwitchCase="\'NumberLogin\'"\n          class="common-card-block"\n        >\n          <label for="number">Enter Mobile Number </label>\n          <div class="loginPage__mobile">\n            <div class="loginPage__pin-code loginPage__select select__parent">\n              <select class="country-code " type="number">\n                <option value="0">91</option>\n                <option value="1">90</option>\n              </select>\n            </div>\n            <input\n              name="number"\n              type="number"\n              max="10"\n              class="loginPage__number loginPage__input form-control"\n              formControlName="mobile"\n            />\n          </div>\n          <button\n          type="button"\n            class="loginpage__button--email"\n            (click)="changeLoginTo(\'EmailLogin\')"\n          >\n            Login with Email\n          </button>\n        </div>\n      </div>\n      <div class="loginPage__password common-card-block">\n        <label for="password">Enter Password</label>\n        \n        <input\n          name="password"\n          required\n          type="{{type}}"\n          class="loginPage__input form-control"\n          formControlName="password"\n        />\n        <button\n          ion-button\n          clear\n          class="  loginpage__button--showPassword"\n          color="dark"\n          type="button"\n          item-right\n          (click)="showPassword()"\n        >\n          <ion-icon name="{{eyeIcon}}"></ion-icon>\n        </button>\n        <button\n          type="button"\n          class=" loginpage__button--forgot-password"\n          (click)="forgotPassword()"\n        >\n          Forgot Password?\n        </button>\n      </div>\n      <ca-query [queryKind]="\'loginQuery\'"></ca-query>\n      <button\n        ion-button\n        color="special"\n        class="button--proceed button--proceed--active loginPage__button--login"\n        large\n        block\n        type="submit"\n        (click)="onWrongCredentials()"\n      >\n        Login\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], loginPage);
    return loginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, viewCtrl, alertCtrl, comdet, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.comdet = comdet;
        this.modalCtrl = modalCtrl;
    }
    ForgotPasswordPage.prototype.ionViewWillEnter = function () {
        this.comdet.showBlock = "mobile";
    };
    ForgotPasswordPage.prototype.onPasswordChanged = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: '<div><img src="../assets/imgs/check-image.png"/><div class="password-change-success">You have successfully changed your password. Login with your new password.</div></div>',
            buttons: [
                {
                    text: "Login",
                    role: "cancel",
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
                {
                    role: "cancel",
                    cssClass: "close-btn",
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ],
            cssClass: "alertCustomCss"
        });
        alert.present();
    };
    ForgotPasswordPage.prototype.ionViewDidLeave = function () {
        this.comdet.resetdata();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-forgot-password",template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/login/forgot-password/forgot-password.html"*/'<ion-content class="background-properties">\n  <!-- <back-button></back-button> -->\n  <div class="ca-page-header"><h2>Reset Password</h2></div>\n  <ha-user-details [type]="\'mobile\'" [nextshowblock]="\'email\'"></ha-user-details>\n  <ha-user-details [type]="\'email\'" [nextshowblock]="\'password\'"></ha-user-details>\n  <ha-user-details [type]="\'password\'"></ha-user-details>\n  <ca-query [queryKind]="\'loginQuery\'"></ca-query>\n  <button\n    ion-button\n    color="special"\n    class="profile__button--proceed"\n    (click)="onPasswordChanged()"\n    large\n    block\n    id="setUpProfileProceed"\n    [disabled]="!this.comdet.matched"\n  >\n    Confirm Password\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/welcome/login/forgot-password/forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__["a" /* CommonDetails */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.usertype = "visitor";
    }
    LoginService.prototype.onWrongCredentials = function () {
        var alert = this.alertCtrl.create({
            message: "We do not recognize your mobile number or email ID. Please Sign Up.",
            buttons: [
                {
                    text: "Sign Up",
                    role: "cancel",
                    handler: function () {
                        console.log("Sign up clicked");
                    }
                }
            ],
            cssClass: "alertCustomCss"
        });
        alert.present();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_testService__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_welcome_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ca_query_ca_query__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_login_forgot_password_forgot_password__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ha_password_ha_password__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_commondetails_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_member_on_boarding_member_activation_member_activation__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ha_back_button_ha_back_button__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ha_user_details_ha_user_details__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_login_login__["a" /* loginPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_ca_query_ca_query__["a" /* CaQueryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_login_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_ha_user_details_ha_user_details__["a" /* HaUserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_ha_password_ha_password__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_member_on_boarding_member_activation_member_activation__["a" /* MemberActivationPage */],
                __WEBPACK_IMPORTED_MODULE_18__components_ha_back_button_ha_back_button__["a" /* BackButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_ha_user_details_ha_user_details__["a" /* HaUserDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_welcome_login_login__["a" /* loginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_login_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_member_on_boarding_member_activation_member_activation__["a" /* MemberActivationPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_testService__["a" /* testService */],
                __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_16__services_commondetails_service__["a" /* CommonDetails */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        // rootPage = HelloIonicPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaQueryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CallNumber } from '@ionic-native/call-number';
// import { EmailComposer } from '@ionic-native/email-composer';
var CaQueryComponent = /** @class */ (function () {
    function CaQueryComponent() {
    }
    // constructor(public callNumber: CallNumber, public emailComposer: EmailComposer, public renderer: Renderer) {
    //   console.log('Hello CaQueryComponent Component');
    //   this.text = 'Hello World';
    // }
    CaQueryComponent.prototype.ngAfterViewInit = function () {
        console.log(this.queryKind);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('queryTextContent', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], CaQueryComponent.prototype, "queryTextContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('queryKind'),
        __metadata("design:type", Object)
    ], CaQueryComponent.prototype, "queryKind", void 0);
    CaQueryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ca-query',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ca-query/ca-query.html"*/'<!-- Generated template for the CaQueryComponent component -->\n<div class="loginPage__queries common-card">\n  <div #queryTextContent [ngSwitch]="queryKind">\n    <div class="loginPage__queries--header" *ngSwitchCase="\'loginQuery\'">\n      <p>For login related queries</p>\n    </div>\n    <div class="membership__queries--header" *ngSwitchCase="\'membershipQuery\'">\n      <p>If you wish to purchase bulk memberships, please \n          contact our Member Help Desk.</p>\n    </div>\n  </div>\n  <div class="loginPage__queries--buttonContainer">\n    <button ion-button class="loginPage__button divider" type="button" (click)="call()" clear>\n      <ion-icon name="ca-call"></ion-icon>Call\n    </button>\n    <button ion-button class="loginPage__button" type="button" (click)="emailComp()" clear>\n      <ion-icon name="ca-email"></ion-icon> Email\n    </button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ca-query/ca-query.html"*/
        })
    ], CaQueryComponent);
    return CaQueryComponent;
}());

//# sourceMappingURL=ca-query.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_commondetails_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(comdet) {
        this.comdet = comdet;
    }
    PasswordComponent.prototype.showPassword = function (val) {
        if (val === "createpassword") {
            this.comdet.showPassCreatePassword = !this.comdet.showPassCreatePassword;
            if (this.comdet.showPassCreatePassword) {
                this.comdet.eyeIconCreatePassword = "ios-eye-outline";
                this.comdet.typeCreatePassword = "password";
            }
            else {
                this.comdet.eyeIconCreatePassword = "ios-eye-off-outline";
                this.comdet.typeCreatePassword = "text";
            }
        }
        else {
            this.comdet.showPassRenamePassword = !this.comdet.showPassRenamePassword;
            if (this.comdet.showPassRenamePassword) {
                this.comdet.eyeIconRenamePassword = "ios-eye-outline";
                this.comdet.typeRenamePassword = "password";
            }
            else {
                this.comdet.eyeIconRenamePassword = "ios-eye-off-outline";
                this.comdet.typeRenamePassword = "text";
            }
        }
    };
    PasswordComponent.prototype.isPasswordMatch = function () {
        if (this.comdet.createdPassword == this.comdet.reEnteredPassword) {
            var element = document.getElementById("setUpProfileProceed");
            element.classList.add("button--proceed--active");
            this.comdet.matched = true;
        }
        else {
            alert("Passwords don't match");
            this.comdet.matched = false;
        }
    };
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ha-password',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-password/ha-password.html"*/'<div class="password-block">\n    <label for="create-password" class="profile__label"\n      >Enter New Password</label\n    >\n    <input\n      name="create-password"\n      class="profile__input"\n      [(ngModel)]="this.comdet.createdPassword"\n      type="{{this.comdet.typeCreatePassword}}"\n    />\n    <button\n      ion-button\n      clear\n      class="eye__button--password eye__button--showPassword"\n      color="dark"\n      type="button"\n      item-right\n      (click)="showPassword(\'createpassword\')"\n    >\n      <ion-icon\n        *ngIf="this.comdet.matched"\n        class="iconVerified"\n        name="verified"\n      ></ion-icon>\n      <ion-icon name="{{this.comdet.eyeIconCreatePassword}}"></ion-icon>\n    </button>\n    <div class="profile__password-rule">\n      (7-12 characters, alpha-numeric with one special character)\n    </div>\n  </div>\n  <div class="password-block">\n    <label for="reenter-password" class="profile__label"\n      >Re-enter New Password</label\n    >\n    <input\n      name="reenter-password"\n      (change)="isPasswordMatch()"\n      class="profile__input"\n      [(ngModel)]="this.comdet.reEnteredPassword"\n      type="{{this.comdet.typeRenamePassword}}"\n    />\n    <button\n      ion-button\n      clear\n      class="eye__button--password eye__button--showPassword"\n      color="dark"\n      type="button"\n      item-right\n      (click)="showPassword(\'reenterpassword\')"\n    >\n      <ion-icon\n        *ngIf="this.comdet.matched"\n        class="iconVerified"\n        name="verified"\n      ></ion-icon>\n      <ion-icon name="{{this.comdet.eyeIconRenamePassword}}"></ion-icon>\n    </button>\n  </div>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-password/ha-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_commondetails_service__["a" /* CommonDetails */]])
    ], PasswordComponent);
    return PasswordComponent;
}());

//# sourceMappingURL=ha-password.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberActivationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CaSetUpProfilePage } from "../../shared/ca-set-up-profile/ca-set-up-profile";

var MemberActivationPage = /** @class */ (function () {
    function MemberActivationPage(navCtrl, navParams, comdet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comdet = comdet;
    }
    MemberActivationPage.prototype.ionViewWillEnter = function () {
        this.comdet.showBlock = "memberId";
    };
    MemberActivationPage.prototype.onProceedMemberActivation = function () {
        // this.navCtrl.push(CaSetUpProfilePage);
    };
    MemberActivationPage.prototype.ionViewDidLeave = function () {
        this.comdet.resetdata();
    };
    MemberActivationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-member-activation",template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/member-on-boarding/member-activation/member-activation.html"*/'<ion-content class="background-properties">\n  <ha-back-button></ha-back-button>\n  <div class="memberActivation__content-container">\n    <header class="memberActivation_Content-Header">Activate Account</header>\n    <ha-user-details [type]="\'memberId\'"  [nextshowblock]="\'mobile\'"></ha-user-details> \n    <ha-user-details [type]="\'mobile\'" [nextshowblock]="\'email\'"></ha-user-details> \n    <ha-user-details [type]="\'email\'" ></ha-user-details> \n    <ca-query [queryKind]="\'loginQuery\'"></ca-query>\n  </div>\n  <button\n    ion-button\n    color="special"\n    class="button--proceed button--proceed--active memberActivation__button--login"\n    large\n    block\n    [disabled]="!this.comdet.emailVerified"\n    (click)="onProceedMemberActivation()"\n  >\n    Proceed\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/pages/member-on-boarding/member-activation/member-activation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__["a" /* CommonDetails */]])
    ], MemberActivationPage);
    return MemberActivationPage;
}());

//# sourceMappingURL=member-activation.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BackButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.enroll = false;
    }
    BackButtonComponent.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], BackButtonComponent.prototype, "enroll", void 0);
    BackButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ha-back-button',template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-back-button/ha-back-button.html"*/'\n<button *ngIf="!enroll" ion-button icon-only full class="back__button" (click)="goBack()">\n  <ion-icon name="ha-back"></ion-icon>\n  <ng-content></ng-content>\n</button>\n<button *ngIf="enroll" ion-button icon-only full class="enroll__backButtonBackground" (click)="goBack()">\n  <ion-icon name="ha-back"></ion-icon>\n  <ng-content></ng-content>\n</button>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-back-button/ha-back-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], BackButtonComponent);
    return BackButtonComponent;
}());

//# sourceMappingURL=ha-back-button.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HaUserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserdetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HaUserDetailsComponent = /** @class */ (function () {
    function HaUserDetailsComponent(navCtrl, navParams, viewCtrl, alertCtrl, comdet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.comdet = comdet;
    }
    HaUserDetailsComponent.prototype.setClasses = function (val) {
        var classes = "common-card memberActivation_Card ";
        classes += this.comdet.showBlock === val ? "expandheight" : "shrinkheight";
        return classes;
    };
    HaUserDetailsComponent.prototype.verifyMemberId = function () {
        if (this.comdet.memberId.toString().length === 8 &&
            this.comdet.memberId === this.comdet.jsonmemberId) {
            this.comdet.memberIdVerified = true;
            this.comdet.showBlock = "mobile";
        }
        else {
            alert("please enter valid memberId");
        }
    };
    HaUserDetailsComponent.prototype.updateMessage = function (messageText) {
        this.comdet.message = messageText;
    };
    HaUserDetailsComponent.prototype.push = function (prevobj, obj, nextobj, type) {
        if (obj.value) {
            if (nextobj === null) {
                this.verifyOtp(type);
            }
            else {
                nextobj.focus();
            }
        }
        else {
            prevobj.value = "";
            prevobj.focus();
        }
    };
    HaUserDetailsComponent.prototype.verifyOtp = function (otpVerifyType) {
        switch (otpVerifyType) {
            case "mobile":
                this.comdet.mobileVerified = true;
                this.comdet.showBlock = this.nextshowblock;
                this.comdet.message = "";
                this.comdet.otpButton = "Request OTP";
                this.comdet.OtpRequested = false;
                break;
            case "email":
                this.comdet.emailVerified = true;
                this.comdet.showBlock = this.nextshowblock;
                this.comdet.showPasswordBlock = true;
        }
    };
    HaUserDetailsComponent.prototype.onRequestOtp = function (otpObj, otpVerifyType) {
        console.log(otpObj);
        switch (otpVerifyType) {
            case "mobile":
                if (this.comdet.OtpRequested) {
                    this.comdet.message = this.comdet.mobileResendOtpMessage;
                }
                else {
                    this.comdet.message = this.comdet.mobileRequestOtpMessage;
                    this.comdet.otpButton = " Resend OTP";
                    this.comdet.OtpRequested = true;
                }
                break;
            case "email":
                this.comdet.otpButton = " Resend OTP";
                this.comdet.message = this.comdet.emailOtpMessage;
        }
        this.push(otpObj, otpObj, null, otpVerifyType);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HaUserDetailsComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HaUserDetailsComponent.prototype, "nextshowblock", void 0);
    HaUserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ha-user-details",template:/*ion-inline-start:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-user-details/ha-user-details.html"*/'<ion-card *ngIf="type ===\'memberId\'" padding [ngClass]="setClasses(\'memberId\')">\n    <div class="memberActivation__verifiedInfo_Container">\n      <ion-card-header class="memberActivation_Card-Header">\n        Enter Membership Number\n      </ion-card-header>\n      <p\n        class="memberActivation__verifiedMemberInfo"\n        *ngIf="this.comdet.memberIdVerified"\n      >\n        {{ this.comdet.memberId }}\n      </p>\n    </div>\n    <ion-icon\n      name="verified"\n      class="memberActivation__verified"\n      *ngIf="this.comdet.memberIdVerified"\n      item-end\n    ></ion-icon>\n    <input\n      class="memberActivation_card-input"\n      type="number"\n      placeholder="12345678"\n      [(ngModel)]="this.comdet.memberId"\n      *ngIf="this.comdet.showBlock === \'memberId\'"\n      (change)="verifyMemberId()"\n    />\n  </ion-card>\n<ion-card *ngIf="type ===\'mobile\'" [ngClass]="setClasses(\'mobile\')">\n  <div padding>\n    <ion-card-header class="memberActivation_Card-Header">\n      Mobile Number\n    </ion-card-header>\n    <div *ngIf="this.comdet.mobileVerified">\n      <p class=" memberActivation__verifiedMemberInfo">{{ this.comdet.mobileNumber }}</p>\n      <div class="MemberActivation__verified_Container">\n        <p>Verified</p>\n        <ion-icon name="verified"></ion-icon>\n      </div>\n    </div>\n\n    <div *ngIf="this.comdet.showBlock === \'mobile\'">\n      <div class="memberActivation_card__valueContainer">\n        <p class="memberActivation__verifyType">{{ this.comdet.mobileNumber }}</p>\n        <button\n          ion-button\n          clear\n          class="memberActivation_info_button"\n          (click)="updateMessage(this.comdet.mobileInfoMessage)"\n        >\n          <ion-icon name="ca-info"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="this.comdet.showBlock === \'mobile\'">\n    <span class="memberActivation__otpmessage">{{ this.comdet.message }}</span>\n\n    <div class="memberActivation__otpContainer" id="otp">\n      <div class="memberActivation__otpRequestInputBlock">\n        <div\n          class="memberActivation__requestOtp"\n          (click)="onRequestOtp(otp1, \'mobile\')"\n        >\n          {{ this.comdet.otpButton }}\n        </div>\n        <div class="memberActivation__otpInput">\n          <input\n            type="number"\n            name="otp1"\n            #otp1\n            maxlength="1"\n            (keyup)="push(otp1, otp1, otp2)"\n          />\n          <input\n            type="number"\n            name="otp2"\n            #otp2\n            maxlength="1"\n            (keyup)="push(otp1, otp2, otp3)"\n          />\n          <input\n            type="number"\n            name="otp3"\n            #otp3\n            maxlength="1"\n            (keyup)="push(otp2, otp3, otp4)"\n          />\n          <input\n            type="number"\n            name="otp4"\n            #otp4\n            maxlength="1"\n            (keyup)="push(otp3, otp4, null, \'mobile\')"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-card>\n<ion-card *ngIf="type ===\'email\'" [ngClass]="setClasses(\'email\')">\n  <div padding>\n    <ion-card-header class="memberActivation_Card-Header">\n      Email\n    </ion-card-header>\n    <div *ngIf="this.comdet.emailVerified">\n      <p class="memberActivation__verifiedMemberInfo">{{ this.comdet.emailId }}</p>\n      <div class="MemberActivation__verified_Container">\n        <p>Verified</p>\n        <ion-icon name="verified"></ion-icon>\n      </div>\n    </div>\n    <div *ngIf="this.comdet.showBlock === \'email\'">\n      <div class="memberActivation_card__valueContainer">\n        <p class="memberActivation__verifyType">{{ this.comdet.emailId }}</p>\n        <button\n          ion-button\n          clear\n          class="memberActivation_info_button"\n          (click)="updateMessage(this.comdet.emailInfoMessage)"\n        >\n          <ion-icon name="ca-info"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="this.comdet.showBlock === \'email\'">\n    <span class="memberActivation__otpmessage">{{ this.comdet.message }}</span>\n    <div class="memberActivation__otpContainer" id="otp">\n      <div class="memberActivation__otpRequestInputBlock">\n        <div\n          class="memberActivation__requestOtp"\n          (click)="onRequestOtp(otp1, \'email\')"\n        >\n          {{ this.comdet.otpButton }}\n        </div>\n        <div class="memberActivation__otpInput">\n          <input\n            type="number"\n            name="otp1"\n            #otp1\n            maxlength="1"\n            (keyup)="push(otp1, otp1, otp2)"\n          />\n          <input\n            type="number"\n            name="otp2"\n            #otp2\n            maxlength="1"\n            (keyup)="push(otp1, otp2, otp3)"\n          />\n          <input\n            type="number"\n            name="otp3"\n            #otp3\n            maxlength="1"\n            (keyup)="push(otp2, otp3, otp4)"\n          />\n          <input\n            type="number"\n            name="otp4"\n            #otp4\n            maxlength="1"\n            (keyup)="push(otp3, otp4, null, \'email\')"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-card>\n<ion-card *ngIf="type ===\'password\'" [ngClass]="setClasses(\'password\')">\n  <div padding>\n    <ion-card-header\n      *ngIf="!this.comdet.showPasswordBlock"\n      class="memberActivation_Card-Header"\n      >Set New Password</ion-card-header\n    >\n    <div *ngIf="this.comdet.showPasswordBlock">\n      <ha-password></ha-password>\n    </div>\n  </div>\n</ion-card>\n'/*ion-inline-end:"/Users/veena/Desktop/TLC/sourceCode/jan7/tlc-hotel-app/src/components/ha-user-details/ha-user-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_commondetails_service__["a" /* CommonDetails */]])
    ], HaUserDetailsComponent);
    return HaUserDetailsComponent;
}());

//# sourceMappingURL=ha-user-details.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonDetails = /** @class */ (function () {
    function CommonDetails() {
        this.memberIdVerified = false;
        this.mobileVerified = false;
        this.emailVerified = false;
        this.jsonmemberId = 12345678;
        this.mobileNumber = "+91 *******456";
        this.emailId = "v*********@gmail.com";
        this.mobileInfoMessage = "You can change your mobile number after activating the membership ";
        this.emailInfoMessage = "You can change your email ID after activating the membership ";
        this.mobileRequestOtpMessage = "OTP will auto-populate in 3 seconds";
        this.mobileResendOtpMessage = "An OTP has been sent to your mobile number";
        this.emailOtpMessage = "Enter OTP in the section below";
        this.OtpRequested = false;
        this.otpButton = "Request OTP";
        this.isPasswordChange = false;
        //Set New Password
        this.eyeIconCreatePassword = "ios-eye-outline";
        this.showPassCreatePassword = true;
        this.eyeIconRenamePassword = "ios-eye-outline";
        this.showPassRenamePassword = true;
        this.typeCreatePassword = "password";
        this.typeRenamePassword = "password";
        this.showPasswordBlock = false;
        this.matched = false;
    }
    CommonDetails.prototype.resetdata = function () {
        this.showBlock = "";
        this.emailVerified = false;
        this.mobileVerified = false;
        this.memberIdVerified = false;
        this.memberId = null;
        this.message = "";
        this.OtpRequested = false;
        this.otpButton = "Request OTP";
        this.isPasswordChange = false;
        this.showPassCreatePassword = true;
        this.showPassRenamePassword = true;
        this.showPasswordBlock = false;
        this.createdPassword = "";
        this.reEnteredPassword = "";
        this.matched = false;
    };
    CommonDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommonDetails);
    return CommonDetails;
}());

//# sourceMappingURL=commondetails.service.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map