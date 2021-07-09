
import axios from 'axios';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";

const ProjectEdit = (props: any) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [created_by, setCreatedBy] = useState('');
    const [created_on, setCreatedOn] = useState('');
    const [group, setGroup] = useState('');
    const [status, setStatus] = useState('');
    const [attributes, setAttributes] = useState('');
    const [activities, setActivities] = useState('');

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
    
                const {data} = await axios.get(`project/${props.match.params.id}`);

                setName(data.name);
                setType(data.type);
                setCreatedBy(data.created_by);
                setCreatedOn(data.created_on);
                setGroup(data.group);
                setStatus(data.status);
                setAttributes(data.attributes);
                setActivities(data.activities);
            }
        )()
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post(`projects/${props.match.params.id}`, {
            name,
            type,
            created_by,
            group,
            attributes,
            activities,  
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/projects"/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="lh-1">
                    Edit project
                </div>
            </div>
                <div className="mb-3">
                    <label>Name</label>
                    <input className="form-control"
                           defaultValue={name}
                           onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Type</label>
                    <input className="form-control"
                           defaultValue={type}
                           onChange={e => setType(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Created By</label>
                    <input className="form-control"
                           defaultValue={created_by}
                           onChange={e => setCreatedBy(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Created By</label>
                    <input className="form-control"
                           defaultValue={group}
                           onChange={e => setGroup(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Attributes</label>
                    <input className="form-control"
                           defaultValue={attributes}
                           onChange={e => setAttributes(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Activities</label>
                    <input className="form-control"
                           defaultValue={activities}
                           onChange={e => setActivities(e.target.value)}/>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProjectEdit;