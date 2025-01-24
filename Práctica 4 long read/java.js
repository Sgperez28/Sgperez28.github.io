$(window).scroll(function(){

    //Título


    //Si el elemento es visible
    if ($(".central").visible(true)) {
        //Añade la clase “visible”
        $(".cental").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".central").removeClass("visible");
    }

});