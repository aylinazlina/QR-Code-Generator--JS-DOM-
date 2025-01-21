document.addEventListener("DOMContentLoaded",()=>{

    let inputField=document.querySelector(".inputField");
    let QrImage=document.querySelector(".QrImage");
    let QrGeneratorButton=document.querySelector(".QrGeneratorButton");
    let title=document.querySelector(".title")

    QrGeneratorButton.addEventListener("click",()=>{
    
        if(inputField.value === ""){

            title.innerHTML ="please enter a name !!"
            title.style.color ="red"
            QrImage.style.transform="scale(0)"

        }

        else{

            QrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputField.value}`
            QrImage.style.transform ='scale(1)'
            title.innerHTML="Your Qr Code is below !!"
            title.style.color="green"
        

        }


        
    })
})