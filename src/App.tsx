import CodeBlock from "./components/CodeBlock";
import H1 from "./components/H1";
import H2 from "./components/H2";
import H3 from "./components/H3";
import MiceEditor from "./components/MiceEditor";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <div className="container mx-auto p-3">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis massa facilisis malesuada facilisis. Vivamus vitae erat in neque sodales tempor. Curabitur eget nibh mauris. Nullam condimentum pretium sapien, id posuere est dictum eu. Morbi ipsum felis, euismod id nisi at, efficitur euismod felis. Curabitur eleifend magna sed lacinia ultricies. Maecenas id purus in dolor aliquam accumsan. Ut condimentum ipsum ut ultricies eleifend. Curabitur faucibus metus vehicula tortor malesuada laoreet vitae quis arcu. Nunc at massa id est aliquet tempus sit amet varius magna. Suspendisse eu sollicitudin neque, eu mollis felis. Duis sollicitudin quis mauris commodo placerat. Mauris lacinia metus sem, sit amet ornare dui vulputate id. Curabitur nec mi vulputate, pharetra ex quis, ultrices eros. Suspendisse placerat, tellus et maximus aliquam, nisi arcu venenatis est, vel fringilla nunc sem in dui.
      </Paragraph>
      <CodeBlock>
        Qua la nhieu bug...
      </CodeBlock>
      <hr className="my-3" />
      <MiceEditor />
    </div>
  )
}

export default App;
