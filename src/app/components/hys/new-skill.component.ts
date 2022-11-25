import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImagenService } from 'src/app/service/imagen.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string = "";
  porcentaje: number = 0;

  constructor(
    private skillS: SkillService,
    public imagenService: ImagenService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo añadir Skill");
        this.router.navigate(['']);
      }
    )
  }

  cancel(): void {

    this.imagenService.clearUrl();
    this.router.navigate(['']);

  }
}
