import React from 'react'
import { useState } from 'react'
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup
} from './ProjectsStyle'

import ProjectCard from '../Cards/ProjectCards'
import { projects, clientWebsites } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState('all')

  return (<Container id="projects"> <Wrapper> <Title>Projects</Title>


    <Desc>
      I have worked on projects that helped me strengthen my skills in software development and problem-solving.
    </Desc>

    <ToggleButtonGroup></ToggleButtonGroup>

    <CardContainer>
      {toggle === 'all' &&
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}

      {projects
        .filter((item) => item.category === toggle)
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        ))}
    </CardContainer>

    <Title style={{ marginTop: '60px' }}>
      Developed and Deploy 5+ websites
    </Title>

    <CardContainer>
      {clientWebsites.map((site) => (
        <div
          key={site.id}
          style={{
            padding: '20px',
            border: '1px solid #854CE6',
            borderRadius: '12px',
            minWidth: '250px',
            backgroundColor: '#171721',
            color: '#ffff',
          }}
        >
          <h3>{site.name}</h3>

          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"

            style={{
              color: '#854CE6',
            }}
          >
            Visit Website
          </a>
        </div>
      ))}
    </CardContainer>
  </Wrapper>
  </Container>


  )
}

export default Projects
