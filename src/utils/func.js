export const formatedDate=(date)=>{
    let convert = date.toISOString().split("T")[0];
    console.log(convert)
    return convert

}


/**
 * Split  => permet de diviser une chaîne de caractères
 * à partir d'un séparateur pour fournir un tableau de sous-chaînes.
 */


 export const getLastMonth=()=>{
     let now = new Date();
     now.setMonth(now.getMonth() - 1)
     console.log('last', formatedDate(now))
     return formatedDate(now)

 }