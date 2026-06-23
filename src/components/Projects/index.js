import React from 'react';
import { useState } from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  WebsiteCard,
  WebsiteTitle,
  WebsiteLink,
} from './ProjectsStyle';

import ProjectCard from '../Cards/ProjectCards';
import { projects, clientWebsites } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <Desc>
          I have worked on projects that helped me strengthen my skills in software development and problem-solving.
        </Desc>

        <ToggleButtonGroup />

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

          {toggle !== 'all' &&
            projects
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
          Developed & Deployed 5+ Websites
        </Title>

        <CardContainer>
          {clientWebsites.map((site) => (
            <WebsiteCard key={site.id}>
              <WebsiteTitle>{site.name}</WebsiteTitle>

              <WebsiteLink
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </WebsiteLink>
            </WebsiteCard>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
