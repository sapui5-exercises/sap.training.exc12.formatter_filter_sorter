jQuery.sap.require("sap.training.exc12.formatter_filter_sorter.util.Formatter");

sap.ui.controller("sap.training.exc12.formatter_filter_sorter.view.Main", {

	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data.json");
		this.getView().setModel(oModel);
	},

	carrName: function(sCarrId) {
		switch (sCarrId) {
			case "LH":
				return "Lufthansa";
			case "JL":
				return "Japan Airlines";
			case "AZ":
				return "Alitalia";
			default:
				return sCarrId;
		}
	},

	onFilterSelectionChange: function(oEvent) {
		var oTable = this.getView().byId("idFlightsTable");
		var sCarrId = oEvent.oSource.getSelectedKey();

		if (sCarrId === "") {
			oTable.getBinding("items").filter([]);
			return;
		}

		var oFilter = new sap.ui.model.Filter(
			"carrId",
			sap.ui.model.FilterOperator.EQ,
			sCarrId);

		oTable.getBinding("items").filter([oFilter]);
	},

	onSortSelectionChange: function(oEvent) {
		var oTable = this.getView().byId("idFlightsTable");
		var sProperty = oEvent.oSource.getSelectedKey();

		if (sProperty === "") {
			oTable.getBinding("items").sort([]);
			return;
		}

		var oSorter = new sap.ui.model.Sorter(sProperty, false);
		oTable.getBinding("items").sort([oSorter]);
	}

});