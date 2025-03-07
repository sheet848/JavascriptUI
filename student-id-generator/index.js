/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of Student name from form input and put it in card

    const nameEle = document.getElementById('name').value;
    document.getElementById('cardName').innerHTML = nameEle;

    // Get value of college name from form input 

    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    // Get value of location name from form input 
    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;
    
    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
}