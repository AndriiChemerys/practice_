function sumOfTwo(a: number[], b: number[], v: number): boolean {
    const hashMap={};

    for (let num of a) {
        const difference = v - num;
        hashMap[difference] = difference;
        console.log(v);
        console.log(num);
        console.log(hashMap);
        console.log(hashMap[difference]);
        console.log(difference);
    }

    for (let num of b) {
        if (hashMap.hasOwnProperty(num)){
            return true;
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
