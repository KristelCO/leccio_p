import { Component, OnInit } from '@angular/core'; 
import { ComponentsModule } from '../../components/components.module'; 
 
interface Componente { 
  icon: string; 
  name: string; 
  redirectTo: string; 
} 
 
@Component({ 
  selector: 'app-inicio', 
  templateUrl: './inicio.page.html', 
  styleUrls: ['./inicio.page.scss'],
  standalone: false 
}) 
export class InicioPage implements OnInit { 
 
   
  componentes: Componente[] = [ 
    { 
      icon: 'arrow-redo-outline', 
      name: 'Ejemplo Botones', 
      redirectTo: '/action-sheet' 
    }, 
    
  ]; 
 
  constructor() { } 
 
  ngOnInit() { 
  } 
 
} 