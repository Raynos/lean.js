function asm(stdin, foreign, heap){
	"use asm";

	var fround = stdin.Math.fround;
	var floor = stdin.Math.floor;

	function typeConversion (){
		var i = 0;        //int
		var d = 0.0;      //double
		var f = fround(0);//float
		i = i;            //int to int
		i = ~~floor(+f);  //float to int
		i = ~~floor(d);   //double to int
		f = fround(i|0);  //int to float
		f = fround(d);    //double to float
		f = f;            //float to float
		d = +(i|0);       //int to double
		d = d;            //double to double
		d = +f;           //float to double
	}
}
