import { Container, Row, Col } from "react-bootstrap";
import teamMembers from "../data/teamMembers";
import TeamMemberCard from "../components/TeamMemberCard";

const Team = () => {
  return (
    <Container>
      <h4 className="d-block my-5 text-center">
        Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)
      </h4>
      
      <Row>
        {teamMembers.map((teamMember) =>(
          <Col key={teamMember.imgName}
            className="d-flex justify-content-center mx-auto"
            sm={6} md={4} lg={3} xl={2}>
              <TeamMemberCard
                name={teamMember.name}
                imgName={teamMember.imgName}
                role={teamMember.role}
                socials={teamMember.socials}
              />
          </Col>
        ))}
      </Row>
      <h3 className="d-block my-3 text-center">and You! ;)</h3>
    </Container>
  );
};

export default Team