import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private id: any;
    private selectedItem: any;
    private commands = [
        {ussd: null, title: 'something', icon: 'cart', id: 'something'},
        // Saldo
        {ussd: '*222\#', title: 'Consultar saldo', icon: 'cart'},
        {ussd: '*662*cod#', title: 'Recargar saldo', icon: 'refresh'},
        {ussd: '*234*3#', title: 'Adelanta saldo', icon: 'git-pull-request'},
        {ussd: '*324*1*n*c*a#', title: 'Transferir saldo', icon: 'swap'},
        {ussd: '*222*266#', title: 'Consultar Bonos', icon: 'star-outline'},
        {ussd: '*665*', title: 'Consultar Ofertas', icon: 'pricetags'},
        {ussd: '*666*', title: 'Áreas Especiales', icon: 'pin'},
        // Planes
        // Bolsa Nauta
        {ussd: '*222*328#', title: 'Saldo', icon: 'cart'},
        {ussd: '*133#1#1', title: 'Tarifa por consumo', icon: 'cart'},
        {ussd: '*133#1#2', title: 'Bolsa de Correo', icon: 'cart'},
        {ussd: '*133#1#3#1', title: 'Paquete 600Mb', icon: 'cart'},
        {ussd: '*133#1#3#2', title: 'Paquete 1Gb', icon: 'cart'},
        {ussd: '*133#1#3#3', title: 'Paquete 2.5Gb', icon: 'cart'},
        {ussd: '*133#1#3#4', title: 'Paquete 4Gb', icon: 'cart'},
        // Fin Bolsa Nauta
        // LTE
        {ussd: '*133#1#5#1', title: 'Paquete LTE 6.5Gb', icon: 'cart'},
        {ussd: '*133#1#5#2', title: 'Paquete LTE 10Gb', icon: 'cart'},
        // Fin LTE
        // Planes de Voz
        {ussd: '*133#3#5#1', title: 'Saldo', icon: 'call'},
        {ussd: '*133#3#1#2', title: 'Plan de 5 minutos', icon: 'call'},
        {ussd: '*133#3#2#2', title: 'Plan de 10 minutos', icon: 'call'},
        {ussd: '*133#3#3#2', title: 'Plan de 15 minutos', icon: 'call'},
        {ussd: '*133#3#4#2', title: 'Plan de 25 minutos', icon: 'call'},
        {ussd: '*133#3#5#2', title: 'Plan de 40 minutos', icon: 'call'},
        // Fin Planes de Voz
        // Planes SMS
        {ussd: '*133#2#5#1', title: 'Saldo', icon: 'text'},
        {ussd: '*133#2#1#2', title: 'Plan de 10 SMS', icon: 'text'},
        {ussd: '*133#2#2#2', title: 'Plan de 20 SMS', icon: 'text'},
        {ussd: '*133#2#3#2', title: 'Plan de 35 SMS', icon: 'text'},
        {ussd: '*133#2#4#2', title: 'Plan de 45 SMS', icon: 'text'},
        // Fin Planes SMS
        // Plan Amigo
        {ussd: '*133#4#3#1#2', title: 'Estado', icon: 'cart'},
        {ussd: '*133#4#1#1', title: 'Activar', icon: 'cart'},
        {ussd: '*133#4#1#2', title: 'Apagar', icon: 'cart'},
        {ussd: '*133#4#2#1#num#', title: 'Agregar Amigo', icon: 'person-add'},
        {ussd: '*133#4#2#1#num#', title: 'Eliminar Amigo', icon: 'trash'},
        {ussd: '*133#4#3#1#1', title: 'Lista de Amigos', icon: 'list'},
        // Fin Plan Amigo
        // Fin Planes
    ];
    public items: Array<{ title: string; note: string; url: string; icon: string; }> = [];

    constructor(private route: ActivatedRoute, private router: Router) {
        if (this.id) {
            console.log(this.id);
        } else {
            for (let command of this.commands) {
                this.items.push({
                    title: command.title,
                    note: '(' + command.ussd + ')',
                    url: command.ussd != null ? 'tel:' + command.ussd : '/list/' + command.id,
                    icon: command.icon
                });
            }
        }
    }

    ngOnInit() {
        this.id = this.route.params.subscribe(p => p.id);
        console.log(this.id);
    }

    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
