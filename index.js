
function myArray(){
    Object.defineProperty(this , "length",{
        value:0,
        writable:true,
        enumerable:false,
    })

    for(var a= 0;a<arguments.length;a++){
        this[a]= arguments[a]  
     }

    this.length = arguments.length;
}

myArray.prototype.push = function(value){

        this[this.length] = value;
        this.length++;
}

myArray.prototype.pop = function () {


        delete this[this.length - 1];
        this.length--;
    
}



myArray.prototype.top = function () {
    console.log(`last Index value ${arr[this.length-1]}`)

}


myArray.prototype.print = function(){
  
     console.log(Object.values(arr))
   
}


myArray.prototype.printReverse = function(arr){

    var newArr = [];

    for(var a = arr.length-1;a>=0;a--){
        newArr.push(arr[a])
    }

    console.log(newArr)

}


myArray.prototype.size = function(){

    console.log(arr.length)
}


var arr =  new myArray(1,2,3,4,5,6,7)
arr.push(8);
arr.pop();
console.log(arr)
arr.top();
arr.print()
arr.printReverse(arr); 
arr.size()



