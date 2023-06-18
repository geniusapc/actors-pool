import { PDFViewer } from '@react-pdf/renderer';
import TalentsPdf from '../components/pdf/TalentsPdf';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTempProj } from '../features/projects/projects';
import { useLocation } from 'react-router-dom';
import { useProjectDataByID } from '../hooks/useProjectData';
import Loading from '../components/DataController/Loading';
import Error from '../components/DataController/Error';

const Pdf = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const paramValue = params.get('id');

    const { data, isLoading, isError } = useProjectDataByID(paramValue);
    const project = data?.data?.data;
    const talents = project?.talents;

    const tempProject = useSelector((state) => state.projects.tempProject);
    useEffect(() => {
        dispatch(getTempProj());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!paramValue) {
        <PDFViewer width="100%" height={window.innerHeight}>
            <TalentsPdf talents={tempProject} />
        </PDFViewer>;
    }

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                <PDFViewer width="100%" height={window.innerHeight}>
                    <TalentsPdf talents={talents} />
                </PDFViewer>
            )}
        </div>
    );
};

export default Pdf;
