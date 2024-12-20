$(window).scroll(function(){

    //HOLA

    //Si el elemento es visible
    if ($(".cambio-background").visible(true)) {
        //Añade la clase “visible”
        $(".cambio-background").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".cambio-background").removeClass("visible");
        }


        // imagen aparece

        //Si el elemento es visible der-izq
    if ($(".marco").visible(true)) {
        //Añade la clase “visible”
        $(".marco").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".marco").removeClass("visible");
    }

         //Si el elemento es visible izq-der
    if ($(".marc2").visible(true)) {
        //Añade la clase “visible”
        $(".marc2").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".marc2").removeClass("visible");
    }
});