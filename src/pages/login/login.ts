import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User; 
  constructor(private afAuth: AngularFireAuth,private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
  async login(user: User ){
    try { 
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);  
      if (result) {
        this.navCtrl.setRoot('HomePage');
      }else{
        this.toast.create({
          message:`Fail Login`,
          duration: 3000
        }).present();
      }
    }
    catch(e){
      console.error(e);
      this.toast.create({
          message:`Fail Login`,
          duration: 3000
        }).present();
    }
  }
  register(){
  	this.navCtrl.push('RegisterPage');  
  }
}
