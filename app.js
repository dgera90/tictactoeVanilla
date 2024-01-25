let table      = document.createElement('table'),
    tbody      = document.createElement('tbody'),
    h1         = document.createElement('h1'),
    tr         = document.createElement('tr'),
    td         = document.createElement('td'),
    over       = false, 
    result     = "Gratulálok, nyertél!",
    tdCounter  = 0,
    isCircle   = true,
    isWinner   = false,
    tilesCount = []; 

h1.innerText="Amőba";
document.body.append(h1,table);
table.append(tbody);



for (let i=0; i < 3; i++) { 
    let tr = document.createElement('tr'); 
    tbody.append(tr);

    for (let j=0; j < 3; j++) {  
        let td = document.createElement('td');
        td.addEventListener('click', clicked);
        tr.append(td);
        td.setAttribute("id", tdCounter+1);
        tdCounter++;        
    }
}
    
function clicked () {
    if (isCircle){
        this.style.color ="red";
        this.innerText="O"
        isCircle=false;
        this.removeEventListener('click', clicked);
        tilesCount.push(this);
        checkWinner();
        noMoreTiles();
    } else if (!isCircle) {
        this.style.color ="blue";
        this.innerText="X"
        isCircle=true;
        this.removeEventListener('click', clicked);
        tilesCount.push(this);
            checkWinner()
        
        noMoreTiles();
    }
}

function checkWinner () {
    setTimeout(() => {
        if (document.getElementById('1').innerText!=''
            && document.getElementById('1').innerText==document.getElementById('2').innerText 
            && document.getElementById('1').innerText == document.getElementById('3').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('4').innerText!=''
            && document.getElementById('4').innerText==document.getElementById('5').innerText 
            && document.getElementById('4').innerText == document.getElementById('6').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('7').innerText!='' 
            && document.getElementById('7').innerText==document.getElementById('8').innerText 
            && document.getElementById('7').innerText == document.getElementById('9').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('1').innerText!=''
            && document.getElementById('1').innerText==document.getElementById('5').innerText 
            && document.getElementById('1').innerText == document.getElementById('9').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('3').innerText!='' 
            && document.getElementById('3').innerText==document.getElementById('5').innerText 
            && document.getElementById('3').innerText == document.getElementById('7').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('2').innerText!='' 
            && document.getElementById('2').innerText==document.getElementById('5').innerText 
            && document.getElementById('2').innerText == document.getElementById('8').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('1').innerText!='' 
            && document.getElementById('1').innerText==document.getElementById('4').innerText 
            && document.getElementById('1').innerText == document.getElementById('7').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } else if (document.getElementById('3').innerText!='' 
            && document.getElementById('3').innerText==document.getElementById('6').innerText 
            && document.getElementById('3').innerText == document.getElementById('9').innerText){
            isWinner=true;
            alert(result);
            location.reload();
        } 
    },100)
}

function noMoreTiles() {
    setTimeout(() => {
        if(!isWinner){
            if(tilesCount.length==9){
                over = true;
                alert("Sajnálom, vége!");
                location.reload();
            }
        }
    },100)
}