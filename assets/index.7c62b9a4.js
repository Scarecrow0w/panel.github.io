let t=document.querySelector("#menuBtn"),e=document.querySelector(".sidebar"),l=document.querySelector("main");t.onclick=()=>{window.innerWidth>=1440?(e.classList.toggle("xlg:translate-x-0"),l.classList.toggle("xlg:ml-72")):(e.classList.toggle("-translate-x-full"),window.innerWidth>=640&&window.innerWidth<1440&&t.classList.toggle("ml-72"),window.innerWidth<640&&(t.classList.toggle("fixed"),t.classList.toggle("z-10"),t.classList.toggle("right-5"),t.classList.toggle("open")))};
