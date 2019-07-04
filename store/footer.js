export const state = () => ({
    isVisible: false
});

export const mutations = {
    setVisible(state, value){
        state.isVisible = value;
    }
};