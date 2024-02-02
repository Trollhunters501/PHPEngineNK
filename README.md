# PHPEngineNK
Run PHP on Nukkit!

Requirements:

JSEngineNK Plugin: https://cloudburstmc.org/resources/jsenginenk.939/

Know Basic JavaScript.

## Installation:

First create a script in JSEngineNK as said in your example.

Check if the Library is installed as follows:

```js
if(!script.getScriptByName("PHPEngineNK")){ //If it is not installed, we install it:
  load("https://raw.githubusercontent.com/Trollhunters501/PHPEngineNK/main/src/Creadores%20Program/PHPEngineNK.js");
}
```

Then create an instance of the Engine:

```js
var TestPHP = new PHPEngineNK().build();
```
