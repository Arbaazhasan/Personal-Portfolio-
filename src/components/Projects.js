import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Border } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "DecorTrove",
      description: "Full-Stack e-commerce website ",
      imgUrl: "/ProjectImages/1st/Home.png",
    },
    {
      title: "Login Page",
      description: "User Login Page ",
      imgUrl: "/ProjectImages/1st/login.png",
    },
    {
      title: "Produt Page",
      description: "All Product And Search Product ",
      imgUrl: "/ProjectImages/1st/AllProducts.png",
    },
    {
      title: "Product Details",
      description: "Get Product Details ",
      imgUrl: "/ProjectImages/1st/product.png",
    },
    {
      title: "Dashboard",
      description: "Website Dashboard",
      imgUrl: "/ProjectImages/1st/dashboard.png",
    },
    {
      title: "Image Viewer",
      description: "Image Viewer",
      imgUrl: "/ProjectImages/1st/ImageViewer.png",
    },

  ];

  const project2 = [
    {
      title: "Login Page",
      description: "Full-Stack Social Media website ",
      imgUrl: "/ProjectImages/1st/HOPe/login.png",
    },
    {
      title: "Home Page",
      description: "Overview of the website ",
      imgUrl: "/ProjectImages/1st/HOPe/home.png",
    },
    {
      title: "Exolore People",
      description: "Explore the other people",
      imgUrl: "/ProjectImages/1st/HOPe/explore.png",
    },
    {
      title: "User Profile",
      description: "User profile Page",
      imgUrl: "/ProjectImages/1st/HOPe/profile.png",
    },
    {
      title: "Create Post",
      description: "share thoughts and Picture",
      imgUrl: "/ProjectImages/1st/HOPe/post.png",
    },
    {
      title: "Settings",
      description: "Account Settings",
      imgUrl: "/ProjectImages/1st/HOPe/settings.png",
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore a showcase of my projects, each meticulously crafted with passion, expertise, and attention to detail.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>

                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }

                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">

                        <Row>

                          {
                            project2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }

                        </Row>


                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Internal Server Error, Please Visit Soon </p>

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
