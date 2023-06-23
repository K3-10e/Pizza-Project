export const toppingsSorter = (toppingsArray) => {
    var uniqueToppings = [];

    for(var value of toppingsArray){
        // alphabetically sorts a pizza's toppings and capitalizes the first letter of each word
        const stringValue = value
                .sort()
                .toString()
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
                .split(',')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(', ');
        // checks if this pizza's toppings already exists
        const exists = uniqueToppings.map(e => e.toppings).indexOf(stringValue);

        if(exists === -1){
            uniqueToppings.push({ toppings: stringValue, count: 1 });
        }
        else{
            uniqueToppings[exists].count = ++uniqueToppings[exists].count;
        }
    }
    // sorts values by descending order
    return uniqueToppings.sort((a,b) => b.count - a.count);
};