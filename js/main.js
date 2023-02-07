const milestoneData = JSON.parse(data).data;

function loadMilestones(){
  const milestones = document.querySelector('.milestones');
  milestones.innerHTML = `<div class="milestone border-b"> 
        <div class="flex">
            <div class="checkbox"><input type="checkbox" /></div>
            <div>
                <p>
                    Milestone 1 name
                    <span><i class="fas fa-chevron-down"></i></span>
                </p>
            </div>
        </div>
        <div class="hidden_panel">
            <div class="module border-b">
                <p>Module Name</p>
            </div>
        </div>
    </div>
  `;
}
loadMilestones();