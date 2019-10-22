// Aaron Mihalevich
// Rocket Launch Project
// CIS-131 10/19/2019

//INFOMATION NEEDED
//HEADER: NEXT LAUNCH DATE(.net)
//LIST: LAUNCH DATE AND TIME(.net), LAUNCH NAME(.name)
//LAUNCH TYPE: (.lsp) FALCON = 121, LAUNCHERONE = 199, ARIANE = 115


//**************** NEXT 5 LAUNCH FUNCTION (START) */
window.addEventListener('load', pageLoad)

function pageLoad()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("get","https://launchlibrary.net/1.4/launch?next=5");
    httpRequest.send(null);
    httpRequest.onreadystatechange = loadFunction;


    function loadFunction()
    {
        if(httpRequest.readyState == 4 && httpRequest.status == 200)
        {
            //**************** PAGE LOAD AFTER GETTING DATA */
            //GRAB JSON STRING
            var request = httpRequest.responseText;

            //CONVERT TO JS OBJECT
            var launchObject = JSON.parse(request);
            var launch = launchObject.launches;
        
        
        // SET VARIABLES FOR HEAD AND LIST IDS
        
            var headDate = document.getElementById('date');
            var l1 = document.getElementById('launch1');
            var l2 = document.getElementById('launch2');
            var l3 = document.getElementById('launch3');
            var l4 = document.getElementById('launch4');
            var l5 = document.getElementById('launch5');

            headDate.innerHTML = "<strong>Next launch: </strong>" + launch[0].net;
            l1.innerHTML = launch[0].net + " -- " + launch[0].name;
            l2.innerHTML = launch[1].net + " -- " + launch[1].name;
            l3.innerHTML = launch[2].net + " -- " + launch[2].name;
            l4.innerHTML = launch[3].net + " -- " + launch[3].name;
            l5.innerHTML = launch[4].net + " -- " + launch[4].name;

            // SET COUNT DOWN TIMER
            var countDate = new Date(launch[0].windowstart).getTime();

            var timer = setInterval(function()
            {
                var time = new Date().getTime();
                var diff = countDate - time;

                var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                var sec = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('timer').innerHTML = days + "d " + hours + "h " + min + "m " + sec + "s ";
            });

        }
    }
}
//**************** NEXT 5 LAUNCH FUNCTION (END) */


//**************** FALCON LAUNCH FUNCTION (START) */
function falconLaunch()
{
    var falconRequest = new XMLHttpRequest();
    falconRequest.open("get","https://launchlibrary.net/1.4/launch?name=falcon&next=5");
    falconRequest.send(null);
    falconRequest.onreadystatechange = falconFunction;

    function falconFunction()
    {
        if(falconRequest.readyState == 4 && falconRequest.status == 200)
        {
            //**************** PAGE LOAD AFTER GETTING DATA */
            //GRAB JSON STRING
            var fRequest = falconRequest.responseText;

            //CONVERT TO JS OBJECT
            var falconObject = JSON.parse(fRequest);
            var falcon = falconObject.launches;

        
        
            // SET VARIABLES FOR HEAD AND LIST IDS
            var l1 = document.getElementById('launch1');
            var l2 = document.getElementById('launch2');
            var l3 = document.getElementById('launch3');
            var l4 = document.getElementById('launch4');
            var l5 = document.getElementById('launch5');

            l1.innerHTML = falcon[0].net + " -- " + falcon[0].name;
            l2.innerHTML = falcon[1].net + " -- " + falcon[1].name;
            l3.innerHTML = falcon[2].net + " -- " + falcon[2].name;
            l4.innerHTML = falcon[3].net + " -- " + falcon[3].name;
            l5.innerHTML = falcon[4].net + " -- " + falcon[4].name;
       
        }
    }
}
//**************** FALCON LAUNCH FUNCTION (END) */




//**************** LAUNCHERONE FUNCTION (START) */
function launcheroneLaunch()
{
    var launcherRequest = new XMLHttpRequest();
    launcherRequest.open("get","https://launchlibrary.net/1.4/launch?name=launcherone&next=5");
    launcherRequest.send(null);
    launcherRequest.onreadystatechange = launcherFunction;

    function launcherFunction()
    {
        if(launcherRequest.readyState == 4 && launcherRequest.status == 200)
        {
            //**************** PAGE LOAD AFTER GETTING DATA */
            //GRAB JSON STRING
            var lRequest = launcherRequest.responseText;

            //CONVERT TO JS OBJECT
            var launcherObject = JSON.parse(lRequest);
            var launcher = launcherObject.launches;
        
        
            // SET VARIABLES FOR HEAD AND LIST IDS
            var l1 = document.getElementById('launch1');
            var l2 = document.getElementById('launch2');
            var l3 = document.getElementById('launch3');
            var l4 = document.getElementById('launch4');
            var l5 = document.getElementById('launch5');

            l1.innerHTML = launcher[0].net + " -- " + launcher[0].name;
            l2.innerHTML = launcher[1].net + " -- " + launcher[1].name;
            l3.innerHTML = launcher[2].net + " -- " + launcher[2].name;
            l4.innerHTML = launcher[3].net + " -- " + launcher[3].name;
            l5.innerHTML = launcher[4].net + " -- " + launcher[4].name;
        }
    }
}
//**************** LAUNCHERONE LAUNCH FUNCTION (END) */




//**************** ARIANE FUNCTION (START) */
function arianeLaunch()
{
    var arianeRequest = new XMLHttpRequest();
    arianeRequest.open("get","https://launchlibrary.net/1.4/launch?name=ariane&next=5");
    arianeRequest.send(null);
    arianeRequest.onreadystatechange = arianeFunction;

    function arianeFunction()
    {
        if(arianeRequest.readyState == 4 && arianeRequest.status == 200)
        {
            //**************** PAGE LOAD AFTER GETTING DATA */
            //GRAB JSON STRING
            var aRequest = arianeRequest.responseText;

            //CONVERT TO JS OBJECT
            var arianeObject = JSON.parse(aRequest);
            var ariane = arianeObject.launches;
        
        
            // SET VARIABLES FOR HEAD AND LIST IDS
            var l1 = document.getElementById('launch1');
            var l2 = document.getElementById('launch2');
            var l3 = document.getElementById('launch3');
            var l4 = document.getElementById('launch4');
            var l5 = document.getElementById('launch5');

            l1.innerHTML = ariane[0].net + " -- " + ariane[0].name;
            l2.innerHTML = ariane[1].net + " -- " + ariane[1].name;
            l3.innerHTML = ariane[2].net + " -- " + ariane[2].name;
            l4.innerHTML = ariane[3].net + " -- " + ariane[3].name;
            l5.innerHTML = ariane[4].net + " -- " + ariane[4].name;
        }
    }
}
//**************** ARIANE LAUNCH FUNCTION (END) */
       
