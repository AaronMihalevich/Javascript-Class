// Aaron Mihalevich
// Rocket Launch Project
// CIS-131 10/19/2019

//INFOMATION NEEDED
//HEADER: NEXT LAUNCH DATE(.net)
//LIST: LAUNCH DATE AND TIME(.net), LAUNCH NAME(.name)
//LAUNCH TYPE: (.lsp) FALCON = 121, LAUNCHERONE = 199, ARIANE = 115

//**************** GETS DATA FROM SITE */
//**************** GETS DATA FROM SITE */
//**************** GETS DATA FROM SITE */


var httpRequest = new XMLHttpRequest();
httpRequest.open("get","https://launchlibrary.net/1.4/launch?next=107");
httpRequest.send(null);
httpRequest.onreadystatechange = launchFunction;


function launchFunction()
{
    if(httpRequest.readyState == 4 && httpRequest.status == 200)
    {
        //**************** PAGE LOAD AFTER GETTING DATA */
        //GRAB JSON STRING
        var request = httpRequest.responseText;

        //CONVERT TO JS OBJECT
        var launchObject = JSON.parse(request);
        var launch = launchObject.launches;

        console.log(launch)
        
       // SET VARIABLES FOR HEAD AND LIST IDS
       var headDate = document.getElementById('date');
       var ul = document.getElementById('list');

       
       headDate.innerHTML = "<strong>Next launch: </strong>" + launchObject.launches[0].net
        for (var i=0; i < 5; i++)
        {
            // PUT FIRST 5 LAUNCHES INTO HEAD AND LIST   
            ul.innerHTML += `<li>${(i+1) + " - " + launchObject.launches[i].net + " " + launchObject.launches[i].name}</li>`
     
        }

        //**************** LAUNCH TYPE SECTION */
     

        // for (var p=0; p < launch.length; p++)
        // {
        //     var launchID = launch[p];
            
        //     document.getElementById('falcon').addEventListener('click', falconLaunch());

        //     function falconLaunch()
        //     {
        //         alert("working");
        //         // if (launchID.lsp == 121)
        //         // {
        //         //     for (var f = 0; f < 5; f++)
        //         //     {
        //         //         ul.innerHTML += `<li>${(i+1) + " - " + launch[f].net + " " + launch[f].name}</li>`
        //         //     }
                
        //         // // console.log(launchID)
        //         // // console.log(launchID.name)
        //         // }
        //     }
            
            
        //     // var falconLaunch = [];
        //     // var launcheroneLaunch = [];
        //     // var arianeLaunch = [];

        //     // if (launch[p].lsp == 121)
        //     // {
        //     //    //console.log(launch[p])
        //     // }

        //     // if (launch[p].lsp == 199)
        //     // {
        //     //    console.log(launch[p])
        //     // }

        //     // if (launch[p].lsp == 115)
        //     // {
        //     //    //console.log(launch[p])
        //     // }

        //     // console.log(falconLaunch[0])

           

            
        // }

    



    }
}