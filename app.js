function captureEmail(){
    let email = document.querySelector("#inputEmail").value;
    let dataEmail = [];

    if(email.length>0){
        dataEmail.push({email})
        console.log('se guardo')
        return dataEmail
    }else{
        console.log('Error no se guardo')
    }
}

