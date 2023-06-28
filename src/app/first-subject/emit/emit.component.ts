import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "../../components/button/button.component";
import {FirstSubjectService} from "../first-subject.service";

@Component({
  selector: 'app-emit',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './emit.component.html',
  styleUrls: ['./emit.component.scss']
})
export class EmitComponent {

  constructor(
    private firstSubjectService: FirstSubjectService
  ) {
  }

  increment(): void {
    this.firstSubjectService.add();
  }
}
