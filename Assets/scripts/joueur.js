#pragma strict
@script RequireComponent(CharacterController);

var vitesseDeplacement = 5;
var directionDeplacement : Vector3 = Vector3.zero;
var joueur : CharacterController;
joueur = GetComponent(CharacterController);


function Update () {
	directionDeplacement.z = Input.GetAxisRaw("Vertical");
	directionDeplacement.x = Input.GetAxisRaw("Horizontal");
	directionDeplacement = transform.TransformDirection(directionDeplacement);
	joueur.Move(directionDeplacement * Time.deltaTime * vitesseDeplacement);		

}