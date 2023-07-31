import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  formulario!: FormGroup;
  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulário reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}