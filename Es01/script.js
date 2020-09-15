"use strict";
let matrix=[];
let rows=10;
let columns=10;
let minN=-100;
let maxN=100;
window.onload = function () {
    let max= minN-1;
    let coord="";
    for(let i=0;i<rows;i++){
        let string="righa "+i;
        matrix[i]=new Array(columns);
        for(let j=0;j<columns;j++){
            let randomN=random2Num(minN,maxN);

            matrix[i][j]=randomN;
            string+=" colonna "+j+" numero "+randomN;
            if(randomN>max){
                max=randomN;
                coord=i+"-"+j;
            }
        }

        console.log(string);
    }
    let coordYMax=parseInt(coord.split('-')[0]);
    let coordXMax=parseInt(coord.split('-')[1]);
    console.log("il max è "+max+" riga "+coordYMax+" colonna "+coordXMax);
    let somma=0;
    let media=0;

        if((coordXMax-1)>=0){
            somma+=matrix[coordYMax][coordXMax-1];
        }
        if((coordXMax+1)<columns){
            somma+=matrix[coordYMax][coordXMax+1];
        }
        if((coordYMax-1)>=0){
            somma+=matrix[coordYMax-1][coordXMax];
        }

        if((coordYMax+1)<rows){
            somma+=matrix[coordYMax+1][coordXMax];
        }

    media=somma/4;
     console.log("la media delle celle adiacenti è "+media);

}
function random2Num(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}