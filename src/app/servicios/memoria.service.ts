import { Injectable } from '@angular/core';
import { Memoria } from '../interfaces/memoria'

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  constructor() { }

  memorias:Memoria[] = [
    {
      titulo: 'App 1',
      imagen: 'assets/img/portfolio/portfolio-1.jpg',
      filtro: 'App'
    },
    {
      titulo: 'Web 3',
      imagen: 'assets/img/portfolio/portfolio-2.jpg',
      filtro: 'Web'
    },
    {
      titulo: 'App 2',
      imagen: 'assets/img/portfolio/portfolio-3.jpg',
      filtro: 'App'
    },
    {
      titulo: 'Card 2',
      imagen: 'assets/img/portfolio/portfolio-4.jpg',
      filtro: 'Card'
    },
    {
      titulo: 'Web 2',
      imagen: 'assets/img/portfolio/portfolio-5.jpg',
      filtro: 'Web'
    },
    {
      titulo: 'App 3',
      imagen: 'assets/img/portfolio/portfolio-6.jpg',
      filtro: 'App'
    },
    {
      titulo: 'Card 1',
      imagen: 'assets/img/portfolio/portfolio-7.jpg',
      filtro: 'Card'
    },
    {
      titulo: 'Card 3',
      imagen: 'assets/img/portfolio/portfolio-8.jpg',
      filtro: 'Card'
    },
    {
      titulo: 'Web 3',
      imagen: 'assets/img/portfolio/portfolio-9.jpg',
      filtro: 'Web'
    },
  ]

  getMemorias() {
    return this.memorias;
  }

  getMemoria(id: number) {
    return this.memorias[id]
  }

}
