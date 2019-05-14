function atzime(n){
    let skaitlis = '';

    if(skaitlis >= 8) {
        
        return "🤩";
    }
    else if(skaitlis <=3) {

         return "😣";
    }
    else if(skaitlis <=10) {

        return "😎";
    }
    else {
        return "😑";
    }
    
}
 let rez = atzime('10');

console.log(rez)