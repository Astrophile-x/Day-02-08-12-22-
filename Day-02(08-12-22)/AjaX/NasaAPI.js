function func(data){
    $('<img>',{
        src:data.url,
        height:'400px',
        width:'300px',
        border:'2px',
        borderStyle:'solid',
        borderColor:'black',
        borderRadius:'100px',
    }).appendTo('#di');
}
$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method:'GET',
    data:{
        api_key:'DEMO_KEY',
        date:'2020-12-20',
    },
    success:func,
})