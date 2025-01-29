const AgeCalculator=(birthYear)=>{
    const age= new Date().getFullYear()-birthYear;
    return age;
}
console.log(AgeCalculator(1992));