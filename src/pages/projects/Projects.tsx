import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/Wrapper";
import {Project} from "../../models/project";
import {Link} from "react-router-dom";
import Paginator from "../../components/Paginator";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectPage, setProjectPage] = useState(1);
    const [lastProjectPage, setLastProjectPage] = useState(0);


    useEffect(() => {
        (
            async () => {

                //Until pagination works
                const page = 0;

                const {data} = await axios.get(`project?page_id=${page}`);
                //const {data} = await axios.get(`projects?page_id=${projectPage}`);

                console.log(data.items)
                setProjects(data.items);
                setLastProjectPage(data);
                //setLastPage(0);
            }
        )()
    }, [projectPage]);

    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            await axios.delete(`project/${id}`);

            setProjects(projects.filter((u: Project) => u.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <Link to="/project/create" className="btn btn-sm btn-outline-secondary">Add</Link>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Created By</th>
                        <th>Group</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project: Project) => {
                        return (
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.name}</td>
                                <td>{project.created_by}</td>
                                <td>{project.group}</td>
                                <td>
                                    <div className="btn-group mr-2">
                                        <Link to={`/project/${project.id}/edit`}
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

            <Paginator page={projectPage} lastPage={lastProjectPage} pageChanged={setProjectPage}/>
        </Wrapper>
    );
}

export default Projects;