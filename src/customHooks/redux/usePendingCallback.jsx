const usePendingCallback = (state) => {
    state.status = "loading";
    state.isLoading = true;
}

export default usePendingCallback; 