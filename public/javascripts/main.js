$(document).ready(function(){
  var easter_egg = new Konami();
  easter_egg.code = function() {
  $("#nyan_cat").velocity({left: '150%', }, 3000 );
  }
  easter_egg.load();

  $("#button_about_me").click(function(){
    $("#block_home").velocity({left: '-100%', }, 1000 );
    $("#half_face").velocity({left: '-100%', }, 1000 );
    $("#block_about_me").velocity({left: '0%', }, 1000);
    $("#button_back").velocity({top: '0%', }, 1000);
  });
  $("#button_projects").click(function(){
    $("#block_home").velocity({left: '-100%', }, 1000 );
    $("#half_face").velocity({left: '-100%', }, 1000 );
    $("#block_projects").velocity({left: '0%', }, 1000);
    $("#button_back").velocity({top: '0%', }, 1000);
  });
  $("#button_cat").click(function(){
    $("#block_home").velocity({left: '-100%', }, 1000 );
    $("#half_face").velocity({left: '-100%', }, 1000 );
    $("#block_cat").velocity({left: '0%', }, 1000);
    $("#button_back").velocity({top: '0%', }, 1000);
  });
  $("#button_back").click(function(){
    $("#block_home").velocity({left: '45%', }, 1000 );
    $("#half_face").velocity({left: '0%', }, 1000 );
    $("#block_projects").velocity({left: '150%', }, 1000);
    $("#block_about_me").velocity({left: '150%', }, 1000);
    $("#block_cat").velocity({left: '150%', }, 1000);
    $("#button_back").velocity({top: '-20%', }, 100);
  });
});