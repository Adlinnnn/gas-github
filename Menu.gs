//CREACIÓN MENÚ DESPEGABLE
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Despliegue Workspace')
    .addItem('Iniciar', 'iniciar')
    .addItem('Cargar Datos', 'cargar_datos')
    .addSeparator()
    .addSubMenu(ui.createMenu('Unidades Organizativas')
                .addItem('Crear', 'crear_uo')
                .addItem('Eliminar', 'eliminar_uo')
                .addItem('Actualizar', 'actualizar_uo')
                )
    .addSeparator()
    .addSubMenu(ui.createMenu('Grupos')
                .addItem('Crear', 'crear_grupo')
                .addItem('Eliminar', 'eliminar_grupo')
                .addItem('Actualizar', 'actualizar_grupo')
                )
    .addSeparator()
    .addSubMenu(ui.createMenu('Classroom')
                .addSubMenu(ui.createMenu('Administrar Clases')
                          .addItem('Crear', 'crear_clase')
                          .addItem('Eliminar', 'eliminar_clase')
                          .addItem('Actualizar', 'actualizar_clase')
                )
                .addSubMenu(ui.createMenu('Inscripción Clases')
                          .addItem('Inscribir Estudiantes', 'agregarEstudianteClassroom')                          
                          .addItem('Invitar Profesores', 'invitar_profesores')
                )
                .addSubMenu(ui.createMenu('Informes')
                          .addItem('Listar Clases', 'agregarEstudianteClassroom')                          
                          .addItem('Listar Estudiantes', 'invitar_profesores')
                )
                )
    .addSeparator()
    .addSubMenu(ui.createMenu('Usuarios')
                .addItem('Revisar Datos', 'revisar_datos')
                .addItem('Generar Nombre Usuario', 'generar_usuario')              
                .addItem('Crear (masivamente)', 'formulario')
                .addItem('Crear (individualmente)', 'formulario2')
                .addItem('Eliminar', 'eliminar_usuario')
                .addItem('Actualizar', 'actualizar_usuario')
                )
    .addToUi();
}
//DATOS SPREADSHEET
function id_sheet(){
  return SpreadsheetApp.openByUrl(url).getId()
}
function hoja_activa(){
  return SpreadsheetApp.getActiveSpreadsheet()
}
//-----------------------------------------INICIAR----------------------------------------//
function iniciar(){
  borra_sheets()
  crea_sheets()
  llena_datos_hojas()
}

//CREACIÓN SHEETS
function crea_sheets(){
  const docActivo = hoja_activa()
  docActivo.insertSheet("Unidades Organizativas")
  docActivo.insertSheet("Grupos")
  docActivo.insertSheet("Clases")
  docActivo.insertSheet("Eliminar Clases")
  docActivo.insertSheet("Usuarios")
}
//BORRAR SHEETS
function borra_sheets(){
  const listaHojas = ["Unidades Organizativas","Grupos","Clases","Usuarios"]
  const docActivo = hoja_activa()
  const hojas = docActivo.getSheets()
  const hojasParaBorrar = hojas.filter(sheet=>listaHojas.includes(sheet.getSheetName()))
  hojasParaBorrar.forEach(sheet=>{
    docActivo.deleteSheet(sheet)
  })
}
//LLENAR HOJAS CON DATOS
function llena_datos_hojas(){
  const docActivo = hoja_activa()
  const uoSheet = docActivo.getSheetByName("Unidades Organizativas")
  //for (const i=0;i>2;i++){
  //  uoSheet.getRange(i":"i).setValue(7,8)
  //}
 
}

//-----------------------------------------UNIDADES ORGANIZATIVAS----------------------------------------//
//CREACIÓN UNIDADES ORGANIZATIVAS

