import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImagenService } from 'src/app/service/imagen.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;

  constructor(
    private sExperiencia: SExperienciaService, 
    private activatedRouter: ActivatedRoute,
    public imagenService: ImagenService, 
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sExperiencia.detail(id).subscribe(
        data => {
          this.expLab = data;
        }, err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
      //console.log(this.sExperiencia);
    }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  cancel(): void {

    this.imagenService.clearUrl();
    this.router.navigate(['']);

  }
}
