import { SyncLoader } from "react-spinners";

export const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center z-50">
            <SyncLoader color="#ffffff" />
        </div>
    );
};
