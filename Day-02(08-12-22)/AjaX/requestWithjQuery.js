
function fetch(){
    $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        method:'GET',
         success:function(req){
            let url=req.message;
            $('#image').attr('src',url);
        }
    })
}


$('#btn').click(fetch);