import { useSelector } from "react-redux";
import useHelpTypeActions from "@/customHooks/actions/useHelpTypeActions";

const useHelpTypeRecord = () => {
    const { selectedRecord, error, isError, isLoading, status } = useSelector(
        (state) => state.helpTypes
    );

    const { fetchRecordById, addRecord, modifyRecord, removeRecord } =
        useHelpTypeActions();

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

export default useHelpTypeRecord;
