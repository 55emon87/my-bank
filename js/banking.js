document.getElementById('deposite-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposite-input');
    const depositTotal = depositInput.value;
    const deposiParse = parseFloat(depositTotal);

    const depositAmount = document.getElementById('deposite-total');
    const depositInner = depositAmount.innerText;
    const depositParseIn = parseFloat(depositInner);

    const totalDeposit = deposiParse + depositParseIn;
    depositAmount.innerText = totalDeposit;
    depositInput.value = '';

    const balanceInput = document.getElementById('balance-total');
    const balanceInner = balanceInput.innerText ;
    const balanceParse = parseFloat(balanceInner);

    const balanceTotal = deposiParse + balanceParse;
    balanceInput.innerText = balanceTotal;
    

})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value ;
    const withdrawParse = parseFloat(withdrawValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withDrawInner = withdrawTotal.innerText;
    const withdrawParseIn =  parseFloat(withDrawInner); 

    const withdrawTotalAdd = withdrawParse + withdrawParseIn ;
    withdrawTotal.innerText = withdrawTotalAdd;
    
    const balanceTotalMy = document.getElementById('balance-total');
    const balanceTotalMyInner = balanceTotalMy.innerText;
    const balanceTotalMyInnerParse = parseFloat(balanceTotalMyInner);

    const myWithdraw = balanceTotalMyInnerParse - withdrawParse;
    balanceTotalMy.innerText = myWithdraw;


     
    

    withdrawInput.value = '';



})