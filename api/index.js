
export const loginCall=(credentials)=>{
   return fetch("https://authenticationapireact.herokuapp.com/api/user/auth",{
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

export const btf4UsersCall=(credentials)=>{
    return fetch("https://api.bf4stats.com/api/onlinePlayers")
    .then((response)=>{
        return Promise.all([response,response.json()])
    })
}