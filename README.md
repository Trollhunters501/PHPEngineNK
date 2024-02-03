# PHPEngineNK
![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

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

### getEngineName:
returns the name of the engine (quercus) and the lib

```js
console.info("engine: " + TestPHP.getEngineName());
```

### setNnClassLoader:
set global objects of classes obtained from the Nnclassloader API

```js
//first parameter Nnclassloader API code second a json that the variable name is set as global object and the content of the variable is the class obtained from the API
TestPHP.setNnClassLoader({ urls: ["https://testurl.com/test.jar"] }, {
  objectName: "class.package.example"
}); //PHP: $objectName->testFunctionInClass("hello world!");
```

### getLanguageVersion:
return PHP version

PHP versión default: 5.3.2

### getManager:
return manager engine (quercus)

### getEngine:
returns the original engine without the extra functions added by the library (quercus)

### getClass:
returns the JS library class

### getEngineClass:
returns the original engine class (quercus)

### ArrayToCode:
returns PHP code in string separated by lines without needing to put ";" nor the php tag

```js
TestPHP.eval(TestPHP.ArrayToCode(["$getLogger->info('hello world!')", "$getServer->getLogger()->info('hello world 2!')"]));
```

### printPHPCode:
returns PHP code in string to print a message in the console

Do not use in ArrayToCode

```js
TestPHP.eval("<?php "+TestPHP.printPHPCode("Hello world!")+" ?>");
```

### ConvertPHP:
returns PHP code in string that converts the arguments into PHP code

Do not use in ArrayToCode

```js
TestPHP.eval("<?php "+TestPHP.ConvertPHP("object", "functionInObject", ["'args (Remember if you want to pass a string use quotes or you will pass it as an object ($))'", "arg2..."])+" ?>");
```

### evalFile:
run PHP in a PHP file (remember to create the file first)

```js
TestPHP.evalFile(manager.getFile("TestPHP", "Main.php"));
```
#### In plugins/JSEngineNK/TestPHP/Main.php:
```php
<?php
$getLogger->info("hello world!");
?>
```
### Call Java classes from PHP:
Call Java classes from PHP similar to JSEngineNK's Java.type

```php
\Java("con.nukkit.Server");
```
Same as Java.type!

Creadores Program © 2024
