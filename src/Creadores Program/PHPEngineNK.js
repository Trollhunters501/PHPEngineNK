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
      eval: function(code){
        PHPEngine.eval(code);
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
  }
});
