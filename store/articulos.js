export const state = ()=>({
    lista:{},
});

export const getters = {
    publicados(state){
        const filteredLinks = [];
        const {lista} = state;
        for (const key in lista) {
            if(lista[key].isPublished) filteredLinks.push(lista[key]);
        }

        filteredLinks.sort((a,b)=> a.timestamp - b.timestamp );
        return filteredLinks;
    }
}

export const mutations = {
    setArticulos(state, lista){
        state.lista=lista;
    }
};

export const actions = {
    importLinks(context){
        return new Promise(async (resolve, reject)=>{
            try {
                const links = await import('@/links.json');
            
                context.commit('setArticulos', links);
                resolve();
            } catch (error) {
                reject(error)
            }
        });
    }
}