let odamlar=[]

fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => {
            user(data);
            odamlar=data;
      })



const body=document.getElementsByTagName("body")[0]
const ota=document.getElementById("ota")
const darkbtn=document.getElementById("dark-btn")
const sun=document.getElementById("sun")
const moon=document.getElementById("moon")
const input=document.getElementById("input")



function user(malumot){
      ota.innerHTML=""
      malumot.map(odam =>{
            const div=document.createElement("div");
            div.classList.add("card")
            div.innerHTML=`
            <h1>${odam.name}</h1>
            <img src="img/profil.webp" alt="" width="250px">
            <h3>📧 ${odam.email}</h3>
            <h3>📞 ${odam.phone}</h3>
            <h3>🏡 ${odam.address}</h3>
            `

            ota.appendChild(div);
      })
}


darkbtn.addEventListener("click",()=>{
      body.classList.toggle("dark-r");
      if(body.classList[0]=="dark-r"){
            sun.style.display="block"
            moon.style.display="none"
      }else{
            sun.style.display="none"
            moon.style.display="block"
      }
})

input.addEventListener("input", () => {


      const qidiruv = odamlar.filter(e =>
          e.name.toLowerCase().includes(input.value.toLowerCase()));
      user(qidiruv);
  })



