function differenceInAges(ages){
        const lowest = Math.min(...ages);
        const highest = Math.max(...ages);
        const difference = Math.max(...ages) - Math.min(...ages);  
        return [lowest, highest, difference]
}

differenceInAges([82, 15, 6, 38, 35]);
// differenceInAges([57, 99, 14, 32]);