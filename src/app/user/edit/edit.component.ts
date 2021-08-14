import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() cname;
  @Input() cno;
  @Input() cid;
  pbcreateform;
  errmsg='';
  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder, private ds:DataService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.pbcreateform = this.fb.group({
      contact_name: [this.cname, Validators.required],
      contact_no: [this.cno, [Validators.required, Validators.pattern(new RegExp("[0-9 ]{10}"))]]
    })
  }
  onupdate(data){
    console.log(data);
    data.id = this.cid;
    this.ds.pbupdate(data).subscribe((item) => {
      console.log(item);
      this.toastr.success('Contact Updated');
      this.activeModal.close();
    })
  }

}
