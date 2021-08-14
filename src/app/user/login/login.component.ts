import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform;
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
  }
  onsubmit(userdata){
    this.ds.login(userdata).subscribe((data)=>{
      console.log(data);
      if(data.status === 'Invalid User'){
        this.toastr.error('Invalid, Retry');
        return;
      }else{
        localStorage.setItem('user', userdata.username)
        this.router.navigate(['/admin/dashboard']);
      }
    })
  }
}
