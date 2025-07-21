import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  loginError:any;

  constructor(private loginService: LoginService, private router: Router)  { }

  ngOnInit(): void {
  }

 
// onSubmit(form: NgForm): void {
//   if (form.valid) {
//     this.loginService.login(this.username, this.password).subscribe(
//       (response) => {
//         console.log('Login successful', response);
//         this.router.navigate(['/profile']);
//       },
//       (error) => {
//         console.error('Login error', error);
//       }
//     );
//   } else {
//     console.warn('Form is invalid. Please fill in all required fields correctly.');
//   }
// }


onSubmit(form: NgForm): void {
  if (form.valid) {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        if (response && response.status) {
          this.router.navigate(['/profile']);
        } else {
          this.loginError = 'Invalid email or password.';
        }
      },
      (error) => {
        console.error('Login error', error);
        this.loginError = 'Invalid email or password.';
      }
    );
  } else {
    this.loginError = 'Please fill all fields correctly.';
  }
}

}
