// Aaron Mihalevich
// Mid Term Race Game
// CIS-131 09/24/2019


// **********************the race functionality
document.getElementById('greenLight').addEventListener('click', theRace);
document.getElementById('start').addEventListener('click', theRace);

function theRace()
{

    // change lights
    document.getElementById('greenLight').src = 'green-light.png';
    document.getElementById('redLight').src = 'light-off.png';

    // purple ship vars
    var purple = document.getElementById('purple');
    var pPosition = 0;

    // teal ship vars
    var teal = document.getElementById('teal');
    var tPosition = 0;

    // display race results
    var results = document.getElementById('results')
    var winner = document.getElementById('winnerImg')
    //start timer
    var timer = setInterval(random, 30);

    function random()
    {
        var ranNumPurp = Math.floor((Math.random() * 10) + 1);
        var ranNumTeal = Math.floor((Math.random() * 10) + 1);

        pPosition += ranNumPurp;
        tPosition += ranNumTeal;

        
        if((pPosition >= 1200) || (tPosition >= 1200))
        {
            clearInterval(timer);
            document.getElementById('greenLight').src = 'light-off.png';
            document.getElementById('redLight').src = 'red-light.png';

            if(pPosition > tPosition)
            {
                results.innerHTML = "Purple Wins!";
                results.style.color = "#8b5c8d";
                winner.src = "purple-ship.png"
            }
            else
            {
                results.innerHTML = "Teal Wins!";
                results.style.color = "#009093";
                winner.src = "teal-ship.png"
            }
        }
        else
        {
            purple.style.left = pPosition + "px";
            teal.style.left = tPosition + "px";
        }

    
        console.log(pPosition);
        console.log(tPosition);
    }
};

document.getElementById('winnerImg').addEventListener('click', function()
{
    document.getElementById('winnerImg').src = "";
    document.getElementById('results').innerHTML = "";

    document.getElementById('purple').style.left = "20px";
    document.getElementById('teal').style.left = "20px";
});