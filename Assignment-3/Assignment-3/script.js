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
function rowHighLight(row) {

  var submitButton = document.getElementById('button');

  if (document.getElementById(row).style.backgroundColor == 'yellow') {
    document.getElementById(row).style.backgroundColor = '';
    selectcount--;
  }
  else {
    document.getElementById(row).style.backgroundColor = 'yellow';
    selectcount++
  }

  if (selectcount > 0) {


    submitButton.style.backgroundColor = 'orange';
    submitButton.disabled = false;
  }
  else {

    submitButton.style.backgroundColor = 'grey';
    submitButton.disabled = true;
  }

}

const table = document.getElementById('myTable"');
const column = table.getElementsByTagName('col')[col_no];
if (column) {
  column.style.visibility = do_show ? "" : "collapse";
}


