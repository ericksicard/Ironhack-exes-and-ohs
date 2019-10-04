function XO(str) {
    // Counting Xs
    let countXs = [...str].filter( elm => elm.toLowerCase() === 'x').length;;
    //Counting Os
    let countOs = [...str].filter( elm => elm.toLowerCase() === 'o').length;
    
    return countOs === countXs;
  }