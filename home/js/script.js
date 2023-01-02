// Desktop Price change

$(document).ready(function(){
    $('.price_btn').mouseenter(function(){
        $('.c_js').html('$7 <b class="bigSmall">/ month</b>');
    });
});
$(document).ready(function(){
    $('.price_btn').click(function(){
        $('.c_js').html('$48 <b class="bigSmall">/ year</b>');
    });
});

// ===================== Price Area Price change ====================

$(document).ready(function(){
    $('.price_b_2').click(function(){
        $('.p2_ch').html('$7');
    });
});
$(document).ready(function(){
    $('.price_b_2_b').click(function(){
        $('.p2_ch').html('$4');
    });
});


//======================= Price Collapse Area ==============================


$(document).ready(function(){
    $('.collase_F_h').click(function(){
        $('.col-3.f_col_4').toggle();
    });
});


$(document).ready(function(){
    $('.collase_F_h1').click(function(){
        $('.col-3.f_col_5').toggle();
    });
});


$(document).ready(function(){
    $('.collase_F_h2').click(function(){
        $('.col-3.f_col_6').toggle();
    });
});










