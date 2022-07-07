import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../services/personnel-service.service';
import { MatDialog } from '@angular/material/dialog';
import {UpdateMachineComponent} from '../update-machine/update-machine.component';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  listMachine: any ;

  constructor(private dialogRef: MatDialog , private  personnelService: PersonnelServiceService) { }

  ngOnInit(): void {
    this.getListMachine();
  }


  openDialogToAdd() {
    this.dialogRef.open(UpdateMachineComponent);
  }

  getListMachine() {
      this.personnelService.getLisMachine().subscribe((data: any) => {
        this.listMachine = data;
        console.warn('*---**', this.listMachine);
      });
  }
}
