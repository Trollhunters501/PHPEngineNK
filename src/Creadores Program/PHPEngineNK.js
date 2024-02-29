if(manager.getPlugin("PHPLib") != null){
script.registerScript({
    name: "PHPEngineNK",
    version: "1.1",
    description: "Run PHP on Nukkit!",
    website: "https://github.com/Trollhunters501/PHPEngineNK/",
    author: "Creadores Program"
});
var PHPEngineNK = Class(Object, {
  build: function(){
    let libs = new NnClassLoader({ jars: [ server.getPluginPath() + 'PHPLib_v4.0.66.jar' ] });
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
        PHPEngine.eval(code, context);
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
        return this;
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
          let FilesImport = new JavaImporter(java.io);
          with(FilesImport){
              let reader = new InputStreamReader(new FileInputStream(fileA));
              PHPEngine.eval(reader);
          }
      }
    };
    return subClass;
  },
  getClass: function(){
    return this;
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
}else{
    console.critical("Not Found PHPLib Plugin! Please download at https://github.com/Trollhunters501/PHPLib/releases/tag/4.0.66");
    throw "Not Found PHPLib Plugin! Disable...";
}
