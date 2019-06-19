var indice = 1, table = document.getElementById("tab"), data,next,prec;

const people = async function (id) {
    try {
        let response = await fetch('https://swapi.co/api/people/?format=json&page=' + id)
        if (response.ok) {
            data = await response.json()
            var col = ["name", "gender", "height", "mass", "hair_color", "eye_color", "skin_color", "homeworld",];
            //var colinclus="name";
            table = document.getElementById("tab");
            var size = table.rows.size;

            var tr = table.insertRow(-1);
            next=data.next;
            prec=data.previous;
            //prec=data.
            // for (var i = 0; i < data.results.length; i++) {
            //     for (var key in data.results[i]) {
            //         if (col.indexOf(key) === -1 & colinclus.includes(key)) {
            //             col.push(key);
            //             console.log(table)
            //         }
            //     }
            // }

            //    console.log(table)
            // cree table dynamique.


            // CRee  HTML table.
            // TABLE ROW.

            /*for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }*/


            // ajouter JSOn on Rows.
            for (var i = 0; i < data.results.length; i++) {
                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data.results[i][col[j]];
                    
                }
            }

            // ajouter Json a la div data .
            var divContainer = document.getElementById("data");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            console.log(data);
            setTimeout(stopAnimation, 1000);
        }
        else {
            console.log('Reteur du serveur ', response.status)
        }
    } catch (e) {
        console.log(e)
    }
    
    
    window.scrollTo(0, document.body.scrollHeight);
    testNextPrecedent();

    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++)
    {
        rows[i].onclick = function() {
           ModalTAble(this.getElementsByTagName("td")[7].textContent);
        };
    }


}
function suivant() {
    indice++;
    people(indice);
    testNextPrecedent();
}
function precedent() {
    suprimerRows();
    indice--;
    testNextPrecedent();
    document.getElementById("next").style.display="";
    //  people(indice);
    // window.scrollTo(0,document.body.scrollHeight);
}
//supprimer les colonne
async function suprimerRows() {

    var size = table.rows.length, i;
    for (i = size - 1; i > size - 12; i--) {
        table.deleteRow(i);
    }
}
//testerNextPrevios   '
function testNextPrecedent(){
    var nextbuton=document.getElementById("next");
    var precedentButon=document.getElementById("precedent");
    if(next=== null){
      nextbuton.style.display="none";
    }
    else {
        nextbuton.style.display="";
    }

    if(prec==null || indice===1){
        precedentButon.style.display="none";
    }else{
        precedentButon.style.display="";
    }
}
function startANim() {
    var div = document.getElementById("load");
    div.style.display = "block";
}
function stopAnimation() {
    var div = document.getElementById("load");
    div.style.display = "none";
}
//filtrer tableau

function filterA() {
    var input, table, tr, td, i, txtValue;
    //input = document.getElementById("Input");
    
    table = document.getElementById("tab");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.includes("A") || txtValue.includes("a") ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function ResetFilter(){
    var  table, tr, td, i;
    //input = document.getElementById("Input");
    filter = "A";
    table = document.getElementById("tab");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) 
             tr[i].style.display = "";   
}
function filterHieght_mass(indice,value) {
    var input, filter, table, tr, td, i, txtValue;
    //input = document.getElementById("Input");
    filter = "A";
    table = document.getElementById("tab");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[indice];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue > value) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    }
//modele table 
function ModalTAble(rows){
   console.log(rows);
   startANim();
   var modal = document.getElementById("myModal");
   var span = document.getElementsByClassName("close")[0];
   modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
        modalsupromerRows();
        stopAnimation();
   }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalsupromerRows();
        stopAnimation();
    }
    }

    planet(rows);
}

people(1);
//suppreimerRowsmodal
function modalsupromerRows(){
    let tableM = document.getElementById("tabPalent");
    tr = tableM.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) 
             tr[i].style.display = "none";  
} 
//.table planet
const planet = async function (url) {
   
    try {
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            var col = ["name","rotation_period","orbital_period","diameter","climate","gravity","terrain"];
            //var colinclus="name";
            let table = document.getElementById("tabPalent");
            var tr = table.insertRow(-1);
            //var arrrysDAta =Object.keys(data).map(i => data[i]); 
            //console.log(arrrysDAta.length);
            // ajouter JSOn on Rows.
            for (var i=0 ;i<1;i++) {
                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = data[col[j]];
                    
                }
            }
           
            // ajouter Json a la div data .
            //var divContainer = document.getElementById("modal");
            //divContainer.innerHTML="";
            //divContainer.appendChild(table);
        }
        else {
            console.log('Reteur du serveur ', response.status)
        }
    } catch (e) {
        console.log(e)
    }


}