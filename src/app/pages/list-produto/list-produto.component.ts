import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
    
  protected produtos:any;
  
  constructor(
    public produtoService: ProdutoService,
    protected router:Router
  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getALL()
  }
  editar(produto:any){
    console.log(produto.key);
    this.router.navigate(['addProduto', produto.key])
  
     }
     apagar(produto:any){
       if(confirm("apagar o produto?"))
       this.produtoService.remove(produto.key)
    
      }
  }
  
