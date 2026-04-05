let data = JSON.parse(localStorage.getItem("orders")||[]);

let box = document.getElementById("orders");

data.forEach((o,i)=>{

box.innerHTML += `
<div class="card">
<b>${o.name}</b> → ${o.partner}<br>
${o.story}<br>
${o.pack}<br>
${o.date}<br>
<button onclick="del(${i})">Delete</button>
</div>
`;

});

function del(i){
data.splice(i,1);
localStorage.setItem("orders",JSON.stringify(data));
location.reload();
}