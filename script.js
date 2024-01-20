
const display = document.querySelector('#display')
const but = document.querySelector('#but');
var count = 0;
const img = document.createElement("img");

var j = "";

but.addEventListener("click" , (e)=>{
    photo.innerHTML = "";
const xml = new XMLHttpRequest();
xml.open('GET' , 'https://api.api-ninjas.com/v1/dadjokes?limit=1')
xml.setRequestHeader('x-API-Key' , 'EKrzZ2cleSlO3Yp2Ot6xOA==husPGehnHt0ND8Kq');
xml.send();
xml.onload = function(){
            if(xml.status === 200){
                const result = JSON.parse(xml.responseText);
                j = result[0].joke;
                display.innerText = j;

                setTimeout(image , 2000)
            }
}


})
function image(){
    const photo = document.querySelector('#photo')
    
    

    if(count == 0){
        count++;
    img.src = 'https://media1.tenor.com/images/75c046eb8d1882b642a7550eb6e68c06/tenor.gif?itemid=15281695'
}
else if(count == 1){
    count++;
    img.src = 'https://c.tenor.com/vnEx4rZWUEwAAAAM/lets-get-this-party-started-laugh.gif'
}
else if(count == 2){
    count++;
    img.src = 'https://media1.tenor.com/images/a5a217388e8545fc92ae64420362f005/tenor.gif?itemid=16107322'
}
else if(count == 3){
    count = 0;
    img.src = 'https://gifdb.com/images/high/cat-oh-yeah-q799koa7sefz3rjp.gif'
}
    photo.append(img);
}