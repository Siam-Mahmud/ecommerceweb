let total=0;
document.getElementById("input").addEventListener('change', () => {
    let inputValue = parseFloat(document.getElementById("input").value);
    let Subtotal = parseFloat(document.getElementById("Subtotal").textContent);
    document.getElementById("Subtotal").textContent = inputValue * Subtotal;
     total+=inputValue*Subtotal;
     document.getElementById("totalPayment").textContent=total;
    
});

document.getElementById("input2").addEventListener('change', () => {
    let inputValue = parseFloat(document.getElementById("input2").value);
    let Subtotal2 = parseFloat(document.getElementById("Subtotal2").textContent);
    document.getElementById("Subtotal2").textContent = inputValue * Subtotal2;
    total+=inputValue*Subtotal2;
    document.getElementById("totalPayment").textContent=total;
});
document.getElementById("input3").addEventListener('change', () => {
    let inputValue = parseFloat(document.getElementById("input3").value);
    let Subtotal3 = parseFloat(document.getElementById("Subtotal3").textContent);
    document.getElementById("Subtotal3").textContent = inputValue * Subtotal3;
    total+=inputValue*Subtotal3;
    document.getElementById("totalPayment").textContent=total;
});

