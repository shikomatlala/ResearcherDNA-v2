<h1>Classes</h1>
What is a class?
<hr>
A Class groups variables (properties) and functions (methods) that are highly related
~


<br><br><br>


<h1>Type Assertions</h1>
<p>let <span style=""><strong>message</strong></span>;</p>
message = 'abc';
<p>let endsWithC = <span>(< string>messsage).endsWith('c');</spand></p>
let alternativeWay = (message as string).endsWith('c');
//Allows us to access the intelisense

<br><br>
<h1>Arrow Functions</h1>
let log = function(message){
    console.log('message');
}
let doLog = ()=> console.log();
<br><br><br>

<h1>Inferfaces</h1>
//we may end up with functions with many parameters

interface Point{
    x:number,
    y:number //we are defining the shape of an object
}

let drawPoint = (point: Point) =>{//we used pascal naming convention
    //Draw 
}

drawPoint({
    x: 1,
    y: 2
})


