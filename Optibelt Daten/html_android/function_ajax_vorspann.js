function set_masseinheit(language) {
	if(language == "en"){
		title_scheiben = "Pulleys";
	} else {
		title_scheiben = "Scheiben";
	}
	
	if(document.form_vorspannwerte.masseinheit.value == 'metrisch') {
		$('scheibendurchmesser').innerHTML = title_scheiben + ' &#216; (mm)';
	}

	if(document.form_vorspannwerte.masseinheit.value == 'zoll') {
		$('scheibendurchmesser').innerHTML = title_scheiben + ' &#216; (inch)';
	}
}

function set_profil(type,rippen) {

	if(document.form_vorspannwerte.riemen.value == 'kr') {
		$('bezeichnung_type').innerHTML = type;
	}

	if(document.form_vorspannwerte.riemen.value == 'rb') {
		$('bezeichnung_type').innerHTML = rippen;
	}
	
	scroll('-1000','-1000');

 	$('ladebalken').innerHTML = '<div style="opacity:0.80; filter: alpha(opacity=80, finishopacity=80); position:absolute; width:100%; height:100%; background-color: #ffffff; text-align:center; vertical-align:middle; margin-top:-420px;"><img src="/iphone/images/ladebalken.gif" style="margin-top: 120px;"></div>';

	var myAjax = new Ajax.Request(
		"set_profil.php",	{
 			method: 'post', 
			parameters: Form.serialize($('form_vorspannwerte')),
		//	parameters: 'input_k=' + document.form_vorspannwerte.input_k.value +'&input_l=' + document.form_vorspannwerte.input_l.value +'&input_f=' + document.form_vorspannwerte.input_f.value +'&mod=' + document.form_vorspannwerte.mod.value +'',
			onComplete: set_profile
			}
	  );
}

function set_profile( originalRequest ) { 
	$('ladebalken').innerHTML = '';
    $('select_profile').innerHTML = originalRequest.responseText;
	document.form_vorspannwerte.select_profile.focus();
}
 
	  
function set_typ() {
	scroll('-1000','-1000');
 	$('ladebalken').innerHTML = '<div style="opacity:0.80; filter: alpha(opacity=80, finishopacity=80); position:absolute; width:100%; height:100%; background-color: #ffffff; text-align:center; vertical-align:middle; margin-top:-420px;"><img src="/iphone/images/ladebalken.gif" style="margin-top: 120px;"></div>';

	var myAjax = new Ajax.Request(
		"set_type.php",	{
 			method: 'post', 
			parameters: Form.serialize($('form_vorspannwerte')),
		//	parameters: 'input_k=' + document.form_vorspannwerte.input_k.value +'&input_l=' + document.form_vorspannwerte.input_l.value +'&input_f=' + document.form_vorspannwerte.input_f.value +'&mod=' + document.form_vorspannwerte.mod.value +'',
			onComplete: set_type
			}
	  );
}

function set_type( originalRequest ) { 
	$('ladebalken').innerHTML = '';
    $('select_type').innerHTML = originalRequest.responseText;
	document.form_vorspannwerte.select_type.selectedIndex = 0;
}

function check_input (wert,meldung) {
    if(isNaN(wert)){
		alert(meldung);
		return false;
	}
}
 
function calculate_vorspannwert(language) {
	if(document.form_vorspannwerte.masseinheit.value == '') {
		document.getElementById("masseinheit").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Please select the unit of measurement");
		} else {
			alert("Bitte die Masseinheit auswaehlen");
		}
		document.form_vorspannwerte.masseinheit.focus();
		return false;
	}
//alert(document.form_vorspannwerte.select_profile.value);
	if(document.form_vorspannwerte.riemen.value == '' || document.form_vorspannwerte.riemen.value == 'Please select' || document.form_vorspannwerte.riemen.value == 'bitte waehlen') {
		document.getElementById("riemen").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Please choose the type of belt");
		} else {
			alert("Bitte den Riementyp auswaehlen.");
		}

		document.form_vorspannwerte.riemen.focus();
		return false;
	}

	if(document.form_vorspannwerte.select_profile.value == '' || document.form_vorspannwerte.select_profile.value == 'Please select' || document.form_vorspannwerte.select_profile.value == 'bitte waehlen') {
		document.getElementById("select_profile").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Please choose a profile");
		} else {
			alert("Bitte ein Profil auswaehlen");
		}

		document.form_vorspannwerte.select_profile.focus();
		return false;
	}

	if(document.form_vorspannwerte.select_type.value == '' || document.form_vorspannwerte.select_type.value == 'Please select' || document.form_vorspannwerte.select_type.value == 'bitte waehlen') {
		document.getElementById("select_type").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Please choose the type/rib number");
		} else {
			alert("Bitte den Typ/Rippenzahl auswaehlen");
		}
		document.form_vorspannwerte.select_type.focus();
		return false;
	}

	if(document.form_vorspannwerte.erstmontage.value == '' || document.form_vorspannwerte.erstmontage.value == 'Please select' || document.form_vorspannwerte.erstmontage.value == 'bitte waehlen') {
		document.getElementById("erstmontage").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Is it a first assembly?");
		} else {
			alert("Ist es eine Erstmontage?");
		}
		document.form_vorspannwerte.erstmontage.focus();
		return false;
	}

	if(document.form_vorspannwerte.scheibendurchmesser.value == '') {
		document.getElementById("scheibendurchmesserinput").style.backgroundColor = "#ffcccc";
		if(language == "en"){
			alert("Please specify the disk diameter");
		} else {
			alert("Bitte den Scheibendurchmesser angeben");
		}
		document.form_vorspannwerte.scheibendurchmesser.focus();
		return false;
	}
	
	scroll('-1000','-1000');

 	$('ladebalken').innerHTML = '<div style="opacity:0.80; filter: alpha(opacity=80, finishopacity=80); position:absolute; width:100%; height:100%; background-color: #ffffff; text-align:center; vertical-align:middle; margin-top:-420px;"><img src="/iphone/images/ladebalken.gif" style="margin-top: 120px;"></div>';

	var myAjax = new Ajax.Request(
		"calculate_vorspannwert.php",	{
 			method: 'post', 
			parameters: Form.serialize($('form_vorspannwerte')),
		//	parameters: 'input_k=' + document.form_vorspannwerte.input_k.value +'&input_l=' + document.form_vorspannwerte.input_l.value +'&input_f=' + document.form_vorspannwerte.input_f.value +'&mod=' + document.form_vorspannwerte.mod.value +'',
			onComplete: set_vorspannwert
			}
	  );
}

function set_vorspannwert( originalRequest ) { 
	$('ladebalken').innerHTML = '';
    $('result_vorspannwert').innerHTML = originalRequest.responseText;
}
  