import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../../services/personnel-service.service';
import {Router} from '@angular/router';
import {UpdateMachineComponent} from '../update-machine/update-machine.component';
import {MachineServiceService} from '../../services/machine-service.service';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  listMachine: any ;
id: any;
  constructor(private route: Router, private  machineService: MachineServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getListMachine();
  }
  updateMachine(myObj: any) {
      this.router.navigate(['/update-machine' + '/' + myObj['id']]);
  }

  openDialogToAdd() {
    // this.dialog.open(UpdateMachineComponent);
  }

  getListMachine() {
      this.machineService.getLisMachine().subscribe((data: any) => {
        this.listMachine = data;
        console.warn('*---**', this.listMachine);
      });
  }
  delete(id: any) {
    this.machineService.delete(id).subscribe(
      (res) => {
        console.log(res);
        this.refreshListachines();
        this.route.navigate(['/machine']);
      },
      err => {
        console.log(err);

      }
    );
  }
  refreshListachines() {
    this.machineService.getLisMachine().subscribe(
      response => {
        this.listMachine = response;      }
    );
  }
}
