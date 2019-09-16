import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import {Router, ActivatedRoute}from "@angular/router";
import { Endereco } from '../../model/endereco';
@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;
  private id: string = null;

  protected endereco:Endereco = new Endereco;
  
  constructor(  public usuarioService: UsuarioService,
    protected router:Router,
    protected activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activeRouter.snapshot.paramMap.get("id");// "id" do approuter
    if (this.id) {
    this.usuarioService.get(this.id).subscribe(
      res=>{
        this.usuario = res;
      }
    ); 
  }
}
  onsubmit(form){
    console.log(form);
    try {
      if (this.id){
      this.usuarioService.update(this.usuario, this.id).then(
        res=> {
          console.log(res);
          this.usuario = new Usuario;
          form.reset();
          this.router.navigate(["/"])
          alert("atualizado!")
        },  err=>{
          console.log(err);
          alert("erro") 
        }
      )
    } else {
      this.usuarioService.save(this.usuario).then(
      res =>{
        console.log(res);
        this.usuario = new Usuario;
        form.reset();
        this.router.navigate(["/"]);
        alert("cadastrado")
      },
    err=>{
      console.log(err);
      alert("erro");
      } 
    );
  }
    }catch{

    }
}
}
