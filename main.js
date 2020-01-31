//closure
function outermethod()
{
    let innermethod=function(strFname,strLname)
    {
      console.log(`${strFname} ${strLname}`)
    }
    return innermethod;
}

let innerFunc=outermethod();
innerFunc("Madhu","patil");

function outerDemo()
{
    let innerDemo1=(num1,num2)=>num1+num2;
   
    let innerDemo2=(num1,num2,num3)=>num1+num2+num3;
    
    let obj={
        demo1:innerDemo1,
        demo2:innerDemo2
    }
    return obj;
}

let getinnerDemo=outerDemo();
let result=undefined;
result=getinnerDemo.demo1(5,9);
console.log("Demo1:",result);

result=getinnerDemo.demo2(8,10,15);
console.log("Demo2:",result);

function classdemo() //constructor
{
  let privateMethod1=(value1,value2)=>value1*value2;

  let privateMethod2=(value1,value2)=>value1/value2;
  
  this.body={
      method1:privateMethod1,
      method2:privateMethod2
  }
}

let obj=new classdemo();
console.log(obj.body.method1(22,25));
console.log(obj.body.method2(100,5));