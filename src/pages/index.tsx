import { Button, H, P, Tag } from "@/components/ui";

const index = () => {
  return (
    <div>
      <H tag="h1">Заголовок h1</H>
      <Button>hello</Button>
      <Button variant="outlined">hello</Button>
      <P size="l">Large</P>
      <P size="m">Medium</P>
      <P size="s">Small</P>
      <Tag>hello</Tag>
      <Tag variant="green">hello</Tag>
      <Tag variant="gray">hello</Tag>
      <Tag href="google.com">google.com</Tag>
    </div>
  );
};

export default index;
