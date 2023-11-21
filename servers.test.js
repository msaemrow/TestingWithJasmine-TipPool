describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
      expect(serverNameInput.value).toEqual('');
    });
  
    it('should add a new row to the serverTable with the servers name and tip average', function(){
      submitServerInfo();
      updateServerTable();
      const currServerTable = document.querySelectorAll('#serverTable tbody tr td');
      
      expect(currServerTable.length).toEqual(3);
      expect(currServerTable[0].innerText).toEqual('Alice');
      expect(currServerTable[1].innerText).toEqual('$0.00');
    });
  
    afterEach(function() {
      // teardown logic
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
    });
  });
  