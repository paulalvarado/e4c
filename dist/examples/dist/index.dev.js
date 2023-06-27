"use strict";

$(function () {
  var dataSource = new DevExpress.data.DataSource({
    load: function load(loadOptions) {
      var deferred = $.Deferred();
      $.ajax({
        url: "http://localhost/e4c/usuarios/listar",
        method: "GET",
        data: {
          limit: loadOptions.take,
          offset: loadOptions.skip
        },
        dataType: "json",
        success: function success(response) {
          deferred.resolve(response.usuarios, {
            totalCount: response.total
          });
        },
        error: function error(_error) {
          console.log("Error:", _error);
          deferred.reject("Data loading error");
        }
      });
      return deferred.promise();
    },
    update: function update(key, values) {
      // validar que las contraseñas coincidan
      if (values.nuevaContrasena != values.confirmarContrasena) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else if (values.nuevaContrasena == "" && values.confirmarContrasena == "") {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no pueden estar vacías',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else if (values.nuevaContrasena == "" || values.confirmarContrasena == "") {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no pueden estar vacías',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } // verificar que los campos no estén vacíos


      if (values.username == "" || values.nombre == "" || values.apellido == "" || values.email == "") {
        Swal.fire({
          icon: 'error',
          title: 'Los campos no pueden estar vacíos',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else {
        // notificar que el usuario ha sido actualizado
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          showConfirmButton: false,
          timer: 3000
        });
      }

      return $.ajax({
        url: "http://localhost/e4c/usuarios/editar_usuario/" + key.id_usuario,
        method: "POST",
        data: {
          id_usuario: key.id_usuario,
          username: values.username,
          nombre: values.nombre,
          apellido: values.apellido,
          correo: values.email,
          nuevaContrasena: values.nuevaContrasena,
          estado: values.estado,
          tipo_usuario: values.tipo_usuario
        },
        dataType: "json"
      });
    },
    insert: function insert(values) {
      // validar que las contraseñas coincidan
      if (values.nuevaContrasena != values.confirmarContrasena) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else if (values.nuevaContrasena == "" && values.confirmarContrasena == "") {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no pueden estar vacías',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else if (values.nuevaContrasena == "" || values.confirmarContrasena == "") {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no pueden estar vacías',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } // verificar que los campos no estén vacíos


      if (values.username == "" || values.nombre == "" || values.apellido == "" || values.email == "") {
        Swal.fire({
          icon: 'error',
          title: 'Los campos no pueden estar vacíos',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      } else {
        // notificar que el usuario ha sido actualizado
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          showConfirmButton: false,
          timer: 3000
        });
      }

      return $.ajax({
        url: "http://localhost/e4c/usuarios/crear_usuario",
        method: "POST",
        data: {
          username: values.username,
          nombre: values.nombre,
          apellido: values.apellido,
          correo: values.email,
          contrasena: values.nuevaContrasena,
          estado: values.estado,
          tipo_usuario: values.tipo_usuario
        },
        dataType: "json"
      });
    }
  });
  var dataGrid = $("#gridContainer").dxDataGrid({
    dataSource: dataSource,
    remoteOperations: true,
    paging: {
      pageSize: 10
    },
    pager: {
      showPageSizeSelector: true,
      allowedPageSizes: [10, 20, 30],
      showInfo: true,
      onPageSizeChanged: function onPageSizeChanged(e) {
        dataSource.pageIndex(0); // Volver a la página 1

        dataSource.pageSize(e.value); // Actualizar el tamaño de página en el dataSource

        dataSource.load();
      }
    },
    editing: {
      mode: "form",
      useIcons: true,
      allowUpdating: true,
      allowAdding: true,
      allowDeleting: true,
      form: {
        colCount: 2,
        items: [{
          itemType: "group",
          colCount: 3,
          colSpan: 2,
          items: ["id_usuario", "nombre", "apellido", "username", "email", {
            dataField: "nuevaContrasena",
            editorType: "dxTextBox",
            editorOptions: {
              mode: "password",
              attr: {
                autocomplete: "new-password"
              }
            }
          }, {
            dataField: "confirmarContrasena",
            editorType: "dxTextBox",
            editorOptions: {
              mode: "password",
              attr: {
                autocomplete: "new-password"
              }
            }
          }, "estado", "tipo_usuario"]
        }],
        // cambiar texto de los botones SAVE y CANCEL
        onEditorPrepared: function onEditorPrepared(e) {
          if (e.parentType == "dataRow" && e.editorName == "dxButton") {
            if (e.dataField == "save") {
              e.editorOptions.text = "Guardar";
            }

            if (e.dataField == "cancel") {
              e.editorOptions.text = "Cancelar";
            }
          }
        }
      }
    },
    columns: [{
      dataField: "id_usuario",
      caption: "ID",
      allowEditing: false,
      width: 60
    }, "nombre", "apellido", {
      dataField: "username",
      caption: "Nombre de usuario"
    }, "email", {
      dataField: "estado",
      caption: "Estado",
      lookup: {
        dataSource: [{
          id: 1,
          text: "Activo"
        }, {
          id: 2,
          text: "Inactivo"
        }],
        displayExpr: 'text',
        valueExpr: 'id'
      },
      editCellTemplate: function editCellTemplate(cellElement, cellInfo) {
        $("<div>").dxSelectBox({
          dataSource: [{
            id: 1,
            text: "Activo"
          }, {
            id: 2,
            text: "Inactivo"
          }],
          displayExpr: "text",
          valueExpr: "id",
          value: parseInt(cellInfo.value),
          onValueChanged: function onValueChanged(e) {
            cellInfo.setValue(e.value); // Actualizar el valor de la celda
          }
        }).appendTo(cellElement);
      }
    }, {
      dataField: "tipo_usuario",
      caption: "Tipo de Usuario",
      lookup: {
        dataSource: [{
          ID: 1,
          Name: "Administrador"
        }, {
          ID: 2,
          Name: "Usuario"
        }],
        displayExpr: 'Name',
        valueExpr: 'ID'
      },
      editCellTemplate: function editCellTemplate(cellElement, cellInfo) {
        var selectBox = $("<div>").dxSelectBox({
          dataSource: [{
            id: 1,
            text: "Administrador"
          }, {
            id: 2,
            text: "Usuario"
          }],
          displayExpr: "text",
          valueExpr: "id",
          value: parseInt(cellInfo.value),
          onValueChanged: function onValueChanged(e) {
            cellInfo.setValue(e.value); // Actualizar el valor de la celda
          }
        }).appendTo(cellElement);
      }
    }, {
      type: 'buttons',
      caption: "Acciones",
      buttons: [{
        hint: "Editar",
        icon: "edit",
        onClick: function onClick(e) {
          var usuario = e.row.data;
          dataGrid.editRow(e.row.rowIndex); // Cambiar a la edición de la fila específica
        }
      }, {
        hint: "Eliminar",
        icon: "trash",
        onClick: function onClick(e) {
          var usuario = e.row.data;
          DevExpress.ui.dialog.confirm("¿Estás seguro de que quieres eliminar este usuario?", "Eliminar usuario").then(function (result) {
            if (result) {
              $.ajax({
                url: "http://localhost/e4c/usuarios/eliminar_usuario/" + usuario.id_usuario,
                method: "POST",
                dataType: "json",
                success: function success(response) {
                  DevExpress.ui.notify("Usuario eliminado correctamente", "success", 1000);
                  dataSource.reload(); // Actualizar el dataSource
                },
                error: function error(_error2) {
                  console.log("Error:", _error2);
                  DevExpress.ui.notify("Error al eliminar el usuario", "error", 1000);
                }
              });
            }
          });
        }
      }]
    }, {
      dataField: "nuevaContrasena",
      caption: "Nueva Contraseña",
      visible: false
    }, {
      dataField: "confirmarContrasena",
      caption: "Confirmar Contraseña",
      visible: false
    }],
    toolbar: {
      items: [{
        location: "after",
        widget: "dxButton",
        options: {
          text: "Agregar Usuario",
          icon: "add",
          onClick: function onClick() {
            dataGrid.addRow();
          }
        }
      }]
    },
    masterDetail: {
      enabled: true,
      template: function template(container, options) {
        // Obtener el ID del usuario de la fila actual
        var userId = options.data.id_usuario; // Realizar la consulta AJAX para obtener los detalles del usuario

        $.ajax({
          url: "http://localhost/e4c/usuarios/detalles/" + userId,
          method: "GET",
          dataType: "json",
          success: function success(response) {
            // Crear y configurar el DataGrid para mostrar los detalles
            var detailGrid = $("<div>").addClass("detail-grid").dxDataGrid({
              dataSource: response.detalles,
              keyExpr: "id_pago",
              showBorders: true,
              editing: {
                mode: "form",
                allowUpdating: true,
                form: {
                  colCount: 2,
                  items: [// Campos del formulario de edición
                  "tipo_pago", "cantidad", "monto", {
                    dataField: "fecha",
                    dataType: "date",
                    editorType: "dxDateBox",
                    editorOptions: {
                      displayFormat: "dd/MM/yyyy"
                    }
                  }, {
                    dataField: "comentarios",
                    editorType: "dxTextArea",
                    colSpan: 2,
                    editorOptions: {
                      height: 90
                    }
                  }]
                }
              },
              columns: [{
                dataField: "id_pago",
                caption: "ID",
                allowEditing: false,
                width: 60
              }, {
                dataField: "tipo_pago",
                caption: "Tipo de pago",
                lookup: {
                  dataSource: [{
                    id: 1,
                    text: "Horas extras"
                  }, {
                    id: 2,
                    text: "Bonos"
                  }],
                  displayExpr: "text",
                  valueExpr: "id"
                },
                editCellTemplate: function editCellTemplate(cellElement, cellInfo) {
                  $("<div>").dxSelectBox({
                    dataSource: [{
                      id: 1,
                      text: "Horas extras"
                    }, {
                      id: 2,
                      text: "Bonos"
                    }],
                    displayExpr: "text",
                    valueExpr: "id",
                    value: parseInt(cellInfo.value),
                    onValueChanged: function onValueChanged(e) {
                      cellInfo.setValue(e.value); // Actualizar el valor de la celda
                    }
                  }).appendTo(cellElement);
                }
              }, {
                dataField: "cantidad",
                caption: "Cantidad",
                editorType: "dxNumberBox",
                editorOptions: {
                  showSpinButtons: true
                }
              }, {
                dataField: "monto",
                caption: "Monto",
                editorType: "dxNumberBox",
                editorOptions: {
                  showSpinButtons: true
                }
              }, {
                dataField: "total",
                caption: "Total a cobrar",
                allowEditing: false,
                calculateCellValue: function calculateCellValue(data) {
                  var cantidad = parseFloat(data.cantidad);
                  var monto = parseFloat(data.monto);
                  return cantidad * monto;
                }
              }, {
                dataField: "fecha",
                caption: "Fecha",
                dataType: "date",
                format: "dd/MM/yyyy"
              }, {
                dataField: "comentarios",
                caption: "Comentarios",
                // textareas: true,
                editorType: "dxTextArea",
                editorOptions: {
                  height: 90
                }
              }, {
                type: "buttons",
                width: 110,
                buttons: [{
                  hint: "Editar",
                  icon: "edit",
                  onClick: function onClick(e) {
                    var pago = e.row.data;
                    detailGrid.dxDataGrid("instance").editRow(e.row.rowIndex);
                  }
                }, {
                  hint: "Eliminar",
                  icon: "trash",
                  onClick: function onClick(e) {
                    var pago = e.row.data; // Lógica para eliminar el pago
                  }
                }]
              }]
            }); // Agregar el botón para agregar nuevos pagos en un popup

            detailGrid.dxDataGrid("instance").option("onToolbarPreparing", function (e) {
              e.toolbarOptions.items.unshift({
                location: "before",
                widget: "dxButton",
                options: // Dentro de la configuración del botón "Agregar Pagos"
                {
                  hint: "Agregar Pagos",
                  text: 'Agregar Pagos',
                  icon: "plus",
                  onClick: function onClick(e) {
                    var popup = $("<div>").appendTo(e.element).dxPopup({
                      title: "Agregar Pago",
                      width: 600,
                      height: 'auto',
                      visible: true,
                      // visible: false,
                      dragEnabled: false,
                      hideOnOutsideClick: true,
                      showCloseButton: false,
                      contentTemplate: function contentTemplate(contentElement) {
                        var today = new Date();
                        var year = today.getFullYear();
                        var month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses se indexan desde 0, por lo que se suma 1

                        var day = String(today.getDate()).padStart(2, '0');
                        var currentDate = year + '-' + month + '-' + day;
                        var form = $("<div>").appendTo(contentElement).dxForm({
                          colCount: 2,
                          formData: {},
                          items: [{
                            dataField: "tipo_pago",
                            editorType: "dxSelectBox",
                            editorOptions: {
                              dataSource: [{
                                id: 1,
                                text: "Horas extras"
                              }, {
                                id: 2,
                                text: "Bono"
                              }],
                              displayExpr: "text",
                              valueExpr: "id",
                              value: 1
                            }
                          }, {
                            // no permite menos de 0
                            dataField: "cantidad",
                            editorType: "dxNumberBox",
                            editorOptions: {
                              format: "#",
                              showSpinButtons: true,
                              min: 1,
                              value: 1
                            }
                          }, {
                            dataField: "monto",
                            editorType: "dxNumberBox",
                            editorOptions: {
                              format: "currency",
                              showSpinButtons: true,
                              min: 1
                            }
                          }, {
                            dataField: "fecha",
                            editorType: "dxDateBox",
                            editorOptions: {
                              format: "dddd DD, MMMM YYYY",
                              showClearButton: true,
                              // value date now yyyy-mm-dd
                              value: currentDate
                            } // fecha actual

                          }, {
                            dataField: "comentarios",
                            editorType: "dxTextArea",
                            colSpan: 2,
                            editorOptions: {
                              height: 100
                            }
                          }]
                        }).dxForm("instance");
                        $("<div>").appendTo(contentElement).dxButton({
                          text: "Guardar",
                          onClick: function onClick() {
                            var formData = form.option("formData"); // validar que los campos no esten vacios

                            if (formData.tipo_pago == null || formData.cantidad == null || formData.monto == null || formData.fecha == null) {
                              popup.hide();
                              Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No puede dejar campos vacios!'
                              });
                              return;
                            } else if (formData.cantidad <= 0 || formData.monto <= 0) {
                              popup.hide();
                              Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No puede ingresar valores negativos!'
                              });
                              return;
                            } else {
                              // Realizar la lógica para guardar el nuevo pago en el servidor, por ejemplo, mediante una solicitud AJAX
                              // agregar a formdata el id del usuario
                              formData.id_usuario = userId;
                              $.ajax({
                                url: "http://localhost/e4c/usuarios/agregar_pago",
                                method: "POST",
                                dataType: "json",
                                data: formData,
                                success: function success(response) {
                                  // Lógica para manejar la respuesta del servidor y actualizar la vista del DataGrid de detalles
                                  dataSource.reload(); // Actualizar el dataSource del DataGrid principal

                                  detailGrid.dxDataGrid("instance").refresh(); // Actualizar el DataGrid de detalles

                                  Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Pago agregado correctamente!',
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                  popup.hide();
                                },
                                error: function error(_error3) {
                                  console.log("Error:", _error3);
                                  Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: 'ha ocurrido un error!',
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                  popup.hide();
                                }
                              });
                            }
                          }
                        }); // boton para cerrar popup

                        $("<div>").appendTo(contentElement).dxButton({
                          text: "Cancelar",
                          onClick: function onClick() {
                            popup.hide();
                          }
                        });
                      }
                    }).dxPopup("instance");
                  }
                }
              });
            }); // Agregar el DataGrid de detalles al contenedor

            detailGrid.appendTo(container);
          },
          error: function error(_error4) {
            console.log("Error:", _error4);
          }
        });
      }
    }
  }).dxDataGrid("instance");
});