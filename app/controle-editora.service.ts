import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Addison Wesley' },
  ]

  getEditoras = () => {
      return this.editoras
  }

  getNomeEditora = (codEditora:number) => {
      const editora = this.editoras.filter((editora) => editora.codEditora === codEditora)
      return editora.length > 0 ? editora[0].nome : undefined;
  }

  constructor() { }
}