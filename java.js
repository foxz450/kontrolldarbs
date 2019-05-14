function atzime(n){
    let skaitlis = '';

    for(let z =0; z <= n.length - 1;z++){
        skaitlis= skaitlis +'(' + n[z]+ ')';
    }
    return skaitlis;
}
 let rez = atzime('10');

console.log(rez)