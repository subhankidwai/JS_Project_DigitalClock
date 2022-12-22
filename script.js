function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    
    let a = document.getElementById("task")
    let b = document.getElementById("block2")
    let c = document.getElementById("task2")

    if (h>=19 && h<24){
        a.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
        b.src="./Component32–1.svg"
        c.innerText="GOOD NIGHT !!"
    }

    if (h>=01 && h<=11){
        a.innerText="GRAB SOME HEALTHY BREAKFAST"
        b.src="./Component.svg"
        c.innerText="GOOD MORNING!! WAKE UP !!"
    }

    if (h>=12 && h<=15){
        a.innerText="LET'S HAVE SOME LUNCH !!"
        b.src="./Component31–1.svg"
        c.innerText="GOOD AFTERNOON!! TAKE SOME SLEEP"
    }

    if (h>=16 && h<19){
        a.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING"
        b.src="./lunch_image.png"
        c.innerText="GOOD EVENING !!"
    }

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + " : " + m + " : " + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    // document.getElementById("MyClockDisplay").textContent = time;
    

    setTimeout(showTime, 1000);
    
}

showTime();

let t1=document.getElementById("wake")
let t2=document.getElementById("lunch")
let t3=document.getElementById("nap")
let t4=document.getElementById("night")

let btn=document.getElementById("set")

let output1=document.getElementById("t11")
let output2=document.getElementById("t22")
let output3=document.getElementById("t33")
let output4=document.getElementById("t44")

btn.addEventListener("click", function(){
    let t1Value=t1.value;
    output1.innerText=t1Value;

    let t2Value=t2.value;
    output2.innerText=t2Value;

    let t3Value=t3.value;
    output3.innerText=t3Value;

    let t4Value=t4.value;
    output4.innerText=t4Value
})





