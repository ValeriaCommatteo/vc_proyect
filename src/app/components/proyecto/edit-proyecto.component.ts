import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private proyectoS: ProyectoService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,
    public imagenService: ImagenService) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectoS.detail(id).subscribe(
        data => {
          this.proyecto = data;
          }, err =>{
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgP = this.imagenService.urlImg;
    this.proyectoS.update(id, this.proyecto).subscribe(
      data => {
        alert("El proyecto se ha modificado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = `proyecto_` + id;
    this.imagenService.uploadImagen($event, name)
  }

  cancel(): void {
    this.imagenService.clearUrl();
    this.router.navigate(['']);
  }
}
