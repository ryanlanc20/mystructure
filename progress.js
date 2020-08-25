(function(){

    let name = "";

    function setName(nameInput)
    {
        name = nameInput;
    }

    function getName()
    {
        return name;
    }

    let instance =  function(){
        let prototype = {
            "setName": function(name){setName(name);},
            "getName": function(){return getName();}
        };
        return prototype;
    };
    return window.mystructure = instance;
})();
