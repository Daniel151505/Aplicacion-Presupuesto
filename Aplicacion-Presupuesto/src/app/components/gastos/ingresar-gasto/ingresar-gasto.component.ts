import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string = ''
  cantidad: number = 0
  formularioIncorrecto: boolean = false
  textIncorrecto: string = ''


  constructor(private presupuestoService:PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto(){

    if (this.cantidad > this.presupuestoService.restante) {
      this.formularioIncorrecto= true
      this.textIncorrecto = "Cantidad Ingresada es mayor al restante"
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true
      this.textIncorrecto = 'Gasto o cantidad incorrecto'
    }else {
      //Creamos un objeto 
      const Gasto = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }
    
      //Enviamos el objeto a los suscribe via subject
      this.presupuestoService.agregarGasto(Gasto)

      //Reset Formulario

      this.formularioIncorrecto = false
      this.nombreGasto = ''
      this.cantidad = 0
    }
  }

}
