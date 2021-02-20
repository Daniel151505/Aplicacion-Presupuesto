import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string = ''
  cantidad: number = 0
  formularioIncorrecto: boolean = false
  textIncorrecto: string = 'Gasto o cantidad incorrecto'


  constructor() { }

  ngOnInit(): void {
  }

}
