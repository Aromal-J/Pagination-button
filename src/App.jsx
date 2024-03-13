import QandOList from "./Components/QandOList";
import "./App.css";
import { useState } from "react";
import PaginationButtonLayout from "./Components/PaginationButtonLayout";
import Pagination from "./Components/Pagination";
import TestPagination from "./Components/TestPagination";

function App() {

  return (
    <>
      <TestPagination/>
      <Pagination/>
      <PaginationButtonLayout/>
      {/* <QandOList /> */}
    </>

  );
}

export default App;
