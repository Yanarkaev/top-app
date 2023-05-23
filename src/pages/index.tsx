import { Button, H, P } from "@/components/ui";

const index = () => {
  return (
    <div>
      <H tag="h1">Заголовок h1</H>
      <Button>hello</Button>
      <Button variant="outlined">hello</Button>
      <P size="l">Large</P>
      <P size="m">Medium</P>
      <P size="s">Small</P>
    </div>
  );
};

export default index;
