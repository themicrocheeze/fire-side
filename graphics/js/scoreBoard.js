const team1scoreRep = nodecg.Replicant('team1score');
const team2scoreRep = nodecg.Replicant('team2score');

const team1scoreEl = document.getElementById('sb1');
const team2scoreEl = document.getElementById('sb2');


team1scoreRep.on('change', (newVal) =>{
    team1scoreEl.innerHTML = newVal;
})

team2scoreRep.on('change', (newVal) =>{
    team2scoreEl.innerHTML = newVal;
})