import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {

  hourDeg: number = 0;
  minuteDeg: number = 0;
  secondDeg: number = 0;
  clockNumbers: { value: number; angle: number }[] = [];

  ngOnInit() {
    this.initializeClockNumbers();
    this.animateClock();
  }

  animateClock() {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds() + milliseconds / 1000; // Smooth movement

    this.secondDeg = seconds * 6; // 360° / 60 sec
    this.minuteDeg = now.getMinutes() * 6 + seconds * 0.1; // Smooth minute hand
    this.hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;

    requestAnimationFrame(() => this.animateClock()); // Runs smoothly every frame
    throw new Error('Method not implemented.');
  }

  initializeClockNumbers() {
    for (let i = 1; i <= 12; i++) {
      this.clockNumbers.push({ value: i, angle: i * 30 });
    }
  }
}
