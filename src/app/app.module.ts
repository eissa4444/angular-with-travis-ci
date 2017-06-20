import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TiltleComponent } from './title.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent, 
    HighlightDirective,
    TiltleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
