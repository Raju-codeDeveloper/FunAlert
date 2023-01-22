let errorMsg = document.getElementById("errorMsg");
let finalMsg = document.getElementById("final_error")
let bottomSec = document.querySelector(".bottom")
let [okBtn, yesBtn, noBtn, time] =[null,null,null,6]
// let okBtn;
let emojis = ["🥲","🤕","🥹"]
let emoj;
    
    
function showFirstMsg()
{
    errorMsg.textContent = "Hi ra mowa🫡... your system got Hacked!!"
    okBtn = document.createElement("button");
    okBtn.textContent = "ok"
    okBtn.setAttribute("class", "button")
    bottomSec.appendChild(okBtn);

    okBtn.addEventListener("click", ()=>
{
    showSecondMsg();
})
}

function showSecondMsg()
{   
    errorMsg.textContent = "nuv worry avvaku, mai huna!...Neeku okati cheppali mowa"
    okBtn.textContent = "Ok cheppu";
    okBtn.addEventListener("click", ()=>
    {
        showThirdMsg();
    })
}

function showThirdMsg()
{   
    bottomSec.removeChild(okBtn)

    errorMsg.textContent = "I love you mowa 🫣"
    // yes btn
    yesBtn=document.createElement("button")
    yesBtn.setAttribute("class","button")
    yesBtn.setAttribute("value", "yes")
    yesBtn.textContent = "Mee too 🤗 "
    bottomSec.appendChild(yesBtn)
    // no btn
    noBtn = document.createElement("button");
    noBtn.textContent ="pora kurra!"
    noBtn.setAttribute("class", "button")
    noBtn.setAttribute("value", "no")
    bottomSec.appendChild(noBtn);

//    new message
yesBtn.addEventListener("click", ()=>
{       
    if(time==6)
    {
    bottomSec.removeChild(yesBtn)
    bottomSec.removeChild(noBtn)
    // bottomSec.removeChild(finalMsg)
errorMsg.textContent = "sare Mari oka Rs:1000/- kottu party chesukundam 😉"
    }

})

noBtn.addEventListener("click", ()=>
{
    showL1Msg();
   
})
}

function showL1Msg()
{   
    time--
    yesBtn.textContent = "sare le yedaku";
    noBtn.textContent = "pora"
    // pull random emojifrom the emoji array
     emoj = parseInt(Math.random()*3);
    errorMsg.textContent = "please! 😿 ";
    finalMsg.textContent = `inko ${time} sarle  aduguta`
    
        yesBtn.onclick=()=>
        {   if(time<5)
            {
            bottomSec.removeChild(yesBtn)
            bottomSec.removeChild(noBtn)
            errorMsg.textContent = " donga mari istam ledantave 😜,  "
            finalMsg.textContent = "sare oka Rs: 2000/- vunte phonePay...."
            }
        }
            
           noBtn.onclick=()=>
           {
            
           if(time>0)

            {
                
                if(time==1)
                {
                    errorMsg.textContent = "please 🫠 ";
                    finalMsg.textContent = `final ga adugutunna!!`
                }
                else{
                errorMsg.textContent = "please " + emojis[emoj];
                finalMsg.textContent = `inko ${time} sarle  aduguta`
                noBtn.textContent = "pora!!"
                }
                
            }

           
            else if(time<1)
            {   
                bottomSec.removeChild(yesBtn)
                bottomSec.removeChild(noBtn)
                errorMsg.textContent = "preminche manasu lenappudu ❤️...yenduku mowa neeku antha andham "
                finalMsg.textContent = "sachipoo 😎"

            }
            
            else{
                console.log("okoksvjk");
            }
            
           }

 
        }

