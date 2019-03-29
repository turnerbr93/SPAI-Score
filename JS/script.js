function subForm() {
$(document).ready(function() {
    
    $("#submitForm").click(function(e) {
        e.preventDefault();
        var url = "file:///C:/Users/Brannin/SPAI/public/liveScore.html";
        window.open(url, '_blank');
    });
});

}
subForm();