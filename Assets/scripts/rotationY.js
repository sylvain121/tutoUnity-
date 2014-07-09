#pragma strict

function Update () {
	print(Input.GetAxisRaw("SourisX"));
	transform.Rotate(0, Input.GetAxisRaw("SourisX"), 0);
}