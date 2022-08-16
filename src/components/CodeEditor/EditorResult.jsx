import React from "react";
import Editor from "@monaco-editor/react";
import { useFmtApi } from "../../libs/api/postFmt";

export default function EditorResult({
  path,
  defaultLanguage,
  defaultValue,
  files,
  onChange,
  onMount,
}) {
  const [fmtRes, fmtLoading, fmtSuccess, fmtError, fmtFetch] = useFmtApi(
    files,
    path
  );
  const fmtBtn = async () => {
    await fmtFetch();
  };

  return (
    <>
      {fmtSuccess ? (
        <Editor
          height="60vh"
          theme="vs-dark"
          path={path}
          onChange={onChange}
          onMount={onMount}
          defaultLanguage={defaultLanguage}
          value={fmtRes}
        />
      ) : (
        <Editor
          height="60vh"
          theme="vs-dark"
          path={path}
          onChange={onChange}
          onMount={onMount}
          defaultLanguage={defaultLanguage}
          value={defaultValue}
        />
      )}
      <div class="flex justify-end px-2 mt-1">
        <button
          onClick={fmtBtn}
          class="transform transition ease-in-out hover:scale-105 hover:text-yellow-500 font-heading text-orange-400 rounded-full py-1 text-sm text-center"
        >
          Click to Format
        </button>
      </div>
    </>
  );
}
