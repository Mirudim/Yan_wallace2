import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  protected db = environment.serverAPI;
  
  constructor(
    protected http:HttpClient,
    protected dbfire: AngularFireDatabase
  ) { }
  save(produtos:Produto){
    return this.dbfire.list("produtos").push(produtos);
  }
  getALL(){
    return this.dbfire.list("produtos").snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  get(key) {
    return this.dbfire.object<Produto>("produtos/" + key).valueChanges()
  }
  update(produto: Produto, key) {
    return this.dbfire.object<Produto>("produtos/" + key).update(produto);
  }
  remove(key){
    return this.dbfire.object("produtos/" + key).remove()
  }
}


