import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './../../services/user.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.page.html',
  styleUrls: ['user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  userForm: FormGroup;
  id = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private userService: UserService, private navCtrl: NavController) {
      
  }

  ngOnInit() {
    this.userForm = this.fb.group({ 
      Username: '', 
      Password: '', 
      Role: '', 
      UserLocation: '',
  });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id && this.id != 'null') {
      this.userService.getUserById(this.id).subscribe(res => {
        this.userForm.patchValue(res);
      });
    } else {
      this.id = null;
    }
  }

  submit() {
    if (this.id) {
      this.userService.updateUserById(this.id, this.userForm.value).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.userService.addUser(this.userForm.value).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  delete() {
    this.userService.deleteUserById(this.id).then(res => {
      this.navCtrl.pop();
    });
  }
}
