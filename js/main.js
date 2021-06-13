
// Counter
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        console.log(inc);

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updateCount,1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
})

// Charts - local total chart

function getTotalLocal(){
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Total Srilankan Covid Cases',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
  const config = {
    type: 'pie',
    data: data,
  };

  var myChart = new Chart(
    document.getElementById('getTotal'),
    config
  );

}

// Get Daily local
function getDailyLocal(){

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Daily Sri Lankan Cases',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
  const config = {
    type: 'pie',
    data: data,
  };

  var myChart = new Chart(
    document.getElementById('getDaily'),
    config
  );


}

// get the total cases world
function getTotalWorld(){

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'Total World Cases',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
  const config = {
    type: 'pie',
    data: data,
  };

  var myChart = new Chart(
    document.getElementById('getTotalWorld'),
    config
  );
    
}

function getDailyWorld(){

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: '',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  
  const config = {
    type: 'pie',
    data: data,
  };

  var myChart = new Chart(
    document.getElementById('getDailyWorld'),
    config
  );
  

}

getTotalLocal()
getDailyLocal()
getTotalWorld()
getDailyWorld()

