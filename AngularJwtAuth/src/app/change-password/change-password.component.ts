import { AuthService } from './../auth/auth.service';
import { ChangePassword } from './../auth/change-password';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: any = {};

  isChangeFailed = false;
  isChangeSuccess = false;
  message = '';
  roles: string[] = [];
  private changePassword: ChangePassword;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    debugger
    console.log(this.form);
    console.log(this.tokenStorage.getToken());
    this.changePassword = new ChangePassword(
      this.form.password,
      this.tokenStorage.getToken());

    this.authService.changePass(this.changePassword).subscribe(
      data => {
        this.message = data;
        this.isChangeSuccess = true;
      },
      error => {
        console.log(error);
        this.message = error.error.message;
        this.isChangeFailed = true;
      }
    );
  }

}
