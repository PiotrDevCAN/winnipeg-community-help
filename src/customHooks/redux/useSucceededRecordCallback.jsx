const useSucceededRecordCallback = (state, action) => {
    state.status = "succeeded";
    state.isLoading = false;
    state.selectedRecord = action.payload.data;
}

export default useSucceededRecordCallback; 