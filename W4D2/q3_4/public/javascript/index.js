$(function () {
    let timeoutId;

    $("#addToCart").submit(() => {
        const data = {
            id: $("#id").val()
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });

    const addedSuccess = data => {
        $("#cart-items").text(data.cartItems);
        showAlert('success', "Item successfully added to cart");
    }

    const noSuccess = () => {
        showAlert('danger', "Unable to reach server");
    }

    function showAlert(type, msg) {
        hideAlert();
        const markup = $('<div>', {
            class: `alert alert-${type} alert-dismissible fade show`,
            role: "alert",
            text: `${msg}`,
            id: "alert"
        }).append(
            $('<button>', {id: "dismiss", class: "close", type: "button"}).attr({
                "data-dismiss": "alert",
                "aria-label": "Close"
            }).append($('<span>').attr({"aria-hidden": "true"}).html("&times;"))
        ).css({});
        $('#container').prepend(markup);
        $('#dismiss').click(hideAlert);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(hideAlert, 3500);
    }

    function hideAlert() {
        const el = $('#alert');
        el.remove();
    }
});
