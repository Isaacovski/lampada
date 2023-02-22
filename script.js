const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function alampadaestaquebrada () {  
          return lamp.src.indexOf ( "quebrada" ) > -1 
} 
                 
function ligarlampada () {
    if ( !alampadaestaquebrada () ) {
        lamp.src = "./img/ligada.jpg";
    }
    
}

function desligarlampada (){
    if ( !alampadaestaquebrada () ) {
        lamp.src = "./img/desligada.jpg";
    }
    
}

function quebrarlampada () {  
        lamp.src = "./img/quebrada.jpg";     
}

ligar.addEventListener ( 'click', ligarlampada );
desligar.addEventListener ( 'click', desligarlampada );
lamp.addEventListener ( 'mouseover', ligarlampada );
lamp.addEventListener ( "mouseleave",desligarlampada )
lamp.addEventListener ( "click",quebrarlampada );

            