function Pack () {} // main
function Pack2() {} // random
function Pack3() {} // asyncio
function Pack4() {} // datetime
function Pack5() {} // math
function Pack6() {} // json
function Pack7() {} // html

Pack7.prototype.clear = function() {
	document.open();
	document.close();
};

Pack7.prototype.isFullscreen = function() {
	return ((screen.availHeight || screen.height-30) <= window.innerHeight) ? true : false;
};

Pack2.prototype.choice = function(array) {
	return array[Math.floor(Math.random() * (Number(array.length)))];
};

Pack2.prototype.randint = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

Pack2.prototype.randopp = function(chance, min, max, log) {
	var pack = new Pack2();
	var opportunity = pack.randomInt(min, max);
	
	if (log) { console.log(opportunity); }
	
	return (chance <= opportunity) ? true : (chance > opportunity) ? false : 0;
};

Array.prototype.randomChoice = function() {
	return this[Math.floor(Math.random() * (Number(this.length)))];
};

Pack3.prototype.sleep = function(time) {
	return new Promise(resolve => setTimeout(resolve, time*1000));
};

Pack5.prototype.divmod = function(x, y) {
	var [result, integer, value] = [ [], Math.floor(x / y), Math.floor(x % y) ];
	result.push(integer); result.push(value);
	
	return result;
};

function divmod(x, y) {
	var [result, integer, value] = [ [], Math.floor(x / y), Math.floor(x % y) ];
	result.push(integer); result.push(value);

	return result;
}

String.prototype.replaceFor = function(array, repWith) {
    for (var i = 0, o = this; i < array.length; i++) { o = o.replace(array[i], repWith[i]); }
    return o;
};

Pack4.prototype.datetime = function(datestring) {
	var d = new Date();
	
	var FullDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var FullMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	var [xday, xmonth, xyear] = [ (d.getDate()).toString(), (d.getMonth()+1).toString(), (d.getYear()-100).toString()];
	
	if (xday < 10) { xday = "0"+xday.toString(); }
	if (xmonth < 10) { xmonth = "0"+xmonth.toString(); }
	
	for (let i = 0; i < datestring.length; i++) {
		var datestring = datestring.replace("%H", d.getHours());
		datestring = datestring.replaceFor(
			["%M", "%S", "%A", "%d", "%b", "%B", "%Y", "%x"],
			[d.getMinutes(), d.getSeconds(), FullDay[d.getDay()], d.getDate(), d.getMonth()+1, FullMonth[d.getMonth()], d.getFullYear(), `${xmonth}/${xday}/${xyear}`]
		);
	}
	
	return datestring;
};

Array.prototype.prune = function(int, type) {
	if (type == null) { type = "<"; }
	if (int == null) { int = this.length; }
	for (let i = 0; i < int; i++) { (type == "<") ? this.pop() : (type == ">") ? this.shift() : 0; }
	return this;
};

String.prototype.get = function(int, type) {
    if (int == null) { int = 0; }
	if (type == null || type.toLowerCase() == "letter" || type.toLowerCase() == "l") { spl = ""; }
	else if (type.toLowerCase() == "word" || type.toLowerCase() == "w") { spl = " "; }
	
	return this.split(spl)[int];
};

Array.prototype.remove = function(int) {
	const [res, o, length] = [ [], this, o.length];
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) { res.push(this.shift()); }
		if (i == int) { this.shift(); }
	}
	return res;
};

Array.prototype.flip = function(int1, int2) {
	[this[int1], this[int2]] = [this[int2], this[int1]];
	return this;
};

Array.prototype.flop = function(int1, int2) {
	const [res, o, a, b] = [ [], this, this[int1], this[int2]];
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int1 || i > int1) { res.push(a); this.shift(); }
		if (i == int1) { res.push(b); this.shift(); }
	}
	return res;
};

Array.prototype.pushTo = function(object, int) {
	const [res, o] = [ [], this];
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) { res.push(this.shift()); }
		if (i == int) { res.push(object); res.push(this.shift()); }
	}
    return res;
};

String.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.includes(array[i])) { return true; }
	} return false;
};

Array.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.includes(array[i])) { return true; }
	} return false;
};

String.prototype.startsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.startsWith(array[i])) { return true; }
	} return false;
};

String.prototype.endsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.endsWith(array[i])) { return true; }
	} return false;
};

Number.prototype.compareFor = function(array, symb) {
    var [res, symbols] = [ [], [">", "<", ">=", "<=", "==", "!="] ];
	if (symb == null || !symbols.includes(symb)) { var symb = "=="; }
	for (let i = 0; i < array.length; i++) {
	    var thing = new Function(`if (${parseInt(this)} ${symb} ${array[i]}) { return true; } else { return false; }`); res.push(thing());
	}
	return res;
};

String.prototype.splitFor = function(array) {
    var res = this;
    for (let i = 0; i < array.length; i++) {
        res = res.split(array[i]); res = res.join("||SPLITHERE||");
    }
    return res.split("||SPLITHERE||");
}

Pack6.prototype.load = function(obj) {
	return JSON.parse(obj);
};

Pack6.prototype.dump = function(obj, args) {
    try {
    if (args.indent != null) {
        var [a, b] = [ JSON.stringify(obj).split(","), [] ];
        for (let i = 0; i < args.indent; i++) { b.push(" "); }

        console.log(a.join(",").split("{"));
        
        return a.join(`,\n${b.join("")}`);
    }} catch(err) {}

    return JSON.stringify(obj);
}

String.prototype.endsWithC = function(stuff) {
	for (let i = this.length, n = stuff.length; i > 0, n > 0; i--, n--) {
	    if (this[i-1] == stuff[n-1]) { return true; }
	} return false;
};

String.prototype.startsWithC = function(stuff) {
	for (let i = 0, n = 0; i < this.length, n < stuff.length; i++, n++) {
	    if (this[i] == stuff[n]) { return true; }
	} return false;
};

Array.prototype.endsWithC = function(stuff) {
	for (let i = this.length, n = stuff.length; i > 0, n > 0; i--, n--) {
	    if (this[i-1] == stuff[n-1]) { return true; }
	} return false;
};

Array.prototype.startsWithC = function(stuff) {
	for (let i = 0, n = 0; i < this.length, n < stuff.length; i++, n++) {
	    if (this[i] == stuff[n]) { return true; }
	} return false;
};

Array.prototype.equalFor = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (this == array[i]) { return true; }
    } return false;
};

String.prototype.equalFor = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (this == array[i]) { return true; }
    } return false;
};

Number.prototype.equalFor = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (this == array[i]) { return true; }
    } return false;
};

var PyPI = new Pack(); // PyPI.includesFor("abc", ["a", "b"])
var random = new Pack2(); // random.randint(1, 5)
var asyncio = new Pack3(); // await asyncio.sleep(1)
var datetime = new Pack4(); // datetime.datetime("%H:%M:%S")
var extMath = new Pack5(); // extMath.divmod(seconds, 60)
var json = new Pack6(); // json.load(obj)
var html = new Pack7(); // html.isFullScreen()

/*  Node JS  */

	/*  exporting  */
		// add this line back for node js
		// export {PyPI, random, asyncio, datetime, extMath, json};
		
	
	/*  importing  */
		// import './PyPI.js';
		// import {random} from './PyPI.js';
		
		
		
/*  Web JS  */

	/*  importing  */ /*
			<head>
				<script type="text/javascript" src="./PyPI.js"></script>
			</head>
			
		*/
