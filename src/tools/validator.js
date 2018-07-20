//function that validates user input
export default function validate(text,type=''){
    text = text.trim();
    if (!text) return false;
    switch (type){
        case 'email': return email(text)
        default: return false;
    }
}

function email(email){
    //regex for email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //test email
    return re.test(email);
  
}
