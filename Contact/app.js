$(function(){

$("#error_fname").hide();
$("#error_Cname").hide();
$("#error_Email").hide();
$("#error_Mobile").hide();
$("#error_Comments").hide();


  var error_fname=false;
  var error_Cname=false;
  var error_Email=false;
  var error_Mobile=false;
  var error_Comments=false;


$("#floatingName").focusout(function(){
    check_fname();
})

$("#floatingCname").focusout(function(){
    check_Cname();
})

$("#floatingInput").focusout(function(){
    check_Email();
})

$("#floatingMob").focusout(function(){
    check_Mobile();
})

$("#floatingTextarea").focusout(function(){
    check_Comments();
})

function check_fname(){
    var pattern= /^[a-zA-Z ]+/;
    var fname= $("#floatingName").val();
    if(pattern.test(fname)){
      $("error_fname").hide();
      $("#floatingName").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#error_fname").html('should contain only characters')
      $("error_fname").show();
      $("#floatingName").css("border-bottom","2px solid red");
      error_fname=true;

      

    }
}
function check_Cname(){
    var pattern= /^[a-zA-Z ]+/;
    var Cname= $("#floatingCname").val();
    if(pattern.test(Cname)){
      $("error_Cname").hide();
      $("#floatingCname").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#error_Cname").html('should contain only characters')
      $("error_Cname").show();
      $("#floatingCname").css("border-bottom","2px solid red");
      error_Cname=true;

      

    }
}

function check_Email(){
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var Email= $("#floatingInput").val();
    if(pattern.test(Email) && Email!==''){
      $("error_Email").hide();
      $("#floatingInput").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#error_Email").html('should contain only characters')
      $("error_Email").show();
      $("#floatingInput").css("border-bottom","2px solid red");
      error_Email=true;

      

    }
}

function check_Mobile(){
    var pattern=/^(()|0)[]?[0-9][]?[0-9][]?[0-9]/;
    var mob=$("#floatingMob").val();
    if(pattern.test(mob) && mob.length==10){
        $("error_Mobile").hide();
      $("#floatingMob").css("border-bottom","2px solid #34F458");


    }
    else{
        $("#error_Mobile").html('should contain only characters')
      $("error_Mobile").show();
      $("#floatingMob").css("border-bottom","2px solid red");
      error_Mobile=true;

    }

}

function check_Comments(){
    var pattern= /^[a-zA-Z ]+/;
    var Comments= $("#floatingTextarea").val();
    if(pattern.test(Comments)&& Comments !==''){
      $("error_Comments").hide();
      $("#floatingTextarea").css("border-bottom","2px solid #34F458");

    }
    else{
      $("#error_Comments").html('should contain only characters')
      $("error_Comments").show();
      $("#floatingTextarea").css("border-bottom","2px solid red");
      error_Comments=true;

      

    }
}


$("#submit").click(function(){

   error_fname=false;
   error_Cname=false;
   error_Email=false;
   error_Mobile=false;
   error_Comments=false;

   check_fname();
   check_Cname();
   check_Email();
   check_Mobile();
   check_Comments();

   if(error_fname==false && error_Cname==false && error_Email==false && error_Mobile==false && error_Comments==false){
       alert("thankyou for your feedback! we will contact you soon.")
       return true
   }
   else{
       alert("please fill the form correctly")
       return false
   }

})







})