import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;
    private commands = [
        {ussd: '*661*', title: 'Consultar saldo'},
        {ussd: '*662*', title: 'Recargar saldo'},
        {ussd: '*663*', title: 'Transferir saldo'},
        {ussd: '*664*', title: 'Consultar Bonos'},
        {ussd: '*665*', title: 'Consultar Ofertas'},
        {ussd: '*666*', title: 'Áreas Especiales'},
        //Paquetes
        {ussd: '*133#1#1', title: 'Tarifa por consumo'},
        {ussd: '*133#1#2', title: 'Bolsa de Correo'},
        {ussd: '*133#1#3#1', title: 'Paquete 600Mb'},
        {ussd: '*133#1#3#2', title: 'Paquete 1Gb'},
        {ussd: '*133#1#3#3', title: 'Paquete 2.5Gb'},
        {ussd: '*133#1#3#4', title: 'Paquete 4Gb'},
        {ussd: '*133#1#5#1', title: 'Paquete LTE 6.5Gb'},
        {ussd: '*133#1#5#2', title: 'Paquete LTE 10Gb'},

    ];
    public items: Array<{ title: string; note: string; url: string }> = [];

    constructor() {
        for (let command of this.commands) {
            this.items.push({
                title: command.title,
                note: '(' + command.ussd + ')',
                url: 'tel:' + command.ussd
            });
        }
    }

    ngOnInit() {
    }

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
