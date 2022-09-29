$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = data => {
        $("#text").val(data.answer);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#ask").submit(() => {
        const data = {
            question: $("#text").val()
        };
        $.getJSON({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });

    $("#text").focus(function () {
        $(this).select();
    });
});