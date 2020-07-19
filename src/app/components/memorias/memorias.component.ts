import { Component, OnInit } from '@angular/core';
import { Memoria } from '../../interfaces/memoria';
import { MemoriaService } from '../../servicios/memoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memorias',
  templateUrl: './memorias.component.html',
  styleUrls: ['./memorias.component.sass']
})
export class MemoriasComponent implements OnInit {

  memorias : Memoria[];

  constructor(
    private _memoriaService: MemoriaService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.memorias = this._memoriaService.getMemorias()
  }

}
