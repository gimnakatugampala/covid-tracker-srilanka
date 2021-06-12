
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
          label: 'My First Dataset',
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
          label: 'My First Dataset',
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

getTotalLocal()
getDailyLocal()