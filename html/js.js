let menu=document.querySelector('#menu');
let Left=document.querySelector('.left-container');
let span=document.querySelector('span');
let samp=document.querySelector('samp');
let student=document.querySelector('.student');
let manager=document.querySelector('.manager');
let man=document.querySelector('#manager');
let students=document.querySelector('.students');
let right=document.querySelector('.test');
let dod=document.querySelector('dod');
let dean=document.querySelector('dean');
let close=document.querySelector('#close');
let profile=document.querySelector('#profile');
let pro=document.querySelector('.pro');
let prosed=document.querySelector('#prosed');
let user=document.querySelector('#user');
let use=document.querySelector('.use');
let closeUser=document.querySelector('#closeUser');
let management=document.querySelector('#management');
let manag=document.querySelector('.management');
let RightContent=document.querySelector('.right-container');
let dashboard=document.querySelector('#dashboard');

dashboard.onclick=()=>{
    RightContent.style.display='block';
    manag.style.display='none';
}

management.onclick=()=>{
    RightContent.style.display='none';
    manag.style.display='block';
}

closeUser.onclick=()=>{
    use.style.display='none';
}


user.onclick=()=>{
    use.style.display='block';
}


prosed.onclick=()=>{
    pro.style.display='none';
}
profile.onclick=()=>{
    pro.style.display='block';
}


close.onclick=()=>{
    right.style.display='none';
}


man.onclick=()=>{
    right.style.display='block';
}
student.onclick=()=>{
    students.style.display='inherit';
}


menu.onclick =()=>{
    Left.style.display='inherit';
    Left.style.display='inline-block';
    Left.style.width='35%';
}

//for user option

let deleteUser=document.querySelector('#delete_user');
let deleteOpt=document.querySelector('.delete_opt');
let deleted=document.querySelector('#deleted');
let editOpt=document.querySelector('.edit_opt');
let edited=document.querySelector('#edit');
let view=document.querySelector('#view');

view.onclick=()=>{
deleteOpt.style.display='block';
}
deleted.onclick=()=>{
    deleteOpt.style.display='none';
}
edited.onclick=()=>{
    editOpt.style.display='block';
}