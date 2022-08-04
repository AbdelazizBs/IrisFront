import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Machine} from '../update-machine/update-machine.component';
import {MachineServiceService} from '../../services/machine-service.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  listMachine: any ;
id: any;
  listEtat: any;
  response: any;
  machine: Machine ;
  constructor(private route: Router, private  machineService: MachineServiceService, private router: Router, public datepipe: DatePipe) {
    this.machine = new Machine();
  }

  ngOnInit(): void {
    this.getListMachine();

    this.listEtat = ['En Maintenance',
      'En repos',
      'En marche',
      'En panne'
    ];


  }
  updateMachine(myObj: any) {
      this.router.navigate(['/update-machine' + '/' + myObj['id']]);
  }

  updateEtatMachine(id: any , machine: any) {
    const f: FormData = new FormData();
    f.append('designation', this.machine.designation);
    f.append('reference', this.machine.reference);
    f.append('nomEtapeProduction', this.machine.nomEtapeProduction);
    f.append('nombreConducteur', this.machine.nombreConducteur);
    f.append('nomPersonnel', this.machine.nomPersonnel);
    f.append('dateMaintenance',  this.datepipe.transform(this.machine.dateMaintenance , 'yyyy/MM/dd'));
    f.append('dateCreation',  this.datepipe.transform(this.machine.dateCreation , 'yyyy/MM/dd'));
    f.append('etat', this.machine.etat);
   this.machineService.updateEtatMachine(id, machine).subscribe(
     response => {
       console.log(response);
       this.refreshListachines();
     }
   );
  }
  setEtatEnmarche(id: any) {
      this.machineService.setEtatEnmarche(id).subscribe(response => {
          console.log(response);
          this.response = response;
          this.refreshListachines();
          // this.listEtat = this.response;
      },
        (err) => {
          console.log(err);
        }
      );
  }
  setEtatEnMaintenance(id: any) {
    this.machineService.setEtatEnMaintenance(id).subscribe(response => {
        console.log(response);
        this.response = response;
        this.refreshListachines();
        // this.listEtat = this.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  setEtatEnPanne(id: any) {
    this.machineService.setEtatEnPanne(id).subscribe(response => {
        console.log(response);
        this.response = response;
        this.refreshListachines();
        // this.listEtat = this.response;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  setEtatEnRepos(id: any) {
    this.machineService.setEtatEnRepos(id).subscribe(response => {
        console.log(response);
        this.response = response;
        this.refreshListachines();
        // this.listEtat = this.response;
      },
      (err) => {
        console.log(err);
      }
    );
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
