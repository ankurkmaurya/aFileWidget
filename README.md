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
![Widget Initialization](https://user-images.githubusercontent.com/100197611/162743024-4a4870b6-c0b8-4f83-baf7-929ce3bf480b.PNG)


![Widget File Selection](https://user-images.githubusercontent.com/100197611/162743099-f2e61133-eb0d-42b3-b2a3-6fd3a02a45bd.PNG)

![Widget File Deletion](https://user-images.githubusercontent.com/100197611/162743122-c494df4a-e8a7-40eb-aa30-3662b49e8d1e.PNG)


