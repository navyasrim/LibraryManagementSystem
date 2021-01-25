class Library{
 constructor(Bookname,Author,LBranch,Genre,PCompany){
    this.Bookname = Bookname;
 this.Author = Author;
      this.LBranch = LBranch;
     this.Genre = Genre;
      this.PCompany = PCompany;
  }
}
  


function Insert(){

    Bookname = document.getElementById("txtBookname").value;
    Author = document.getElementById("txtAuthor").value;
     LBranch= document.getElementById("txtBranch").value;
     Genre = document.getElementById("txtGenre").value;
    PCompany = document.getElementById("txtPublish").value;
    let msg = document.getElementById('message');
    if (Bookname != "" )
    {
// creates new row  
    //binding new row to the table
   tble = document.getElementById("tableBody");
   r = document.createElement("tr");
   //create cells for data
   Col = document.createElement("td");
   Col1 = document.createElement("td");
   Col2 = document.createElement("td");
   Col3 = document.createElement("td");
   Col4 = document.createElement("td");
    //Assigning data to cells
   Col.appendChild(document.createTextNode(Bookname));
   Col1.appendChild(document.createTextNode(Author));
   Col2.appendChild(document.createTextNode(LBranch));
   Col3.appendChild(document.createTextNode(Genre));
   Col4.appendChild(document.createTextNode(PCompany));
  // adding cells to the row in the  table
   r.appendChild(Col);
   r.appendChild(Col1);
   r.appendChild(Col2);
   r.appendChild(Col3);
   r.appendChild(Col4);
   tble.appendChild(r); 
     msg.innerHTML = "Details added successfully";
    }
    else
    {
        msg.innerHTML = "Enter Book Name";
    }
    window.addEventListener("click",Insert.handleSaveButtonClickEvent);
}

function Clear(){

    document.getElementById("txtBookname").value = "";
    document.getElementById("txtAuthor").value = "";
    document.getElementById("txtBranch").value = "";
    document.getElementById("txtGenre").value = "";                    
     document.getElementById("txtPublish").value = "";
     document.getElementById("message").innerText = "";
     document.getElementById("mytable").innerHTML = "";
         

}


//  save test data for displaying

window.onload = function(){

var arrObj = [{"BookName":"The awakening", "Author":"Roberts", "Branch":"East Irving","Genre":"story","PublishingCompany":"Press"},
 {"BookName":"Hush Hush", "Author":"Woods", "Branch":"West Irving","Genre":"novel","PublishingCompany":"G.P.Son's"}]
 var objLength = arrObj.length;
var myvar = '<table>'+
'<tr>'+
'<th>BookName</th>'+
'<th>Author</th>'+
'<th>Branch</th>'+
'<th>Genre</th>'+
'<th>PublishingCompany</th>'+
'</tr>';

 for(var i = 0; i < objLength; i++){
myvar += '<tr>'+
'<td>'+arrObj[i].BookName+'</td>'+
'<td>'+arrObj[i].Author+'</tD>'+
'<td>'+arrObj[i].Branch+'</th>'+
'<td>'+arrObj[i].Genre+'</th>'+
'<td>'+arrObj[i].PublishingCompany+'</th>'+
'</tr>'     
 }

 myvar += '</table>';
console.log(myvar);
 document.getElementById('myTable').innerHTML = myvar;
 
}






