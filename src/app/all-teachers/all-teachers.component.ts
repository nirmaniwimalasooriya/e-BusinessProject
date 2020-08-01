import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit {

  items:any = [];

  constructor(db: AngularFirestore) {
    this.items = db.collection('school').doc('QwKZWB2LpvolCxuWAlgx').collection('teachers').valueChanges();
   }
    
  ngOnInit() {
  }

}
