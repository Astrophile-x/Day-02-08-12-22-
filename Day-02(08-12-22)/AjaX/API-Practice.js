function getIP(){
    let req=new XMLHttpRequest();
    req.onload=function(){
        console.log(req.response);
        let resp=JSON.parse(req.response);
        let aUrl=resp.ip;
       $('#di').html( '  Your Ip Is  '+aUrl);


    }
    req.open('get','https://api.ipify.org?format=json');
    req.send();
}
$('button').click(getIP);
