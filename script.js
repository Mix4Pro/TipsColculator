let inp_large = document.getElementsByClassName('inp-large')
let btn_tips = document.getElementsByClassName('btn-tips')
let inp_custom = document.getElementById('custom')
let btn_reset = document.getElementById('btn-reset')
let h1_tip_amount = document.getElementById('h1-tip-amount')
let h1_total_amount = document.getElementById('h1-total-amount')
let arr_inp_large = [...inp_large]
let arr_btn_tips = [...btn_tips]
let currentTip;
let final_tip;
let total_amount;

let colculate = (arr_item_1 , arr_item_2 , prop_currentTip) =>{
    if(arr_item_1 == 0 || arr_item_2 == 0 || typeof(prop_currentTip) == undefined){
        console.log(typeof(prop_currentTip))
        h1_tip_amount.innerHTML = `$0`
        h1_total_amount.innerHTML = `$0`
    }else{
        console.log(+arr_item_1 , +arr_item_2 , prop_currentTip)
        final_tip = Math.ceil(((arr_item_1 / 100) * prop_currentTip)/arr_item_2)
        total_amount = Math.ceil((arr_item_1 / arr_item_2) + final_tip)
        console.log(final_tip , total_amount)
        h1_tip_amount.innerHTML = `$${final_tip}`
        h1_total_amount.innerHTML = `$${total_amount}`
    }
}


arr_inp_large.forEach((val , i)=>{
    val.addEventListener('input', ()=>{
        if(val.value <= 0){
            val.parentElement.setAttribute('data-error' , `Can't be zero`)
        }else{
            val.parentElement.removeAttribute('data-error')
            console.log(val.value)
            arr_btn_tips.forEach((val)=>{
                if(val.type == 'number'){
                    console.log(val)
                    val.addEventListener('input',()=>{
                        currentTip = +val.value
                    colculate(+arr_inp_large[0].value, +arr_inp_large[1].value, currentTip)

                    }) 
                    colculate(+arr_inp_large[0].value, +arr_inp_large[1].value, currentTip)
                }else{
                    val.addEventListener('click',()=>{
                        inp_custom.value = ''
                        currentTip = +val.value
                        colculate(+arr_inp_large[0].value, +arr_inp_large[1].value, currentTip)

                    })
                    colculate(+arr_inp_large[0].value, +arr_inp_large[1].value, currentTip)
                }
            })
        }
    })
})

btn_reset.addEventListener('click',()=>{
    arr_inp_large.forEach((val)=>{
        val.value = ''
        inp_custom.value = ''
        val.parentElement.removeAttribute('data-error')
        h1_tip_amount.innerHTML = `$0`
        h1_total_amount.innerHTML = `$0`
    })
})

