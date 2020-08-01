import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacher:any = [];
  constructor(db: AngularFirestore) { 
    this.teacher = db.collection('school').doc('QwKZWB2LpvolCxuWAlgx').collection('teachers').doc('IsemsrHVMnUHxYIvxhMZQEDxnC03').valueChanges();
  }

  ngOnInit() {
  }

}
