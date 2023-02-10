const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

function loadMilestones(){
  const milestones = document.querySelector('.milestones');

  milestones.innerHTML = `${milestoneData.map(function(milestone){
    return `<div class="milestone border-b" id="${milestone._id}">
            <div class="flex">
                <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestone._id})"/></div>
                <div onclick="openMilestone(this, ${milestone._id})">
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
function openMilestone( milestoneElement, id ){
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
    
    showMilestone(id);
}
function showMilestone(id){
    const milestoneImage = document.querySelector('.milestoneImage');
    const title = document.querySelector('.title');
    const description = document.querySelector('.details');

    milestoneImage.style.opacity = '0';
    milestoneImage.src = milestoneData[id].image;
    title.innerText = milestoneData[id].name;
    description.innerText = milestoneData[id].description;
}
// listen hero image load
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function(){
    this.style.opacity = '1';
};

function markMilestone(checkbox, id){
    const doneList = document.querySelector('.doneList');
    const milestonsList = document.querySelector('.milestones');
    const item = document.getElementById(id);
    if(checkbox.checked){
        // mark as done
        milestonsList.removeChild(item);
        doneList.appendChild(item);
    }else{
        milestonsList.appendChild(item);
        doneList.removeChild(item);
    }
}
function foyRemoveBorder(){
    const moduleDiv = document.getElementsByClassName('foy-modules');
    const milestonesDiv = document.getElementsByClassName('milestones');
    console.log(milestonesDiv);
    
    for(var i = 0; i<moduleDiv.length; i++){
        moduleDiv[i].lastElementChild.classList.remove('border-b');
    }
    for(var i = 0; i<milestonesDiv.length; i++){
        milestonesDiv[i].lastElementChild.classList.remove('border-b');
    }
}
foyRemoveBorder();
