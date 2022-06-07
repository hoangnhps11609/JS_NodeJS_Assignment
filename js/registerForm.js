
function validate() {
    const studentIdCtrl = document.getElementById('studentId')
    const nameCtrl = document.getElementById('name')
    const emailCtrl = document.getElementById('email')
    const nationalityCtrl = document.getElementById('nationality')
    const noteCtrl = document.getElementById('note')
    const genderCtrls = document.getElementsByName('gender')
    const favoritesCtrls = document.getElementsByName('favorites[]')

    let isValid = true
    ///////////////////
    if (isEmpty(studentIdCtrl.value)){
        studentIdCtrl.classList.remove('valid')
        studentIdCtrl.classList.add('invalid')
        isValid = false
    }else{
        studentIdCtrl.classList.remove('invalid')
        studentIdCtrl.classList.add('valid')
        removeAutoFill(studentIdCtrl)
    }
////////////
    if (isEmpty(nameCtrl.value)){
        nameCtrl.classList.remove('valid')
        nameCtrl.classList.add('invalid')
        isValid = false
    }else{
        nameCtrl.classList.remove('invalid')
        nameCtrl.classList.add('valid')
        removeAutoFill(nameCtrl)
    }
///////////////
    if(isValid){
        alert("Thông tin đăng ký thành công");
    }


    if (isEmpty(emailCtrl.value) || isEmail){
        emailCtrl.classList.remove('valid')
        emailCtrl.classList.add('invalid')
        isValid = false
    }else{
        emailCtrl.classList.remove('invalid')
        emailCtrl.classList.add('valid')
        removeAutoFill(emailCtrl)
    }

    /////
    if (noteCtrl.value > 200){
        noteCtrl.classList.remove('valid')
        noteCtrl.classList.add('invalid')
        isValid = false
    }else{
        noteCtrl.classList.remove('invalid')
        noteCtrl.classList.add('valid')
    }

    ////
    if (isEmpty(nationalityCtrl.value)){
        nationalityCtrl.classList.remove('valid')
        nationalityCtrl.classList.add('invalid')
        isValid = false
    }else{
        nationalityCtrl.classList.remove('invalid')
        nationalityCtrl.classList.add('valid')
    }

///////////////
    if (!isChecked(genderCtrls)){
        genderCtrls.forEach((element) => {
            element.classList.remove('valid')
            element.classList.add('invalid-rc')
        })
        isValid = false
    }else{
        genderCtrls.forEach((element) => {
            element.classList.remove('invalid-rc')
            element.classList.add('valid')
        })
        isValid = false
    }


    if (!isChecked(favoritesCtrls)){
        favoritesCtrls.forEach((element) => {
            element.classList.remove('valid')
            element.classList.add('invalid-rc')
        })
        isValid = false
    }else{
        favoritesCtrls.forEach((element) => {
            element.classList.remove('invalid-rc')
            element.classList.add('valid')
        })
        isValid = false
    }
}

function isEmpty(value) {
    if(!!!value || value.length <= 0){
        return true
    }
    return false
}

function isEmail(val) {
    return val.match(/^\S+\@\S+\.\S+$/);
}

function isChecked(ctrls) {
    for (const ctrl of ctrls) {
        if (ctrl.checked){
            return true;
        }
    }
    return false
}

function removeAutoFill(control) {
    const old = control.value
    control.value = old + ' ';
    control.value = old;
}