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




<div class="sidenav-header">
    <div class="card home-header-div">
      <div class="card-body main-card-body-c">
        <!-- <div class="left-align-header-title">
          <h1>Home | <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.85 21.525Q9.5 20.55 7.963 19.95q-1.538-.6-3.213-.825-.75-.1-1.25-.638Q3 17.95 3 17.25V10.2q0-.95.65-1.563.65-.612 1.525-.462Q7.1 8.5 8.838 9.35q1.737.85 3.162 2.2 1.425-1.35 3.163-2.2 1.737-.85 3.662-1.175.875-.15 1.525.462.65.613.65 1.563v7.05q0 .7-.5 1.237-.5.538-1.25.638-1.675.225-3.212.825-1.538.6-2.888 1.575-.5.375-1.15.375-.65 0-1.15-.375ZM12 9q-1.65 0-2.825-1.175Q8 6.65 8 5q0-1.65 1.175-2.825Q10.35 1 12 1q1.65 0 2.825 1.175Q16 3.35 16 5q0 1.65-1.175 2.825Q13.65 9 12 9Z"/></svg> Shiko Matlala</h1>
        </div> -->
        <div class="left-align-header-title">
          <h1>Students | <svg xmlns="http://www.w3.org/2000/svg" fill="green" height="24" width="24"><path d="m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            Prof. Nyembe </h1>
        </div>
        <div class="right-align-header-icons">
          <div class="header-icons">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="orange"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7.175q.125 0 .262-.038.138-.037.263-.112L19.6 8.25q.2-.125.3-.312.1-.188.1-.413 0-.5-.425-.75T18.7 6.8L12 11 5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.437.1.188.3.288l7.075 4.425q.125.075.263.112.137.038.262.038Z"/></svg>
            </div>
            <div>
              Messages
            </div>
          </div>
          <div class="header-icons">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="3e94d62a"><path d="M20.125 15 18 12.875l.725-.725q.275-.275.7-.275.425 0 .7.275l.725.725q.275.275.275.7 0 .425-.275.7ZM12 21v-2.125l5.3-5.3 2.125 2.125-5.3 5.3Zm-9-5v-2h7v2Zm0-4v-2h11v2Zm0-4V6h11v2Z"/></svg>
            </div>
            <div>
              Notes
            </div>
          </div>
          <div class="header-icons">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="darkblue"><path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/></svg>
            </div>
            <div>
              Calendar
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <app-header></app-header>
    <app-navbar></app-navbar>   -->
</div>