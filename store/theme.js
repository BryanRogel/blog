export const state = ()=> ({
    isFirstRender:true,
    isDarkTheme:false
});

export const mutations = {
    setDarkTheme(state,isDark){
        state.isDarkTheme=isDark;

        const root = document.documentElement;  //elemento root

        if(isDark)
        {
            localStorage.setItem('theme','true');

            root.style.setProperty('--fondo-primario', '#1c2833');
            root.style.setProperty('--fondo-secundario', '#273746');
            root.style.setProperty('--font-primary-color', '#8395a7');
            root.style.setProperty('--font-secondary-color', '#808b96');
        }
        else
        {
            localStorage.removeItem('theme');

            root.style.setProperty('--fondo-primario', '#f5f6fa');
            root.style.setProperty('--fondo-secundario', '#fff');
            root.style.setProperty('--font-primary-color', 'black');
            root.style.setProperty('--font-secondary-color', '#8395a7');
        }

    },

    setFirstRender(state,isFirst){
        state.isFirstRender = isFirst;
    }
}

export const actions = {
    verifyFirstRender(context){
        const promesa = new Promise((resolve,reject)=>{
            if(process.client){
                if(context.state.isFirstRender){
                    //Si es first Render y es en el lado del cliente obtener el localstorage porque localstorage y la mutacion setDarkTheme acceden a elementos solo disponibles en el cliente

                    if(localStorage.getItem('theme'))   
                        context.commit('setDarkTheme',true);
                    
                    context.commit('setFirstRender',false);
                }
            }

            resolve();
        });

        return promesa;
    }
};