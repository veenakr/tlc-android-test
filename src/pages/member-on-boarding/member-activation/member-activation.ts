import { Component } from "@angular/core";
import {
  NavController,
  NavParams} from "ionic-angular";
// import { CaSetUpProfilePage } from "../../shared/ca-set-up-profile/ca-set-up-profile";
import { CommonDetails } from "../../../services/commondetails.service";

@Component({
  selector: "page-member-activation",
  templateUrl: "member-activation.html"
})
export class MemberActivationPage {
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public comdet: CommonDetails,
  ) {}
  ionViewWillEnter() {
    this.comdet.showBlock = "memberId";
  }
 
  onProceedMemberActivation(){
    // this.navCtrl.push(CaSetUpProfilePage);
  }
  ionViewDidLeave(){
    this.comdet.resetdata();
  }
}
