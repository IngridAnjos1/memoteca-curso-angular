import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

    listaPensamentos=[
       {
       conteudo:'Passo informações para o componente filho ',
       autoria: 'componente pai',
       modelo: 'modelo3' 
     },
     {
       conteudo:'Minha propriedade é decorada com o @Input',
       autoria: 'Componente Filho',
       modelo: 'modelo3' 
    },
     {
       conteudo:'O menino quer um burrinhopara passear.Um burrinho mansoque não corra nem pule,mas que saiba conversarO menino quer um burrinhoque saiba dizeo nome dos rios,das montanhas, das flores e tudo o que aparecer.O menino quer um burrinho que saiba inventar histórias bonitas com pessoas e bichose com barquinhos no mar',
       autoria: 'batatinha',
       modelo: 'modelo1' 
    }
  ]
  constructor(){}
  ngOnInit(): void {    
  }

}
