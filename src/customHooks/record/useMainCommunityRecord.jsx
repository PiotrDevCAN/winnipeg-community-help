import { useSelector } from "react-redux";
import useMainCommunityActions from "@/customHooks/actions/useMainCommunityActions";

const useMainCommunityRecord = () => {
    const { selectedRecord, error, isError, isLoading, status } = useSelector(
        (state) => state.mainCommunities
    );

    const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
        useMainCommunityActions();

    return {
        fetchRecordById,
        addRecord,
        modifyRecord,
        removeRecord,
        selectedRecord,
        error,
        isError,
        isLoading,
        status,
    };
};

export default useMainCommunityRecord;
