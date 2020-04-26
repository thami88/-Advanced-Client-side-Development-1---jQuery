$(document).ready(function() {
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on(
		"click",
		"#btnSave",
		function(event) {
			// Clear status msges-------------
			$("#alertSuccess").text("");
			$("#alertSuccess").hide();
			$("#alertError").text("");
			$("#alertError").hide();
			// Form validation----------------
			var status = validateItemForm();
			// If not valid-------------------
			if (status != true) {
				$("#alertError").text(status);
				$("#alertError").show();
				return;
			}
			// If valid-----------------------
			var student = getStudentCard($("#txtName").val().trim(), $(
					'input[name="rdoGender"]:checked').val(), $("#ddlYear")
					.val());
			$("#colStudents").append(student);

			$("#alertSuccess").text("Saved successfully.");
			$("#alertSuccess").show();

			$("#formStudent")[0].reset();
		});

// REMOVE==========================================
$(document).on("click", ".remove", function(event) {
	$(this).closest(".student").remove();

	$("#alertSuccess").text("Removed successfully.");
	$("#alertSuccess").show();
});

// CLIENT-MODEL=================================================================
function validateItemForm() {
	// NAME
	if ($("#txtName").val().trim() == "") {
		return "Insert student name.";
	}
	// GENDER
	if ($('input[name="rdoGender"]:checked').length === 0) {
		return "Select gender.";
	}
	// YEAR
	if ($("#ddlYear").val() == "0") {
		return "Select year.";
	}
	return true;
}