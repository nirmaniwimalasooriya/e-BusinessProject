import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-one-a',
  templateUrl: './one-a.component.html',
  styleUrls: ['./one-a.component.css']
})
export class OneAComponent implements OnInit {
  
  students:any = [];

  constructor(db: AngularFirestore) { 
    this.students = db.collection('school').doc('QwKZWB2LpvolCxuWAlgx').collection('student').valueChanges();
  }

  ngOnInit() {
  }

}
