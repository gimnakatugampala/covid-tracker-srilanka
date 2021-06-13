
// Get data
async function getdata() {
    const response = await fetch('https://www.hpb.health.gov.lk/api/get-current-statistical');
    const data = await response.json();
    return {
      data
    };
  }

  module.exports = {
    getdata
  }