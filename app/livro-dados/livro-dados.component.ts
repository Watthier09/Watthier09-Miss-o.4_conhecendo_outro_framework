import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [
    FormsModule,
    NgFor
  ],
  providers: [NgModel],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit{
  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm: string='';
  public editoras: Array<Editora> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router){}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}