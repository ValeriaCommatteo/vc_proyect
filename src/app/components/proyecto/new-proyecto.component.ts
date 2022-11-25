import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string= "";
  descripcionP: string ="";
  imgP: string = "";
  link: string = "";

  constructor(
    private proyectoS: ProyectoService,
    public imagenService: ImagenService,   
    private router: Router) { }

  ngOnInit(): void {
    this.imagenService.clearUrl(); 
  }

  onCreate(): void{
    this.imgP = this.imagenService.urlImg;
    const proye = new Proyecto(this.nombreP, this.descripcionP, this.link, this.imgP);
    this.proyectoS.save(proye).subscribe(
      data =>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
    this.imagenService.clearUrl();
  }

  uploadImagen($event:any){
    // const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + this.nombreP;
    this.imagenService.uploadImagen($event, name)
  }

  cancel(): void {
    this.imagenService.clearUrl();
    this.router.navigate(['']);

  }
}
