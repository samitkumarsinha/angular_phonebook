import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pbcreate',
  templateUrl: './pbcreate.component.html',
  styleUrls: ['./pbcreate.component.css']
})
export class PbcreateComponent implements OnInit {
  pbcreateform;
  errmsg='';
  constructor(private fb:FormBuilder, private ds:DataService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pbcreateform = this.fb.group({
      contact_name: ['', Validators.required],
      contact_no: ['', [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]]
    })
  }
  onregister(data){
    this.ds.pbcreate(data).subscribe((item) => {
      console.log(item);
      this.toastr.success('Contact Created');
      this.router.navigate(['/admin/dashboard/list']);
    })
  }

}
