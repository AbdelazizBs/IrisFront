import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../services/personnel-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  listMachine: any ;
id: any;
  constructor(private  personnelService: PersonnelServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getListMachine();
  }
  updateMachine(myObj: any) {
      this.router.navigate(['/update-machine' + '/' + myObj['id']]);
  }

  openDialogToAdd() {
    // this.dialogRef.open(UpdateMachineComponent);
  }

  getListMachine() {
      this.personnelService.getLisMachine().subscribe((data: any) => {
        this.listMachine = data;
        console.warn('*---**', this.listMachine);
      });
  }
}
