//declaracion de clases usando constantes
// llamar a cada clase que tienen los textos a convertir)
const link = document.querySelectorAll('a');
const menuHome = document.querySelector('.menuHome');
const services = document.querySelectorAll('services');
const ubicacion = document.querySelector('.location');
const scheduledSurveys = document.querySelector('.scheduledSurveys');
const customerComments = document.querySelector('.customerComments');
const OurBestModels = document.querySelector('.OurBestModels');
const sponsors = document.querySelector('.sponsors');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const OurEmployes = document.querySelector('.OurEmployes');
const OurServices = document.querySelector('.OurServices');
const engineOverhaul = document.querySelector('.engineOverhaul');
const tireInspection = document.querySelector('.tireInspection');
const oilCheck = document.querySelector('.oilCheck');
const bodyShop = document.querySelector('.bodyShop');
const WeMakePolarized = document.querySelector('.WeMakePolarized');
const carPolishing = document.querySelector('.carPolishing');
const FindUsInOurAgencies = document.querySelector('.FindUsInOurAgencies');
const textUbi = document.querySelector('.text-ubi');
const cero = document.querySelector('.cero');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const information = document.querySelector('.information');
const restart = document.querySelector('.restart');
const websiteStatistics = document.querySelector('.websiteStatistics');
const YearsOfExperience = document.querySelector('.YearsOfExperience');
const CompletedProjects = document.querySelector('.CompletedProjects');
const SatisfiedCustomers = document.querySelector('.SatisfiedCustomers');
const WorkTeam = document.querySelector('.WorkTeam');




//recorrido del ciclo for-Each usando una función flecha
//link: es la variable constante del selector 'a' HTML
//r: es una variable declarada para apuntar al evento CLICK y obtener el atributo language de cada boton
//getAttribute: devuelve el valor del atributo especificado en el elemento language HTML (BOTONES ESPAÑOL-INGLES)
link.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        //textContent es una propiedad JS para obtener el contenido de texto de un determinado elemento o nodo...
        menuHome.textContent = changeLanguage[attr].menuHome;
        services.textContent = changeLanguage[attr].services;
        ubicacion.textContent = changeLanguage[attr].ubicacion;
        scheduledSurveys.textContent = changeLanguage[attr].scheduledSurveys;
        customerComments.textContent = changeLanguage[attr].customerComments;
        OurBestModels.textContent = changeLanguage[attr].OurBestModels;
        sponsors.textContent = changeLanguage[attr].sponsors;
        previous.textContent = changeLanguage[attr].previous;
        next.textContent = changeLanguage[attr].next;
        OurEmployes.textContent = changeLanguage[attr].OurEmployes;
        OurServices.textContent = changeLanguage[attr].OurServices;
        engineOverhaul.textContent = changeLanguage[attr].engineOverhaul;
        tireInspection.textContent = changeLanguage[attr].tireInspection;
        oilCheck.textContent = changeLanguage[attr].oilCheck;
        bodyShop.textContent = changeLanguage[attr].bodyShop;
        WeMakePolarized.textContent = changeLanguage[attr].WeMakePolarized;
        carPolishing.textContent = changeLanguage[attr].carPolishing;
        FindUsInOurAgencies.textContent = changeLanguage[attr].FindUsInOurAgencies;
        textUbi.textContent = changeLanguage[attr].textUbi;
        cero.textContent = changeLanguage[attr].cero;
        uno.textContent = changeLanguage[attr].uno;
        dos.textContent = changeLanguage[attr].dos;
        tres.textContent = changeLanguage[attr].tres;
        cuatro.textContent = changeLanguage[attr].cuatro;
        information.textContent = changeLanguage[attr].information;
        restart.textContent = changeLanguage[attr].restart;
        websiteStatistics.textContent = changeLanguage[attr].websiteStatistics;
        YearsOfExperience.textContent = changeLanguage[attr].YearsOfExperience;
        CompletedProjects.textContent = changeLanguage[attr].CompletedProjects;
        SatisfiedCustomers.textContent = changeLanguage[attr].SatisfiedCustomers;
        WorkTeam.textContent = changeLanguage[attr].WorkTeam;

    });
});

//objeto de json que asigna los valores a cada clase en español
let changeLanguage = {
    "espanish": {
        "menuHome": "Inicio",
        "services": "Servicion",
        "ubicacion": "Ubicados",
        "scheduledSurveys": "Encuesta programada",
        "customerComments": "Comentarios clientes",
        "OurBestModels": "Nuestros mejores modelos",
        "sponsors": "Patrocinadores",
        "previous": "Anterior",
        "next": "Siguiente",
        "OurEmployes": "Nuestros Empleados",
        "OurServices": "Nuestros Servicios",
        "engineOverhaul": "Revision de llantas",
        "tireInspection": "Revision de llantas",
        "oilCheck": "Revision de aceite",
        "bodyShop": "Enderezado y pintura",
        "WeMakePolarized": "Realizamos Polarizados",
        "carPolishing": "Pulido de autos",
        "FindUsInOurAgencies": "Encuentranos en nuestras agencias",
        "textUbi": "Esta son nuestras socursales que pueden encontrar en los alrededores de nuestro Pais",
        "cero": "Seleccione lugar de agencia",
        "uno": "Agencia nissan La Sabana",
        "dos": "Agencia nissan Curridabat",
        "tres": "Agencia nissan Paseo Metropoli de Cartago",
        "cuatro": "Agencia nissan Licon plaza de Moravia",
        "information": "Informacion",
        "restart": "Reiniciar",

        "websiteStatistics": "Estadísticas web",
        "YearsOfExperience": "Años de Experiencia",
        "CompletedProjects": "Proyectos Completados",
        "SatisfiedCustomers": "Clientes satisfechos",
        "WorkTeam": "Trabajo en equipo",


    },

    //objeto de json que asigna los valores a cada clase en ingles  
    "english": {
        "menuHome": "Home",
        "services": "Services",
        "ubicacion": "Location",
        "scheduledSurveys": "Scheduled Surveys",
        "customerComments": "Customer Comments",
        "OurBestModels": "Our Best Models",
        "sponsors": "Sponsors",
        "previous": "Previuos",
        "next": "Next",
        "OurEmployes": "Our Employees",
        "OurServices": "Our Services",
        "engineOverhaul": "Engine Overhaul",
        "tireInspection": "Tire Inspection",
        "oilCheck": "Oil Check",
        "bodyShop": "Body Shop",
        "WeMakePolarized": "We Make Polarized",
        "carPolishing": "Car Polishing",
        "FindUsInOurAgencies": "Find Us In Our Agencies",
        "textUbi": "These are our branches that you can find in the surroundings of our country",
        "cero": "Select Agency Location",
        "uno": "Agency nissan La Sabana",
        "dos": "Agency nissan Curridabat",
        "tres": "Agency nissan Paseo Metropoli Cartago",
        "cuatro": "Agency nissan Licon Plaza Moravia",
        "information": "Information",
        "restart": "Restart",

        "websiteStatistics": "Web Site Statistics",
        "YearsOfExperience": "Years Of Experience",
        "CompletedProjects": "Completed Projects",
        "SatisfiedCustomers": "Satisfied Customers",
        "WorkTeam": "Work Team",

    }
}