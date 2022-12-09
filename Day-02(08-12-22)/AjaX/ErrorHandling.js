function fetch(){
    $.ajax({

        url:'https://dog.ceo/api/breeds/image/randomss',
        method:'GET',
        success:function(data){
            let url=data.message;
            $('#image').attr('src',url);
        }

    }).fail(function(){
        $('#text').html("Request Fail");
        console.log("Hello")
    })
}
$('#btn').click(fetch);
console.log("Hello")