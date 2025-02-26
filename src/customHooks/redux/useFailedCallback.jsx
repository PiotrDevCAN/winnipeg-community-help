const useFailedCallback = (state, action) => {
    state.status = "failed";
    state.isLoading = false;
    state.error = action.error.message;
}

export default useFailedCallback; 