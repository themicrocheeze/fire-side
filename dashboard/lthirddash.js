
//Declares the different variables used in the Lower Third Overlay

const castingOrgRep = nodecg.Replicant('castingOrg', {defaultValue: ""});
const eInfoRep = nodecg.Replicant('eInfo', {defaultValue: ""});
const seriesInfoRep = nodecg.Replicant('seriesInfo', {defaultValue: ""});

//Casters and producer
const caster1InfoRep = nodecg.Replicant('caster1info', {defaultValue: ""});
const caster2InfoRep = nodecg.Replicant('caster2info', {defaultValue: ""});
const producerInfoRep = nodecg.Replicant('producerInfo', {defaultValue: ""});


//Functions that set their values

function setCastingOrg(){
    castingOrgRep.value = document.getElementById('castingOrg').value;
}

function setSeriesInfo(){
    seriesInfoRep.value = document.getElementById('seriesInfo').value;
}

function setEinfo(){
    eInfoRep.value = document.getElementById('eInfoset').value;
}

function setCaster1(){
    caster1InfoRep.value = document.getElementById('caster1info').value;
}

function setCaster2(){
    caster2InfoRep.value = document.getElementById('caster2info').value;
}

function setProducer(){
    producerInfoRep.value = document.getElementById('producerInfo').value;
}