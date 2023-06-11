import { PDFViewer } from '@react-pdf/renderer';
import TalentsPdf from '../components/pdf/TalentsPdf';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTempProj } from '../features/projects/projects';

const Pdf = () => {
    const dispatch = useDispatch()

    const tempProject = useSelector((state) => state.projects.tempProject);
    useEffect(() => {
        dispatch(getTempProj());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PDFViewer width="100%" height={window.innerHeight}>
            <TalentsPdf talents={tempProject} />
        </PDFViewer>
    );
};

export default Pdf;
