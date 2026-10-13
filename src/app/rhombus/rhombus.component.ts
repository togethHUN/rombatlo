/*
File: rhombus.component.ts
Author: Tóth Gergely
Copyright: 2026, Tóth Gergely
Group: Szoft II/N
Date: 2026-10-13
Github: https://github.com/togethHUN/
Licenc: MIT
*/


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-rhombus',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule 
  ],
  templateUrl: './rhombus.component.html',
  styleUrl: './rhombus.component.css'
})
export class RhombusComponent {
  private formBuilder = inject(FormBuilder);

  rhombusForm: FormGroup = this.formBuilder.group({
    diagonalE: ['', [Validators.required, Validators.min(0)]],
    diagonalF: ['', [Validators.required, Validators.min(0)]]
  });

  area: number = 0;

  calculateArea(): void {
    if (this.rhombusForm.valid) {
      const eDiagonal = Number(this.rhombusForm.value.diagonalE);
      const fDiagonal = Number(this.rhombusForm.value.diagonalF);
      
      this.area = (eDiagonal * fDiagonal) / 2;
    }
  }
}