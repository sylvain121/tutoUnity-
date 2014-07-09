#pragma strict

var ipaddress :String;
var port = 25565;
var nombre_joueur = 15;

function OnGUI () {
	GUI.Label(Rect(5, 10, 200, 20), "adresse ip du serveur");
	ipaddress = GUI.TextField(Rect(200, 20, 100, 20), ipaddress);
	if(GUI.Button(Rect(50, 40,100, 25), "se connecter") && ipaddress.Length !=0) {
		Network.Connect(ipaddress, port);
	}
	
	if(GUI.Button(Rect(250, 40,150, 25), "créer serveur")) {
		Network.InitializeServer(nombre_joueur, port, false);
	}
	
}

function OnServerInitialized() {
	print("Serveur Créer");
}

function OnFailedToConnect() {
	print("impossible de se connecter a l'adresse ip :"+ipaddress);
}

function OnConnectedToServer() {
	print('connexion au serveur reussi');

}
function OnPlayerConnected() {
	print('un joueur a rejoin le serveur');
}
