let connect, form, response, result, email, send_btn, name, subject, message; 

function send_email(){

    let responseAjax = document.getElementById("ajax_reponse");    
    email =  document.getElementById("email").value;
    name =  document.getElementById("name").value;
    subject =  document.getElementById("mysubject").value;
    message =  document.getElementById("mymessage").value;

    if(email != '' || name != '' || subject != '' || message != ''){

        form = `email=${email}&name=${name}&subject=${subject}&message=${message}`;
        connect = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject('Microsoft.XMLHttp');

        connect.onreadystatechange = () => {
            if(connect.readyState == 4 && connect.status== 200){
                if(connect.responseText == "1"){
                    result = `<div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Se te ha enviado un correo! </h4>
                        </div>`;
                    responseAjax.innerHTML = result;
                }  else {
                    result = `<div class="alert alert-dismissible alert-danger">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Error! </h4>
                        <p>We could not send the mesage, please try again</p>
                        </div>`;
                    responseAjax.innerHTML = result;
                }
            } else if(connect.readyState != 4){
                result = `<div class="alert alert-dismissible alert-warning">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4><span class="glyphicon glyphicon-flash" aria-hidden="true"></span> Sending... </h4>
                        </div>`;
                responseAjax.innerHTML = result;
            }
        }
        connect.open('POST', 'mailer2.php?', true);
        connect.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
        connect.send(form);
    } else{
        result = `<div class="alert alert-dismissible alert-danger">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h4><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Error! </h4>
                        <p> Datos vacios </p>
                        </div>`;
        responseAjax.innerHTML = result;                
    }
}

send_btn = document.getElementById("send_email");


send_btn.addEventListener('click', function(e){
    e.preventDefault();    
    send_email();
});