
let upper_header = document.querySelector('header-up-upper-info');

let btnToggle = document.getElementsByClassName("btn-toggle")[0];
let page_links = document.getElementsByClassName("pages")[0];

btnToggle.addEventListener('click',()=>{
    page_links.classList.toggle('active');
})


upper_header.textContent="Free Shipping? Absolutely!"
document.getElementsByClassName("header-up-upper-info").textContent = "This text is different!";