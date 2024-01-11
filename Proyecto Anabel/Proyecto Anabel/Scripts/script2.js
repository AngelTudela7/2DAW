document.querySelector("#escoger_foto").addEventListener("click", function (ev) {

    const div = document.querySelector(".foto")
    const texto = document.querySelector("#descrip")
    const foto = document.querySelector("#fotillo")
    const elegida = document.querySelector("#numero_foto").value
    const descrip_foto = document.querySelector("#descrip_foto")
    const br = document.createElement("br")
    ev.preventDefault()


    function mostrarfoto(elegida) {
        if (elegida == 1) {
            foto.src = "../Images/Syte1_Images/foto_1.JPEG"
            descrip_foto.innerHTML = "Madre mia,aquel día que fuimos a la noria. Que bien lo pasamos sinceramente, cada vez que veo esta foto recuerdo lo emocionado que me sentía al poder ver la ciudad desde tan alto y encima a tu lado. Me encantó compartir este momento contigo cielo"
            div.innerHTML = '';
            div.appendChild(foto)
            texto.appendChild(descrip_foto)


        } else if (elegida == 2) {
            foto.src = "../Images/Syte1_Images/foto_2.jpg"
            descrip_foto.innerHTML = "JAJAJAJA. Cuando usamos aquellas mascarillas. La verdad fuimos unas autenticas princesas, que bien lo pasamos aquella tarde/noche"
            div.innerHTML = '';
            div.appendChild(foto)
            texto.innerHTML(descrip_foto)


        } else if (elegida == 3) {
            foto.src = "../Images/Syte1_Images/foto_3.jpg"
            descrip_foto.innerHTML = "En mi momento mas humilde sin duda, mi lengua echa de menos a la tuya, linda"
            div.innerHTML = '';
            div.appendChild(foto)
            texto.innerHTML(descrip_foto)


        } else if (elegida == 4) {
            foto.src = "../Images/Syte1_Images/foto_4.jpg"
            descrip_foto.innerHTML = "Una de mis fotos favoritas, me gusta parecer un oso amoroso y aquí creo que se refleja bastante bien."
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 5) {
            foto.src = "../Images/Syte1_Images/foto_5.JPEG"
            descrip_foto.innerHTML = "Esta es reciente jijiji. Salimos lindisimos y encima ese dia que fue super bonito, aunque por muchas luces que encendiesen quien mas brillaba eras tú"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 6) {
            foto.src = "../Images/Syte1_Images/foto_6.JPEG"
            descrip_foto.innerHTML = "Otra del mismo día pero un poquito mas cerca, salimos muy pero que muy guapos tambien"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 7) {
            foto.src = "../Images/Syte1_Images/foto_7.jpg"
            descrip_foto.innerHTML = "Esta me gusta porque dormida estás muy linda, además verte tan calmada y descansando es algo que da paz a mi corazón"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida== 8) {
            foto.src = "../Images/Syte1_Images/foto_8.JPEG"
            descrip_foto.innerHTML = 'Esta es mitica, las "paellas" a las que fuimos, la verdad que yo me lo pasé increíble y me gustó disfrutar de un momento así contigo por primera vez'
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 9) {
            foto.src = "../Images/Syte1_Images/foto_9.jpg"
            descrip_foto.innerHTML = "Mi leona, muerdeme el pito grrrr"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 10) {
            foto.src = "../Images/Syte1_Images/foto_10.JPEG"
            descrip_foto.innerHTML = "Esta me encanta, no hay cosa que disfrute mas que tu espontaniedad, la adoro"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 11) {
            foto.src = "../Images/Syte1_Images/foto_11.JPEG"
            descrip_foto.innerHTML = "Que guapos salimos en esta foto por dios, si ese dia no echamos un polvazo me sentiría decepcionado JAJAJA"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 12) {
            foto.src = "../Images/Syte1_Images/foto_12.JPEG"
            descrip_foto.innerHTML = "Un trocito del amor que nos tenemos, ese tan lindo e increíble"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 13) {
            foto.src = "../Images/Syte1_Images/foto_13.JPEG"
            descrip_foto.innerHTML = "Las fiestas tio, que guapos fuimos todos los dias. Me faltó dormir juntitos alguna noche, pero fueron unas fiestas maravillosas junto a ti cariño"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 14) {
            foto.src = "../Images/Syte1_Images/foto_14.JPEG"
            descrip_foto.innerHTML = "Otra de las fiestas,es que tio ¿me explicas como podíamos ir tan guapos?"
            div.innerHTML = '';
            div.appendChild(foto)

        } else if (elegida == 15) {
            foto.src = "../Images/Syte1_Images/foto_15.JPEG"
            descrip_foto.innerHTML = "Y esta porque tu lo vales, que eres la tia mas xula que hay"
            div.innerHTML = '';
            div.appendChild(foto)
        } else if (elegida == 16){
            alert("Has adivinado el secreto...")
            window.open('../Sytes/syte2.html', '_blank');
        }
    }

    mostrarfoto(elegida)



    // setTimeout(miEvento, 3000);



})