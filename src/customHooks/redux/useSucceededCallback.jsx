const useSucceededCallback = (state, action) => {
    state.status = "succeeded";
    state.isLoading = false;
    state.data = action.payload.data;
}

export default useSucceededCallback; 