import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform;
  errmsg='';
  constructor(private fb:FormBuilder, private ds:DataService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.regform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onregister(data){
    this.ds.register(data).subscribe((item) => {
      console.log(item);
      this.toastr.success('Successfully Registered');
      this.router.navigate(['/admin/login']);
    },error =>{
      this.toastr.error(error.error.status)
    }
    )
  }
}
