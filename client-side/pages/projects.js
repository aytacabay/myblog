import React from 'react'
import Headcomp from "../components/head";
import Menucomp from "../components/menu";
import Propjectsbox from '../components/projects/projectsbox';

function Projects(props) {
    return (
        <>
            <div className='project-container'>
                <Headcomp />
                <Menucomp />
                <div className='project-header'>
                    <h2>Boş zamanlarım da yaptığım projeler</h2>
                </div>
                <div className='project-main'>
                    {
                        props.fetchData.map(item => {
                            return <Propjectsbox key={item._id} className='projectbox' data={item} />
                        })
                    }
                </div>
            </div>

            <style>{`
            
                    .project-container{
                        background-color: transparent;
                        font-family: sans-serif;
                        padding:1em 0;
                    }
                    .project-main {
                        width:100%;
                        display:flex;
                        justify-content:space-around;
                        flex-wrap:wrap;
                    }
                    .project-header{
                        width:100%;
                        display:flex;
                        justify-content:center;
                        text-align:center;
                    }
                    .project-header h2{
                        color:#535353;
                        padding-bottom:0.5em;
                        border-bottom:0.3em solid #79d3ff
                    }
                    .projectbox{
                        background:red;
                    }
                    @media (max-width: 1200px) {
                        .project-header{
                            font-size:.8rem;
                        }
                    }
            `}</style>
        </>
    )
}


Projects.getInitialProps = async (context) => {
    const res = await fetch(`http://192.168.254.2:9000/admin-get-projects/`)
    const json = await res.json()
    return { fetchData: json.getData.getData }
}



export default Projects;