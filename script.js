import data from "./data.JSON" with {type :"json"}
import dataGRP from "./datagrps.JSON" with {type :"json"}
let container = document.createElement('div');
container.classList.add("container")
document.body.append(container)
let groups = [];
for (let i = 0; i < 6; i++) {
  let group = document.createElement('div')
  group.innerHTML = `<h1>Group ${i+1}</h1> `;
  group.classList.add('group')
  groups.push(group)
  container.append(group);
}
let i  = 1;
groups.forEach(g=>{
  let gc = document.createElement("div");
  gc.classList.add("groupLinks")
  for (let ind = 0; ind < dataGRP[i].length; ind++) {
    let p = document.createElement("p")
    p.innerHTML = `<a target="_blank"  href= ${dataGRP[i][ind]}>${dataGRP[i][ind]}</a>`;
    p.style ="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;";
    gc.appendChild(p)
  }
  g.appendChild(gc)
  let sl = document.createElement("div");
  sl.classList.add("secLinks")
  let j = (i-1)*6+1;
  
  for (let ind = 0; ind < 6; ind++) {
    let sec = document.createElement("div")
    console.log(j+ind);
    let keys = Object.keys(data[ind+j])
    let values = Object.values(data[ind+j]);
    for (let ix = 0; ix < 7; ix++) {
      if (values[ix]!="link") {
        console.log(keys[ix],values[ix]);
        if(sec.innerHTML == ""){
          sec.innerHTML = `sec ${j+ind}`
        }
        sec.innerHTML+=`<a href="${values[ix]}">${keys[ix]}</a>`;
        sl.appendChild(sec)
      }
    }
  }
  console.log("--");
  
  g.appendChild(sl)
  i++;
})
groups.forEach(grp =>{
  grp.addEventListener('click',e=>{
    groups.forEach(ingrp=>{
      ingrp.classList.remove("selected")
    })
    grp.classList.add("selected")
  })
})