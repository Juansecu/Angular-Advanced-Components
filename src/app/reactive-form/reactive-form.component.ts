import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      /*
        * '' = Valor por defecto
        * Validators.required = El valor es requerido
        * Validators.minLength() = Validar el mínimo número de carácteres
        * Validators.maxLength() = Validar el máximo número de carácteres
        * Validators.email = Validar un correo electrónico
      */
      username: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)]
      ],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(_data) {
    console.log(_data.value);
  }
}
