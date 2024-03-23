function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount = 0;
        yield i;
        
    }
    return iterationCount;
}
// console.log(makeRangeIterator());
