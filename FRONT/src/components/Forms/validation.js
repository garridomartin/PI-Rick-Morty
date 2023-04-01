const validation = (userData, errors, setErrors) => {
//username
if(!userData.username)
setErrors({ ...errors, username: "Por favor completa este campo" });
else if(userData.username.lenght > 35)
setErrors({ ...errors, username: "Maximo 35 caracteres" });
else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)
    ) {
    setErrors({ ...errors, username: "Email invalido" });
} else {
    setErrors({ ...errors, username: "" });
}

//password
if (userData.password.lenght < 6 || userData.password.lenght > 10){
    setErrors({ ...errors, password: "Longitud de password invalida, requiere 6 a 10 caracteres"})
} else if(!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "La password debe contener, al menos, un número"})
} else {
    setErrors({ ...errors, password: ""})
}


};

export default validation;