import { animate, query, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],

})

export class PracticeComponent { }
