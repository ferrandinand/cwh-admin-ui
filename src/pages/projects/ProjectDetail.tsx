import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {Project} from "../../models/project";
import {Link} from "react-router-dom";
import Paginator from "../../components/Paginator";

const ProjectDetail = (props: any) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [created_by, setCreatedBy] = useState('');
    const [created_on, setCreatedOn] = useState('');
    const [group, setGroup] = useState('');
    const [status, setStatus] = useState('');
    const [attributes, setAttributes] = useState('');
    const [activities, setActivities] = useState('');
    const [databaseType, setdatabaseType] =  useState('');
    const [projectRepo, setProjectRepo] =  useState('');
    const [persistentStorage, setPersistentStorage] =  useState(false);


    useEffect(() => {
        (
            async () => {

                const {data} = await axios.get(`/project/${props.match.params.id}`);
                setName(data.name);
                setType(data.type);
                setCreatedBy(data.created_by);
                setCreatedOn(data.created_on);
                setGroup(data.group);
                setStatus(data.status);
                setdatabaseType(data.attributes.infrastructure.database);
                setPersistentStorage(data.attributes.infrastructure.persistent_storage);
                setProjectRepo(data.attributes.infrastructure.project_repo);
                setActivities(data.activities);
                console.log(data)
            }
        )()
    }, [ProjectDetail]);

    return (
        <Wrapper>
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="lh-1">
                    <h1 className="h6 mb-0 text-white lh-1">{name}</h1>
                    <small>{type}</small>
                </div>
            </div>
            
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Project Info</h6>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Database</strong>
                    {databaseType}
                  </p>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"/><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
            
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Persistent Storage</strong>
                    {String(persistentStorage)}
                  </p>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"/><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
            
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">Project Repository</strong>
                    {projectRepo}
                  </p>
                </div>
                <small className="d-block text-end mt-3">
                  <a href="#">All updates</a>
                </small>
              </div>
            
              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Environments</h6>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <div className="d-flex text-muted pt-3">
                  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
            
                  <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                    <div className="d-flex justify-content-between">
                      <strong className="text-gray-dark">Full Name</strong>
                      <a href="#">Follow</a>
                    </div>
                    <span className="d-block">@username</span>
                  </div>
                </div>
                <small className="d-block text-end mt-3">
                  <a href="#">All suggestions</a>
                </small>
              </div>
        </Wrapper>
    );
}

export default ProjectDetail;