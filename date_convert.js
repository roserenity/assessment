const dateConvert = function() {
    alert(moment(document.getElementById("datepicker").value).format("YYYY-MM-DD"))
}