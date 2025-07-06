import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AnimationsDemoComponent } from './animations-demo/animations-demo.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule,AnimationsDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 
}
