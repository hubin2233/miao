
var hubin2233 = function(){


  // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
  // 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  // 参数：array（Array）需要处理的数组
  //       [size=1]（numbe）每个数组区块的长度
  function chunk(array,[size=1]){
    var result = []
    
  }

// 创建一个新数组，包含原数组中所有的非假值元素。
// 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
// 参数：array (Array): 待处理的数组
  function compact(array){
    var result = []
    for(var i = 0;i<array.length;i++){
      if(array[i]){
        result.push(ary[i])
      } 
    }
    return result 
  }

  return {
    compact,
  }
}()
