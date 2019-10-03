export default function ({store}) {
    if(!Object.keys(store.state.articulos.lista).length)
        store.dispatch('articulos/importLinks');
}