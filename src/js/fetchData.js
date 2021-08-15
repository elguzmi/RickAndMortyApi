/* const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest; */
/* import { XMLHttpRequest }from './../../node_modules/xmlhttprequest/lib/XMLHttpRequest';
 */const data = (ulr_api)=>{
    return new Promise((resolve, rejected)=>{
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET',ulr_api,true); //abrir una conexion

        xhttp.onreadystatechange = (()=>{

            if(xhttp.readyState ===4){
                (xhttp.status===200)?
                resolve(JSON.parse(xhttp.responseText))
                :rejected( new Error('algo ha fallado'));
            }
        });
        xhttp.send();  //envio la peticion
    })
}

/* module.exports = data; */