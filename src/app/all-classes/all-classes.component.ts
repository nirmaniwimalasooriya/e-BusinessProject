import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.css']
})
export class AllClassesComponent implements OnInit {

  items:any = [];
  teachers:any=[];
  t_name;

  constructor(db: AngularFirestore) {
    this.items = db.collection('school').doc('QwKZWB2LpvolCxuWAlgx').collection('class').valueChanges();
    this.teachers = db.collection('school').doc('QwKZWB2LpvolCxuWAlgx').collection('teachers').valueChanges();
  }

  ngOnInit() {
    
  }

  getTeacherById(id:any){
    for(let i=0;i<this.teachers.length ;i++){
      alert('came');
      if(this.teachers[i].t_id = id){
        this.t_name =  this.teachers[i].name;
        
    }
   }
  }
}
