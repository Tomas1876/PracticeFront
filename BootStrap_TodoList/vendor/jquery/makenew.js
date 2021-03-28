var id = 0;
$(document).ready(function () {
    $("table.dynatable input.add").on('keypress', function () {
        id++;
        var master = $(this).parents("table.dynatable");
        var prot = master.find(".prototypeQ:first").clone(true);
        prot.find(".id").attr("value", id);
        master.find("tbody").append(prot);
    });

    $("table.dynatable button.add2").on('click', function () {
        var master = $(this).parents("table.dynatable");
        var prot = master.find(".prototypeA:first").clone(true);
        prot.find(".id").attr("value", id);
        master.find("tbody tr:last").after(prot);
    });

    $("table.dynatable button.remove").on("click", function () {
        $(this).parents("tr").remove();
    });
});