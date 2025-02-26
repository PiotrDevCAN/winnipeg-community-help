import { useSelector } from "react-redux";
import useHelpCategoryActions from "@/customHooks/actions/useHelpCategoryActions";

const useHelpCategoryRecord = () => {
    const { selectedRecord, error, isError, isLoading, status } = useSelector(
        (state) => state.helpCategories
    );

    const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
        useHelpCategoryActions();

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

export default useHelpCategoryRecord;
