import React from "react";
import tw from "tailwind-styled-components";
import CodeEditor from "../../../../../../components/CodeEditor/CodeEditor";
import BasicP from "../../../../../../components/Contents/BasicP";
import CodeBlock from "../../../../../../components/Contents/CodeBlock";
import ContentsBox from "../../../../../../components/Contents/ContentsBox";
import Header from "../../../../../../components/Contents/Header";
import Markdown from "../../../../../../components/Contents/Markdown";
import OrangeID from "../../../../../../components/Contents/OrangeID";
import L1C4U1S4Code from "./L1C4U1S4Code";

const Contents = tw.section`bg-black`;
const ContentTitle = tw.div`mb-4 lg:mb-8`;
const ContentDesc = tw.div`mb-3`;

const code1 = `
\`\`\`rust
ExecuteMsg::Revoke { spender, token_id } => {
  self.revoke(deps, env, info, spender, token_id)
}
\`\`\``;

function L1C4U1S4() {
  return (
    <>
      {/* Contents Part */}
      <Contents>
        <ContentsBox>
          <OrangeID>4</OrangeID>
          <div class="lg:w-1/2 w-full md:w-2/3">
            <ContentTitle>
              <div class="flex sm:flex-nowrap">
                <div class="w-full lg:w-auto lg:pt-3 pt-2 pb-2 lg:pb-0">
                  <Header>Revoke</Header>
                </div>
              </div>
            </ContentTitle>
            <ContentDesc>
              <Markdown code={code1} />
              <BasicP>
                If you understand the flow of the above{" "}
                <CodeBlock>_update_approvals</CodeBlock>, you may easily
                implement
                <CodeBlock>Revoke</CodeBlock>. Call{" "}
                <CodeBlock>_update_approvals</CodeBlock> with
                <CodeBlock>add</CodeBlock> as false.
              </BasicP>
            </ContentDesc>
          </div>
        </ContentsBox>
      </Contents>

      {/* Editor Part */}
      <CodeEditor>
        <L1C4U1S4Code />
      </CodeEditor>
    </>
  );
}

export default L1C4U1S4;
