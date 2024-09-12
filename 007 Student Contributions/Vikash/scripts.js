window.onload = function() {
    generateCalendar();
};


function generateCalendar(){
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    for(let i = 0; i < firstDayOfWeek; i++){
        let blankDay = document.createElement("div");
        calendar.appendChild(blankDay);
    }

    for(let day = 1; day <= totalDays; day++){
        let daySquare = document.createElement("div");
        daySquare.className = "calendar-day";
        daySquare.textContent = day;
        daySquare.id = `day-${day}`;
        calendar.appendChild(daySquare);
    }

}

function showAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'block';
}
function closeAddTaskModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

function deleteTask(taskElement){
    if (confirm("Are you sure you want to delete this tsak?")){
        taskElement.parentNode.removeChild(taskElement);
    }
}


function editTask(taskElement){
    const newTaskDesc = prompt("Edit your task:", taskElement.textContent);
    if(newTaskDesc !== null & newTaskDesc.trim() !== ""){
        taskElement.textContent = newTaskDesc;
    }

}



function addTask(){
    const taskDate = new Date(document.getElementById('task-date').value);
    const taskDesc = document.getElementById('task-desc').value.trim();

    if(taskDesc && !isNaN(taskDate.getDate())){
        const calendarDays = document.getElementById('calendar').children;
        for(let i = 0; i < calendarDays.length; i++){
            const day = calendarDays[i];
            if(parseInt(day.textContent) === taskDate.getDate()){
                const taskElement = document.createElement("div");
                taskElement.className = "task";
                taskElement.textContent = taskDesc;

                taskElement.addEventListener("contextmenu", function(event){
                    event.preventDefault();
                    deleteTask(taskElement);
                });

                taskElement.addEventListener('click', function(){
                    editTask(taskElement);
                });

                day.appendChild(taskElement);
                break;
            }
        }
        closeAddTaskModal();
    }else{
        alert("Plese enter a valid date and task description!");
    }
}
