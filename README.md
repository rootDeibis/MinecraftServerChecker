# MinecraftServerApi-Script-JS

##Online Demo

http://oadevelopments.xyz/mctool

## How To Use?

```html
<!DOCTYPE html>
<html>
<head>
	<title> Test </title>
  <script type="text/javascript" src="src/MinecraftServerCheck.js"></script>
</head>
<body>
    <p class="player-counter"></p>
    
    
    <script type="text/javascript">
        var Counter = document.querySelector(".player-counter");
        
        ServerStatus("play.cubecraft.net").getData(server => {
        
            if(server.online) {
               var playersOnline = server.players.online;
               var playersMax = server.players.max;
               
               Counter.innerText = `${playersOnline} / ${playersMax} players online`;
              
              return;
            }
            
            Counter.innerText = "Server Offline";
        
        });
       
      
    </script>
    
</body>
</html>
```

## Response API

```php

{
	"online": true,
	"ip": "127.0.0.1",
	"port": 25567,
	"debug": { //See section below for information about the values
		"ping": true,
		"query": true,
		"srv": true,
		"querymismatch": false,
		"ipinsrv": false,
		"cnameinsrv": false,
		"animatedmotd": false,
		"cachetime": 1518553220
	},
	"motd": {
		"raw": [
			"\u00a7cEver\u00a7r\u00a79PvP \u00a7r\u00a77- \u00a7r\u00a72\u00c9n server, for alle",
			"\u00a7r\u00a7fSe dine stats p\u00e5 \u00a7r\u00a76stats.everpvp.dk\u00a7r"
		],
		"clean": [
			"EverPvP - \u00c9n server, for alle",
			"Se dine stats p\u00e5 stats.everpvp.dk"
		],
		"html": [
			"<span style=\"color: #FF5555\">Ever<\/span><span style=\"color: #5555FF\">PvP <\/span><span style=\"color: #AAAAAA\">- <\/span><span style=\"color: #00AA00\">\u00c9n server, for alle<\/span>",
			"<span style=\"color: #FFFFFF\">Se dine stats p\u00e5 <\/span><span style=\"color: #FFAA00\">stats.everpvp.dk<\/span>"
		]
	},
	"players": {
		"online": 2,
		"max": 100,
		"list": [ //Only included when there are any players
			"Spirit55555",
			"sarsum33"
		],
		"uuid": { //Only included when ping is used and players are returned (may not contain all players)
			"Spirit55555": "f6792ad3-cbb4-4596-8296-749ee4158f97",
			"sarsum33": "d3512599-d4d9-4520-808f-a81f4cdfe8d0"
		}
	},
	"version": "1.12", //Could include multiple versions or additional text
	"protocol": 332, //Only included when ping is used, see more here: http://wiki.vg/Protocol_version_numbers
	"hostname": "server.mymcserver.tld", //Only included when a hostname is detected
	"icon": "data:image\/png;base64,iVBORw0KGgoAAAANSUhEU...dSk6AAAAAElFTkSuQmCC", //Only included when an icon is detected
	"software": "BungeeCord", //Only included when software is detected
	"map": "MyMcWorld",
	"plugins": { //Only included when plugins are detected
		"names": [
			"WordEdit",
			"WorldGuard"
		],
		"raw": [
			"WordEdit 6.1.5",
			"WorldGuard 6.2"
		]
	},
	"mods": { //Only included when mods are detected
		"names": [
			"BiomesOPlenty",
			"MoreFurnaces"
		],
		"raw": [
			"BiomesOPlenty 2.1.0",
			"MoreFurnaces 1.3.9"
		]
	},
	"info": { //Only included when detecting that the player samples are used for information
		"raw": [
			"\u00a77\u00bb \u00a7cKitPvP \u00a77:: \u00a7f1 \u00a77online",
			"\u00a77\u00bb \u00a7bSurvivalGames \u00a77:: \u00a7f0 \u00a77online"
		],
		"clean": [
			"\u00bb KitPvP :: 1 online",
			"\u00bb SurvivalGames :: 0 online"
		],
		"html": [
			"<span style=\"color: #AAAAAA\">\u00bb <\/span><span style=\"color: #FF5555\">KitPvP <\/span><span style=\"color: #AAAAAA\">:: <\/span><span style=\"color: #FFFFFF\">1 <\/span><span style=\"color: #AAAAAA\">online<\/span>",
			"<span style=\"color: #AAAAAA\">\u00bb <\/span><span style=\"color: #55FFFF\">SurvivalGames <\/span><span style=\"color: #AAAAAA\">:: <\/span><span style=\"color: #FFFFFF\">0 <\/span><span style=\"color: #AAAAAA\">online<\/span>"
		]
	}
}
