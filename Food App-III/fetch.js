async function getData(url){
    let res= await fetch (url);

    let data =res.json();
    
    return data;
}

function append1(data,con){
    
data.forEach(ele => {

    let box=document.createElement('div');

    let img1=document.createElement('img');
    img1.setAttribute('class' ,'imgclass')
    img1.src=ele.strCategoryThumb


    let p=document.createElement('p');
    p.innerText=ele.strCategory

    box.append(img1,p)
    con.append(box);
    
});

}
export {getData,append1}