const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

function loadMilestones(){
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${milestoneData.map(function(milestone){
    return `<div class="milestone border-b">
            <div class="flex">
                <div class="checkbox"><input type="checkbox" /></div>
                <div onclick="openMilestone(this)">
                    <p>
                        ${milestone.name}
                        <span><i class="fas fa-chevron-down"></i></span>
                    </p>
                </div>
            </div>
            
            <div class="hidden_panel foy-modules">
                ${milestone.modules
                    .map(function(module){
                        return `<div class="module border-b">
                            <p>${module.name}</p>
                        </div>`;
                })
                .join("")}  
            </div>
        </div>`;
  }).join("")}`;
}
loadMilestones();
function openMilestone( milestoneElement ){
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector('.show');

    const active = document.querySelector('.active');
    if(active && !milestoneElement.classList.contains('active')){
        active.classList.remove('active');
    }
    milestoneElement.classList.toggle('active');


    if( !currentPanel.classList.contains('show') && shownPanel ){
        shownPanel.classList.remove('show');
    }
    currentPanel.classList.toggle('show');
    
}
function foyRemoveBorder(){
    const moduleDiv = document.getElementsByClassName('foy-modules');
    for(var i = 0; i<moduleDiv.length; i++){
        moduleDiv[i].lastElementChild.classList.remove('border-b');
    }
}
foyRemoveBorder();
