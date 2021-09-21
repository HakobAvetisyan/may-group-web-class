let zoo = [3,4,5,6];

let bar = zoo.map(function(val) {
    return val * 2;
});

console.log(zoo)
console.log(bar)



let people = [
    {
            name:"Gedeon",
        age: 28
    },
    {
            name: "Hexine",
        age: "23"
    
    },
    {
            name: "Lilith",
        age: "18"
    }
    ];
    
    
    let result = people.filter(function(person){
            return person.age >= 21;
    }).map(function(person){
            return person.name;
    });
    
    alert(result)


    let map = function(arr, fun) {
        return arr.reduce(function (aggr,val,i){
          aggr[i] = fun(val);
        return aggr;
      }, []);
    };
    
    alert(map([1,3,4,5,99],function(val){
            return val * 2;
    }));

    
    function reduce(arr,fun,aggr) {
		arr.forEach(function(val,i){
    	if(i === 0 && aggr === undefined){
      	aggr = val;
        } else {
    			aggr = fun(aggr,val,i);
        }  
    });
    return aggr;
}

alert(reduce([5,12,17],function(aggr,val,) {
	return Math.max(aggr,val);





    let i = 0;
    do {
        alert(i)
        i++;
    } while(i < 10)

    let x = [1,2,3,4];

let unshift = function(arr,val){
	let i = arr.length-1;
  while( i >= 0) {
  	arr[i+1] = arr[i];
    i--
  }
  arr[0] = val;
  
}
unshift(x,0);
alert(x);
let x = [1,2,3,4,5];
let y = [6,7,8,9];

let concat = function(a,b) {
	let result = [];
  a.forEach(function(val){
  	result.push(val);
  });
  b.forEach(function(val){
  	result.push(val);
  });
  return result;
};
alert(concat(x,y));
let x = [1,2,3,4,5];
let y = [6,7,8,9];

let x = [1,2,3,4,5,6];

alert(x.find(function(val){
	return val > 4;
}));


let x = [1,2,3,4,5,6];

alert(x.findIndex(function(val){
	return val > 4;
}));

