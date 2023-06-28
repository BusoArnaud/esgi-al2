import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatchComponent} from "./catch/catch.component";
import {EmitComponent} from "./emit/emit.component";

@Component({
  selector: 'app-first-subject',
  standalone: true,
  imports: [CommonModule, CatchComponent, EmitComponent],
  templateUrl: './first-subject.component.html',
  styleUrls: ['./first-subject.component.scss']
})
export class FirstSubjectComponent {

}
