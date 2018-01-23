//Variables//
var $signUp = $('#signing');
var $number = $('#phone-number');
var $verify = $('#verify');
var $codeToVerify =$('#input-code');
var $sent = $('.sms');
var $sentPrefix =$('.sms-prefix');
// Loading Document//
$(document).ready(function(e){
  //Modals and Select//
  $('select').material_select(); //activates selections in modals
  $('.modal').modal();
  //Modals and Select End//
  console.log('control1')
  //Splash Page//
  $("#main-page").hide();
  $('#splash').fadeOut(2000, function() {
    $("#splash").remove();
    $("#main-page").fadeIn(1000);
    console.log('control2')
  });
  $signUp.click(function() {
    $('#start').hide();
    $('#sign-up').show();
    console.log('control3')
  });
  //Splash Page End//
  //Back Buttons//
  function showView(viewName) {
    $('.view').hide();
    $('#' + viewName).show();
    console.log('control4')
  }
  $('[data-launch-view]').click(function (e) {
    e.preventDefault();
    var viewName = $(this).attr('data-launch-view');
    showView(viewName);
    console.log('control5')
  });
  //Back Buttons End//
  //Validating Phone Number For Next Button//
  $number.keyup(function () {
    console.log('control6')
    if($(this).val().length === 10) {
      $("#next").removeAttr('disabled');
      $("#next").removeClass("disabled");
      $sent.text($(this).val());
    }
     else if ($(this).val() == /^[a-zA-Z]$/){
      alert('Please enter only numbers.')
       }
    else {
      $("#next").attr("disabled", "disabled");
    }
  });
  //Validating Phone Number For Next Button End//
  //Inserting Prefixes & Flags//
  $('.flags').on('change', function(e) {
    e.preventDefault();
    var $countrySelected = $(this).val();
    var $phonePrefix = $('span.prefix-digits');
    var $flagDisplay = $('#country-flag');
    if ($countrySelected === '0') {
      $phonePrefix.text('+52');
      $flagDisplay.removeClass('non-flag');
      $flagDisplay.addClass('flag-mx');
    } else if ($countrySelected === '1') {
      $phonePrefix.text('+01');
      $flagDisplay.removeClass('non-flag');
      $flagDisplay.addClass('flag-pe');
    } else if ($countrySelected === '2') {
      $phonePrefix.text('+02');
      $flagDisplay.removeClass('non-flag');
      $flagDisplay.addClass('flag-ce');
    }else if ($countrySelected === '3') {
      $phonePrefix.text('+03');
      $flagDisplay.removeClass('non-flag');
      $flagDisplay.addClass('flag-co');
    }
  });
  //Inserting Number Prefixes End//
  //Redirecting to Sign Form//
  $("#next").click(function(e){
    console.log('control10')
    e.preventDefault();
    $('#sign-up').hide();
    $('#sign-form').removeClass('hide');
    $('#sign-form').show();
    labCode();
  });
  //Redirecting to Sign Form End//
  //LabCode Generator//
  function labCode(){
    console.log('control11')
    $code = Math.floor(Math.random() * 900) + 100;
    alert('Your code is:\nLAB - ' + $code +'\n¡Enjoy the ride!');
    verifyCode($code);
  }
  function  verifyCode($code){
    $("#input-code").keyup(function () {
      var $codeToVerify = $(this).val();
      if($codeToVerify.length === 3) {
        $("#verify").removeAttr('disabled');
        $("#verify").removeClass("disabled");
        $("#verify").click(function () {
          if($codeToVerify == $code){
            $('#sign-form').hide();
            $('#user-data').removeClass('hide');
            $('#user-data').show();
          }else{
            $("#resend").removeAttr('disabled');
            $("#resend").removeClass("disabled");
          }
        })
      } else {
        $("#verify").attr("disabled", "disabled");
      }
    });
  }
  //Validate Code End//
  //Resend LabCode//
  $("#resend").click(function(e){
    console.log('control10')
    e.preventDefault();
    $('#sign-up').hide();
    $('#sign-form').removeClass('hide');
    $('#sign-form').show();
    labCode();
  });
  //Resend LabCode//
  //Validating User Data//
  $("#terms").on('click', function(event) {
    var checked = this.checked;
    if (checked == true && $("#name").val() !== '' && $("#surname").val() !== '' && $("#email").val() !== '' ) {
       $("#register").removeAttr("disabled");
       $("#register").removeClass("disabled");
    } else {
       $("#register").attr("disabled", "disabled");
    }
});
  //Validating User Data End//
  //Succesful Register//
  $("#register").click(function(e){
    console.log('control10')
    e.preventDefault();
    $('#user-data').hide();
    $('#registered').removeClass('hide');
    $('#registered').show();
  });
  //Succesful Register End//
});
