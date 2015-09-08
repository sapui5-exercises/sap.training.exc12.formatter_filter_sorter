jQuery.sap.declare("sap.training.exc12.formatter_filter_sorter.util.Formatter");

sap.training.exc12.formatter_filter_sorter.util.Formatter = {

	freeSeats: function(seatsMax, seatsOcc) {
		return seatsMax - seatsOcc;
	}
};