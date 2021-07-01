let seats = 60;
let seatsLeft = 60;
let totseat = document.querySelector(".totalseats");
totseat.innerHTML = seats;
let leftseat = document.querySelector(".leftseats");
leftseat.innerHTML = seatsLeft;
let i=0;
let seatComponent = document.querySelector(".seats-layout");
while(i<seats)
{
    seatComponent.innerHTML+=`<div class="seat-component">
                              <img src="seat.png" alt="seat" class="empty-seat">
                              </div>`
    i++;
}

let images = document.querySelectorAll('.seat-component');
images.forEach((image)=>{
image.addEventListener("click",function(){
    if(image.querySelector(".empty-seat")!=null){
    seatsLeft-=1;
    leftseat.innerHTML = seatsLeft;
    image.innerHTML=`<img src="booked-seat.png" alt="seat" class="booked-seat">`}
    else{
        seatsLeft+=1;
    leftseat.innerHTML = seatsLeft;
    image.innerHTML=`<img src="seat.png" alt="seat" class="empty-seat">`
    }
    });
    });