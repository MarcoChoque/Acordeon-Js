var acordiones = document.getElementsByClassName("acordion");
for (var i = 0; i < acordiones.length; i++){
    acordiones[i].onclick = function(){
        this.classList.toggle('is-open');
        //content = acordion; this.nextElementSibling = acordion_contenido; this = acordiones[i]
        var content = this.nextElementSibling;
        //si esta abierto el acordeon al maximo entonces
        if(content.style.maxHeight){
            //necesitamos cerrarlo
            content.style.maxHeight = null;
        } else { //si no esta abierto el acordeon entonces
            // abrimos el acordeon
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}