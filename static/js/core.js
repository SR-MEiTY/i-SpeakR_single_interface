function change_page_theme(mode){
	if (mode=='light'){
		document.getElementById('body_tag').style.backgroundColor = "white";
		document.getElementById('body_tag').style.color = "rgba(47, 48, 47, 1)";
		document.getElementById('light_mode').style.display = "none";
		document.getElementById('dark_mode').style.display = "block";
		document.getElementById('light_title_pane').style.display = "block";
		document.getElementById('dark_title_pane').style.display = "none";
		document.getElementById("light_title_subpane").style.backgroundColor = "white";
		document.getElementById("open_menu").style.backgroundColor = "white";
		document.getElementById("open_menu").style.color = "black";
	}
	else if (mode=='dark'){
		document.getElementById('body_tag').style.backgroundColor = "black";
		document.getElementById('body_tag').style.color = "white";
		document.getElementById('light_mode').style.display = "block";
		document.getElementById('dark_mode').style.display = "none";
		document.getElementById('light_title_pane').style.display = "none";
		document.getElementById('dark_title_pane').style.display = "block";
		document.getElementById("dark_title_subpane").style.backgroundColor = "black";
		document.getElementById("open_menu").style.backgroundColor = "black";
		document.getElementById("open_menu").style.color = "white";
	}
}


function toggle_menu(){
	if (document.getElementById('menu_status').value=="closed"){
		document.getElementById('menu_pane').style.display = "block";
		document.getElementById('menu_status').value = "open";
		document.getElementById('open_menu').style.backgroundColor = "rgba(216, 235, 240, 1)";
	}
	else if (document.getElementById('menu_status').value=="open"){
		document.getElementById('menu_pane').style.display = "none";
		document.getElementById('menu_status').value = "closed";
		document.getElementById('open_menu').style.backgroundColor = "white";
	}
}
