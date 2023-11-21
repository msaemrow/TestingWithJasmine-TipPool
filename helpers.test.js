describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
      submitPaymentInfo();
    });
  
    it('should add the new input to the total for the billAmt input', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(50);

        billAmtInput.value = 110;
        tipAmtInput.value = 25;
        
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(160);
    });
  
    it('should add the new input to the total for the tipAmt of input', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        billAmtInput.value = 110;
        tipAmtInput.value = 25;
        
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(35);
    });

    it('should calculate the tip percentage based on a billAmt and tipAmt', function(){
        expect(calculateTipPercent(100, 20)).toEqual(20);
        expect(calculateTipPercent(150, 20)).toEqual(13);


    });

    it('should add a new td to the selected value ', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr, 'new value');

        expect(newTr.innerText).toEqual('new value');
        expect(newTr.children.length).toEqual(1);
    });

    it('update shift summary upon calling deletePayment', function(){
        updateSummary();
        
        let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');
      
        expect(summaryTds[0].innerText).toEqual('$50');
        expect(summaryTds[1].innerText).toEqual('$10');
        expect(summaryTds[2].innerText).toEqual('20%');

        billAmtInput.value = 100;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        updateSummary();

        expect(summaryTds[0].innerText).toEqual('$150');
        expect(summaryTds[1].innerText).toEqual('$40');
        expect(summaryTds[2].innerText).toEqual('25%');

    });


  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = 0;
      tipAmtInput.value = 0;
      allPayments = {};
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
    });
});
