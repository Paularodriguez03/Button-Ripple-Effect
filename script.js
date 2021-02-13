const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        //proporciona la coordenada horizontal dentro de la ventana gráfica de la 
        //aplicación en la que ocurrió el evento
        const y = e.clientY
        //proporciona la coordenada vertical dentro de la ventana gráfica de la 
        //aplicación en la que ocurrió el evento 

        

        const buttonTop = e.target.offsetTop
        //retorna la distancia del elemento actual respecto al borde superior del nodo 
        const buttonLeft = e.target.offsetLeft
        //devuelve el número de píxeles a la izquierda del elemento actual con respecto al nodo


        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        /*A la cordana del mouse en x le restamos la  */
        

        const circle = document.createElement('span')
        //me crea un elemento span en el HTML
        circle.classList.add('circle')
        //agrega la clasa circle
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})



    