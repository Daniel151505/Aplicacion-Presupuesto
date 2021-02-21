import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  presupuesto: number
  restante:number
  subscription: Subscription

  constructor(private presupuestoService: PresupuestoService) { 
     this.subscription = this.presupuestoService.getGastos().subscribe(data => {

     })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
