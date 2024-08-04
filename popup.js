document.addEventListener('DOMContentLoaded', function() {
      chrome.storage.local.get({ 'shorts-blocking-enabled': true }, function(data) {
        let enabled = data['shorts-blocking-enabled'];
        document.getElementById('status').textContent = enabled ? 'Active' : 'Inactive';
        document.getElementById('toggleButton').textContent = enabled ? 'Disable Blocking' : 'Enable Blocking';
      });
    
      document.getElementById('toggleButton').addEventListener('click', function() {
        chrome.storage.local.get({ 'shorts-blocking-enabled': true }, function(data) {
          let enabled = data['shorts-blocking-enabled'];
          chrome.storage.local.set({ 'shorts-blocking-enabled': !enabled }, function() {
            document.getElementById('status').textContent = !enabled ? 'Active' : 'Inactive';
            document.getElementById('toggleButton').textContent = !enabled ? 'Disable Blocking' : 'Enable Blocking';
          });
        });
      });
    });      