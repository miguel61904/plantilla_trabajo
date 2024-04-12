let parrafo = document.getElementById("parrafo")
let btn1 = document.getElementById("script1")
let btn2 = document.getElementById("script2")
let btn3 = document.getElementById("script3")
let btn4 = document.getElementById("script4")
let btnAgregar= document.getElementById("btnAgregar")
let formCarta = document.getElementById("formCarta")

let script = "¡Buen día!<br>Se realiza la configuración del dispositivo, se descargan las aplicaciones corporativas, registro del usuario dentro del sistema de seguridad de samsung. se le brinda una breve capacitación de uso y se le configuran las herramientas para que pueda dar uso a las aplicaciones corporativas.Se cierra caso por satisfacción del usuario. <br>Feliz día."
let script2 ="¡Buen día!<br>Se realiza la configuración del dispositivo, se descargan las aplicaciones corporativas, registro del usuario dentro del sistema de seguridad de samsung. Por favor completar el ingreso a las aplicaciones: Authenticator, Outlook y Teams, para completar la entrega del equipo.<br>Guía: 2185923236<br>Feliz día."
let script3 ="Buenos días SR. XXX, soy Miguel Franco de Centro de atención al usuario (CAU), te informo que en este momento nos encontramos realizando el proceso de asignación de equipo móvil y en este momento requerimos de que nos brinde las credenciales de red (Usuario y contraseña con que ingresa al computador), las del correo essity, celular de contacto y ciudad donde se cuentra laborando.<br>Feliz día"
btn1.addEventListener("click", ()=>{
    parrafo.innerHTML = script
})

btn2.addEventListener("click", ()=>{
    parrafo.innerHTML = script2
})

btn3.addEventListener("click", ()=>{
    parrafo.innerHTML = script3
})

btn4.addEventListener('click', ()=>{
    formCarta.showModal();
  })

btnAgregar.addEventListener('click', ()=>{
    let name = document.getElementById("name").value
    let sr = document.getElementById("sr").value
    let phone = document.getElementById("phone").value
    let cargo = document.getElementById("cargo").value
    let ceco = document.getElementById("ceco").value
    let imei = document.getElementById("imei").value
    let precio = document.getElementById("precio").value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    parrafo.innerHTML=`Buen día Sra/Sr.<br><br>${name}.<br><br>Reciba un cordial saludo, Mediante la solicitud ${sr}, Global Digital & Business Services, le ha asignado para<br><br>su uso el siguiente equipo de celular:<br><br>Tipo de asignación: Asignación Renovación<br>Centro de costos al cual se cargará el celular:${ceco}<br>Nombre del usuario: ${name}<br>Cargo: ${cargo}<br>Numero de contacto: ${phone}<br><br>Información equipo celular nuevo asignado:<br><br>Referencia: ${modelo}, ${imei}<br>Costo del dispositivo móvil: ${precio}.<br>Marca: ${marca}<br>Numero de IMEI nuevo: ${imei}<br><br>Accesorios adicionales asignados:<br><br>Adaptador de Samsung tipo C<br>Valor: COP $100,000<br><br>ASPECTOS PARA TENER EN CUENTA:<br><br>*En caso de pérdida o robo puede realizar el reporte por medio de la oferta de servicio: Reporte de hurto o perdida (familia.com.co) por favor diligenciar toda la información (datos como marca modelo y serial del celular Movil) que se solicita, muy importante también adjuntar la denuncia.<br>*Este equipo este monitoreado con el software de seguridad Samsung Knox Manager. Esta aplicación permite saber que las propiedades de hardware y software del equipo.<br> *En caso de necesitar instalar en el dispositivo alguna aplicación que se requiere esta se debe solicitar por medio de una oferta de servicio. Reportar Fallas con el Celular (familia.com.co).<br>*desde la fecha de entrega del dispositivo inicia el periodo de uso de este. Lo que significa que en 2 años aproximadamente se cambiara este dispositivo por uno equivalente en ese momento. Esta inversión se incluirá en el presupuesto de CAPEX que realiza TI cada año.<br>*En el adjunto del correo puede encontrar el resto de las políticas establecidas por la compañía relacionadas con el tema de los dispositivos móviles corporativos.<br><br>Le solicitamos responder este correo como constancia de la entrega del equipo celular, realizada por el personal del Centro de Atención al Usuario.<br><br>De no recibir una respuesta a este mensaje en los próximos 3 días, asumiremos que la entrega se realizó a su entera satisfacción`
})
