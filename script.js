function mincost(arr) {
   
    arr.sort((a, b) => a - b);

    let totalCost = 0;

   
    while (arr.length > 1) {
        
        const first = arr.shift();
        const second = arr.shift(); 

        
        const cost = first + second;
        totalCost += cost;

      
        let inserted = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > cost) {
                arr.splice(i, 0, cost);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            arr.push(cost); 
        }
    }

    return totalCost;
}

console.log(mincost([4, 3, 2, 6])); 
console.log(mincost([1, 2, 3, 4, 5]));  


module.exports=mincost;
