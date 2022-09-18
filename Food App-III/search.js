async function displaymeal(x){
    try{
        var url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;
        let res=await fetch(url);
        let data=await res.json();
       
        return data.meals;
    }catch(err){
        console.log(err);
    }
}
let container=document.getElementById("results")
function append(data){
    console.log(data)
    container.innerHTML=null;
    data.forEach(ele => {
        let box=document.createElement('div');

        let img1=document.createElement('img');
        img1.setAttribute('class','class1')

        img1.src=ele.strMealThumb;


        let p=document.createElement('p');
        let x=p.innerText=ele.strMeal;
        console.log(x)

        box.append(img1,p);

        container.append(box);

    });
}
export{displaymeal,append}