let idEl = document.getElementById('id-div');
const nameEl = document.getElementById('name');
const professionEl = document.getElementById('profession');
const emailEL = document.getElementById('email');
const inpIdEl = document.getElementById('inp-id')
const phoneEl = document.getElementById('phone')
const joinDateEl = document.getElementById('join-date');
const imageEl = document.getElementById('image');


let user = {
    username: "",
    profession: "",
    id: "",
    email: "",
    phone: "",
    joiningDate: "",
    expireDate: "",
    img: ""

}


function dateToStandardFormat(newDate){
   

    return `${String(newDate.getDate()).padStart(2, '0')}/${String(newDate.getMonth()+1).padStart(2, '0')}/${newDate.getFullYear()}`
    
}

imageEl.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            user.img = e.target.result;            
        }
        reader.readAsDataURL(file);
    }
});


function showIdCard(){


    let newDate = new Date(joinDateEl.value);
    
    
    
    user.username = nameEl.value;
    user.profession = professionEl.value;
    user.id = inpIdEl.value;
    user.email = emailEL.value;
    user.phone = phoneEl.value;

    



    user.joiningDate = dateToStandardFormat(newDate);
    newDate.setFullYear(newDate.getFullYear()+3)
    user.expireDate = dateToStandardFormat(newDate);

    for (const key in user) {
       if(user[key] == ""){
        alert("plz fill all details");
       return;
       }
    }
    

    setDeatilsInCard();
    
}


function setDeatilsInCard(){
    
    idEl.innerHTML = `
    
             
            <div id="front" class="id">
                <div class="w-fit h-fit border-black border-2 rounded-[100%] p-1.2">
                    <img src="${user.img}" alt="" class="w-40 h-40 rounded-[100%] border-white border-4">
                </div>

                <div class="flex flex-col items-center">
                    <h2 class="text-[1.8rem] font-extrabold text-red-400">${user.username}</h2>
                    <h3 class="text-[1.5rem] font-bold text-green-500">${user.profession}</h3>
                </div>

                <div class="flex flex-col items-center">
                    <h3>ID: ${user.id}</h3>
                    <h3>Email: ${user.email}</h3>
                    <h3>Phone: ${user.phone}</h3>
                </div>

            </div>


            <div id="back" class="id">
                <h1 class="text-red-500 font-extrabold text-center text-3xl leading-[3rem]">TERMS AND CONDITIONS</h1>
                <p class="text-center text-xl text-orange-400 font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, dolores saepe? Aliquam porro adipisci rem.</p>
                <div class="flex flex-col gap-2">
                    <h2 class="font-extrabold">JOIN: ${user.joiningDate}</h2>
                    <h2 class="font-extrabold">EXPIRE: ${user.expireDate}</h2>
                </div>
            </div>
    `
}


document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault();
    showIdCard();
})


document.getElementById('reset').addEventListener('clcik', (e)=>{
    e.preventDefault();
    location.reload();
})