import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-delete',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
})
export class DeleteComponent implements OnInit {
  pacientes: any[] = [];
  pacienteData: any = {
    nombre: '',
    apellido: '',
    celular: '',
    direccion: '',
    documento_identidad: '',
    sexo: 'M',
    id_persona: '',
    fecha_nacimiento: '',
    enfermedad_base: '',
  };

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pacienteId = this.route.snapshot.params['id'];
    this.pacienteService.deletePaciente(pacienteId).subscribe((response: any) => {
      this.router.navigate(['/paciente/list']);
    });
  }
  onSubmit(){
    
  }
  goBack() {
      this.router.navigate(['/paciente/list']);
  }
}
