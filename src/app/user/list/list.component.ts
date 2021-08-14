import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Contact } from '../../contact';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  contacts: Contact[];

  @Input() name;
  constructor(private ds: DataService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.showlist();
  }
  showlist() {
    this.ds.pblist().subscribe((item) => {
      console.log(item);
      this.contacts = item;
    });
  }
  del(id) {
    if (confirm('Are you sure to delete ')) {
      this.ds.pbdelete(id).subscribe((item) => {
        console.log(item);
        this.showlist();
      });
    }
  }
  open(data) {
    console.log(data)
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.cname = data.contact_name;
    modalRef.componentInstance.cno = data.contact_no;
    modalRef.componentInstance.cid = data.id;

    modalRef.result.then(
      () => {
        console.log("Close button clicked")
        this.showlist()
      },
      ()=> {
        console.log("Close icon clicked or backdrop clicked")
        this.showlist()
    });
  }
}
