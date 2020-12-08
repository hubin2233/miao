
var hubin2233 = function(){


  // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
  // 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
  // 参数：array（Array）需要处理的数组
  //       [size=1]（numbe）每个数组区块的长度
  function chunk(array,size=1){
    var result = []
    for(var i=0,j=0;i<array.length;i+=size,j++){
      result[j] = array.slice(i,(i+size))
    }
    return result
  }
// 创建一个新数组，包含原数组中所有的非假值元素。
// 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
// 参数：array (Array): 待处理的数组
  function compact(array){
    var result = []
    for(var i = 0;i<array.length;i++){
      if(array[i]){
        result.push(array[i])
      } 
    }
    return result 
  }
  // 将 array 中的所有元素转换为由 separator 分隔的字符串。
  // 参数：array (Array): 要转换的数组。
  //       [separator=','] (string): 分隔元素。
  function join(array,separator=","){
    var result =  ""
    for(var i = 1;i<array.length;i++){
        result += array[i]+ separator
    }
    return result
  }
  // 获取array中的最后一个元素
  // 参数：array (Array): 要检索的数组。
  function last(array){
    return array[array.length-1]
  }
  // 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。
  // 参数：array (Array): 要搜索的数组。
  //       value (*): 要搜索的值。
  //       [fromIndex=array.length-1] (number): 开始搜索的索引值。
  function lastIndexOf(array,value,fromIndex=array.length-1){
    for(var i = array.length-1;i>0;i--){
      if(array[i]==value){
        return i
      }
    }
    return -1
  }


  //--------------------调用以返回结果----------------------
  return {
    compact,
    chunk,
    join,
    last,
    lastIndexOf,
  }
}()