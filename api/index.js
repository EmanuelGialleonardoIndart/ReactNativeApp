
export const loginCall=(credentials)=>{
   return fetch("http://192.168.0.6:8080/api/user/auth",{
       method:"POST",
       headers:{
           'Accept':'application/json',
           'Content-type':'application/json'
       },
       body:JSON.stringify({
           username:credentials.username,
           password:credentials.password
       })
   })
   .then((Response)=>{
        return Promise.all([Response, Response.json()])
    })
    
}