// Selecting all required elements

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
closeIcon = wrapper.querySelector(".close-icon");

window.onload = () =>{
    function ajax(){
        let xhr = new XMLHttpRequest(); // Creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts","true"); //Sending GET request to the URL
        xhr.onload = () =>{ // Once ajax loaded
        //if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
        //or his/her response status is 200 that means he/she is online
        if(xhr.status == 200 && xhr.status < 300){
            toast.classList.remove("offline");
            title.innerText = "You're online now";
            subTitle.innerText = "Hurray! Internet is connected.";
            wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

            closeIcon.onclick = () =>{ //hide toast notification on close icon click
              wrapper.classList.add("hide");
            }

            setTimeout(() => { //hide the toast notification automatically after 5 seconds
                wrapper.classList.add("hide");
            }, 5000);
        }
        else{
            offline(); // Calling offline function if ajax status is not equal to 200 or not less that 300
        }
        }
        xhr.onerror = () =>{
            offline(); //Calling offline function if the passed url is not correct or returning 404 or other error
        }
        xhr.send(); //sending get request to the passed url
    }

    function offline(){ //Creating an offline function
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You are offline now";
        subTitle.innerText = "Oops! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';

    }

    setInterval(()=>{
        ajax(); //Calling ajax function
    },100); //100ms
}
