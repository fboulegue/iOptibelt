var language_g;
function set_masseinheit(language) {
	language_g = language;
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

function set_profil() {
	if(document.form_vorspannwerte.riemen.value == 'kr') {
		while (document.getElementById('select_profile').options[0] != null)
		{
			document.getElementById('select_profile').options[0] = null;
		}
		document.getElementById('select_profile').options[0] = new Option('SPZ', 'SPZ');
		document.getElementById('select_profile').options[1] = new Option('3V/9N', '3V/9N');
		document.getElementById('select_profile').options[2] = new Option('XPZ', 'XPZ');
		document.getElementById('select_profile').options[3] = new Option('3VX/9NX', '3VX/9NX');
		document.getElementById('select_profile').options[4] = new Option('SPA', 'SPA');
		document.getElementById('select_profile').options[5] = new Option('XPA', 'XPA');
		document.getElementById('select_profile').options[6] = new Option('SPB', 'SPB');
		document.getElementById('select_profile').options[7] = new Option('5V/15N', '5V/15N');
		document.getElementById('select_profile').options[8] = new Option('XPB', 'XPB');
		document.getElementById('select_profile').options[9] = new Option('5VX/15NX', '5VX/15NX');
		document.getElementById('select_profile').options[10] = new Option('SPC', 'SPC');
		document.getElementById('select_profile').options[11] = new Option('XPC', 'XPC');
		document.getElementById('select_profile').options[12] = new Option('Z/10', 'Z/10');
		document.getElementById('select_profile').options[13] = new Option('ZX/X10', 'ZX/X10');
		document.getElementById('select_profile').options[14] = new Option('A/13', 'A/13');
		document.getElementById('select_profile').options[15] = new Option('AX/X13', 'AX/X13');
		document.getElementById('select_profile').options[16] = new Option('B/17', 'B/17');
		document.getElementById('select_profile').options[17] = new Option('BX/X17', 'BX/X17');
		document.getElementById('select_profile').options[18] = new Option('C/22', 'C/22');
		document.getElementById('select_profile').options[19] = new Option('CX/X22', 'CX/X22');
		
		while (document.getElementById('select_type').options[0] != null)
		{
			document.getElementById('select_type').options[0] = null;
		}
		document.getElementById('select_type').options[0] = new Option('RED POWER II', 'RED POWER II');
		document.getElementById('select_type').options[1] = new Option('Standard', 'Standard');
	}

	if(document.form_vorspannwerte.riemen.value == 'rb') {
		while (document.getElementById('select_profile').options[0] != null)
		{
			document.getElementById('select_profile').options[0] = null;
		}
		document.getElementById('select_profile').options[0] = new Option('PH', 'PH');
		document.getElementById('select_profile').options[1] = new Option('PJ', 'PJ');
		document.getElementById('select_profile').options[2] = new Option('PK', 'PK');
		document.getElementById('select_profile').options[3] = new Option('PL', 'PL');
		
		while (document.getElementById('select_type').options[0] != null)
		{
			document.getElementById('select_type').options[0] = null;
		}
		document.getElementById('select_type').options[0] = new Option('4', '4');
		document.getElementById('select_type').options[1] = new Option('8', '8');
		document.getElementById('select_type').options[2] = new Option('12', '12');
		document.getElementById('select_type').options[3] = new Option('16', '16');
		document.getElementById('select_type').options[4] = new Option('20', '20');
	}
	
	scroll('-1000','-1000');
}
	  
function set_typ() {
	var type = document.getElementById('select_profile').value;
	var riemen = document.getElementById('riemen').value;
	if(riemen == 'kr'){
		if (type == 'SPZ' || type == '3V/9N' || type == 'SPA' || type == 'A/13' || type == 'C/22')
		{
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('RED POWER II', 'RED POWER II');
			document.getElementById('select_type').options[1] = new Option('Standard', 'Standard');
		}
		
		if (type == 'XPZ' || type == '3VX/9NX' || type == 'XPA' || type == 'XPB' || type == '5VX/15NX' || type == 'XPC' || type == 'ZX/X10' || type == 'AX/X13' || type == 'BX/X17' || type == 'CX/X22')
		{
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('Super X-POWER', 'Super X-POWER');
		}
		
		if (type == 'SPB' || type == '5V/15N' || type == 'SPC')
		{
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('BLUE POWER', 'BLUE POWER');
			document.getElementById('select_type').options[1] = new Option('RED POWER II', 'RED POWER II');
			document.getElementById('select_type').options[2] = new Option('Standard', 'Standard');
		}
		
		if (type == 'Z/10' || type == 'B/17')
		{
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('Standard', 'Standard');
		}
	}
	
	if(riemen == 'rb'){
		if (type == 'PH'){
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('4', '4');
			document.getElementById('select_type').options[1] = new Option('8', '8');
			document.getElementById('select_type').options[2] = new Option('12', '12');
			document.getElementById('select_type').options[3] = new Option('16', '16');
			document.getElementById('select_type').options[4] = new Option('20', '20');
		}
		
		if (type == 'PJ'){
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('4', '4');
			document.getElementById('select_type').options[1] = new Option('8', '8');
			document.getElementById('select_type').options[2] = new Option('12', '12');
			document.getElementById('select_type').options[3] = new Option('16', '16');
			document.getElementById('select_type').options[4] = new Option('24', '24');
		}
		
		if (type == 'Pk' || type == "PL"){
			while (document.getElementById('select_type').options[0] != null)
			{
				document.getElementById('select_type').options[0] = null;
			}
			document.getElementById('select_type').options[0] = new Option('4', '4');
			document.getElementById('select_type').options[1] = new Option('8', '8');
			document.getElementById('select_type').options[2] = new Option('10', '10');
			document.getElementById('select_type').options[3] = new Option('12', '12');
			document.getElementById('select_type').options[4] = new Option('16', '16');
		}
	}
}

function check_input (wert,meldung) {
    if(isNaN(wert)){
		alert(meldung);
		return false;
	}
}
 
function calculate_vorspannwert(language) {
	language_g = language;
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

	
	var masseinheit = document.getElementById('masseinheit').value;
	var riemen = document.getElementById('riemen').value;
	var profil = document.getElementById('select_profile').value;
	var type = document.getElementById('select_type').value;
	var erstmontage = document.getElementById('erstmontage').value;
	var scheibendurchmesser = document.getElementById('scheibendurchmesserinput').value;



//content = ''.masseinheit.' - '.riemen.' - '.profil.' - '.type.' - '.erstmontage.' - '.scheibendurchmesser.'';

if(masseinheit == "zoll"){
	scheibendurchmesser = scheibendurchmesser * 25.4;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Keilriemen
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 1
if(profil == "SPZ" || profil == "3V/9N" || profil == "XPZ" || profil == "3VX/9NX") {
	if(scheibendurchmesser <= 71) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
	}

	if(scheibendurchmesser > 71 && scheibendurchmesser <= 90) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
	}
	
	if(scheibendurchmesser > 90 && scheibendurchmesser <= 125) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 350;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
	}
	
	if(scheibendurchmesser > 125) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 1
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 2
if(profil == "SPA" || profil == "XPA") {
	if(scheibendurchmesser <= 100) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 350;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
	}

	if(scheibendurchmesser > 100 && scheibendurchmesser <= 140) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 400;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 450;}
		}
	}
	
	if(scheibendurchmesser > 140 && scheibendurchmesser <= 200) {
		if(type == "RED POWER II") {
			if(erstmontage == "ja") {content = 600;}
			if(erstmontage == "nein") {content = 450;}
		}
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 400;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 600;}
			if(erstmontage == "nein") {content = 450;}
		}
	}
	
	if(scheibendurchmesser > 200) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 2
/////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 3
if(profil == "SPB" || profil == "5V/15N" || profil == "XPB" || profil == "5VX/15NX") {
	// Begin BLUE POWER
	if(type == "BLUE POWER") {
		if(scheibendurchmesser <= 180) {
			if(erstmontage == "ja") {content = 780;}
			if(erstmontage == "nein") {content = 600;}
		}
		if(scheibendurchmesser > 180 && scheibendurchmesser <= 236) {
			if(erstmontage == "ja") {content = 1100;}
			if(erstmontage == "nein") {content = 850;}
		}
		if(scheibendurchmesser > 236 && scheibendurchmesser <= 400) {
			if(erstmontage == "ja") {content = 1500;}
			if(erstmontage == "nein") {content = 1100;}
		}
		if(scheibendurchmesser > 400) {
			if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
		}
	// Ende BLUE POWER

	} else {

	// Begin Standard und SUPER-X POWER
		if(scheibendurchmesser <= 160) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 700;}
				if(erstmontage == "nein") {content = 550;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 650;}
				if(erstmontage == "nein") {content = 500;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 700;}
				if(erstmontage == "nein") {content = 550;}
			}
		}
	
		if(scheibendurchmesser > 160 && scheibendurchmesser <= 224) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 850;}
				if(erstmontage == "nein") {content = 650;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 700;}
				if(erstmontage == "nein") {content = 550;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 850;}
				if(erstmontage == "nein") {content = 650;}
			}
		}
		
		if(scheibendurchmesser > 224 && scheibendurchmesser <= 355) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 1000;}
				if(erstmontage == "nein") {content = 800;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 900;}
				if(erstmontage == "nein") {content = 700;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 1000;}
				if(erstmontage == "nein") {content = 800;}
			}
		}
		
		if(scheibendurchmesser > 355) {
			if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
		}
	}
	// Ende Standard und SUPER-X POWER
	
}
/// Keilriemen Profil Gruppe 3
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 4
if(profil == "SPC" || profil == "XPC") {

	// Begin BLUE POWER
	if(type == "BLUE POWER") {
		if(scheibendurchmesser <= 280) {
			if(erstmontage == "ja") {content = 1600;}
			if(erstmontage == "nein") {content = 1200;}
		}
		if(scheibendurchmesser > 280 && scheibendurchmesser <= 375) {
			if(erstmontage == "ja") {content = 2500;}
			if(erstmontage == "nein") {content = 1900;}
		}
		if(scheibendurchmesser > 375 && scheibendurchmesser <= 700) {
			if(erstmontage == "ja") {content = 3100;}
			if(erstmontage == "nein") {content = 2400;}
		}
		if(scheibendurchmesser > 700) {
			if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
		}
	// Ende BLUE POWER

	} else {
	
		if(scheibendurchmesser <= 250) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 1400;}
				if(erstmontage == "nein") {content = 1100;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 1000;}
				if(erstmontage == "nein") {content = 800;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 1400;}
				if(erstmontage == "nein") {content = 1100;}
			}
		}
	
		if(scheibendurchmesser > 250 && scheibendurchmesser <= 355) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 1600;}
				if(erstmontage == "nein") {content = 1200;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 1400;}
				if(erstmontage == "nein") {content = 1100;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 1600;}
				if(erstmontage == "nein") {content = 1200;}
			}
		}
		
		if(scheibendurchmesser > 355 && scheibendurchmesser <= 560) {
			if(type == "RED POWER II") {
				if(erstmontage == "ja") {content = 1900;}
				if(erstmontage == "nein") {content = 1500;}
			}
			if(type == "Standard") {
				if(erstmontage == "ja") {content = 1800;}
				if(erstmontage == "nein") {content = 1400;}
			}
			if(type == "Super X-POWER") {
				if(erstmontage == "ja") {content = 1900;}
				if(erstmontage == "nein") {content = 1500;}
			}
		}
		
		if(scheibendurchmesser > 560) {
			if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
		}
	}
}
/// Keilriemen Profil Gruppe 4
/////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 5
if(profil == "Z/10" || profil == "ZX/X10") {
	if(scheibendurchmesser <= 50) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 90;}
			if(erstmontage == "nein") {content = 70;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 120;}
			if(erstmontage == "nein") {content = 90;}
		}
	}

	if(scheibendurchmesser > 50 && scheibendurchmesser <= 71) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 120;}
			if(erstmontage == "nein") {content = 90;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 140;}
			if(erstmontage == "nein") {content = 110;}
		}
	}
	
	if(scheibendurchmesser > 71 && scheibendurchmesser <= 100) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 140;}
			if(erstmontage == "nein") {content = 110;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 160;}
			if(erstmontage == "nein") {content = 130;}
		}
	}
	
	if(scheibendurchmesser > 100) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 5
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 6
if(profil == "A/13" || profil == "AX/X13") {
	if(scheibendurchmesser <= 80) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 150;}
			if(erstmontage == "nein") {content = 110;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
	}

	if(scheibendurchmesser > 80 && scheibendurchmesser <= 100) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
	}
	
	if(scheibendurchmesser > 100 && scheibendurchmesser <= 132) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
	}
	
	if(scheibendurchmesser > 132) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 6
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 7
if(profil == "B/17" || profil == "BX/X17") {
	if(scheibendurchmesser <= 125) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 450;}
			if(erstmontage == "nein") {content = 350;}
		}
	}

	if(scheibendurchmesser > 125 && scheibendurchmesser <= 160) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 400;}
		}
	}
	
	if(scheibendurchmesser > 160 && scheibendurchmesser <= 200) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 400;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 600;}
			if(erstmontage == "nein") {content = 450;}
		}
	}
	
	if(scheibendurchmesser > 200) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 7
/////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Keilriemen Profil Gruppe 8
if(profil == "C/22" || profil == "CX/X22") {
	if(scheibendurchmesser <= 200) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 700;}
			if(erstmontage == "nein") {content = 500;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 800;}
			if(erstmontage == "nein") {content = 600;}
		}
	}

	if(scheibendurchmesser > 200 && scheibendurchmesser <= 250) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 800;}
			if(erstmontage == "nein") {content = 600;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 900;}
			if(erstmontage == "nein") {content = 700;}
		}
	}
	
	if(scheibendurchmesser > 250 && scheibendurchmesser <= 355) {
		if(type == "Standard") {
			if(erstmontage == "ja") {content = 900;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "Super X-POWER") {
			if(erstmontage == "ja") {content = 1000;}
			if(erstmontage == "nein") {content = 800;}
		}
	}
	
	if(scheibendurchmesser > 355) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Keilriemen Profil Gruppe 8
/////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Rippenbaender
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Rippenbaender Profil Gruppe 1
if(profil == "PH") {
	if(scheibendurchmesser <= 25) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 90;}
			if(erstmontage == "nein") {content = 70;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 150;}
			if(erstmontage == "nein") {content = 130;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "20") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
	}

	if(scheibendurchmesser > 25 && scheibendurchmesser <= 71) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 110;}
			if(erstmontage == "nein") {content = 90;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 350;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "20") {
			if(erstmontage == "ja") {content = 450;}
			if(erstmontage == "nein") {content = 350;}
		}
	}
	
	if(scheibendurchmesser > 71) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Rippenbaender Profil Gruppe 1
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Rippenbaender Profil Gruppe 2
if(profil == "PJ") {
	if(scheibendurchmesser <= 40) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 350;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 500;}
			if(erstmontage == "nein") {content = 400;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 700;}
			if(erstmontage == "nein") {content = 550;}
		}
		if(type == "24") {
			if(erstmontage == "ja") {content = 1000;}
			if(erstmontage == "nein") {content = 800;}
		}
	}

	if(scheibendurchmesser > 40 && scheibendurchmesser <= 80) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 200;}
			if(erstmontage == "nein") {content = 150;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 350;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 600;}
			if(erstmontage == "nein") {content = 500;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 800;}
			if(erstmontage == "nein") {content = 650;}
		}
		if(type == "24") {
			if(erstmontage == "ja") {content = 1200;}
			if(erstmontage == "nein") {content = 1000;}
		}
	}

	if(scheibendurchmesser > 80 && scheibendurchmesser <= 132) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 250;}
			if(erstmontage == "nein") {content = 200;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 450;}
			if(erstmontage == "nein") {content = 350;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 700;}
			if(erstmontage == "nein") {content = 550;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 900;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "24") {
			if(erstmontage == "ja") {content = 1300;}
			if(erstmontage == "nein") {content = 1000;}
		}
	}
		
	if(scheibendurchmesser > 132) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Rippenbaender Profil Gruppe 2
/////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Rippenbaender Profil Gruppe 3
if(profil == "PK") {
	if(scheibendurchmesser <= 63) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 300;}
			if(erstmontage == "nein") {content = 250;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 600;}
			if(erstmontage == "nein") {content = 450;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 700;}
			if(erstmontage == "nein") {content = 600;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 900;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 1200;}
			if(erstmontage == "nein") {content = 900;}
		}
	}

	if(scheibendurchmesser > 63 && scheibendurchmesser <= 100) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 400;}
			if(erstmontage == "nein") {content = 300;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 800;}
			if(erstmontage == "nein") {content = 600;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 1000;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 1200;}
			if(erstmontage == "nein") {content = 900;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 1500;}
			if(erstmontage == "nein") {content = 1200;}
		}
	}

	if(scheibendurchmesser > 100 && scheibendurchmesser <= 140) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 450;}
			if(erstmontage == "nein") {content = 350;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 900;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 1100;}
			if(erstmontage == "nein") {content = 800;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 1300;}
			if(erstmontage == "nein") {content = 1000;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 1600;}
			if(erstmontage == "nein") {content = 1300;}
		}
	}
		
	if(scheibendurchmesser > 140) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Rippenbaender Profil Gruppe 3
/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/// Rippenbaender Profil Gruppe 4
if(profil == "PL") {
	if(scheibendurchmesser <= 90) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 800;}
			if(erstmontage == "nein") {content = 600;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 1000;}
			if(erstmontage == "nein") {content = 800;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 1300;}
			if(erstmontage == "nein") {content = 1000;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 1500;}
			if(erstmontage == "nein") {content = 1200;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 1900;}
			if(erstmontage == "nein") {content = 1500;}
		}
	}

	if(scheibendurchmesser > 90 && scheibendurchmesser <= 140) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 1000;}
			if(erstmontage == "nein") {content = 700;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 1300;}
			if(erstmontage == "nein") {content = 1000;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 1600;}
			if(erstmontage == "nein") {content = 1300;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 1900;}
			if(erstmontage == "nein") {content = 1500;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 2500;}
			if(erstmontage == "nein") {content = 1900;}
		}
	}

	if(scheibendurchmesser > 140 && scheibendurchmesser <= 200) {
		if(type == "4") {
			if(erstmontage == "ja") {content = 1100;}
			if(erstmontage == "nein") {content = 800;}
		}
		if(type == "8") {
			if(erstmontage == "ja") {content = 1400;}
			if(erstmontage == "nein") {content = 1100;}
		}
		if(type == "10") {
			if(erstmontage == "ja") {content = 1900;}
			if(erstmontage == "nein") {content = 1400;}
		}
		if(type == "12") {
			if(erstmontage == "ja") {content = 2100;}
			if(erstmontage == "nein") {content = 1600;}
		}
		if(type == "16") {
			if(erstmontage == "ja") {content = 2800;}
			if(erstmontage == "nein") {content = 2100;}
		}
	}
		
	if(scheibendurchmesser > 200) {
		if(language_g == "en"){
			content = "Value must be calculated!";
		} else {
			content = "Wert muss berechnet werden!";
		}
	}
}
/// Rippenbaender Profil Gruppe 4
/////////////////////////////////////////////////////////////////////////////////////////////////////
	if (!isNaN( parseFloat(content) ))
	{
		content = Math.round(content) + " T (N)";
	}
	document.getElementById('result_vorspannwert').innerHTML = content;

	$('ladebalken').innerHTML = '';
}
  