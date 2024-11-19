const prefix = "[PHPEngineNK] ";
const PHPEngineNK = Class(Object, {
  build: function(){
    let libs = new NnClassLoader({ urls: ['https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66-javadoc.jar', 'https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66-sources.jar', "https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66.jar"] });
    let PHPFactor = libs.type("com.caucho.quercus.script.QuercusScriptEngineFactory");
    let PHPManager = new PHPFactor();
    let PHPEngine = PHPManager.getScriptEngine();
    PHPEngine.put("server", server);
    PHPEngine.put("getServer", server);
    PHPEngine.put("getLogger", plugin.getLogger());
    PHPEngine.put("logger", plugin.getLogger());
    PHPEngine.put("plugin", plugin);
    PHPEngine.put("manager", manager);
    let subClass = {
      put: function(name, content){
        PHPEngine.put(name, content);
      },
      eval: function(code, context){
          if(context == null){
              PHPEngine.eval(code);
          }else{
        PHPEngine.eval(code, context);
          }
      },
      getEngineName: function(){
        return "PHPEngineNK & " + PHPManager.getEngineName();
      },
      setNnClassLoader: function(codeNC, classes){
        let ClasLoad = new NnClassLoader(codeNC);
        let KeysClass = Object.keys(classes);
        for(var keys in KeysClass){
          PHPEngine.put(KeysClass[keys], ClasLoad.type(classes[KeysClass[keys]]));
        }
      },
      getLanguageVersion: function(){
        return PHPManager.getLanguageVersion();
      },
      getManager: function(){
        return PHPManager;
      },
      getEngine: function(){
        return PHPEngine;
      },
      getClass: function(){
        return PHPEngineNK;
      },
      getEngineClass: function(){
        return PHPFactor;
      },
      ArrayToCode: function(arrayCode){
        return PHPManager.getProgram(arrayCode);
      },
      printPHPCode: function(message){
          return PHPManager.getOutputStatement(message);
      },
      ConvertPHP: function(object, func, args){
          let stringToPHP = "$"+object+"->"+func+"(";
          if(args != null){
          for(var idk in args){
              if(args[idk].indexOf("'") == -1 && args[idk].indexOf("`") == -1 && args[idk].indexOf('"') == -1){
                  args[idk] = "$"+args[idk];
              }
              if(idk != 0){
                  stringToPHP += ", " + args[idk];
              }else{
                  stringToPHP += args[idk];
              }
          }
          }
          stringToPHP += ");\n";
          return stringToPHP;
      },
      evalFile: function(fileA){
          if(!fileA instanceof java.io.File){
              throw "The object is not a file!";
              return;
          }
          if(!fileA.exists()){
              throw "The file does not exist!";
              return;
          }
          let reader = new java.io.FileReader(fileA);
          PHPEngine.eval(reader);
          reader.close();
      }
    };
    return subClass;
  },
  getClass: function(){
    return PHPEngineNK;
  },
  constructor: function(){
    return this.build();
  },
  getName: function(){
    return "PHPEngineNK";
  },
  toString: function(){
    return "PHPEngineNK[]";
  }
});
function enable(){
  console.info(prefix+"§aDone");
}
function load(){
  console.info(prefix+"§eLoading...");
}
function disable(){
  console.info(prefix+"§cBye!");
}
module.exports = {
  onEnable: enable,
  onLoad: load,
  onDisable: disable,
  PHPEngineNK: PHPEngineNK
};
