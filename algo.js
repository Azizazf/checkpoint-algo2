const triParInsersion = (tab) => {
    for(let i = 1 ;i<tab.length; i++){
        let x =tab[i]
        let j = i
        while(j > 0 && tab[j-1] > x){
            tab[j] = tab[j-1]
            j--
        }
        tab[j] = x
    }
    return tab;
}

console.log(triParInsertion([10,5,33,9,4,26]));