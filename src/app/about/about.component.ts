import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AboutService } from './about.service0';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _activaredRoute:ActivatedRoute , private _router:Router  ) {

   }


   

  ngOnInit() {
  }

}
