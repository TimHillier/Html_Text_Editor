//import fonts
var Font = Quill.import('formats/font');
var fontSize = Quill.import('attributors/style/size');
// var fontSize = Quill.import("formats/size")
// var Font = Quill.import('attributors/style/font');
Font.whitelist = ['mirza','roboto','plumbdl']
fontSize.whitelist=['10px','12px','14px','16px','18px','22px','24px','26px','28px','30px','32px','48px','72px']
// fontSize.whitelist["extra-small","small","medium","large"]
Quill.register(fontSize,true)
Quill.register(Font,true)
//set toolbar options
var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //[{ 'font': ['','PlumBDL','Mirza','Roboto'] }],
  [{ 'align': [] }],

  ['clean'] 
];

var options = 
{
  modules:
  {
    'toolbar':{container:'#toolbar-container'}
  },
  placeholder: 'Enter Text',
  theme:'snow'
}

//init quill
var quill = new Quill('#editor',options);


//save as pdf button
var pdfButton = document.querySelector('#saveAsPDFButton');
pdfButton.addEventListener('click',function(){

 var titleBox = document.getElementById('DocumentTitle').value

  if(titleBox == "")
  {
    titleBox = "NewFile"
  }
  
  //save the words as a pdf
  var pdfDoc = new jsPDF()
  pdfDoc.setFont('PlumBDL','normal')
  pdfDoc.text(quill.getText(0,quill.getLength()),10,10);
  pdfDoc.save(titleBox+ ".pdf");
});
