import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../footer/main.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    MainComponent,
    ProjectsCardComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
