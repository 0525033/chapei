if($(window).width()<768){
    $.get('Header_MO.txt',function(data){
        $('#Header').html(data)
        $('Footer').removeClass('bg-dark')
        $('Footer').addClass('text-secondary')
    })}else{
    $.get('Header_DE.txt',function(data){
        Header=data
        $('#Header').html(Header)
        $('Footer').addClass('text-secondary')
})
$("#filter_btn").click(function(){
    $('#filter').toggleClass("filter_tgl");
})}

if($(window).width()<768){
    $("#Item_content .container").addClass("container-fluid");
    $("#Item_content .container").addClass("px-0");
    $("#Item_content .container").removeClass("container");
}