export default function (context) {
    if(process.client){
        console.log('Middleware');
        if(localStorage.getItem('theme')){
            const root = document.documentElement;  //elemento root
            root.style.setProperty('--fondo-primario', '#1c2833');
            root.style.setProperty('--fondo-secundario', '#273746');
            root.style.setProperty('--font-primary-color', '#8395a7');
            root.style.setProperty('--font-secondary-color', '#808b96');
        }
    }
}