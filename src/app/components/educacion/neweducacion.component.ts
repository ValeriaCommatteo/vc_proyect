import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenService } from 'src/app/service/imagen.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string= "";
  descripcionE: string ="";

  constructor(
    private educacionS: EducacionService,
    public imagenService: ImagenService,  
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(expe).subscribe(
      data =>{
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo");
        this.router.navigate(['']);
      }
    )
  }

  cancel(): void {

    this.imagenService.clearUrl();
    this.router.navigate(['']);

  }
}
