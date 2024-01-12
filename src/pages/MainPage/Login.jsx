import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;

    background: white;
    color: black;
    height: 300px;
`;

const StyledCardHeader = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledCardTitle = styled.h1`
  font-size: 2rem; /* text-2xl에 해당하는 스타일 */
`;

const StyledCardDescription = styled.p`
  /* CardDescription 컴포넌트 스타일 */
`;

const StyledCardContent = styled.div`
  /* CardContent 컴포넌트 스타일 */
  & > div {
    margin-bottom: 1rem; /* space-y-4에 해당하는 스타일 */
  }
`;

const StyledLabel = styled.label`
  /* Label 컴포넌트 스타일 */
`;

const StyledInput = styled.input`
  /* Input 컴포넌트 스타일 */
`;

const StyledButton = styled.button`
  width: 100%; /* w-full에 해당하는 스타일 */
`;

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > *:not(:last-child) {
        margin-bottom: 0.5rem; /* space-y-2에 해당하는 스타일 */
    }
`;

const StyledCardFooter = styled.div`
  /* CardFooter 컴포넌트 스타일 */
`;

const StyledLink = styled.a`
  color: blue;
  cursor: pointer;
`;

export default function Component() {
    const openFixedSizeWindow = (url, width, height) => {
        // 새 창을 정해진 크기로 열고, 크기 조절을 금지
        window.open(url, '_blank', `width=${width},height=${height},resizable=no`);
      };
      
    return (
    <StyledCard>
        <StyledCardHeader>
            <StyledCardTitle>환영합니다</StyledCardTitle>
            <StyledCardDescription>본인 확인을 위해 이름을 기재해주세요!</StyledCardDescription>
        </StyledCardHeader>
        <StyledCardContent>
            <FormSection>
                <StyledLabel htmlFor="name">이름</StyledLabel>
                <StyledInput id="name" placeholder="본인의 이름 입력" required type="text" />
            </FormSection>
        </StyledCardContent>
        <StyledCardFooter>
            <StyledButton>입장</StyledButton>
            <StyledLink onClick={() => openFixedSizeWindow('http://localhost:3000/main', 1600, 1080)}>
                링크 열기
            </StyledLink>
        </StyledCardFooter>
    </StyledCard>
    );
}