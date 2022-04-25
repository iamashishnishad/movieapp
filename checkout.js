// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


document.querySelector("user-detail").addEventListener("conform", submitFun);

var user= JSON.parse(localStorage.getItem("userC"));
console.log(user);


function submitFun() {

    event.preventDefault();
    var enter_name=document.querySelector("#user_name").value;

    var enter_seat=document.querySelector("#number_of_seats").value;



    for(var i =0; i<user.length;  i++){
        console.log(user[i])


        if(
            user[i].name==enter_name && user[i].seat==enter_seat)
            {
                alert('Booking Successful!');
            }
            else{
                alert('Insufficient Balance!');
            }
    }
}