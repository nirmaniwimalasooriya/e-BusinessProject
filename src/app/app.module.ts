import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { ClassComponent } from './class/class.component';
import { OneAComponent } from './one-a/one-a.component';
import { StudentComponent } from './student/student.component';

const appRoutes: Routes = [
  { path: '' , component: HomepageComponent },
  { path: 'all-teachers' , component: AllTeachersComponent },
  { path: 'all-classes' , component: AllClassesComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'teacher' , component: TeacherComponent },
  { path: 'student' , component: StudentComponent },
  { path: '1A' , component: OneAComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    AllTeachersComponent,
    TeacherComponent,
    AllClassesComponent,
    ClassComponent,
    OneAComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
