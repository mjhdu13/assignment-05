const sixBoxes = document.getElementById('six-boxes');
const history = document.getElementById('history');

const boxDivs = sixBoxes.getElementsByTagName('div'); 

const getCountDiv = document.getElementById('task-count-number'); 
const getCountDivH = document.getElementById('big-number');

for (let singleBox of boxDivs){
  const btn = singleBox.querySelector('button')
  btn.addEventListener('click', function() {
    const activityLog =document.createElement('p');
    const divText = singleBox.querySelector('h1').textContent;
    activityLog.innerText = 'you have selected ' + divText + '(Ekhane click korar time ta bosbe)'; 
    // uporer line e time er formula bosalei kaj ok.
    alert('Board Updated Successfully')
    history.append(activityLog); 
    activityLog.style.backgroundColor = 'lightGray';
    activityLog.style.margin = '5px';
    activityLog.style.padding = '2px';

    let clearHistoryBtn = document.getElementById('clear-history') 
    clearHistoryBtn.addEventListener('click', function(){
      let clean = activityLog
      clean.style.display = 'none';
    })

    btn.setAttribute('disabled', true)

    let currentCount = parseInt(getCountDiv.innerText); 
    let updatedCount = currentCount - 1 ; 
    getCountDiv.innerText = updatedCount;

    let currentCountH = parseInt(getCountDivH.innerText); 
    let updatedCountH = currentCountH + 1 ; 
    getCountDivH.innerText = updatedCountH;
  });
}

// theme changing
    const themeChangingBtn = document.getElementById('theme-changing-btn');
    themeChangingBtn.addEventListener('click', function(){
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
      document.body.style.background = randomColor;
    });