function generate() {
    command1 = "java -jar revanced-cli.jar -a youtube.apk -c "
    deviceID = document.getElementById("deviceid").value
    if(deviceID){deviceoption = "-d " + deviceID; command3 = " --install"} else{deviceoption = ""; command3 = ""}
    command2 = " -o revanced.apk -b revanced-patches.jar -m integrations.apk "

    patches = ""
    //thx to https://www.aspsnippets.com/Articles/Get-multiple-selected-checked-CheckBox-values-in-Array-using-JavaScript.aspx
    selected = new Array();
    chks = document.querySelectorAll('input[type=checkbox]')
    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].id);
        }
    }
    if (selected.length > 0) {
        patches = "-i " + selected.join(" -i ")
    }

    command = command1 + deviceoption + command2 + patches + command3
    document.getElementById("cmdcontainer").innerHTML = command
}

window.onload = generate

function copycommand() {
    //thx to https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
    var range = document.createRange();
                    range.selectNode(document.getElementById("cmdcontainer"));
                    window.getSelection().removeAllRanges();
                    window.getSelection().addRange(range);
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();
    
}