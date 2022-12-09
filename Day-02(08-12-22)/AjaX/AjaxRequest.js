function fetch(){
    let request=new XMLHttpRequest();
    request.onload=function(){
        console.log(request.response);
        let responseJSON=JSON.parse(request.response);
        let imageURl=responseJSON.message;
        $('#img').attr('src',imageURl);

    }
    request.open('get','https://dog.ceo/api/breeds/image/random');
    request.send();

}
$('#button').click(fetch);