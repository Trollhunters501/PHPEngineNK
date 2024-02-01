const PHPEngineNK = Class(Object, {
  build: function(){
    let libs = new NnClassLoader({ urls: ['https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66-javadoc.jar', 'https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66-sources.jar', "https://repo1.maven.org/maven2/com/caucho/quercus/4.0.66/quercus-4.0.66.jar"] });
    let subClass = {
      put: function(name, content){
        
      },
      eval: function(code){
        
      }
    };
    return subClass;
  }
});
