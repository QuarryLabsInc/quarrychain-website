import { StyledSpan, StyledTitle, TextContainer } from "../../Footer.styles";
import { Container } from "./GenesisTeam.styles";

export function GenesisTeam() {
  const teamMembers = [
    {
      name: "Alec Arrambide - CEO/ Founder",
      url: "https://www.linkedin.com/in/alec-arrambide-91a7b321a/",
    },
    {
      name: "Tanner Hanks - COO",
      url: "https://tannerhanks.com/",
    },
    {
      name: "Gabby Parsons - CMO",
      url: "https://www.instagram.com/gabbytookthese/",
    },
  ];

  function handleLinkClick(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Container>
      <StyledTitle>Genesis Team</StyledTitle>
      {teamMembers.map((member, index) => (
        <TextContainer key={index} withHover onClick={() => handleLinkClick(member.url)}>
          <StyledSpan>{member.name}</StyledSpan>
        </TextContainer>
      ))}
    </Container>
  );
}
