// JavaScript Document

function calculate(language, type) {
	
	if(type == 'newton')
	{
		if(document.form_ttmini_feq.input_k.value == '') {
			document.getElementById("input_k").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value k");
			} else {
				alert("Bitte den Wert k angeben");
			}
			document.form_ttmini_feq.input_k.focus();
			return false;
		}
	
		if(document.form_ttmini_feq.input_l.value == '') {
			document.getElementById("input_l").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value L");
			} else {
				alert("Bitte den Wert L angeben");
			}
			document.form_ttmini_feq.input_l.focus();
			return false;
		}
	
		if(document.form_ttmini_feq.input_f.value == '') {
			document.getElementById("input_f").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value f");
			} else {
				alert("Bitte den Wert f angeben");
			}
			document.form_ttmini_feq.input_f.focus();
			return false;
		}
	}

	if(type == 'freq')
	{
		if(document.form_ttmini_feq.input_t.value == '') {
			document.getElementById("input_t").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value t");
			} else {
				alert("Bitte den Wert t angeben");
			}
			document.form_ttmini_feq.input_t.focus();
			return false;
		}
	
		if(document.form_ttmini_feq.input_k.value == '') {
			document.getElementById("input_k").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value k");
			} else {
				alert("Bitte den Wert k angeben");
			}
			document.form_ttmini_feq.input_k.focus();
			return false;
		}
	
		if(document.form_ttmini_feq.input_l.value == '') {
			document.getElementById("input_l").style.backgroundColor = "#ffcccc";
			if(language == "en"){
				alert("Please specify the value L");
			} else {
				alert("Bitte den Wert L angeben");
			}
			document.form_ttmini_feq.input_l.focus();
			return false;
		}
	}

	scroll('-1000','-1000');
 	document.getElementById('ladebalken').innerHTML = '<div style="opacity:0.80; filter: alpha(opacity=80, finishopacity=80); position:absolute; width:100%; height:100%; background-color: #ffffff; text-align:center; vertical-align:middle; margin-top:-300px;"><img src="ladebalken.gif" style="margin-top: 120px;"></div>';

	//document.getElementById("input_f").style.backgroundColor = "";
 
	if(type == 'newton')
	{
		calculate_newton();
	}
	
	if(type == 'freq')
	{
		calculate_freq();
	}
}
	 
function check_input (wert,feld,meldung) {
	//meldung = 'Keine Zahl';
    if(isNaN(wert)){
      alert(meldung);

	if(feld == 'input_k') {
		document.getElementById("input_k").style.backgroundColor = "#ffcccc";
		document.form_ttmini_feq.input_k.value = '';
		document.form_ttmini_feq.input_k.focus();
   	  }
	  if(feld == 'input_l') {
		document.getElementById("input_l").style.backgroundColor = "#ffcccc";
		document.form_ttmini_feq.input_l.value = '';
		document.form_ttmini_feq.input_l.focus();
   	  }
	  if(feld == 'input_f') {
		document.getElementById("input_f").style.backgroundColor = "#ffcccc";
		document.form_ttmini_feq.input_f.value = '';
		document.form_ttmini_feq.input_f.focus();
   	  }

	}
	
//     document.getElementById("result").innerHTML = "";
}	  

function calculate_freq() {
	var t = document.getElementById('input_t').value;
	var k = document.getElementById('input_k').value;
	var l = document.getElementById('input_l').value;	
	var ergebnis;

	ergebnis = Math.sqrt(t / ( (4 * (k / 1000) * (Math.pow((l/1000),2)) ))	);
	ergebnis = Math.round(ergebnis);
	document.getElementById('ladebalken').innerHTML = '';
	document.getElementById('result').innerHTML = ergebnis +" f [Hz]";
}

function calculate_newton() {
	var k = document.getElementById('input_k').value;
	var l = document.getElementById('input_l').value;
	var f = document.getElementById('input_f').value;	
	var ergebnis;

	ergebnis = 4 * (k / 1000) *  Math.pow(l/1000,2) * Math.pow(f,2);
	ergebnis = Math.round(ergebnis);
	document.getElementById('ladebalken').innerHTML = '';
	document.getElementById('result').innerHTML = ergebnis +" T (N)";
}