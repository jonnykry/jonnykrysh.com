// To use this widget, edit your username / api key into the URL
// please respect my API key if you use it... I trust you :')
// var xml = httpGet("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jonnydoesmusic&api_key=c64600ddca04dfc310703c59fe1b5230");

// var track = xml.getElementsByTagName("track");
// var i = 0;

// var txt = displayTrack(track);

// document.write(txt);

// $("#widget").append(text);

// function httpGet(theUrl)
// {
//     var xmlHttp = null;
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, false);
//     xmlHttp.send(null);
//     return xmlHttp.responseXML;
// }

// function displayTrack(track)
// {
//     artist = (track[0].getElementsByTagName("artist")[0].childNodes[0].nodeValue);
//     song = (track[0].getElementsByTagName("name")[0].childNodes[0].nodeValue);
//     streamable = (track[0].getElementsByTagName("streamable")[0].childNodes[0].nodeValue);
//     album = (track[0].getElementsByTagName("album")[0].childNodes[0].nodeValue);
    
//     txt = "<div id='text' style='padding-top: 5px; color: #FFF;'><marquee behavior='scroll' scrollamount='5' direction='left' width='350'><a href='http://www.last.fm/user/jonnydoesmusic' target='_blank' style='color: white; font-family: Arial;'><i class='fa fa-music'></i> &mdash; Currently listening to: " 
//     + artist + ' - "' + song + '"' + " &mdash; Click to view my LastFM" + " &mdash; <i class='fa fa-music'></i></a></marquee></div>";
//     return txt;
// }