import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   username: any;
  password: any;


  constructor(private loginService: LoginService, private router: Router)  { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/profile']); 
      },
      (error) => {
        console.error('Login error', error);
       
      }
    );
  }

}
