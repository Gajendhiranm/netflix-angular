import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(value : any){
    if(value.email.length <=0 && value.password.length <= 0){
      
    }
    
    this.route.navigate(['/home']);
   
  }
}
