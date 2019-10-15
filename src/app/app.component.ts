import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desafio-ovnis';
  resposta: string;
  formOvnis;
  alfabeto: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private fb: FormBuilder) {
    this.formOvnis = fb.group({
      cometa: '',
      grupo: ''
    });

  }

  onSubmit(form) {

    this.recebeCometaEGrupo(form.cometa, form.grupo);
    this.formOvnis.reset();
  }

  recebeCometaEGrupo(cometa: string, grupo: string) {

    let numeroCometa = this.calculaPalavra(cometa);
    let numeroGrupo = this.calculaPalavra(grupo);

    let resposta = this.verificaSeGrupoSeraLevado(numeroCometa, numeroGrupo);

    if (resposta)
      this.resposta = "O Grupo " + grupo + " sera levado!";
    else
      this.resposta = "O Grupo " + grupo + " NÃO sera levado!";


  }

  verificaSeGrupoSeraLevado(numeroCometa: number, numeroGrupo: number): boolean {

    let valorCometa = (numeroCometa % 45);
    let valorGrupo = (numeroGrupo % 45);

    if (valorCometa == valorGrupo)
      return true
    else
      return false
  }

  calculaPalavra(palavra: string): number {

    var total: number;

    for (var i = 0; i < palavra.length; i++) {

      var res = palavra.charAt(i)
      var numero = this.retornaNumeroLetra(res);

      if (i == 0)
        total = numero;
      else
        total = total * numero;

    }

    return total;
  }

  retornaNumeroLetra(letra: string): number {

    return this.alfabeto.indexOf(letra.toLowerCase()) + 1;
  }

}
