import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Memoria } from '../../interfaces/memoria'

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.sass']
})
export class MemoriaComponent implements OnInit {

  @Input() memoria: Memoria;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
