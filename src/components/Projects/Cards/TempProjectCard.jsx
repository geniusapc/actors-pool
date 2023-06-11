import React from 'react'
import Moment from 'react-moment'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom';
import { clearTempProj } from '../../../features/projects/projects';
import { useDispatch } from 'react-redux';

function TempProjectCard({ talents }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <div> <p>Here is a list of talents you have added</p>

            <ul className="flex flex-col mt-8 gap-y-5 max-h-96 overflow-y-scroll">
                {talents?.map((talent) => (
                    <li className="h-12 flex" key={talent?._id}>
                        <img src={`${talent?.photo}`} className="h-12 w-12 mr-2" alt="" />
                        <div className="flex flex-col">
                            <p className="text-black font-medium">
                                <span>{talent?.firstname}</span> <span>{talent?.lastname}</span>
                            </p>
                            <div className="text-xs text-gray300">
                                <span className="mr-2">Active since</span>
                                <Moment format="YYYY">{talent.activeSince}</Moment>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="w-full flex justify-between mt-8 bg-gray200">
                <Button onClick={() => dispatch(clearTempProj())} variant="outlined">Clear list</Button>
                <Button variant="primary" onClick={() => navigate("/projects-talents/download")}>Download list</Button>
            </div></div>
    )
}

export default TempProjectCard