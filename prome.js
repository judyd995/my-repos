fetch("https://api.github.com/users/judyd995/repos").then((result)=>{

     let allrepos = result.json();
     console.log(allrepos);

     return allrepos;
})/*.then((repos)=>{
  console.log(`the number of repos is ${repos.length} `)
  return repos;
}
).then((result)=>{
  console.log(result[0].name);
  return result;
}).then((result)=>{

  let box  = document.createElement("div");
  let text = document.createElement("content");
box.appendChild(text);
document.body.appendChild(box);
text.innerHTML = result[0].url;
 return result;
})*/.then((result)=>{
let reposname = document.createElement("div");
let text1=document.createElement("p");
let link1 = document.createElement("a");

reposname.appendChild(text1);
reposname.appendChild(link1);
document.body.appendChild(reposname);
text1.innerHTML = `my git hub account`;
text1.classList.add("boxes");
link1.innerHTML = "judyd995";
link1.classList.add("linkclass");
link1.href="https://github.com/judyd995/"; 
link1.setAttribute('target','_blank');
link1.click();


return result;
}).then((repos)=>{
  for( let i = 0 ; i < repos.length ; i++){
    let reposname = document.createElement("div");
    let text1=document.createElement("p");
   
    reposname.appendChild(text1);
 
    document.body.appendChild(reposname);
    text1.innerHTML =  repos[i].name;
    reposname.classList.add("reposname");
    text1.classList.add("tex1repos");
    
    reposname.addEventListener("click",()=>{
      let link =document.createElement("a");
      reposname.appendChild(link);
     link.href= repos[i].html_url; 
     link.setAttribute('target','_blank');
     link.click();
    })
    
  }
  return repos;
}) 

