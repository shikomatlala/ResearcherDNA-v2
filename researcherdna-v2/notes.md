                            <!-- <div class="row" style="font-weight:lighter; background-color: rgba(9, 31, 67, 0.824); color:white; margin-left:0;">
                                <div class="col">#</div>
                                <div class="col"> Student Number</div>
                                <div class="col">Full Name</div>
                                <div class="col">Supervisor ID</div>
                                <div class="col">Start Date</div>
                                <div class="col">Complains</div>
                            </div> -->
                            <!-- <div style="width:100%; display: table;">
                                <div class="row" style="margin-left:0">
                                    <div class="col" style="margin-left:0">1</div>
                                    <div class="col">216955960</div>
                                    <div class="col">
                                        <div style="display:inline-flex; width:100%">
                                            <div style="width:100%;">Shiko Matlala</div>
                                            <div style="width:100%; text-align: right;"><button class="btn btn-primary btn-sm">Edit</button> </div>
                                            <div style="width:100%; text-align: right;"><button class="btn btn-secondary btn-sm">Close</button> </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div style="display:inline-flex; width:100%">
                                            <div style="width:100%;">982322</div>
                                            <div style="width:100%; text-align: right;"><button class="btn btn-primary btn-sm">Edit</button> </div>
                                        </div>
                                    </div>
                                    <div class="col">Tue 04 Oct 2022</div>
                                    <div class="col">
                                        <div class="badge bg-primary">0</div>
                                    </div>
                                </div>
                            </div> -->







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


