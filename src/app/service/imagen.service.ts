import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  url: string = "";

  constructor(
    private storage: Storage) { }

  public uploadImagen($event:any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, 'imagen/'+name)
    uploadBytes(imgRef, file)
    .then(response =>{this.getImagen()})
    .catch(error => console.log(error)
    )
  }

  getImagen(){
    const imagesRef = ref(this.storage, "imagen")
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }
}
