/*
File: app.ts
Author: Tóth Gergely
Copyright: 2026, Tóth Gergely
Group: Szoft II/N
Date: 2026-10-13
Github: https://github.com/togethHUN/
Licenc: MIT
*/


import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
