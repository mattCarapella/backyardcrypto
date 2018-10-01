// side opener
<span style="font-size:50px;cursor:pointer" onclick="openNav()">&#9776; </span>

// def index
@coins, @alphaParams = Coin.all.alpha_paginate(params[:letter]){|coin| coin.currency_name}

// index view
<div class="col-md-2" id="side_table">				
	<div id="mySidenav" class="sidenav">
	  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><br><br>&#9776;</a>
	  	<%= alphabetical_paginate @alphaParams %>
	</div>
</div>