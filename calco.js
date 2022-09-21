const btns=document.querySelectorAll('.btn');
const result=document.getElementById('result');
const egal=document.getElementById('equal');
btns.forEach(
    (bt)=>{
        bt.addEventListener('click', 
        (e)=>{
           result.textContent+= e.target.id;
        })
    })

    equal.addEventListener('click', 
    (e)=>{
        try{
            result.style.color='black'
       result.textContent+=   `= ${eval(result.textContent)}`
        }
        catch{
            result.style.color='red'
            result.textContent=   `Error`
        }
    })
    clear.addEventListener('click', 
    (e)=>{
       result.textContent= '' 
    })