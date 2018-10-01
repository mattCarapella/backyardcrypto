$(function() {
    //alert("here");

    $('#link_accepted').on('change', function() {
        if (this.value == '1') {
            // Exchange

            document.getElementsByName("link[link_type]")[0].value = '';
            //document.getElementsByName("link[link_type]")[0].value = 'bitfinex';
            // $('#link_typediv').html("<br>Exchange<br>" + 
            //     "<select id='link_type' class='type_link'>" + 
            //     "<option value='bitfinex'>Bitfinex</option>" +
            //     "<option value='bithumb'>Bithumb</option>"+
            //     "<option value='bitflyer'>Bitflyer</option>");
    
        $('#link_typediv').html("");

        } else if (this.value == '2') {
            // wallet
            document.getElementsByName("link[link_type]")[0].value = 'korbit';
            $('#link_typediv').html( "<br>Wallet<br>"  + 
                "<select id='link_type' class='type_link'>" + 
            "<option value='korbit'>Korbit</option>" +
            "<option value='btcc'>Btcc</option>"+
            "<option value='binance'>Binance</option>");
        } else {
            // other links
            $('#link_typediv').html( "<br><p>Other Links</p><br>" );
        }
    });



});


$( document ).ready(function() {

  // onchange value for type on link model

  $(document).on('change','.type_link',function() {

    document.getElementsByName("link[link_type]")[0].value  = this.value;
      
  });

// submit a coins creating a coin

  $('#subcoin').select2({
    selectOnClose: true,
    width: '100%'
  });



 $('#subcoin').on("select2:select", function(e) { 
   // what you would like to happen
   id = $('#subcoin option:selected').attr('data-id');
   symbol = $('#subcoin option:selected').attr('data-symbol');

  document.getElementsByName("coin[currency_abbrev]")[0].value = symbol;
  document.getElementsByName("coin[coinmarket_id]")[0].value = id;
  document.getElementsByName("coin[currency_name]")[0].value = this.value;


  });

 if($('#view_question').length > 0 ||  $('.content-question').length > 0 ){

    var editor;
      CKEDITOR.on( 'instanceReady', function ( ev ) {
        $('.msg-res').hide();
        $('.display_content').show();
        editor = ev.editor;
        editor.setReadOnly(true);
         // $("#cke_1_top").css('display','none');
         // $("#cke_1_bottom").css('display','none');
         $(".cke_toolbox").css('display','none');
         $(".cke_top").css('display','none');

         $(".cke_anchor").css('border','none');

         // console.log($(editor.container.$));
         var content = $(editor.container.$).clone();
         $(editor.container.$).hide();
         $(editor.container.$).parent().find('#main_question').html(content).show();

      });


 }

 // for display long question for question4 coin show

  if($('#view_question4').length > 0  ){

    var editor;
      CKEDITOR.on( 'instanceReady', function ( ev ) {
          $('.msg-res').hide();
          $('.display_content4').show();

          editor = ev.editor;
          editor.setReadOnly(true);
          var content = $(editor.container.$).clone();

          $(".cke_toolbox").css('display','none');
         $(".cke_top").css('display','none');

         $(".cke_anchor").css('border','none');
         $(editor.container.$).hide();
         $(editor.container.$).parent().find('#main_question4').html(content).show();
         $('#view_question4').show();

      });

  }

 // get the url from editor

   $('.editor-images').on('click',function(){
    
      var CKEditorFuncNum = $(this).attr("data-ckeditor-num");
      var url = $(this).attr("src");
       window.opener.CKEDITOR.tools.callFunction(CKEditorFuncNum,url);
       window.close();

  });


});