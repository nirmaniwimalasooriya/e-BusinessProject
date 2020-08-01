import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _activaredRoute:ActivatedRoute , private _router:Router ) { }

  ngOnInit() {
  }

  toHOme():void{
    this._router.navigate(['/homepage']);
  }
  toAbout():void{
    this._router.navigate(['/about']);
  }
}
