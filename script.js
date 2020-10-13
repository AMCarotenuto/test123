function validateForm() {
  var x = document.forms["form"]["Name"].value;
  var y = document.forms["form"]["Message"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false; 
  }
  if (y == "") {
  	alert("Message must have at least 1 character");
  	return false;
  }
}