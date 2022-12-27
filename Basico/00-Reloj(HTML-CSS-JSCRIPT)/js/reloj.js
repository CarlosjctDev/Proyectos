// Reloj del ordenador 


(function () {

    var actualizarHora= function(){
        // De esta forma obtenemos la fecha y la hora, minutos,segundos etc    
        var fecha = new Date (),
            // De esta forma obtenemos la hora y le restamos 12 (para que lo convierta a 12 horas)
            horas=fecha.getHours() ,
            //Minutos
            minutos=fecha.getMinutes(),
            //Segundos
            segundos=fecha.getSeconds(),
            //Dia de la semana (El domingo=0 y lunes =1 , martes=2 etc)
            diaSemana=fecha.getDay(),
            //Dia del mes
            dia=fecha.getDate(),
            //Mes (Enero = 0 ,Febrero =1, Marzo=2 etc)
            mes=fecha.getMonth(),
            //Año
            year=fecha.getFullYear(),
            //AM O PM
            ampm;
        
        var pHoras =document.getElementById('horas'),
            pMinutos=document.getElementById('minutos'),
            pSegundos=document.getElementById('segundos'),
            pDiaSemana=document.getElementById('diaSemana'),
            pDia=document.getElementById('dia'),
            pMes=document.getElementById('mes'),
            pYear=document.getElementById('year'),
            pAMPM=document.getElementById('ampm');

        //Arreglo dia de semana    
        var semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        //diaSemana va traer un numero es por eso que hicimos el arreglo
        pDiaSemana.textContent= semana[diaSemana];
        //Dia
        pDia.textContent=dia;
        //Arreglo mes   
        var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre',
        'Noviembre','Diciembre'];        
        //Mes
        pMes.textContent=meses[mes];
        //Año
        pYear.textContent=year;

        //Validaciones de horas
        if (horas >=12){horas=horas-12; ampm='PM';} else{ampm='AM';}
        if (horas == 0){horas=12;}
        if (horas < 10){horas="0"+horas;} 
        //Hora
        pHoras.textContent=horas;
        //AMPM
        pAMPM.textContent=ampm;
        //Validaciones de minutos
        if (minutos < 10){minutos="0"+minutos;} 
        //Minutos
        pMinutos.textContent=minutos;
        //Validaciones de segundos
        if (segundos < 10){segundos="0"+segundos;} 
        //Segundos
        pSegundos.textContent=segundos;

    };

    actualizarHora();
    var intervalo=setInterval(actualizarHora,1000);

}())
    
    




