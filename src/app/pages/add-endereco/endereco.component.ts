import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';
//import {Swal} from 'sweetalert2';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() public endereco: Endereco;
  public cep: string;

  constructor(
    protected enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  buscaCEP(event) {
    this.cep = event.target.value;
    console.log(this.cep);
    if (this.cep.length > 7) {
      this.enderecoService.getEndereco(this.cep)
        .subscribe(
          res => {
            if (res.erro) {
              console.log("Cep não localizado! ", res);
//Swal.fire("Cep não localizado! ");
            } else {
              this.endereco.cep = res.cep;
              this.endereco.localidade = res.logradouro;
              this.endereco.bairro = res.bairro;
              this.endereco.localidade = res.localidade;
              this.endereco.uf = res.uf;
              this.endereco.unidade = res.unidade;
              this.endereco.gia = res.gia;
              this.endereco.ibge = res.ibge;
              this.endereco.complemento = res.complemento;
              console.log(this.endereco);
            }
          },
          err => {
            this.endereco = new Endereco;
            console.log("Cep invalido! ", err);
//Swal.fire("Cep invalido! ");
          }
        )
    }
  }
}