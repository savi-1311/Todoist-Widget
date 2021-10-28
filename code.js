const TasksData = require('./tasksData.json');
const GoalsData = require('./goalsData.json');

// Date in IST
d = new Date();
utc = d.getTime() + (d.getTimezoneOffset() * 60000);
nd = new Date(utc + (3600000*+5.5));
var ist =  nd.toLocaleString();

//Date in YYYY-MM-DD format
var current_date = "";
current_date = ist.slice(6,10)+"-"+ist.slice(0,2)+"-"+ist.slice(3,5);

//Saving Logs to desktopList file
console.log("🌸 Completed "+ GoalsData.days_items[0].total_completed+ " Tasks Today \n");
console.log("ToDoist for "+ current_date + " ⬇️");
for(var i=0;i<TasksData.length;i++)
{
	if(TasksData[i].due && TasksData[i].due.date == current_date)
	{
		console.log(`🎯 ${TasksData[i].content}`);
	}
}