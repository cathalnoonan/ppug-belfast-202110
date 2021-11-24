// Script run using jQuery on-load
$(function() {

    // On load, read the value(s) from the parent form using window.parent.Xrm.Page
    setTimeout(function() {
        $('#spinner').hide();

        var accountName = window.parent.Xrm.Page.getAttribute('name').getValue();
        $('#txtAccountName').val(accountName);
    }, 1000);


    // On form submit, update the parent record and save the record.
    $('#btnSubmit').click(function() {
        // Update property on form
        var accountName = $('#txtAccountName').val();
        window.parent.Xrm.Page.getAttribute('name').setValue(accountName);

        // Save the record
        window.parent.Xrm.Page.data.save();
    });

});