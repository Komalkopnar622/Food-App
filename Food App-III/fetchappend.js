async function getData(url){
    let res= await fetch (url);

    let data =res.json();
    
    return data;
}

function append2(data,con){
    console.log(data)
data.forEach(ele => {

    let box=document.createElement('div');

    let img1=document.createElement('img');
    img1.setAttribute('class' ,'imgclass')
    img1.src=ele.strMealThumb


    
    

    let p=document.createElement('p');
    p.innerText=ele.idMeal

    let p1=document.createElement('p');
    p1.innerText=ele.strArea;

    let p2=document.createElement('p');
    p2.innerText=ele.strTags;

    let p3=document.createElement('p');
    p3.innerText=ele.strCategory

    box.append(img1,p,p1,p2,p3)

    con.append(box);
    
});

}
export {getData,append2}