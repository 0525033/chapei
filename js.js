if($(window).width()<768){
    $.get('Header_MO.txt',function(data){
        $('#Header').html(data)
    })
    $.get('Footer.txt',function(data){
        $('#Footer').html(data)
        $('Footer').removeClass('bg-dark','text-white')
        $('Footer').addClass('text-secondary')
    })
}else{
    $.get('Header_DE.txt',function(data){
        Header=data
        $('#Header').html(Header)
        $('Footer').addClass('text-secondary')
})};
$.get('Footer.txt',function(data){
    $('#Footer').html(data)
});

if($(window).width()<768){
    $("#Item_content .container").addClass("container-fluid");
    $("#Item_content .container").addClass("px-0");
    $("#Item_content .container").removeClass("container");
}
if($("input[name='quant']").val()<0){
    console.log('quant_err');
}
products = [["P000001","麵包1",45,"images/P1.jpg"],
["P000002","麵包2",45,"images/P2.jpg"],
["P000003","麵包3",45,"images/P3.jpg"],
["P000004","麵包4",45,"images/P4.jpg"],
["P000005","麵包5",45,"images/P5.jpg"],
["P000006","麵包6",45,"images/P6.jpg"],
['P000007','麵包7',45,'images/P7.jpg'],
['P000008','麵包8',45,'images/P8.jpg'],
['P000009','麵包9',45,'images/P9.jpg'],
['P000010','麵包10',45,'images/P10.jpg'],
['P000011','麵包11',45,'images/P11.jpg'],
['P000012','麵包12',45,'images/P12.jpg'],
['P000013','麵包13',45,'images/P13.jpg'],
['P000014','麵包14',45,'images/P14.jpg'],
['P000015','麵包15',45,'images/P15.jpg'],
['P000016','麵包16',45,'images/P16.jpg'],
['P000017','麵包17',45,'images/P17.jpg'],
['P000018','麵包18',45,'images/P18.jpg'],
['P000019','麵包19',45,'images/P19.jpg']];

var vm = new Vue({
    el:"#items",
    data:{
        items:products
    }
});