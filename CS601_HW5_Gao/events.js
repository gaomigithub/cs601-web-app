window.onload = function () {
  var oTab = document.getElementById("antzone");
  var xmlhttp;
  document.getElementById("button").onclick = function () {
    makeRequest("my_college_degrees.json");
  };
  function makeRequest(url) {
    xmlhttp = new XMLHttpRequest();
    if (!xmlhttp) {
      alert("Exiting: Cannot create an XMLHTTP instance");
      return false;
    }
    xmlhttp.onreadystatechange = alertContents;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  //check for state if the request if it is DONE
  function alertContents() {
    if (xmlhttp.readyState === XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        //read JSON file and transfer to JS Object
        var data = JSON.parse(xmlhttp.responseText);

        var oTbody = oTab.tBodies[0];
        //for each key in JSON
        for (var index = 0; index < data.my_college_degrees.length; index++) {
          var oTr = document.createElement("tr");
          oTbody.appendChild(oTr);

          var oTd = document.createElement("td");
          oTd.innerHTML = data.my_college_degrees[index].college.school;
          oTr.appendChild(oTd);

          oTd = document.createElement("td");
          oTd.innerHTML = data.my_college_degrees[index].college.major;
          oTr.appendChild(oTd);

          oTd = document.createElement("td");
          oTd.innerHTML = data.my_college_degrees[index].college.type;
          oTr.appendChild(oTd);

          oTd = document.createElement("td");
          oTd.innerHTML = data.my_college_degrees[index].college.year;
          oTr.appendChild(oTd);
        }
      } else {
        //if AJAX call is unsuccessful
        alert("There was a problem with the request!");
      }
    }
  }
};
