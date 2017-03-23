console.log("må du testes");
text = window.getSelection().toString();
console.log(text);

function minFunction2() {
    text = window.getSelection().toString();
    var splitted = text.split('\n');
    var line = "";
    for (var i = 0; i < splitted.length; i++) {

        delimited = splitted[i].split(',');

        for (var j = 0; j < delimited.length; j++) {
            //console.log(innerData[j]);
            line += delimited[j] + "\t"
        }
        line += "\n"
    }
    //$('textarea#outputText').val(text);
    alert(text)
}
