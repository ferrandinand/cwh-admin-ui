import axios from 'axios';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Wrapper from "../../components/Wrapper";
import {Group} from "../../models/group";


const ProjectCreate = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [group_id, setGroupId] = useState('');
    const [groups, setGroup] = useState([]);
    const [persistentStorage, setPersistentStorage] =  useState(false);
    const [environments, setEnvironments] = useState([] as any);
    const [databaseType, setdatabaseType] =  useState('');


    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('group');
                setGroup(data.items);
                console.log(data.items)
            }
        )()
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        let attributes = { 
            "infrastructure": {
                "project_repo": "",
                "persistent_storage": persistentStorage,
                "database": databaseType,
                "environments": environments 
            } 
        };

        await axios.post('project/new', {
            name: name,
            type: type,
            group: parseInt(group_id),
            attributes: attributes,
        });
        setRedirect(true);

    }

    const handleSelect = function(environments: any) {
        const envModified : string[] = [];
        for (let i=0; i<environments.length; i++) {
            envModified.push(environments[i].value);
        }

        setEnvironments(envModified);
    }

    if (redirect) {
        return <Redirect to="/projects"/>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="lh-1">
                    Create Project
                </div>
            </div>

                <div className="mb-3">
                    <label>Name</label>
                    <input className="form-control" onChange={e => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label>Type</label>
                    <input className="form-control" onChange={e => setType(e.target.value)}/>
                </div>
      

                <div className="mb-3">
                    <label>Persistent Storage</label>
                    <input type="checkbox" onChange={e => setPersistentStorage(
                        e.target.checked
                    )}/>
                </div>

                <div className="mb-3">
                    <label>Group</label>
                    <select className="form-control" onChange={e => setGroupId(e.target.value)}>
                        {groups.map((g: Group) => {
                            return (
                                <option key={g.id} value={g.id}>{g.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Database</label>
                    <select className="form-control" onChange={e => setdatabaseType(e.target.value)}>
                        <option key="No database" value="">No database</option>
                        <option key="MySQL" value="MySQL">MySQL</option>
                        <option key="Postgre" value="Postgre">Postgre</option>
                        <option key="MariaDB" value="MariaDB">MariaDB</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label>Environments</label>
                    <select className="form-control" value={environments} onChange={(e)=> {handleSelect(e.target.selectedOptions)}} multiple>
                        <option value="master">Production</option>
                        <option value="test">Test</option>
                        <option value="dev">Development</option>
                    </select>
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProjectCreate;