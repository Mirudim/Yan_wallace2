import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

protected endereco: Endereco = new Endereco

  constructor(
    protected http:HttpClient
  ) { }


getEndereco(cep){
  return this.http.get<Endereco>("https://viacep.com.br/ws/" + cep + "/json/") 
  }

}