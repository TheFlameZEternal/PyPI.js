function Pack () {} // main
function Pack2() {} // random
function Pack3() {} // asyncio
function Pack4() {} // datetime
function Pack5() {} // math

function print(object) {
	console.log(object);
}

Pack.prototype.print = function(object) {
	console.log(object);
};

function clear() {
	document.open();
	document.close();
}

Pack.prototype.clear = function() {
	document.open();
	document.close();
};

Pack2.prototype.choice = function(array) {
	return array[Math.floor(Math.random() * (Number(array.length)))];
};

Pack2.prototype.randint = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

Pack2.prototype.randopp = function(chance, min, max, log) {
	let pack = new Pack();
	opportunity = pack.randomInt(min, max);
	
	if (log) {
		console.log(opportunity);
	}

	if (chance <= opportunity) {
		return true;
	}

	else if (chance > opportunity) {
		return false;
	}
};

Pack.prototype.randomChoice = function(array) {
	return array[Math.floor(Math.random() * (Number(array.length)))];
};

Array.prototype.randomChoice = function() {
	return this[Math.floor(Math.random() * (Number(this.length)))];
};

Pack.prototype.randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

Pack.prototype.randomOpp = function(chance, min, max, log) {
	let pack = new Pack();
	opportunity = pack.randomInt(min, max);
	
	if (log) {
		console.log(opportunity);
	}

	if (chance <= opportunity) {
		return true;
	}

	else if (chance > opportunity) {
		return false;
	}
};

Pack3.prototype.sleep = function(time) {
	return new Promise(resolve => setTimeout(resolve, time*1000));
};

Pack.prototype.sleep = function(time) {
	return new Promise(resolve => setTimeout(resolve, time*1000));
};

function divmod(x, y) {
	result = [];
	integer = Math.floor(x / y);
	value = Math.floor(x % y);
	result.push(integer);
	result.push(value);

	return result;
}

Pack5.prototype.divmod = function(x, y) {
	result = [];
	integer = Math.floor(x / y);
	value = Math.floor(x % y);
	result.push(integer);
	result.push(value);

	return result;
};

Pack.prototype.divmod = function(x, y) {
	result = [];
	integer = Math.floor(x / y);
	value = Math.floor(x % y);
	result.push(integer);
	result.push(value);

	return result;
};

Pack4.prototype.datetime = function(datestring) {
	d = new Date();
	
	FullDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	FullMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	xday = (d.getDate()).toString();
	xmonth = (d.getMonth()+1).toString();
	xyear = (d.getYear()-100).toString();
	if (xday < 10) {
		xday = "0"+xday.toString();
	}
	if (xmonth < 10) {
		xmonth = "0"+xmonth.toString();
	}
	
	for (let i = 0; i < datestring.length; i++) {
		datestring = datestring.replace("%H", d.getHours());
		datestring = datestring.replace("%M", d.getMinutes());
		datestring = datestring.replace("%S", d.getSeconds());
		datestring = datestring.replace("%A", FullDay[d.getDay()]);
		datestring = datestring.replace("%d", d.getDate());
		datestring = datestring.replace("%b", d.getMonth()+1);
		datestring = datestring.replace("%B", FullMonth[d.getMonth()]);
		datestring = datestring.replace("%Y", d.getFullYear());
		datestring = datestring.replace("%x", `${xmonth}/${xday}/${xyear}`);
	}
	
	return datestring;
};

Pack.prototype.datetime = function(datestring) {
	d = new Date();
	
	FullDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	FullMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	xday = (d.getDate()).toString();
	xmonth = (d.getMonth()+1).toString();
	xyear = (d.getYear()-100).toString();
	if (xday < 10) {
		xday = "0"+xday.toString();
	}
	if (xmonth < 10) {
		xmonth = "0"+xmonth.toString();
	}
	
	for (let i = 0; i < datestring.length; i++) {
		datestring = datestring.replace("%H", d.getHours());
		datestring = datestring.replace("%M", d.getMinutes());
		datestring = datestring.replace("%S", d.getSeconds());
		datestring = datestring.replace("%A", FullDay[d.getDay()]);
		datestring = datestring.replace("%d", d.getDate());
		datestring = datestring.replace("%b", d.getMonth()+1);
		datestring = datestring.replace("%B", FullMonth[d.getMonth()]);
		datestring = datestring.replace("%Y", d.getFullYear());
		datestring = datestring.replace("%x", `${xmonth}/${xday}/${xyear}`);
	}
	
	return datestring;
};

Pack4.prototype.timeMod = function(time) {
	results = [];
	div1 = divmod(time, 60);
	m = div1[0];
	s = div1[1];
	div2 = divmod(m, 60);
	h = div2[0];
	m = div2[1];
	div3 = divmod(h, 24);
	d = div3[0];
	h = div3[1];
	
	results.push(d);
	results.push(h);
	results.push(m);
	results.push(s);
	return results;
};

Pack.prototype.timeMod = function(time) {
	results = [];
	div1 = divmod(time, 60);
	m = div1[0];
	s = div1[1];
	div2 = divmod(m, 60);
	h = div2[0];
	m = div2[1];
	div3 = divmod(h, 24);
	d = div3[0];
	h = div3[1];
	
	results.push(d);
	results.push(h);
	results.push(m);
	results.push(s);
	return results;
};

Pack.prototype.prune = function(array, int, type) {
	if (type == null) { type = "<"; }
	if (int == null) {int = array.length; }
	for (let i = 0; i < int; i++) {
		if (type == "<") { array.pop(); }
		else if (type == ">") { array.shift(); }
	}
	return array;
};

Array.prototype.prune = function(int, type) {
	if (type == null) { type = "<"; }
	if (int == null) {int = this.length; }
	for (let i = 0; i < int; i++) {
		if (type == "<") { this.pop(); }
		else if (type == ">") { this.shift(); }
	}
	return this;
};

Pack.prototype.get = function(string, int, type) {
    if (int == null) { int = 0; }
	if (type == null || type.toLowerCase() == "letter" || type.toLowerCase() == "l") { spl = ""; }
	else if (type.toLowerCase() == "word" || type.toLowerCase() == "w") { spl = " "; }
	
	return string.split(spl)[int];
};

String.prototype.get = function(int, type) {
    if (int == null) { int = 0; }
	if (type == null || type.toLowerCase() == "letter" || type.toLowerCase() == "l") { spl = ""; }
	else if (type.toLowerCase() == "word" || type.toLowerCase() == "w") { spl = " "; }
	
	return this.split(spl)[int];
};

Pack.prototype.remove = function(array, int) {
	const res = [];
	const o = array;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) {
		    res.push(array.shift());
		}
		if (i == int) {
		    array.shift();
		}
	}
    return res;
};


Array.prototype.remove = function(int) {
	const res = [];
	const o = this;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) {
		    res.push(this.shift());
		}
		if (i == int) {
		    this.shift();
		}
	}
    return res;
};

Pack.prototype.flip = function(array, int1, int2) {
	const a = array[int1];
	const b = array[int2];
	
	array[int1] = b;
	array[int2] = a;
	
	return array;
}

Array.prototype.flip = function(int1, int2) {
	const a = this[int1];
	const b = this[int2];
	
	this[int1] = b;
	this[int2] = a;
	
	return this;
};

Pack.prototype.flop = function(array, int1, int2) {
	const a = array[int1];
	const b = array[int2];
	
	const res = [];
	const o = array;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int1 || i > int1) {
		    res.push(a);
		    array.shift();
		}
		if (i == int1) {
		    res.push(b);
		    array.shift();
		}
	}
    return res;
};

Array.prototype.flop = function(int1, int2) {
	const a = this[int1];
	const b = this[int2];
	
	const res = [];
	const o = this;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int1 || i > int1) {
		    res.push(a);
		    this.shift();
		}
		if (i == int1) {
		    res.push(b);
		    this.shift();
		}
	}
    return res;
};

Pack.prototype.pushTo = function(array, object, int) {
	const res = [];
	const o = array;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) {
		    res.push(array.shift());
		}
		
		if (i == int) {
		    res.push(object);
		    res.push(array.shift());
		}
	}
    return res;
};

Array.prototype.pushTo = function(object, int) {
	const res = [];
	const o = this;
	const length = o.length;
	for (let i = 0; i < length; i++) {
		if (i < int || i > int) {
		    res.push(this.shift());
		}
		
		if (i == int) {
		    res.push(object);
		    res.push(this.shift());
		}
	}
    return res;
};

String.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.includes(array[i])) {
			return true;
		}
	}
	return false;
}

Array.prototype.includesFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.includes(array[i])) {
			return true;
		}
	}
	return false;
}

Pack.prototype.includesFor = function(string, array) {
	for (let i = 0; i < array.length; i++) {
		if (string.includes(array[i])) {
			return true;
		}
	}
	return false;
}

String.prototype.startsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.startsWith(array[i])) {
			return true
		}
	}
	return false;
}

Pack.prototype.startsWithFor = function(string, array) {
	for (let i = 0; i < array.length; i++) {
		if (string.startsWith(array[i])) {
			return true
		}
	}
	return false;
}

String.prototype.endsWithFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this.endsWith(array[i])) {
			return true
		}
	}
	return false;
}

Pack.prototype.endsWithFor = function(string, array) {
	for (let i = 0; i < array.length; i++) {
		if (string.endsWith(array[i])) {
			return true
		}
	}
	return false;
}

String.prototype.equalFor = function(array) {
	for (let i = 0; i < array.length; i++) {
		if (this == array[i]) {
			return true
		}
	}
	return false;
}

Pack.prototype.equalFor = function(string, array) {
	for (let i = 0; i < array.length; i++) {
		if (string == array[i]) {
			return true
		}
	}
	return false;
}

Number.prototype.compareFor = function(array, symb) {
    res = [];
	symbols = [">", "<", ">=", "<=", "==", "!="];
	if (symb == null) {
	    symb = "==";
	}
	for (let i = 0; i < array.length; i++) {
	    var thing = new Function(`if (${parseInt(this)} ${symb} ${array[i]}) { return true; } else { return false; }`);
	    res.push(thing());
	}
	return res;
}

Pack.prototype.compareFor = function(int, array, symb) {
    res = [];
	symbols = [">", "<", ">=", "<=", "==", "!="];
	if (symb == null) {
	    symb = "==";
	}
	for (let i = 0; i < array.length; i++) {
	    var thing = new Function(`if (${parseInt(int)} ${symb} ${array[i]}) { return true; } else { return false; }`);
	    res.push(thing());
	}
	return res;
}

const PyPI = new Pack(); // PyPI.includesFor("abc", ["a", "b"])
const random = new Pack2(); // random.randint(1, 5)
const asyncio = new Pack3(); // await asyncio.sleep(1)
const datetime = new Pack4(); // datetime.datetime("%H:%M:%S")
const extMath = new Pack5(); // extMath.divmod(seconds, 60)

// require('./PyPI.js')