let addedPersons = 1;
function addPerson(){
  //Find the DIV we want to add things too.
  var container = document.getElementById("newPerson");

  //Increase the addedPersons value by 1 for each click
  addedPersons++;
  var div = document.createElement("div");
  div.setAttribute("class", "form-group");
  container.appendChild(div);

  var netlifyInput = document.createElement("input");
  netlifyInput.setAttribute("type", "hidden");
  netlifyInput.setAttribute("name", "form-name");
  netlifyInput.setAttribute("value", "rsvp");
  container.appendChild(div);

  <input type="hidden" name="form-name" value="rsvp" />

  var label = document.createElement("label");
  label.htmlFor = "name" + addedPersons;
  label.innerHTML = "Full Name " + addedPersons;
  div.appendChild(label);

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.id = "name" + addedPersons;
  input.setAttribute("name", "Full Name " + addedPersons);
  div.appendChild(input);

  console.log(addedPersons);
}
