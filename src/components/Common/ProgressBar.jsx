import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import flask from "../../assets/images/flask_icon.png";
import check from "../../assets/images/check_icon.png";

const Container = tw.div`mb-2 w-full mx-auto`;

export const ProgressBar0 = ({ progress }) => {
  const [width, setWidth] = useState("");
  console.log(progress);
  useEffect(() => {
    if (progress === "-1") {
      setWidth(0);
    } else if (progress === "0") {
      setWidth(100);
    } else {
      setWidth(0);
    }
  }, []);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">50%</span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar1 = ({ progress }) => {
  const [width, setWidth] = useState("");
  console.log(progress);
  useEffect(() => {
    if (progress === "0") {
      setWidth(100);
    } else if (progress === "1") {
      setWidth(14);
    } else if (progress === "2") {
      setWidth(29);
    } else if (progress === "3") {
      setWidth(43);
    } else if (progress === "4") {
      setWidth(58);
    } else if (progress === "5") {
      setWidth(72);
    } else if (progress === "6") {
      setWidth(86);
    } else {
      setWidth(0);
    }
  }, []);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.4
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.5
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.6
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar2 = ({ progress }) => {
  const [width, setWidth] = useState("");
  useEffect(() => {
    if (progress === "0") {
      setWidth(100);
    } else if (progress === "1") {
      setWidth(11);
    } else if (progress === "2") {
      setWidth(22);
    } else if (progress === "3") {
      setWidth(33);
    } else if (progress === "4") {
      setWidth(45);
    } else if (progress === "5") {
      setWidth(56);
    } else if (progress === "6") {
      setWidth(67);
    } else if (progress === "7") {
      setWidth(78);
    } else if (progress === "8") {
      setWidth(90);
    } else {
      setWidth(0);
    }
  }, []);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.4
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.5
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.6
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.7
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.8
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar3 = ({ progress }) => {
  const [width, setWidth] = useState("");
  console.log(progress);
  useEffect(() => {
    if (progress === "0") {
      setWidth(100);
    } else if (progress === "1") {
      setWidth(25);
    } else if (progress === "2") {
      setWidth(50);
    } else if (progress === "3") {
      setWidth(75);
    } else {
      setWidth(0);
    }
  }, []);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};

export const ProgressBar4 = ({ progress }) => {
  const [width, setWidth] = useState("");
  console.log(progress);
  useEffect(() => {
    if (progress === "0") {
      setWidth(100);
    } else if (progress === "1") {
      setWidth(25);
    } else if (progress === "2") {
      setWidth(50);
    } else if (progress === "3") {
      setWidth(75);
    } else {
      setWidth(0);
    }
  }, []);
  return (
    <>
      <Container>
        <div class="w-full rounded-full bg-gray-200 mb-1">
          <div
            class="flex bg-green-500 rounded-full justify-end items-center pr-0.5 py-0.5"
            style={{ width: `${width}%` }}
          >
            <div class="block bg-white border-1 border-gray-200 md:h-1.5 md:w-1.5 h-1 w-1 rounded-full"></div>
          </div>
        </div>
        <div class="flex w-full justify-between my-2">
          <span class="flex justify-start md:text-sm text-xs font-mono text-gray-700">
            <img class="w-4 h-4" src={flask} alt="flask" />
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.1
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.2
          </span>
          <span class="md:text-sm text-xs font-medium text-gray-700">
            Chp.3
          </span>
          <span class="flex md:text-sm text-xs justify-end font-mono text-gray-700">
            <img class="w-4 h-4" src={check} alt="check" />
          </span>
        </div>
      </Container>
    </>
  );
};
