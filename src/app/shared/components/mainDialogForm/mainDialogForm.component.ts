import { Component, Inject, Input } from '@angular/core';
import { MainForm, InpType } from '../../interfaces/mainForm.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-main-form',
  templateUrl: './mainDialogForm.component.html',
  styleUrl: './mainDialogForm.component.css',
})
export class MainDialogFormComponent { 
  formGroup: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<MainDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {tittle: string, form: MainForm[]}
  ) {
    this.createFormGroup();
  }

  /* Creamos el grupo del formulario */
  createFormGroup(): void {
    this.data.form.forEach((item) => {
      this.formGroup.addControl(item.key, new FormControl('', this.getValidators(item.type)));
    });
  }

  /* Les agregamos las validaciones segun su tipo */
  getValidators(type: InpType) {
    const validators = [];
    if (type === 'text') {
      validators.push(Validators.required);
    }
    if (type === 'number') {
      validators.push(Validators.required, Validators.pattern('^[0-9]*$'));
    }
    if (type === 'tel') {
      validators.push(Validators.required, Validators.minLength(10), Validators.maxLength(10));
    }
    if (type === 'email') {
      validators.push(Validators.required, Validators.email);
    }
    if (type === 'password') {
      validators.push(Validators.required, Validators.minLength(8));
    }
    // Agrega más validadores si es necesario
    return validators;
  }

  /* Mostramos un error si es que alguna validacion no esta cumplida */
  getErrorMessage(key: string): string {
    const control = this.formGroup.get(key);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('email')) {
      return 'Correo electrónico no válido';
    }
    if (control?.hasError('pattern')) {
      return 'Formato incorrecto';
    }
    return '';
  }

  /* Cuando cerramos el dialogo */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /* Cuando enviamos el obje */
  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      this.dialogRef.close(formData); // Devuelve los datos al componente que abrió el diálogo
    }
  }
}
