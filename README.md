# aFileWidget
A javascript file select widget. It is used to select file from the local system and view the selected file on the web page.

## Initialize the file widget

Just define the empty div element with id attribute 'uploadWidget'

```shell
   <div class="col-md-offset-3 col-md-6 text-center" id="uploadWidget"> 
   </div>
```

When you need the widget to be initialized and displayed on the web page just call the aFileInitialize('elementIdName') method with the element identifier name.

```shell
   aFileInitialize('uploadWidget');
```

The aFileInitialize() method will initialize and render the widget on the web page. 
Rendered widget will be shown as below screenshot.


#### After Widget is Initialized
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20Initialization.PNG)

#### After File is selected
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20File%20Selection.PNG)


#### Selected File Deletion
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20File%20Deletion.PNG)




