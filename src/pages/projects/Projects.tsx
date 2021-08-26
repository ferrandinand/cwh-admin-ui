import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {Project} from "../../models/project";
import {Link} from "react-router-dom";
import Paginator from "../../components/Paginator";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(false);
    const [nextProjectPage, setNextProjectPage] = useState(1);
    const [prevProjectPage, setPrevProjectPage] = useState(1);
    const [nextProjectId, setNextProjectId] = useState(0);
    const [prevProjectId, setPrevProjectId] = useState(0);

    const PAGINATION = 20
    useEffect(() => {
        (
            async () => {

                var page_id=prevProjectId
                if (page<=1) page_id=0
                if (page>prevProjectPage){
                    page_id=nextProjectId
                    setPrevProjectPage(page-1)
                }

                const {data} = await axios.get(`project?page_id=${page_id}`);
                
                setNextProjectId(data.items[0].id);
                setLastPage(true)
                if(data.next_page_id != null){
                    setNextProjectId(data.next_page_id);
                    setNextProjectPage(page+1)
                    setLastPage(false)
                }
 
                setPrevProjectId(data.items[0].id-PAGINATION)
                setProjects(data.items);

            }
        )()
    }, [page]);

    
    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            await axios.delete(`project/${id}`);

            setProjects(projects.filter((u: Project) => u.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="lh-1">
                    Projects
                </div>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <Link to="/projects/create" className="btn btn-sm btn-outline-secondary">Create Project</Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Created By</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project: Project) => {
                        return (
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>
                                    <Link to={`/projects/${project.id}/detail`}
                                        className="nav-underline nav-link">{project.name}</Link>
                                </td>
                                <td>{project.type}</td>
                                <td>{project.created_by}</td>
                                <td>{project.status}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/projects/${project.id}/edit`}
                                              className="btn btn-sm btn-outline-secondary">Edit</Link>
                                        <a href="#" className="btn btn-sm btn-outline-secondary"
                                           onClick={() => del(project.id)}
                                        >Delete</a>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <Paginator page={page} nextPage={nextProjectPage} lastPage={lastPage} pageChanged={setPage}/>
        </Wrapper>
    );
}

export default Projects;