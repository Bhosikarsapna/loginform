let cl = console.log;

/*
    PROMISE INTRO >> promise is a javascript object, which gives some value in future.
                  >> promise used to handle ASYNC operation in js.

                  >> a javascript promise object contains both producing code and calls to consuming data.

                  >> PROMISE HAVING FOUR STATES

                  1] pending           >> waiting for result.
                  2] fullfilled/rsolve >> action related to promise is successful.
                  3] reject            >> action related to promise is failed.
                  4] setteled          >> promise either resolve or reject.

   CALLBACK HELL >> callback hell is essentially nested callbacks stacked below one another forming a pyramid structure.
                 >> every callback depends on or wait for previous callback.
                 >> thereby making pyramid structure that the affests readability and maintaibility of the code.               
*/

const loginForm = document.getElementById("loginForm");
const emailControl = document.getElementById("emailControl");
const passwordControl = document.getElementById("passwordControl")

const db = [
    {email : 'bhosikar@85gmail.com', password : 'asdf'}
]

const onSubmit = (eve) => {
    eve.preventDefault();

    let promisAction = new Promise((resolve, reject) =>{
        setTimeout(() => {

            let error = true;
            
            let emailValue = emailControl.value;

            let passwordValue = passwordControl.value;

            db.forEach(obj => {
                if(emailValue === obj.email && passwordValue === obj.password){
                    error = false;
                }
            })

            if(!error){
                resolve(`login successfully`);
            }else{
                reject('invalid username or password')
            }

            // cl(emailValue, passwordValue)

        }, 1000);
    })

    
    promisAction
    .then((res) => {
    //    cl(res)
    Swal.fire({
        icon: 'success',
        title: 'Login Successfully',
      })
    })

    .catch((err) => {
    //    cl(err)
    Swal.fire({
        icon: 'error',
        title: 'Invalid Username or Password',
      })
    })

    .finally(() => {
       loginForm.reset()
    })

}


loginForm.addEventListener('submit', onSubmit)
