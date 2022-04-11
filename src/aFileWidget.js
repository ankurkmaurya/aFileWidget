/*!
 * aFileWidget.js - js file for handling selected file widget.
 * 
 * Author  : Ankur Maurya
 * Version : 1.1.0
 *           1.4.0
 *           2.0.0
 * 
 */

var filearray = [];
var maxfile = 0;
var fileType = '';
var inputElem;
var elemInput = "elemRef_input";
var elemSelect = "elemRef_select";
var elemInfo = "elemRef_info";
var elemClear = "elemRef_clear"; 
var widgetEnclosure = "elemRef_Enclosure"; 


function aFileInitialize(elemRef) {
    inputElem = elemRef + "_inputCtrl";
    elemInput = elemRef + "_input";
    elemSelect = elemRef + "_select";
    elemInfo = elemRef + "_info";
    elemClear = elemRef + "_clear"; 
    widgetEnclosure = elemRef + "_Enclosure"; 
    
    $("#"+elemRef).html("<div class='afile'>"+
                            "<div class='afile-input' id='"+elemInput+"'>"+
                            "</div>"+
                            "<div class='afile-select' id='"+elemSelect+"'><b>Select File</b></div>"+
                            "<div class='afile-info' id='"+elemInfo+"'></div>"+
                            "<div class='afile-clear' id='"+elemClear+"'><b>Remove File</b></div>"+
                         "</div>"+
                         "<div class='afile-enclosure' id='"+widgetEnclosure+"'></div>");
    
    
    $("#"+elemInput).html('');
    if (maxfile === 0) {
        $("#"+elemInput).html("<input type='file' name='" + inputElem + "' id='_" + inputElem + "' style='display:none;' multiple />");
    }

    if (maxfile === 1) {
        $("#"+elemInput).html("<input type='file' name='" + inputElem + "' id='_" + inputElem + "' style='display:none;' />");
    }

    $("#"+elemSelect).on('click', function() {
        $("#_"+inputElem).trigger('click');
    });

    initilize_afileInput();

    $("#"+elemClear).on('click', function() {
        document.getElementById(widgetEnclosure).innerHTML = '';
        $("#"+elemInfo).html('');
        while (filearray.length > 0)
        {
            filearray.splice(0, 1);
        }

        if (maxfile === 0) {
            $("#"+elemInput).html('');
            $("#"+elemInput).html("<input type='file' name='" + inputElem + "' id='_" + inputElem + "' style='display:none;' multiple />");
        }

        if (maxfile === 1) {
            $("#"+elemInput).html('');
            $("#"+elemInput).html("<input type='file' name='" + inputElem + "' id='_" + inputElem + "' style='display:none;' />");
        }
        initilize_afileInput();
    });
}

function initilize_afileInput() {

    $("#_"+inputElem).on('change', function(e) {
        while (filearray.length > 0)
        {
            filearray.splice(0, 1);
        }

        var fileWidgetEnclosure = document.getElementById(widgetEnclosure);
        fileWidgetEnclosure.innerHTML = '';
        var selectedFile = e.target.files;
        var noOfFiles = selectedFile.length; //To get the number of selected files.
        updateFileInfo(noOfFiles);

        for (var i = 0; i < noOfFiles; i++) {
            var file = selectedFile[i];
            var fileName = file.name;
            var fileExtension = fileName.substr(fileName.lastIndexOf('.'));
            if (fileType === '') {
                buildFileWidget(fileWidgetEnclosure, file.name, file.type, file.size, i);
                filearray.push(i);
            }
            else {
                var validFileType = new RegExp(fileType);
                var validFile = validFileType.test(fileExtension);
                if (validFile) {
                    buildFileWidget(fileWidgetEnclosure, file.name, file.type, file.size, i);
                    filearray.push(i);
                }
                else {
                    updateFileInfo(0);
                    alert("Invalid File selected.\nValid File is " + fileType);
                }
            }
        }
        return false;
    });
}


function buildFileWidget(widgetEnclosure, fileName, fileType, fileSize, index) { //fileName,fileType,fileSize,index
    var afileWidget = "<div id='_" + index + "'><div class='afileWidget'>";
    var afileWidget_icon = "<div class='afileWidget-icon'>" + getIcon(fileType) + "</div>";
    var afileWidget_name = "<div class='afileWidget-name'><b>" + fileName + "</b></div>";
    var afileWidget_type = "<div class='afileWidget-type'><b>Type: </b>" + getFileType(fileType, fileName) + "</div>";
    var afileWidget_size = "<div class='afileWidget-size'><b>Size: </b>" + getSize(fileSize) + "</div>";
    var afileWidget_remove = "<div class='afileWidget-remove'><a href='#' onclick=\"removeWidget('" + index + "')\"><i class='fa fa-trash-o fa-lg'></i></a></div>";

    var widget = afileWidget + afileWidget_icon + afileWidget_name + afileWidget_type + afileWidget_size + afileWidget_remove + "</div></div>";
    widgetEnclosure.innerHTML = widgetEnclosure.innerHTML + widget;
}

function getIcon(type) {
    if (!type) {
        return "<i class='fa fa-file-o fa-3x'></i>";
    }
    else {
        var lastIndex = type.lastIndexOf("/");
        var typesize = type.length;
        var typo = type.substring(0, lastIndex);

        switch (typo) {
            case 'image':
                return "<i class='fa fa-file-image-o fa-3x'></i>";
                break;
            case 'application':
                return "<i class='fa fa-file-code-o fa-3x'></i>";
                break;
            case 'text':
                return "<i class='fa fa-file-text-o fa-3x'></i>";
                break;
            default:
                return "<i class='fa fa-file-o fa-3x'></i>";
        }
    }
}

function getSize(filesize) {
    var fileByte = parseInt(filesize);
    var size;
    if (fileByte < 1000) {
        size = fileByte + " Bytes";
    }
    else if (fileByte > 1000 && fileByte < 1000000) {
        fileByte = fileByte / 1000;
        size = Math.round(fileByte) + " KB";
    }
    else if (fileByte > 1000000 && fileByte < 1000000000) {
        fileByte = fileByte / 1000000;
        size = Math.round(fileByte) + " MB";
    }
    else if (fileByte > 1000000000) {
        fileByte = fileByte / 1000000000;
        size = Math.round(fileByte) + " GB";
    }
    return size;
}

function getFileType(type, filename) {
    if (type) {
        return type;
    }
    else {
        var lastIndex = filename.lastIndexOf(".");
        var typesize = filename.length;
        var extension = filename.substring(lastIndex + 1, typesize);
        return "system/" + extension;
    }
}

function updateFileInfo(noOfFiles) {
    var fileinfo;
    if (noOfFiles > 1) {
        fileinfo = "<b>" + noOfFiles + "</b> Files selected";
    }
    if (noOfFiles === 1) {
        fileinfo = "<b>" + noOfFiles + "</b> File selected";
    }
    if (noOfFiles === 0) {
        fileinfo = "";
    }
    $("#"+elemInfo).html(fileinfo);
}

function removeWidget(index) {
    var val = parseInt(index);
    var i = filearray.indexOf(val);
    if (i !== -1) {
        filearray.splice(i, 1);
    }
    updateFileInfo(filearray.length);
    document.getElementById("_" + index).innerHTML = "";
    if (filearray.length === 0) {
        $("#"+elemInput).html('');
        $("#"+elemInput).html("<input type='file' name='" + inputElem + "' id='_" + inputElem + "' style='display:none;' multiple />");
        initilize_afileInput();
    }

}

function showFileArray() {
    var sequence = '';
    for (var j = 0; j < filearray.length; j++) {
        sequence = sequence + filearray[j];
        +"/n";
    }
    alert(sequence);
}

function showLen() {
    alert("LEN : " + document.getElementById("_" + inputElem).files.length);
}
