//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function showHideRow(row) {

  debugger;
  if (document.getElementById(row).style.display == 'none') {
    document.getElementById(row).style.display = 'revert';
  }
  else {
    document.getElementById(row).style.display = 'none';
  }

}


var selectcount = 0;
var tableLength=Math.ceil(document.getElementById("myTable").rows.length/2);

function rowHighLight(row) {

  var submitButton = document.getElementById('button');
  var selectedRow = document.getElementById(row).rowIndex; 

  if (document.getElementById(row).style.backgroundColor == 'yellow') {
    document.getElementById(row).style.backgroundColor = '';
    selectcount--;
    document.getElementById(row).cells[8].innerHTML= "";
    document.getElementById(row).cells[9].innerHTML= "";
  }
  else {
    document.getElementById(row).style.backgroundColor = 'yellow';
    selectcount++
    document.getElementById("myTable").rows[selectedRow].cells[8].innerHTML=`<td><button id="deleteButton" onclick="deleteRow(this);">Delete</button></td>`;
    document.getElementById("myTable").rows[selectedRow].cells[9].innerHTML=`<td><button id="editButton" onclick="editRow();">Edit</button></td>`;
    //document.getElementsByClassName("colDelete").setAttribute("display","revert");
    
  }

  if (selectcount > 0) {


    submitButton.style.backgroundColor = 'orange';
    submitButton.style.borderColor = 'orange';
    submitButton.disabled = false;
  }
  else {

    submitButton.style.backgroundColor = 'grey';
    submitButton.style.borderColor = 'grey';
    submitButton.disabled = true;
  }

}

function addStudent(){

  try {

  var table = document.getElementById("myTable");
  var tableLength=Math.ceil(document.getElementById("myTable").rows.length/2);
  var row = table.insertRow(document.getElementById("myTable").rows.length);
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");

  //var rowno = tableLength-2;
  row.setAttribute("id","detailsRow"+tableLength)
  let td = document.createElement('td');
  //td.id = 'detailsRow'+123;
  td.innerHTML =  `<input type="checkbox" class="checkbox" onclick="rowHighLight('detailsRow`+tableLength+`');""/><br/><br/><img src="down.png" width="25px" onclick="showHideRow('hiderow`+tableLength+`');"/>`;
  
  row.appendChild(td); 
  row.insertCell(1).innerHTML="Student"+" "+tableLength;
  row.insertCell(2).innerHTML="Teacher"+" "+tableLength;
  row.insertCell(3).innerHTML="Approved";
  row.insertCell(4).innerHTML="Fall";
  row.insertCell(5).innerHTML="TA";
  row.insertCell(6).innerHTML=tableLength.toString()+(tableLength+1).toString()+(tableLength+2).toString()+(tableLength+3).toString()+(tableLength+4).toString();
  row.insertCell(7).innerHTML="100%";
  row.insertCell(8);
  row.insertCell(9);
 
  var newRow = table.insertRow(document.getElementById("myTable").rows.length);
  newRow.setAttribute("class","dropDownTextArea");
  newRow.setAttribute("id","hiderow"+tableLength);
  
  
  let tdData = document.createElement('td');
  tdData.setAttribute("colspan",8);
  tdData.innerHTML =  'Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number:<br/>Tuition Number:<br/>Comments:<br/><br/><br/>Award Status:<br/><br/><br/>'; 
  newRow.appendChild(tdData); 

  alert("Record Added successfully");

  } catch (error) {
    alert("Something went wrong!");
  }

}


function deleteRow(index){

 
  var selectedRow = index.parentNode.parentNode.rowIndex; 

  document.getElementById("myTable").deleteRow(selectedRow+1);
  document.getElementById("myTable").deleteRow(selectedRow); 

}

function editRow(){ 
  alert("Edit the Records");
}
// const table = document.getElementById('myTable"');
// const column = table.getElementsByTagName('col')[col_no];
// if (column) {
//   column.style.visibility = do_show ? "" : "collapse";
// }


