import { Component, OnInit } from '@angular/core';
import {MachineServiceService} from '../../services/machine-service.service';
import {Router} from '@angular/router';
import {EtapeProductionServiceService} from '../../services/etape-production-service.service';
import {DatePipe} from '@angular/common';
import {PersonnelServiceService} from '../../services/personnel-service.service';

export class Machine {
  id: any;
  designation: any;
  reference: any;
  nomEtapeProduction: any;
  nombreConducteur: any;
  dateMaintenance: any;
  dateCreation: any;
  etat: any ;
  nomPersonnel: any;
}
@Component({
  selector: 'app-ajouter-machine',
  templateUrl: './ajouter-machine.component.html',
  styleUrls: ['./ajouter-machine.component.scss']
})
export class AjouterMachineComponent implements OnInit {
machine: Machine ;
  idMachine: any;
  listEtat: any[];
  nomEtapes: any[];
  listNomEtapeProduction: any[];
  response: any ;
  nomPersonnels: any;
  // tslint:disable-next-line:max-line-length
  constructor(private etapeProductionService: EtapeProductionServiceService , private personnelServiceService: PersonnelServiceService, private route: Router, private machineService: MachineServiceService, public datepipe: DatePipe) {
    this.machine = new Machine();
  }

  ngOnInit(): void {
    this.etapeProductionService.getNomEtapes().subscribe(response => {
        console.log(response);
        this.response = response,
          this.nomEtapes = this.response;
        console.log(this.machine); },
      (err) => {
        console.log(err);
      }
    );
    this.personnelServiceService.getNomPersonnel().subscribe(response => {
        console.log(response);
        this.response = response,
          this.nomPersonnels = this.response;
       },
      (err) => {
        console.log(err);
      }
    );
    this.listEtat = ['En Maintenance',
      'En repos',
      'En marche',
      'En panne'
    ];
  }
  ajoutMachine() {
    const f: FormData = new FormData();
    f.append('designation', this.machine.designation);
    f.append('reference', this.machine.reference);
    f.append('nomEtapeProduction', this.machine.nomEtapeProduction);
    f.append('nombreConducteur', this.machine.nombreConducteur);
    f.append('dateMaintenance' , this.datepipe.transform( this.machine.dateMaintenance, 'yyyy/MM/dd'));
    f.append('dateCreation', this.datepipe.transform( this.machine.dateCreation, 'yyyy/MM/dd'));
    f.append('etat', this.machine.etat);
    f.append('nomPersonnel', this.machine.nomPersonnel);

    this.machineService.ajoutMachine(f).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/machine']);
      },
      err => {
        console.log(err);

      }
    );
  }

}
