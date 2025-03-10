const sixBoxes = document.getElementById('six-boxes');
const history = document.getElementById('history');

const boxDivs = sixBoxes.getElementsByTagName('div'); 

const getCountDiv = document.getElementById('task-count-number'); 
const getCountDivH = document.getElementById('big-number');

// const buttons = document.querySelectorAll('.btn')
// console.log(buttons);
// console.log(boxDivs);

for (let singleBox of boxDivs){
  const btn = singleBox.querySelector('button')
  btn.addEventListener('click', function() {
    const activityLog =document.createElement('p');
    const divText = singleBox.querySelector('h1').textContent;
    activityLog.innerText = 'you have selected ' + divText + '(Ekhane click korar time ta bosbe)'; 
    // uporer line e time er formula bosalei kaj ok.
    alert('Board Updated Successfully')
    history.append(activityLog);
    // notification gulor bg color and margin + padding dite hobe
    // activityLog.style.backgroundColor=('yellow')
    btn.setAttribute('disabled', true)

    let currentCount = parseInt(getCountDiv.innerText); 
    let updatedCount = currentCount - 1 ; 
    getCountDiv.innerText = updatedCount;

    let currentCountH = parseInt(getCountDivH.innerText); 
    let updatedCountH = currentCountH + 1 ; 
    getCountDivH.innerText = updatedCountH;
  });
}

// if(currentCount === 0){
    //   alert('YEEEESSSSS')
    // }
