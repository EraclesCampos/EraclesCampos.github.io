function prom(cal=[]){
    let total =0;
    cal.forEach(e => {
        total += e;
    })
        const PROMEDIO = total / cal.length; 
        if (PROMEDIO >= 6) {
            return "aprobado";
         }
        else{
             return "reprobado";
        }
};
let califs = [10,10,10,10,10];
console.log(prom(califs));