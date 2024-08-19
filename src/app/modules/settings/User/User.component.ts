import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/interfaces/user.interface';
import { Columns } from '../../../shared/interfaces/mainTable.interface';
import { MainForm } from '../../../shared/interfaces/mainForm.interface';
import { MainDialogFormComponent } from '../../../shared/components/mainDialogForm/mainDialogForm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './User.component.html',
  styleUrl: './User.component.css',
})
export class UserComponent {

  columns: Columns[] = [
    { key: 'idUser', label: 'Id', type: 'number', status: false },
    { key: 'name', label: 'Nombre', type: 'text', status: true },
    { key: 'password', label: 'Contraseña', type: 'text', status: false },
    { key: 'roleId', label: 'ID Role', type: 'number', status: true },
  ];
  listUser: User[] = [];

  formConfig: MainForm[] = [
    { key: 'name', label: 'Nombre', type: 'text' },
    { key: 'roleId', label: 'Rol', type: 'select'  },
    { key: 'password', label: 'Contraseña', type: 'password' },
  ];

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.getAllUser();
  }

  /* get de todos los usuarios */
  getAllUser(): void {
    this.userService.getAll().subscribe(r => this.listUser = r);
  }

  /* Abrimos el dialogo para agregar un nuevo obj */
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(MainDialogFormComponent, {
      // width: '300px',
      data: { tittle: 'usuario', form: this.formConfig }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Formulario enviado:', result);
        // Aquí puedes procesar el resultado o enviarlo al backend
      }
    });
  }
}
