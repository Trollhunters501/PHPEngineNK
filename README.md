# PHPEngineNK
Run PHP on Nukkit!

## Requirements:

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

and then you can run PHP in Nukkit!

## Default objects globals:

server and getServer = returns the class cn.nukkit.Server

logger and getLogger = returns the JSEngineNK logger

plugin = returns the JSEngineNK main class

manager = returns the manager class

## Examples:

### eval:
run PHP with string or reader!

```js
TestPHP.eval("<?php $getLogger->info('hello world!'); ?>");
```
### put:
establish a global object that returns a java class or function (not compatible with javascript functions!)

```js
TestPHP.put("exampleName", ExampleJavaClass); //call in php: $exampleName->exampleFunction("hello world!");
```
