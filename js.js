$.get('Header_MO.txt',function(data){
    Header_MO=data
    Header=$('#Header').html()
    $(function(){
        if($(window).width()<732){
            console.log($(window).width());
            $('#Header').html(Header_MO)
            $('Footer').removeClass('bg-dark')
            $('Footer').addClass('text-secondary')
    
        }else{
            $('Header').html(Header)
    
        };
    
    
    })
})
$("#filter_btn").click(function(){
    $('#filter').toggleClass("filter_tgl");
})
console.log(location.href)




