import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MachineServiceService} from '../../services/machine-service.service';
import {DatePipe} from '@angular/common';
import {Machine} from '../../model/Machine.model';


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
  dataMachine: Machine [];
  constructor(private route: Router, private  machineService: MachineServiceService, private router: Router, public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getListMachine();

    this.listEtat = ['En Maintenance',
      'En repos',
      'En marche',
      'En panne'
    ];
  }
  updateMachine(data: any) {
    const f: FormData = new FormData();
    f.append('designation', data.data.designation);
    f.append('reference', data.data.reference);
    f.append('nombreConducteur', data.data.nombreConducteur);
    !data.data.nomPersonnel ?  f.append('nomPersonnel', '') : f.append('nomPersonnel', data.data.nomPersonnel);
    !data.data.nomEtapeProduction ?  f.append('nomEtapeProduction', '') : f.append('nomEtapeProduction', data.data.nomEtapeProduction);
    f.append('dateMaintenance',  this.datepipe.transform(data.data.dateMaintenance , 'yyyy/MM/dd'));
    f.append('dateCreation',  this.datepipe.transform(data.data.dateCreation , 'yyyy/MM/dd'));
    f.append('etat', data.data.etat);
   this.machineService.updateEtatMachine(data.data.id, f).subscribe(
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
        this.dataMachine = this.listMachine ;
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
  addMachine(data: any) {
    const f: FormData = new FormData();
    f.append('designation', data.data.designation);
    f.append('reference', data.data.reference);
    f.append('nomEtapeProduction', data.data.nomEtapeProduction);
    f.append('nombreConducteur', data.data.nombreConducteur);
    f.append('dateMaintenance' , this.datepipe.transform( data.data.dateMaintenance, 'yyyy/MM/dd'));
    f.append('dateCreation', this.datepipe.transform( data.data.dateCreation, 'yyyy/MM/dd'));
    f.append('etat', data.data.etat);
    f.append('nomPersonnel', data.data.nomPersonnel);

    this.machineService.ajoutMachine(f).subscribe(
      (res) => {
        console.log(res);
this.refreshListachines();
},
      err => {
        console.log(err);

      }
    );
  }
}
