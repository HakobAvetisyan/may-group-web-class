Array.prototype.Newmap = function(fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i],i,this);    
    }   
}
//Lets check
let arr1 = [1,2,3,4]
arr1.Newmap(function(value,index,arrey){
    console.log(value,index,arrey);
})
console.log(1 == "1");