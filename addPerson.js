let addedPersons = 1;
function addPerson(){
  //Find the DIV we want to add things too.
  var container = document.getElementById("newPerson");

  //Increase the addedPersons value by 1 for each click
  addedPersons++;
  var div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("id", "newperson" + addedPersons);
  container.appendChild(div);

  var label = document.createElement("label");
  label.htmlFor = "name" + addedPersons;
  label.innerHTML = "Full Name " + addedPersons;
  div.appendChild(label);

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.id = "name" + addedPersons;
  div.appendChild(input);

  console.log(addedPersons);
}
