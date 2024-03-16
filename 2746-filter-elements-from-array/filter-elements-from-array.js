/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn)=> {
    const filtredArr = [];
    for(let i= 0; i<arr.length; i++){
        if (fn(arr[i],i)) {
            filtredArr.push(arr[i]);
        }
    }
    return filtredArr;
    
};