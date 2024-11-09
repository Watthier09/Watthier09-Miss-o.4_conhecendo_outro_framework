import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça, Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Readers familiar with Horstmann`s original, two-volume "Core Java" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.', autores: ['Cay Horstmann'] }
  ];

  obterLivros = () => {
      return this.livros
  }

  incluir = (novoLivro: Livro) => {
      const novoItem = Math.max(...this.livros.map(livro => livro.codigo)) + 1;
      novoLivro.codigo = novoItem;
      this.livros.push(novoLivro);
  }

  excluir = (codigo: number) => {
      const index = this.livros.findIndex(livro => livro.codigo === codigo);
      if (index !== -1) {
          this.livros.splice(index, 1)
      }
  }
  constructor() { }
}