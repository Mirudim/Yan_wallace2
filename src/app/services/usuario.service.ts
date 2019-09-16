import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import{map} from 'rxjs/operators';

import { Usuario } from '../model/usuario';
import { environment }from '../../environments/environment'
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usuarios:Array<Usuario> =[
    //{uid: "1", nome: "Ana", email: "ana@gmail.com", pws: "11111"},
    //{uid: "2", nome: "Pedro", email: "pedro@gmail.com", pws: "22222"},

 // ];
    protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient,
    protected dbfire:AngularFireDatabase
  ) { }

  save(usuario:Usuario){
    //this.usuarios.push(usuario);
    // return this.http.post(this.db + "usuarios", usuario);
    return this.dbfire.list("usuarios").push(usuario);
    

  }

  getAll(){
    // return this.http.get(this.db + "usuarios");
    //return this.dbfire.list("usuarios").valueChanges();
    return this.dbfire.list("usuarios").snapshotChanges().pipe(map(changes => changes.map(c => ({key:c.payload.key,...c.payload.val()}))

    )
  );  
}

get(key){
  return this.dbfire.object<Usuario>("usuarios/"+key).valueChanges()
  }

  update(usuario:Usuario,key){
    return this.dbfire.object<Usuario>("usuarios/" + key).update(usuario);
  }

  remove(key){
    return this.dbfire.object("usuarios/" + key).remove()
  }

}
