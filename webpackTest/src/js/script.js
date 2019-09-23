import tabs from './parts/tabs';
import modal from './parts/modal';
import timer from './parts/timer';
import form from './parts/form';
import slider from './parts/slider';
import calc from './parts/calc';
// import events from './parts/events';
// import validNum from './parts/validNum';

window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});