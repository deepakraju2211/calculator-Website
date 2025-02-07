function clickingfunc(val){
    console.log('clickingfunc');
    document.getElementById("box").value +=val;
    }
    
    function calc(){
      var var1=document.getElementById('box').value;
      var var2=eval(var1);
      document.getElementById('box').value=var2
    }
    
    function clearfunc(){
      console.log('clearfunc');
      document.getElementById('box').value="";
    }