function setFavicon(iconPath){
	var link = document.createElement("link");
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
	link.href = iconPath;
	document.getElementsByTagName("head")[0].appendChild(link);
}

setFavicon("D:/DcNotes/Web/images/home_icon.png");