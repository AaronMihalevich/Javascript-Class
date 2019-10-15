// aaron mihalevich
// CIS-131 10/14/19
// Addressbook Assignment



//************* user function */
function user(fName, lName, phone, email, link, img)
{
    this.firstName = fName;
    this.lastName = lName;
    this.phoneNum = phone;
    this.emailAdd = email;
    this.theLink = link;
    this.theImg = img;
}


//*********** users */

scout = new user("The", "Scout", "1-555-557-2688", "thescout@tf2.com", "youtu.be/geNMz0J9TEQ", "scout.png");
soldier = new user("The", "Soldier", "1-555-765-3437", "thesoldier@tf2.com", "youtu.be/h42d0WHRSck", "soldier.png");
demo = new user("The", "Demoman", "1-555-336-6626", "thedemoman@tf2.com", "youtu.be/han3AfjH210", "demo.png");
spy = new user("The", "Spy", "1-555-555-5779", "thespy@tf2.com", "youtu.be/OR4N5OhcY9s", "spy.png");
medic = new user("The", "Medic", "1-555-556-3342", "themedic@tf2.com", "youtu.be/36lSzUMBJnc", "medic.png");
pyro = new user("The", "Pyro", "1-555-555-7976", "thepyro@tf2.com","youtu.be/WUhOnX8qt3I", "pyro.png")
sniper = new user("The", "Sniper", "1-555-576-4737", "thesniper@tf2.com","youtu.be/9NZDwZbyDus", "sniper.png")
engi = new user("The", "Engineer", "1-553-644-6337", "theengineer@tf2.com","youtu.be/SNgNBsCI4EA", "engi.png")
heavy = new user("The", "Heavy", "1-555-574-3289", "theheavy@tf2.com","youtu.be/jHgZh4GV9G0", "heavy.png")


//*********** users array */

var userAry = [scout, soldier, demo, spy, medic, pyro, sniper, engi, heavy]



//********************* user list display */
var myList = ""

for (var i=0; i < userAry.length; i++)
{
    myList += `<li onclick='userDisplay(this.id)'id=${i}>${userAry[i].firstName} ${userAry[i].lastName}</li>`
}

document.querySelector('ul').innerHTML = myList

//********************* user info (on-click) display */

function userDisplay(myUser)
{
    document.getElementById('name').innerHTML = userAry[myUser].firstName + " " + userAry[myUser].lastName;
    document.getElementById('num').innerHTML = userAry[myUser].phoneNum
    document.getElementById('email').innerHTML = userAry[myUser].emailAdd
    document.getElementById('link').href = "https://" + userAry[myUser].theLink
    document.getElementById('img').src = userAry[myUser].theImg
    
}

//********************* user input (form) settings*/
document.getElementById('myClick').addEventListener('click', function()
{
    var userFName = document.theForm.fName.value;
    var userLName = document.theForm.lName.value;
    var userNum = document.theForm.phone.value;
    var userEmail = document.theForm.email.value;
    var userLink = document.theForm.link.value;
    var userImg = "newUser.png"

    newUser = new user(userFName, userLName, userNum, userEmail, userLink, userImg)
    userAry.push(newUser);
    var myList = ""

    for (var i=0; i < userAry.length; i++)
    {
        myList += `<li onclick='userDisplay(this.id)'id=${i}>${userAry[i].firstName} ${userAry[i].lastName}</li>`
    }

    document.querySelector('ul').innerHTML = myList
    console.log(userAry);
})




