
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
  // 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
  // （愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
  // 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。
  // 参数：array (Array): 要检查的数组。
  //       [values] (...Array): 排除的值。
  function difference(array,values){
    var result = []
    for(var i = 0;i<array.length;i++){
      result.push(array[i])
      for(var j = 0;j<values.length;j++){
        if(values[j]=array[i]){
          result.pop()
        }
      }
    }
    return  result
  }
  // 将 array 中的所有元素转换为由 separator 分隔的字符串。
  // 参数：array (Array): 要转换的数组。
  //       [separator=','] (string): 分隔元素。
  function join(array,separator=","){
    var result =  ""
    for(var i = 0;i<array.length-1;i++){
        result += array[i]+ ""+ separator 
    }
    result+= array[i] + ""
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
    for(var i = fromIndex;i>0;i--){
      if(array[i]==value){
        return i
      }
    }
    return -1
  }
  // 获取数组array中除了最后一个元素之外的所有元素
  // （愚人码头注：去除数组array中的最后一个元素）。
  // 参数：array (Array): 要查询的数组。
  function initaial(array){
    var result =[]
    for(var i = 0;i<array.length-1;i++){
      result.push(array[i])
    }
    return result
  }

  // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
  // 参数：array (Array): 要查询的数组。
  //       [n=1] (number): 要去除的元素个数。
  function drop(array,n=1){
    var result = []
    for(var i = n;i<array.length;i++){
      result.push(array[i])
    }
    return result
  }
  // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
  // 参数：array (Array): 要查询的数组。
  //       [n=1] (number): 要去除的元素个数。
  function dropRight(array,n=1){
    var result = []
    for(var i = 0;i<array.length-n;i++){
      result.push(array[i])
    }
    return result
  }
  // 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
  // 参数：array (Array): 要填充改变的数组。
  //       value (*): 填充给 array 的值。
  //       [start=0] (number): 开始位置（默认0）。
  //       [end=array.length] (number):结束位置（默认array.length）。
  function fill(array,value,start=0,end=array.length){
    for(var i = start;i<end;i++){
      array[i]=value
    }
    return array
  }
  // 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
  // 参数：array (Array): 要搜索的数组。
  //      [predicate=_.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。
  //      [fromIndex=0] (number): The index to search from.







  // 减少一级array嵌套深度。
  // 参数：array (Array): 需要减少嵌套层级的数组。
  function flatten(array){
    var result = []
    for(var i =0 ;i<array.length;i++){
      if(array[i][0]){
        for(var j = 0;j<array[i].length;j++){
          result.push(array[i][j])
        }
      }else{
        result.push(array[i])
      }
    }
    return result
  }
  // 将array递归为一维数组。
  // 参数：array (Array): 需要处理的数组。
  function flattenDeep(array){
    var result = []
    for(var i =0 ;i<array.length;i++){
      if(array[i][0]){
        flattenDeep(result)
      }else{
        result.push(array[i])
      }
    }
  }
  // 根据 depth 递归减少 array 的嵌套层级
  // 参数：array (Array): 需要减少嵌套层级的数组。
  //      [depth=1] (number):最多减少的嵌套层级数。

  // 反转array，使得第一个元素变为最后一个元素，
  // 第二个元素变为倒数第二个元素，依次类推。
  // 参数：array (Array): 要修改的数组。
  function reverse(array){
    var result =[]
    for(var i = array.length-1;i>=0;i--){
      result.push(array[i])
    }
    return result
  }
    //使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
  //  如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
  // 参数：array (Array): 需要查找的数组。
  //     value (*): 需要查找的值。
  //     [fromIndex=0] (number): 开始查询的位置。
  function indexOf(array,value,fromIndex=0){
    for(var i = fromIndex;i<array.length;i++){
      if (array[i]==value) {
        return i
      }
    }
    return -1
  }
  // 使用二进制的方式检索来决定 value值 应该插入到数组中 
  // 尽可能小的索引位置，以保证array的排序
  // 参数：array (Array): 要检查的排序数组。
  //       value (*): 要评估的值。
  function sortedIndex(array,value){
    for(var i = 0;i<array.length;i++){
      if(array[i]>=value){
        return i
      }
    }
  }
  // 转换 value 为一个数组
  // 参数：value (*): 要转换的值
  function toArray(value){
    var result = []
    if(value!==Number){
      for(var i = 0;i<value.length;i++){
        result.push(Number(value[i]))
      }
    }
    return result
  }
  // 计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
  // 参数：array (Array): 要迭代的数组。
  function max(array){
    var m = 0
    if(array!=null){
      for(var i = 0;i<array.length;i++){
        if(m<array[i]){
          m=array[i]
        }
      }
      return m
    }else{
      return undefined
    }
  }
  // 计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。
  // 参数：array (Array): 要迭代的数组。
  function min(array){
    var m = 0
    if(array!=null){
      for(var i = 0;i<array.length;i++){
        if(m>array[i]){
          m=array[i]
        }
      }
      return m
    }else{
      return undefined
    }
  }
  // 计算 array 中值的总和
  // 参数：array (Array): 要迭代的数组。
  function sum(array){
    var s = 0
    for(var i = 0;i<array.length;i++){
      s+=array[i]
    }
    return s
  }





  //--------------------调用以返回结果----------------------
  return {
    compact,
    chunk,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    reverse,
    sortedIndex,
    toArray,
    max,
    min,
    sum,
    difference,
    initaial,
    indexOf,
  }
}()
