var acumulador = '' ;
var n1 = 0 ;
var n2 = 0 ;
var seletor = '';

function btn(a){
    if(a == 'c'){
        acumulador = '';
        n1 = 0;
        n2 = 0;
        console.log(acumulador);   
        document.getElementById('txtVisor').value = '';
    }else{
        acumulador = acumulador + a ;
        console.log(acumulador);
        document.getElementById('txtVisor').value = acumulador;
    }
}

function btnSeletor(a){
    seletor = a;
    console.log(a);
    n1 = parseInt(acumulador);
    acumulador = ''; 
}

function resu(){
    if(seletor == '+'){
        var resu;
        n2 = parseInt(acumulador);
        resu = n1 + n2 ;
        console.log('resu  - '+ resu);
        document.getElementById('txtVisor').value = resu;
    }else if(seletor == '-'){
        var resu;
        n2 = parseInt(acumulador);
        resu = n1 - n2 ;
        console.log('resu  - '+ resu);
        document.getElementById('txtVisor').value = resu;
    }else if(seletor == '*'){
        var resu;
        n2 = parseInt(acumulador);
        resu = n1 * n2 ;
        console.log('resu  - '+ resu);
        document.getElementById('txtVisor').value = resu;
    }else if(seletor == '/'){
        var resu;
        n2 = parseInt(acumulador);
        resu = n1 / n2 ;
        console.log('resu  - '+ resu);
        document.getElementById('txtVisor').value = resu;
    }   
}
