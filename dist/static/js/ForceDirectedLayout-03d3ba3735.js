var obj={layout:function(){myDiagram.startTransaction("changed Layout");var e=myDiagram.layout,a=document.getElementById("maxIter").value;a=parseInt(a,10),e.maxIterations=a;var t=document.getElementById("epsilon").value;t=parseFloat(t,10),e.epsilonDistance=t;var n=document.getElementById("infinity").value;n=parseFloat(n,10),e.infinityDistance=n;var l=document.getElementById("arrangement").value,r=new go.Size;l=l.split(" ",2),r.width=parseFloat(l[0],10),r.height=parseFloat(l[1],10),e.arrangementSpacing=r;var i=document.getElementById("charge").value;i=parseFloat(i,10),e.defaultElectricalCharge=i;var o=document.getElementById("mass").value;o=parseFloat(o,10),e.defaultGravitationalMass=o;var m=document.getElementById("stiffness").value;m=parseFloat(m,10),e.defaultSpringStiffness=m;var s=document.getElementById("length").value;s=parseFloat(s,10),e.defaultSpringLength=s,myDiagram.commitTransaction("changed Layout")}};