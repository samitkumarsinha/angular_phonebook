import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private ds:DataService, private router : Router) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  create(){
    this.router.navigate(['/admin/dashboard/create'])
  }
  list(){
    this.router.navigate(['/admin/dashboard/list'])
  }
  logout(){
    localStorage.removeItem('user')
    this.ds.logout().subscribe(item => {
      console.log(item)
    })
    this.router.navigate(['/admin/login']);
  }
}
