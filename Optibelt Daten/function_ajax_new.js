function calculate(language) {
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

	scroll('-1000','-1000');
 	$('ladebalken').innerHTML = '<div style="opacity:0.80; filter: alpha(opacity=80, finishopacity=80); position:absolute; width:100%; height:100%; background-color: #ffffff; text-align:center; vertical-align:middle; margin-top:-300px;"><img src="/iphone/images/ladebalken.gif" style="margin-top: 120px;"></div>';

	//document.getElementById("input_f").style.backgroundColor = "";
 
	var myAjax = new Ajax.Request(
		"calculate_tt-mini.php",	{
 			method: 'post', 
	//		parameters: Form.serialize($('form_ttmini_feq')),
			parameters: 'input_t=' + document.form_ttmini_feq.input_t.value +'&input_k=' + document.form_ttmini_feq.input_k.value +'&input_l=' + document.form_ttmini_feq.input_l.value +'&mod=' + document.form_ttmini_feq.mod.value +'',
			onComplete: calculate_ttmini
			}
	  );
}
 

function calculate_ttmini( originalRequest ) { 
	$('ladebalken').innerHTML = '';
      $('content_tt-mini').innerHTML = originalRequest.responseText;
	 }
	 
function check_input (wert,feld,meldung) {
	//meldung = 'Keine Zahl';
    if(isNaN(wert)){
      alert(meldung);

	  if(feld == 'input_t') {
		document.getElementById("input_t").style.backgroundColor = "#ffcccc";
		document.form_ttmini_feq.input_t.value = '';
		document.form_ttmini_feq.input_t.focus();
   	  }
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

	}
	
//     document.getElementById("result").innerHTML = "";
}	  