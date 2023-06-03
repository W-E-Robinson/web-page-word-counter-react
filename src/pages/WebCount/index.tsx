import React, { Suspense, useState, useMemo, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../modules/Redux/reducers/rootReducer";
import { Form } from "../../molecules/Form";
import { formMapping } from "./functions";
import { Header } from "./components/Header";
import { setWordCountProperty } from "../../modules/Redux/actions/wordCount/actions";

const Alert = React.lazy(() => import("../../atoms/Alert").then(module => ({ default: module.Alert })));
const Accordion = React.lazy(() => import("../../organisms/Accordion").then(module => ({ default: module.Accordion })));

export const WordCount = () => {
    const reduxDispatch = useDispatch();

    const [url, setUrl] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const { error, wordCountsInfo } = useSelector((state: AppState) => state.wordCounts);

    useEffect(() => {
        if (error === null || typeof error === "string") { setShowAlert(true); }
    }, [error]);

    const formFields = useMemo(() => formMapping(url, setUrl, reduxDispatch), [url]);

    return (
        <>
            <Header />
            <Form fields={formFields} />
            {showAlert &&
                <Suspense fallback={<></>}>
                    <Alert
                        id="alert"
                        severity={error === null ? "success" : "error"}
                        message={error === null ? "Request Successful!" : error as string}
                        onClose={() => {
                            setShowAlert(false);
                            reduxDispatch(setWordCountProperty({ error: undefined }));
                        }}
                    />
                </Suspense>}
            {wordCountsInfo.length > 0 &&
                <Suspense fallback={<></>}>
                    <Accordion accordionData={wordCountsInfo} />
                </Suspense>}
        </>
    );
};
