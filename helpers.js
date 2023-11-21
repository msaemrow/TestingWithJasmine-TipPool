
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
    let total = 0;
  
    for (let key in allPayments) {
      let payment = allPayments[key];
  
      total += Number(payment[type]);
    }
  
    return total;
  }
  
  // converts the bill and tip amount into a tip percent
  function calculateTipPercent(billAmt, tipAmt) {
    return Math.round(100 / (billAmt / tipAmt));
  }
  
  // expects a table row element, appends a newly created td element from the value
  function appendTd(tr, value) {
    let newTd = document.createElement('td');
    newTd.innerText = value;
  
    tr.append(newTd);
  }
  
  function appendDeleteBtn(tr){
    let newTd = document.createElement('td');
    newTd.className = 'deleteBtn'
    newTd.innerText = 'X';
  
    newTd.addEventListener('click', deleteServer);
    newTd.addEventListener('click', deletePayment);
  
    tr.append(newTd);
  }
  
  function deleteServer(e){
    let oldTd = e.target.closest('tr');
  
    delete allServers[oldTd.id];
  
    oldTd.parentNode.removeChild(oldTd);
    updateServerTable();
  }
  
  function deletePayment(e){
    let oldTd = e.target.closest('tr');
  
    delete allPayments[oldTd.id];
  
    updateServerTable();
    updateSummary();
  }
  
  
  