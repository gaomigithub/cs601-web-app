function validateForm() {
  // get values based on id
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const facilitator = document.getElementById("facilitator").value;
  const myRegex = /[a-zA-Z]+/g; // Regular expression from A-Z and a-z

  if (firstName.length < 2 || lastName.length < 2) {
    // test for minimum length of input, double check with what has been set in HTML
    alert("Sorry, first/last name must contain at least two (2) characters.");
    return false;
  } else if (
    // test for alphabet, double check with what has been set in HTML
    firstName.match(myRegex) == null ||
    lastName.match(myRegex) == null
  ) {
    alert("Alphabet only.");
    return false;
  } else if (
    // three facilitators I saw from the BB
    facilitator !== "Josh" &&
    facilitator !== "Chris" &&
    facilitator !== "Fazil"
  ) {
    alert(
      "Please type valid first name of active facilitators for the course during this semester."
    );
    return false;
  } else {
    return true;
  }
}
