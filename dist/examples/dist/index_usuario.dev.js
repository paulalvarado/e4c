"use strict";

// dxDataGrid mis pagos con dataSource desde http://localhost/e4c/usuarios/mis_pagos
$(function () {
  var dataSource = new DevExpress.data.DataSource({
    load: function load() {
      var d = $.Deferred();
      $.getJSON("http://localhost/e4c/usuarios/mis_pagos", function (result) {
        d.resolve(result);
      });
      return d.promise();
    }
  });
  $("#gridContainer").dxDataGrid({
    dataSource: dataSource,
    columns: [{
      dataField: "id_pago",
      caption: "ID",
      width: 50
    }, {
      dataField: "fecha",
      caption: "Fecha",
      dataType: "date",
      format: "dd/MM/yyyy"
    }, {
      dataField: "cantidad",
      caption: "Cantidad",
      dataType: "number"
    }, {
      dataField: "monto",
      caption: "Monto",
      dataType: "number",
      format: "currency"
    }, {
      dataField: "total",
      caption: "Total",
      dataType: "number",
      format: "currency",
      calculateCellValue: function calculateCellValue(data) {
        return data.cantidad * data.monto;
      }
    }, {
      dataField: "descripcion",
      caption: "Descripción"
    }]
  });
});