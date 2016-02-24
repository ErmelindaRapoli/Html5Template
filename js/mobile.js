/*
    Created on : feb 2016
    Author     : Rapoli Ermelinda - www.ermelindarapoli.it
*/

var mobile = (/iphone|ipad|ipod|android|blackberry|mini|symbian|smartphone|midp|wap|phone|android|iemobile|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

if (mobile) {

    /*Se il dispositivo è mobile...*/
    document.write('<link href="css/menumob/style.css" rel="stylesheet" type="text/css" media="screen">');
    document.write('<link href="css/menumob/stile.css" rel="stylesheet" type="text/css" media="screen">');
    document.write('<link rel="stylesheet" type="text/css" href="css/menumob/component.css" />');
    $(function() {
        $("#menu").load("menumob.html");
    });
} else {

    /*Il dispositivo non è mobile...*/
    document.write('<link rel="stylesheet" type="text/css" href="css/menudesk/normalize.css" />');
    document.write('<link rel="stylesheet" type="text/css" href="css/menudesk/vicons-font.css" />');
    document.write('<link rel="stylesheet" type="text/css" href="css/menudesk/base.css" />');
    document.write('<link rel="stylesheet" type="text/css" href="css/menudesk/buttons.css" />');
    $(function() {
        $("#menu").load("menudesk.html");
    });
}

