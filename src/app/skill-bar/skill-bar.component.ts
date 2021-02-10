import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css'],
})
export class SkillBarComponent implements OnInit {
  @Input() propLevel:number = 0;
  constructor() {}

  ngOnInit(): void {}
}
