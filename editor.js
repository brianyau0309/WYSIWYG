function submit_form() {
    var theForm = document.getElementById("myform");
    theForm.elements['op'].value = window.frames['TextField'].document.body.innerHTML;
    theForm.submit();
}
window.addEventListener("load", function(){
    var editor = TextField.document;
    editor.designMode = "on"
    //Bold
    btnBold.addEventListener("click",function(){
        editor.execCommand("Bold", false, null);
    },false);
    //Italic
    btnItalic.addEventListener("click",function(){
        editor.execCommand("Italic", false, null);
    },false);
    //Underline
    btnUnderln.addEventListener("click",function(){
        editor.execCommand("Underline", false, null);
    },false);
    //Strike
    btnStrike.addEventListener("click",function(){
        editor.execCommand("Strikethrough", false, null);
    },false);
    //SuperScript
    btnSup.addEventListener("click",function(){
        editor.execCommand("Superscript", false, null);
    },false);
    //SubScript
    btnSub.addEventListener("click",function(){
        editor.execCommand("Subscript", false, null);
    },false);

    //Ordered List
    btnOList.addEventListener("click", function(){
        editor.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random() * 1000));
    },false);
    //Unordered List
    btnUList.addEventListener("click", function(){
        editor.execCommand("InsertUnorderedList", false, "newOL" + Math.round(Math.random() * 1000));
    },false);

    //Change font color
    btnFontColor.addEventListener("click", function(event){
        editor.execCommand("ForeColor", false, event.target.value);
    },false)
    colorFont.addEventListener("change", function(event){
        editor.execCommand("ForeColor", false, event.target.value);
        document.getElementById('btnFontColor').style.color = event.target.value;
        document.getElementById('btnFontColor').value = event.target.value;
    },false);
    //Change highlight color
    btnHighlightColor.addEventListener("click", function(event){
        editor.execCommand("BackColor", false, event.target.value);
    },false)
    colorHighlight.addEventListener("change", function(event){
        editor.execCommand("BackColor", false, event.target.value);
        document.getElementById('btnHighlightColor').style.backgroundColor = event.target.value;
        document.getElementById('btnHighlightColor').value = event.target.value;
    },false);

    //fontfamily change
    fontChanger.addEventListener("change", function(event){
        editor.execCommand("FontName", false, event.target.value)
    },false)
    //font size
    fontSizeChanger.addEventListener("change", function(event){
        editor.execCommand("FontSize", false, event.target.value)
    },false)

    //Hyper Link
    btnLink.addEventListener("click", function(){
        var url = prompt("Enter a URL", "http://");
        editor.execCommand("CreateLink", false, url);
    },false)

    //Justify left
    btnJLeft.addEventListener("click", function(){
        editor.execCommand("JustifyLeft", false, null);
    },false)
    //Justify center
    btnJCenter.addEventListener("click", function(){
        editor.execCommand("JustifyCenter", false, null);
    },false)
    //Justify right
    btnJRight.addEventListener("click", function(){
        editor.execCommand("JustifyRight", false, null);
    },false)

},false)