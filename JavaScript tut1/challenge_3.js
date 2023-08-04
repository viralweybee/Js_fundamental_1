var doplhin1_score=97
var doplhin2_score=112
var doplhin3_score=101
var dolphin_avgscore=doplhin1_score+doplhin2_score+doplhin3_score;

var koalas1_score=88
var koalas2_score=91
var koalas3_score=110
var koalas_avgscore=koalas1_score+koalas2_score+koalas3_score


    if(koalas_avgscore>dolphin_avgscore&&koalas1_score>=100){
        console.log("The average score of koalas is greater than the dolphin");
    }
    else if(koalas_avgscore<dolphin_avgscore&&dolphin_avgscore>=100){
        console.log("The average score of dolphin is greater than koalas")
    }
    else if(koalas_avgscore===dolphin_avgscore&&koalas1_score>=100){
        console.log("Draw")
    }
    else{
        console.log("not possible")
    }



