function generateMockText() {
    var input = document.getElementById("inputMockTextbox").value;
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var c = input.charAt(i).toLowerCase();
        if (Math.random() < 0.5) {
            c = c.toUpperCase();
        }
        output += c;
    }
    document.getElementById("outputMockTextbox").value = output;
}