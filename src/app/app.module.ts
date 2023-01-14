import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserlistComponent } from './works/userlist/userlist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';
import { ChildComponent } from './works/tasklist/child/child.component';
import { TakelistComponent } from './takelist/takelist.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    CenzorComponent,
    UserlistComponent,
    TasklistComponent,
    ChildComponent,
    TakelistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
