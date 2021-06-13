const local = document.getElementById('local')
const world = document.getElementById('world')

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



fetch('https://www.hpb.health.gov.lk/api/get-current-statistical')
    .then(res => res.json())
    .then(data => {
      uiLocal(data.data)
      uiWorld(data.data)
      console.log(data.data)
    })



    // Local

    function uiLocal(data) {
      local.innerHTML = `
            <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
            <div class="counter text-6xl" data-target="3000">${data.local_new_cases}</div>
            <h1>New Cases in Sri lanka</h1>
          </div>
    
    
          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="${data.local_total_cases}">${data.local_total_cases}</div>
          <h1>Total Cases in Sri lanka</h1>
          </div>
    
          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="${data.local_deaths}">${data.local_deaths}</div>
          <h1>Total Deaths in Sri Lanka</h1>
          </div>
    
          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="${data.local_new_deaths}">${data.local_new_deaths}</div>
          <h1>New Deaths in Sri Lanka</h1>
          </div>
    
    
          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="${data.local_recovered}">${data.local_recovered}</div>
          <h1>Recovered in Sri Lanka</h1>
          </div>
    
    
          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="${data.local_active_cases}">${data.local_active_cases}</div>
          <h1>Active Cases in Sri Lanka</h1>
          </div>
      
      `
    }


    function uiWorld(data) {
      world.innerHTML = `

          <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
          <div class="counter text-6xl" data-target="15000">${data.global_new_cases}</div>
          <h1>New Cases in the World</h1>
      </div>

      
    <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
      <div class="counter text-6xl" data-target="15000">${data.global_total_cases}</div>
      <h1>Total Cases in the World</h1>
    </div>

    <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
      <div class="counter text-6xl" data-target="15000">${data.global_deaths}</div>
      <h1>Total Deaths in the World</h1>
    </div>

    <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
      <div class="counter text-6xl" data-target="15000">${data.global_new_deaths}</div>
      <h1>New Deaths in the World</h1>
    </div>


    <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
      <div class="counter text-6xl" data-target="15000">${data.global_recovered}</div>
      <h1>Recovered in the World</h1>
    </div>


    <div class="bg-blue-600 hover:bg-blue-400 bg-opacity-100 text-white rounded p-12 m-7 text-center">
      <div class="counter text-6xl" data-target="15000">${data.local_active_cases}</div>
      <h1>Active Cases in the World</h1>
    </div>
      
      
      
      `
    }
    

    
// Counter
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        // console.log(inc);

        if(count < target){
            counter.innerText = count + inc;
            setTimeout(updateCount,1);
        }else{
            count.innerText = target;
        }
    }
    updateCount();
})
