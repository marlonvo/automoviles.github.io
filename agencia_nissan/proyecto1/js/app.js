

particlesJS('particles-js', {

  	//particulas
    "particles": {
      "number": {
      	//cantidad de elementos pantalla
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },

      /*color de la forma*/
      "color": {
        "value": "#dbeff9"
      },

      //formas
      "shape": {
      	/*tipos de efectos en la forma =  circle-trinagle-star-polygon-edge*/
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#dbeff9"
        },

        //poligno
        "polygon": {
          "nb_sides": 5
        },

        //imagen
        "image": {
          "src": "../imagenes/logo.png",
          "width": 100,
          "height": 100
        }
      },

      //opacidad
      "opacity": {
      	/*valor por defecto 0.5*/
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },

      //tamaño
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },

      //linea
      "line_linked": {
        "enable": true,
        "distance": 150,
        //color por defecto #fffffff
        "color": "#ff5700",
        //por defecto 0.4
        "opacity": 0.5,
        //ancho por defecto 1
        "width": 2
      },

      //mover
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    //interactividad
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);