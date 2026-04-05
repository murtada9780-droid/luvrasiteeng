function openOrder(){
document.getElementById("orderModal").style.display="flex";
}

function closeOrder(){
document.getElementById("orderModal").style.display="none";
}

function loadPackages(){
let box = document.getElementById("pricing");
let select = document.getElementById("package");

CONFIG.packages.forEach(p=>{
box.innerHTML += `<div class="card">${p.name} - ${p.price}</div>`;
select.innerHTML += `<option>${p.name}</option>`;
});
}

function submitOrder(){

let order = {
name: name.value,
partner: partner.value,
story: story.value,
pack: package.value,
date: new Date().toLocaleString()
};

let orders = JSON.parse(localStorage.getItem("orders")||"[]");
orders.push(order);
localStorage.setItem("orders",JSON.stringify(orders));

let msg = `
New Order:
Name: ${order.name}
Partner: ${order.partner}
Story: ${order.story}
Package: ${order.pack}
`;

window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`);

alert("Order sent!");
closeOrder();
}

loadPackages();