import {Component, AfterViewInit} from 'angular2/core';
import {Player} from './../../../modules/player/player';

@Component({
    selector: 'firstpage',
    template: require('./firstpage.html'),
    directives: [Player]
})

export class FirstPageComponent {
    constructor() {

    }
}