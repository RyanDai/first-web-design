//This part is download from <http://www.lanrenzhijia.com/banner/363.html>
//Author: lanrenzhijia  Date:29-06-2012

//calculate the width of images
var width1=0;
var widthd=document.getElementById('idSlider2')
var width=document.getElementById('idSlider2').getElementsByTagName("li");
var tpz=width.length;//the number of images
for(var i=0; i<width.length; i++){
	width1+=650;
	}
widthd.style.width=width1+'px';


var $ = function (id) {
	return "string" == typeof id ? document.getElementById(id) : id;
};

var Class = {
  create: function() {
	return function() {
	  this.initialize.apply(this, arguments);
	}
  }
}

Object.extend = function(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
	return destination;
}

var TransformView = Class.create();
TransformView.prototype = {
  
  initialize: function(container2, slider, parameter, count, options) {
	if(parameter <= 0 || count <= 0) return;
	var oContainer = $(container2), oSlider = $(slider), oThis = this;

	this.Index = 0;//the current index
	
	this._timer = null;//set the timer
	this._slider = oSlider;
	this._parameter = parameter;
	this._count = count || 0;
	this._target = 0;
	
	this.SetOptions(options);
	
	this.Up = !!this.options.Up;
	this.Step = Math.abs(this.options.Step);
	this.Time = Math.abs(this.options.Time);
	this.Auto = !!this.options.Auto;
	this.Pause = Math.abs(this.options.Pause);
	this.onStart = this.options.onStart;
	this.onFinish = this.options.onFinish;
	
	oContainer.style.overflow = "hidden";
	oContainer.style.position = "relative";
	
	oSlider.style.position = "absolute";
	oSlider.style.top = oSlider.style.left = 0;
  },
  //set default property
  SetOptions: function(options) {
	this.options = {
		Up:			true,//move left
		Step:		30,//the rate of move
		Time:		5,//time of moving
		Auto:		true,//if it will change automaticlly
		Pause:		3000,//time each image displays
		onStart:	function(){},//start to move
		onFinish:	function(){}//finish the move
	};
	Object.extend(this.options, options || {});
  },
  //start to move
  Start: function() {
	if(this.Index < 0){
		this.Index = this._count - 1;
	} else if (this.Index >= this._count){ this.Index = 0; }
	
	this._target = -1 * this._parameter * this.Index;
	this.onStart();
	this.Move();
  },
  //move
  Move: function() {
	clearTimeout(this._timer);
	var oThis = this, style = this.Up ? "top" : "left", iNow = parseInt(this._slider.style[style]) || 0, iStep = this.GetStep(this._target, iNow);
	
	if (iStep != 0) {
		this._slider.style[style] = (iNow + iStep) + "px";
		this._timer = setTimeout(function(){ oThis.Move(); }, this.Time);
	} else {
		this._slider.style[style] = this._target + "px";
		this.onFinish();
		if (this.Auto) { this._timer = setTimeout(function(){ oThis.Index++; oThis.Start(); }, this.Pause); }
	}
  },
  //get the step
  GetStep: function(iTarget, iNow) {
	var iStep = (iTarget - iNow) / this.Step;
	if (iStep == 0) return 0;
	if (Math.abs(iStep) < 1) return (iStep > 0 ? 1 : -1);
	return iStep;
  },
  //stop
  Stop: function(iTarget, iNow) {
	clearTimeout(this._timer);
	this._slider.style[this.Up ? "top" : "left"] = this._target + "px";
  }
};

window.onload=function(){
	function Each(list, fun){
		for (var i = 0, len = list.length; i < len; i++) { fun(list[i], i); }
	};
	
	var objs2 = $("idNum2").getElementsByTagName("li");
	var tv2 = new TransformView("idTransformView2", "idSlider2", 650, tpz, {	
		onStart: function(){ Each(objs2, function(o, i){ o.className = tv2.Index == i ? "on" : ""; }) },//set the style of button
		Up: false
	});
	tv2.Start();
	Each(objs2, function(o, i){
		o.onmouseover = function(){
			o.className = "on";
			tv2.Auto = false;
			tv2.Index = i;
			tv2.Start();
		}
		o.onmouseout = function(){
			o.className = "";
			tv2.Auto = true;
			tv2.Start();
		}
	})
	
	
}