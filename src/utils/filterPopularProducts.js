export const filterPopularProducts = (products, number) => {
    const newList = [...products];
    newList.sort( (a,b) => (a.rating.rate < b.rating.rate? 1 : -1) )

    // console.log(newList);
    // const slidedList = newList.slice(0,number); 
    // console.log(slidedList);

    return newList.slice(0,number); 
}