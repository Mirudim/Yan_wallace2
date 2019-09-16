import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  protected usuarios:any;

  constructor(
    public usuarioService:UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }

  editar(usuario:any){ //any para n dar erro na key
    console.log(usuario.key);
    this.router.navigate(['addUsuario', usuario.key])
  }

  apagar(usuario){
    if (confirm("Apagar esse usuario?"))
    this.usuarioService.remove(usuario.key)
  }
}
