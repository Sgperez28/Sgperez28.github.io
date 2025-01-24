$(window).scroll(function(){

    //Título


    //Si el elemento es visible
    if ($(".encabezado").visible(true)) {
        //Añade la clase “visible”
        $(".encabezado").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".encabezado").removeClass("visible");
    }

    //Reseltado

    //Si el elemento es visible
    if ($(".aparecer").visible(true)) {
        //Añade la clase “visible”
        $(".aparecer").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".aparecer").removeClass("visible");
    }

    //Nombres recetas

    //Si el elemento es visible
    if ($(".h2").visible(true)) {
        //Añade la clase “visible”
        $(".h2").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".h2").removeClass("visible");
    }

    //Animaciones laterales
    //Si el elemento es visible
    if ($(".der").visible(true)) {
        //Añade la clase “visible”
        $(".der").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".der").removeClass("visible");
    }

    //Si el elemento es visible
    if ($(".iz").visible(true)) {
        //Añade la clase “visible”
        $(".iz").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".iz").removeClass("visible");
    }

    //Si el elemento es visible
    if ($(".circulo").visible(true)) {
        //Añade la clase “visible”
        $(".circulo").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".circulo").removeClass("visible");
    }

});