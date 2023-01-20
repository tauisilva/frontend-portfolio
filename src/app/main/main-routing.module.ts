
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsCardComponent},
  { path: 'skills', component: SkillsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
