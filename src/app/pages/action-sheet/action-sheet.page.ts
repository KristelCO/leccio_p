import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {

  nombres: String = 'Kristel Calberto';
  fechaNacimiento='';
  esMayor = false;


  constructor() { }

  ngOnInit() { }

  calcularEdad() {
    if (!this.fechaNacimiento) return;
    
    const nacimiento = new Date(this.fechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - nacimiento.getFullYear();
    
    this.esMayor = edad >= 18;
  }

  enviar() {
    if (this.nombres && this.fechaNacimiento && this.esMayor) {
      alert('Registro exitoso!');
    }
  }
}