describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 50;
      tipAmtInput.value = 10;
    });
  
    it('should add a new payment to allPayments', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('50');
      expect(allPayments['payment1'].tipAmt).toEqual('10');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not add an obj to allPayments if input is blank', function(){
        billAmtInput.value = '';
        submitPaymentInfo();
      
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment object', function(){
      let testPayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
      }

        expect(createCurPayment()).toEqual(testPayment);
    });

    it('should NOT create a new payment object', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';


        expect(createCurPayment()).toEqual(undefined);
    });

    it('should append the new payment to the payment table', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let payTable = document.querySelectorAll('#paymentTable tbody tr td');
      
        expect(payTable.length).toEqual(4);
        expect(payTable[0].innerText).toEqual('$50');
        expect(payTable[1].innerText).toEqual('$10');
        expect(payTable[2].innerText).toEqual('20%');
        expect(payTable[3].innerText).toEqual('X');

    });

  

  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = 0;
      tipAmtInput.value = 0;
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
  });
  