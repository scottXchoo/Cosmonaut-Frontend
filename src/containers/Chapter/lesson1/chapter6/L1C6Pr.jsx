import React, { useEffect, useRef, useState } from "react";
import PracticePart from "../../../../components/CodeEditor/PracticePart";
import UnitName from "../../../../components/Common/UnitName";
import BgV4 from "../../../../assets/images/bg-v4.svg";
import EditorDesc from "../../../../components/CodeEditor/EditorDesc";
import ProblemSection from "../../../../components/Contents/ProblemSection";
import Problem from "../../../../components/Contents/Problem";
import ListStyle from "../../../../components/Contents/ListStyle";
import CodeBlock from "../../../../components/Contents/CodeBlock";
import BasicP from "../../../../components/Contents/BasicP";
import HintButton from "../../../../components/Contents/HintButton";
import Hint from "../../../../components/Contents/Hint";
import PracticeCode from "../../../../components/CodeEditor/PracticeCode";
import { useRunApi } from "../../../../libs/api/postRun";
import { useNavigate, useParams } from "react-router-dom";
import EditorAnsHeader from "../../../../components/CodeEditor/EditorAnsHeader";
import ResultTab from "../../../../components/CodeEditor/ResultTab";
import { codeEx } from "./L1C6Ex";
import EditorPr from "../../../../components/CodeEditor/EditorPr";
import { Loading } from "../../../../components/Common/Loading";
import ResultCom from "../../../../components/Practice/ResultCom";

export const L1C6Pr = () => {
  const { lessonID, chID, uID } = useParams();
  const [hide, setHide] = useState(true);
  const editorRef = useRef(null);
  const [tab, setTab] = useState("contract.rs");
  const [code, setCode] = useState();

  const [files, setFiles] = useState({});
  useEffect(() => {
    setFiles({ ...files, [tab]: btoa(code) });
  }, [code]);

  const [executeRes, queryRes, runLoading, runSuccess, runError, runFetch] =
    useRunApi(files);

  const navigate = useNavigate();
  const nextLesson = () => {
    if (lessonID === "1" && chID === "6" && uID === "1") {
      return navigate(`/lesson/1/chapter/6/unit/2`);
    }
  };

  return (
    <>
      <UnitName color={"rgba(86, 84, 141, 1)"} />
      <div
        style={{ backgroundImage: `url(${BgV4})` }}
        class="pt-8 pb-20 md:px-6 px-4 lg:px-10 bg-black bg-cover bg-center md:pt-8"
      >
        <PracticePart />
        <div class="flex container w-full mx-auto">
          {/* Problem Part */}
          <div class="flex flex-wrap h-auto bg-indigo-900 rounded-2xl">
            <EditorDesc>
              <ProblemSection>
                <Problem>Problem 1.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>state.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Declare extension as type of struct{" "}
                  <CodeBlock>Metadata</CodeBlock> below.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 2.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>state.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Declare <CodeBlock>freights</CodeBlock> as vector of{" "}
                  <CodeBlock>Freight</CodeBlock>.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 3.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>msg.rs</CodeBlock>
                    </b>
                  </li>
                  <li>
                    <b>
                      References: <CodeBlock>state.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Declare message <CodeBlock>Mint</CodeBlock> which extends{" "}
                  <CodeBlock>MintMsg</CodeBlock> of cw721_base with
                  <CodeBlock>Extension</CodeBlock> type.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 4.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>msg.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Route <CodeBlock>TransferNft</CodeBlock> from{" "}
                  <CodeBlock>ExecuteMsg</CodeBlock> to{" "}
                  <CodeBlock>Cw721ExecuteMsg</CodeBlock> with parameters{" "}
                  <CodeBlock>recipient</CodeBlock> and{" "}
                  <CodeBlock>token_id</CodeBlock>.
                </BasicP>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 5.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>contract.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Instantiate cw721_contract through method{" "}
                  <CodeBlock>instantiate</CodeBlock>.
                </BasicP>

                <HintButton onClick={async () => setHide(!hide)}>
                  <Hint hide={hide} />
                  {hide ? null : (
                    <>
                      <BasicP>
                        <CodeBlock>DepsMut</CodeBlock>,{" "}
                        <CodeBlock>Env</CodeBlock>,{" "}
                        <CodeBlock>MessageInfo</CodeBlock>, and{" "}
                        <CodeBlock>InstantiateMsg</CodeBlock> should be passed
                        to cw721_contract’s <CodeBlock>instantiate</CodeBlock>.
                      </BasicP>
                    </>
                  )}
                </HintButton>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 6.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Execute <CodeBlock>msg</CodeBlock> through method{" "}
                  <CodeBlock>execute</CodeBlock>.
                </BasicP>

                <HintButton onClick={async () => setHide(!hide)}>
                  <Hint hide={hide} />
                  {hide ? null : (
                    <>
                      <BasicP>
                        We already has method <CodeBlock>execute</CodeBlock> in{" "}
                        <CodeBlock>self</CodeBlock>.
                      </BasicP>
                    </>
                  )}
                </HintButton>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 7.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Declare <CodeBlock>candidated_idx</CodeBlock>.
                </BasicP>
                <BasicP>
                  Iterate <CodeBlock>freights</CodeBlock> at{" "}
                  <CodeBlock>extension</CodeBlock> and collect elements whose{" "}
                  <CodeBlock>denom</CodeBlock> is the same as argument's one.
                </BasicP>

                <HintButton onClick={async () => setHide(!hide)}>
                  <Hint hide={hide} />
                  {hide ? null : (
                    <>
                      <BasicP>
                        <CodeBlock>position</CodeBlock> searches for an element
                        in an iterator, returning its index.
                      </BasicP>
                    </>
                  )}
                </HintButton>
              </ProblemSection>

              <ProblemSection>
                <Problem>Problem 8.</Problem>
                <ListStyle>
                  <li>
                    <b>
                      Where to Implement: <CodeBlock>execute.rs</CodeBlock>
                    </b>
                  </li>
                </ListStyle>
                <BasicP>
                  Remove <CodeBlock>freight</CodeBlock> from{" "}
                  <CodeBlock>extension</CodeBlock> if its amount is zero.
                </BasicP>
                <BasicP>
                  Otherwise, decrease amount of <CodeBlock>freight</CodeBlock>.
                </BasicP>

                <HintButton onClick={async () => setHide(!hide)}>
                  <Hint hide={hide} />
                  {hide ? null : (
                    <>
                      <BasicP>Don’t forget to check overflow.</BasicP>
                    </>
                  )}
                </HintButton>
              </ProblemSection>
            </EditorDesc>
            {/* Code Editor Part */}
            <PracticeCode>
              <div class="mb-1 px-4">
                <EditorAnsHeader>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("contract.rs");
                    }}
                  >
                    contract.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("error.rs");
                    }}
                  >
                    error.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("execute.rs");
                    }}
                  >
                    execute.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("lib.rs");
                    }}
                  >
                    lib.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("msg.rs");
                    }}
                  >
                    msg.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1  bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={async e => {
                      e.preventDefault();
                      setTab("query.rs");
                    }}
                  >
                    query.rs
                  </button>
                  <button
                    class="block mr-[1px] py-3 px-2 md:px-4 md:mb-0 mb-1 bg-orange-400 font-bold text-xs rounded-t-md transform transition ease-in-out focus:scale-105 focus:text-gray-900 hover:scale-110"
                    onClick={e => {
                      e.preventDefault();
                      setTab("state.rs");
                    }}
                  >
                    state.rs
                  </button>
                </EditorAnsHeader>

                <div class="mx-auto mb-1">
                  {runLoading ? (
                    <Loading />
                  ) : (
                    <>
                      <EditorPr
                        defaultLanguage="rust"
                        exCode={codeEx[tab]}
                        defaultValue={code}
                        path={tab}
                        onChange={async e => await setCode(e)}
                        onMount={editor => (editorRef.current = editor)}
                        files={files}
                      />
                      <ResultTab>
                        <ResultCom
                          runSuccess={runSuccess}
                          executeRes={executeRes}
                          queryRes={queryRes}
                        />
                      </ResultTab>
                    </>
                  )}
                </div>
              </div>
            </PracticeCode>
          </div>
        </div>

        {executeRes.result === "success" && queryRes.result === "success" ? (
          <div class="flex items-center justify-center md:mt-8 mt-3 ">
            <button
              type="button"
              onClick={() => {
                nextLesson();
              }}
              class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
            >
              Jump to Next Lesson
            </button>
          </div>
        ) : null}
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            type="button"
            onClick={nextLesson}
            class=" md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-gray-50"
          >
            Jump to Next Lesson
          </button>
        </div>
        <div class="flex items-center justify-center md:mt-8 mt-3 ">
          <button
            type="button"
            onClick={runFetch}
            class="md:w-auto rounded-full mx-auto text-center md:shadow-md shadow-sm transform transition md:mx-0 md:px-10 ease-in-out hover:scale-105  bg-blue-700 hover:bg-blue-500 hover:text-white border-3 border-indigo-900 md:py-3 py-2 px-12  font-heading text-lg text-white"
          >
            Check your Answer
          </button>
        </div>
      </div>
    </>
  );
};
