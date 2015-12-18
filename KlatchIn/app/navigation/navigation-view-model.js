'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "List",
    "modulePath": "components/homeView/homeView",
    "icon": "~/images/icons/organize.png"
}, {
    "title": "Profile",
    "modulePath": "components/profileView/profileView",
    "icon": "~/images/icons/contacts.png"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;