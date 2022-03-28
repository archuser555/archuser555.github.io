let t1 = document.getElementsByClassName("t1");
let y1 = document.getElementsByClassName("y1");
let p1 = document.getElementsByClassName("p1");
let i1 = document.getElementsByClassName("i1");
let n1 = document.getElementsByClassName("n1");
let g1 = document.getElementsByClassName("g1");
let t2 = document.getElementsByClassName("t2");
let e1 = document.getElementsByClassName("e1");
let s1 = document.getElementsByClassName("s1");
let t3 = document.getElementsByClassName("t3");
let start = document.getElementById("start");
let about = document.getElementById("about");
let howto = document.getElementById("howto");
let game = document.getElementById("btw");
let yes=document.getElementsByClassName("yes");
let returnh = document.getElementById("dudepleaseineedhtmldevsanyhelp");
let loaaaaaaaaaaaaad = document.getElementById("loaad");

let q = new Audio();
q.src = "untitled.mp3";
let a1 = false;
let a2 = false;
let a3 = false;
let a4 = false;
let a5 = false;
let a6 = false;
let a7 = false;
let a8 = false;
let a9 = false;
let a10 = false;
let a11 = false;
let a12 = false;
let a13 = false;
let a14 = false;
let a15 = false;
let a16 = false;
let a17 = false;
let a18 = false;
let a19 = false;
let a20 = false;
let a21 = false;
let a22 = false;
let a23 = false;
let a24 = false;
let a25 = false;
let a26 = false;
let a27 = false;
let a28 = false;
let a29 = false;
let a30 = false;
let a31 = false;
let a32 = false;
let a33 = false;
let a34 = false;
let a35 = false;
let a36 = false;
let a37 = false;
let a38 = false;
let a39 = false;
let a40 = false;
let a41 = false;
let a42 = false;
let a43 = false;
let a44 = false;
let a45 = false;
let a46 = false;
let a47 = false;
let a48 = false;
let a49 = false;
let a50 = false;
let a51 = false;
let a52 = false;
let a53 = false;
let a54 = false;
let a55 = false;
let a56 = false;
let a57 = false;
let a58 = false;
let a59 = false;
let a60 = false;
let a61 = false;
let a62 = false;
let a63 = false;
let a64 = false;
let a65 = false;
let a66 = false;
let a67 = false;
let a68 = false;
let a69 = false;


let i = 0;
let clock = setTimeout(() => {
    i = i + 1;
    loaaaaaaaaaaaaad.value = i;
    if(i = 100){
        stat();
        console.log("STARTQ");
    }
}, 2000);



const audioctx = new (window.AudioContext || window.webkitAudioContext);

about.addEventListener('click', function(){
    const ocsillator = audioctx.createOscillator();
    ocsillator.connect(audioctx.destination);
    ocsillator.type = 'triangle';
    ocsillator.start();
    setTimeout(function(){
        ocsillator.stop();
    }, 40);
});



start.addEventListener('click', function(){
    const ocsillator = audioctx.createOscillator();
    ocsillator.connect(audioctx.destination);
    ocsillator.type = 'triangle';
    ocsillator.start();
    setTimeout(function(){
        ocsillator.stop();
    }, 40);
});

returnh.addEventListener('click', function(){
    const ocsillator = audioctx.createOscillator();
    ocsillator.connect(audioctx.destination);
    ocsillator.type = 'triangle';
    ocsillator.start();
    setTimeout(function(){
        ocsillator.stop();
    }, 40);
});

howto.addEventListener('click', function(){
    const ocsillator = audioctx.createOscillator();
    ocsillator.connect(audioctx.destination);
    ocsillator.type = 'triangle';
    ocsillator.start();
    setTimeout(function(){
        ocsillator.stop();
    }, 40);
});

/* idk i waste 10 hours writing this text because i switch to colemac today :-)*/
function calculwpm(wordsum, timesum){
    /*timesum, how much time user waste to write wordsum*/
    /*wordsum, how much words in text that user write it*/
    /*and wpm is total pure words per minute*/
    /*idk i waste 10 hours writing this comments because i switch to colemac(but later i recome to QWERTY for some slow reasons) today, after my 15 years on QWERTY :-)*/
    /*0.0002777778 is just 1/60/60 because i wanna work with milliseconds not minutes*/
    wpm = wordsum/5 * 1/0.01666667/timesum;
    return wpm;
}

function ohthe(){

}

function wpmtest(){
    let x = window.innerWidth;
    let y = window.innerHeight;
    let xa = x/2;
    let xu = xa/20;
    let xq = xu /2;
    let p = '';
    let totaltime = 0;
    let start = Date.now();
    for(let a = 0;a < xq/2+2*2;a++){
        p = p + '<br>';
    }
    btw.innerHTML = `${p}<div><strong id='oo1'>o</strong><strong id='hh1'>h</strong><strong id="tt1"> t</strong> <strong id="hh2">h</strong> <strong id="ee1">e</strong> <strong id="mm1"> m</strong> <strong id="ll1">l</strong> <strong id="ss1">s</strong> <strong id="ee2">e</strong> <strong id="rr1">r</strong> <strong id="yy1">y</strong> <strong id="ee3"> e</strong> <strong id="vv1">v</strong> <strong id="ee4">e</strong> <strong id="rr2">r</strong> <strong id="yy2">y</strong> <strong id="bb1">b</strong> <strong id="oo2">o</strong> <strong id="dd1">d</strong> <strong id="yy3">y</strong> <br> <strong id="ww1"> w</strong> <strong id="aa1">a</strong> <strong id="nn1">n</strong> <strong id="tt2">t</strong> <strong id="ss2">s</strong> <strong id="tt3"> t</strong> <strong id="oo3">o</strong> <strong id="bb2"> b</strong> <strong id="ee5">e</strong> <strong id="mm2"> m</strong> <strong id="yy4">y</strong> <strong id="ee6"> e</strong> <strong id="nn2">n</strong> <strong id="ee7">e</strong> <strong id="mm3">m</strong> <strong id="yy5">   y</strong></div>`;
    let oo1 = document.getElementById("oo1");
    window.addEventListener("keydown", event => {
        if (event.key == "o") {
            oo1.style.color = '#00000';
            oo1.style.opacity = 100;
            a1 = true;
        }
        else if (event.key == "h" && a1 == true) {
            hh1.style.color = '#00000';
            hh1.style.opacity = 100;
            a2 = true;
            a3 = true;
        }
        /*else if (event.key == " " && a2 == true) {
            //a3 = true;
        }*/
        else if (event.key == "t" && a3 == true) {
            tt1.style.color = '#00000';
            tt1.style.opacity = 100;
            a4 = true;
        }
        if (event.key == "h" && a4 == true) {
            hh2.style.color = '#00000';
            hh2.style.opacity = 100;
            a5 = true;
        }
        else if (event.key == "e" && a5 == true) {
            ee1.style.color = '#00000';
            ee1.style.opacity = 100;
            a6 = true;
        }
        else if (event.key == "m" && a6 == true) {
            mm1.style.color = '#00000';
            mm1.style.opacity = 100;
            a7 = true;
        }
        else if (event.key == "l" && a7 == true) {
            ll1.style.color = '#00000';
            ll1.style.opacity = 100;
            a8 = true;
        }
        else if (event.key == "s" && a8 == true) {
            ss1.style.color = '#00000';
            ss1.style.opacity = 100;
            a9 = true;
        }
        if (event.key == "e" && a9 == true) {
            ee2.style.color = '#00000';
            ee2.style.opacity = 100;
            a10 = true;
        }
        else if (event.key == "r" && a10 == true) {
            rr1.style.color = '#00000';
            rr1.style.opacity = 100;
            a11 = true;
        }
        else if (event.key == "y" && a11 == true) {
            yy1.style.color = '#00000';
            yy1.style.opacity = 100;
            a12 = true;
        }
        if (event.key == "e" && a12 == true) {
            ee3.style.color = '#00000';
            ee3.style.opacity = 100;
            a13 = true;
        }
        else if (event.key == "v" && a13 == true) {
            vv1.style.color = '#00000';
            vv1.style.opacity = 100;
            a14 = true;
        }
        if (event.key == "e" && a14 == true) {
            ee4.style.color = '#00000';
            ee4.style.opacity = 100;
            a15 = true;
        }
        else if (event.key == "r" && a15 == true) {
            rr2.style.color = '#00000';
            rr2.style.opacity = 100;
            a16 = true;
        }
        if (event.key == "y" && a16 == true) {
            yy2.style.color = '#00000';
            yy2.style.opacity = 100;
            a17 = true;
        }
        else if (event.key == "b" && a17 == true) {
            bb1.style.color = '#00000';
            bb1.style.opacity = 100;
            a18 = true;
        }
        else if (event.key == "o" && a18 == true) {
            oo2.style.color = '#00000';
            oo2.style.opacity = 100;
            a19 = true;
        }
        else if (event.key == "d" && a19 == true) {
            dd1.style.color = '#00000';
            dd1.style.opacity = 100;
            a20 = true;
        }
        if (event.key == "y" && a20 == true) {
            yy3.style.color = '#00000';
            yy3.style.opacity = 100;
            a21 = true;
        }
        if (event.key == "w" && a21 == true) {
            ww1.style.color = '#00000';
            ww1.style.opacity = 100;
            a22 = true;
        }
        else if (event.key == "a" && a22 == true) {
            aa1.style.color = '#00000';
            aa1.style.opacity = 100;
            a23 = true;
        }
        else if (event.key == "n" && a23 == true) {
            nn1.style.color = '#00000';
            nn1.style.opacity = 100;
            a24 = true;
        }
        if (event.key == "t" && a24 == true) {
            tt2.style.color = '#00000';
            tt2.style.opacity = 100;
            a25 = true;
        }
        if (event.key == "s" && a25 == true) {
            ss2.style.color = '#00000';
            ss2.style.opacity = 100;
            a26 = true;
        }
        if (event.key == "t" && a26 == true) {
            tt3.style.color = '#00000';
            tt3.style.opacity = 100;
            a27 = true;
        }
        else if (event.key == "o" && a27 == true) {
            oo3.style.color = '#00000';
            oo3.style.opacity = 100;
            a28 = true;
        }
        else if (event.key == "b" && a28 == true) {
            bb2.style.color = '#00000';
            bb2.style.opacity = 100;
            a29 = true;
        }
        else if (event.key == "e" && a29 == true) {
            ee5.style.color = '#00000';
            ee5.style.opacity = 100;
            a30 = true;
        }
        if (event.key == "m" && a30 == true) {
            mm2.style.color = '#00000';
            mm2.style.opacity = 100;
            a31 = true;
        }
        if (event.key == "y" && a31 == true) {
            yy4.style.color = '#00000';
            yy4.style.opacity = 100;
            a32 = true;
        }
        if (event.key == "e" && a32 == true) {
            ee6.style.color = '#00000';
            ee6.style.opacity = 100;
            a33 = true;
        }
        else if (event.key == "n" && a33 == true) {
            nn2.style.color = '#00000';
            nn2.style.opacity = 100;
            a34 = true;
        }
        if (event.key == "e" && a34 == true) {
            ee7.style.color = '#00000';
            ee7.style.opacity = 100;
            a35 = true;
        }
        if (event.key == "m" && a35 == true) {
            mm3.style.color = '#00000';
            mm3.style.opacity = 100;
            a37 = true;
        }
        if (event.key == "y" && a37 == true) {
            yy5.style.color = '#00000';
            yy5.style.opacity = 100;
            a38 = true;
        }
        if(a38){
            let stop = Date.now();
            totaltime = stop - start;
            let nothing = calculwpm(38,totaltime/1000);
            console.log(nothing);
            if(nothing > 50){
                let totalwords = 61;
                let besttime = 14.6;
                let min2sec = 0.01666667;
                let totaltime = 0;
                let start = Date.now();
                for(let a = 0;a < xq/8;a++){
                    p = p + '<br>';
                }
                q.play();
                btw.innerHTML = `${p} <h1 class='aaa'>Very Very Nice, You Get ${nothing} WPM!! We Tell All Who Get More Than 50 Wpm This Word, Please Help Us Make This Project Better Because i Know You Are A Programmer :-) Just Please Join The Zakar Group From Here <a href="https://archuser555.github.io">The Zakar Group Page</a>, I Will Be Very Happy If Im Not The Single On This Group, Because Im I</h1>`;
                console.log("GOOD WORK!");
            }
            else if (nothing < 50) {
                let totalwords = 61;
                let besttime = 14.6;
                let min2sec = 0.01666667;
                let totaltime = 0;
                let start = Date.now();
                for(let a = 0;a < xq/8;a++){
                    p = p + '<br>';
                }
                q.play();
                btw.innerHTML = `${p} <h1 class='aaa'>Nice! You Get ${nothing} WPM, It's Not The Best, Try Get 50 Wpm Now!<br><br><br>		  <div id="about-btn">
                <strong><a id="about" href="play.html"><strong id="okdudeifyoureadthesourcecodetohereiwillsaycongratulationsyouwinbutpleaseifyoucanhelpmeinhtmlandthiswebsiteprogrammingcometogithubthanksdude">Try Again</strong></a></strong>
              </div><h1>`;
            }
        }
    });
}
function stat(){
    let x = window.innerWidth;
    let y = window.innerHeight;
    let xa = x/2;
    let xu = xa/20;
    let xq = xu /2;
    let p = '';
    for(let a = 0;a < xq/4;a++){
        p = p + '<br>';
    }

    btw.innerHTML = p + "<h1 class='wierd'>Are You Ready?</h1><blockquote class='morewierd'><small>The Test Gonna Start Automatic When You Press Yes,or gonna make you go to the menu page when press no</small></blockquote><br><br><div class='yes' onclick='wpmtest()'>Yes</div><br><a href='index.html'><div class='non'>No</div></a>"
}