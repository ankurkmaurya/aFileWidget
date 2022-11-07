# aFileWidget (A File Upload Widget for Web Page) 
A Javascript file select widget. It is used to select file from the local system and view the selected file on the web page.

## 1. Initialize the File Widget

Suppose we define the empty div element with id attribute 'uploadWidget'

```shell
   <div class="col-md-offset-3 col-md-6 text-center" id="uploadWidget"> 
   </div>
```

then when we need the widget to be initialized and displayed on the web page just call the aFileInitialize('elementIdName') method with the element identifier name.

```shell
   aFileInitialize('uploadWidget');
```

The aFileInitialize() method will initialize and render the widget on the web page. 
Rendered widget will be shown as below screenshot.


#### a. After Widget is Initialized
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20Initialization.PNG)

#### b. After File is selected
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20File%20Selection.PNG)

#### c. Selected File Deletion
![Widget Initialization](https://github.com/ankurkmaurya/aFileWidget/blob/main/Screenshot/Widget%20File%20Deletion.PNG)


## 2. Access the Selected Files

When we need to access the selected files in our custom javascript method we can access the input element of type file with 
id attribute '_uploadWidget_inputCtrl' where the 'uploadWidget' is the parameter we have provided to aFileInitialize() method
during the initialization of file widget.

```shell
   var fileInput = document.getElementById("_uploadWidget_inputCtrl");
   for (var i = 0; i < filearray.length; i++) {
        var fileIndex = filearray[i];
        formData.append('files[]', fileInput.files[fileIndex]);
    }
```
In the above code 'filearray' is the array which will hold the index of all the selected files.
'formData' is the FormData of the dynamic form element.


## 3. Configuration Settings

This widget has been designed with [Bootstrap](https://getbootstrap.com) and [Font Awesome](https://fontawesome.com) icons so it has dependency on both the libraries.

It has the option to allow multiple or single file select through the 'maxfile' variable.
<ul>
<li>maxfile=0 : To allow multiple file select option.</li>
<li>maxfile=1 : To allow only single file select option.</li>
</ul>



