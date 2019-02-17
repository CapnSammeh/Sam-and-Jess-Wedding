let addedPersons = 1;
function addPerson(){
    //Increase the addedPersons value by 1 for each click
  addedPersons++;

  var element = document.getElementById("name" + addedPersons);
  element.setAttribute("type", "visible");

  var label = document.getElementById("name" + addedPersons + "Label");
  label.removeAttribute("hidden");

}
